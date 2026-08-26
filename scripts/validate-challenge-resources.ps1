[CmdletBinding()]
param(
  [switch]$CheckLinks
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Resolve-ContainedPath {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Root,
    [Parameter(Mandatory = $true)][string]$Label
  )

  $resolved = [System.IO.Path]::GetFullPath($Path)
  $rootPath = [System.IO.Path]::GetFullPath($Root).TrimEnd("\", "/")
  $prefix = $rootPath + [System.IO.Path]::DirectorySeparatorChar
  if (-not $resolved.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "$Label is outside the approved root: $resolved"
  }
  return $resolved
}

function Compare-ExactList {
  param(
    [Parameter(Mandatory = $true)][string[]]$Actual,
    [Parameter(Mandatory = $true)][string[]]$Expected,
    [Parameter(Mandatory = $true)][string]$Label
  )

  $difference = Compare-Object ($Actual | Sort-Object) ($Expected | Sort-Object)
  if ($difference) {
    throw "$Label differs: $($difference | Out-String)"
  }
}

function Assert-SkillMetadata {
  param([Parameter(Mandatory = $true)][string]$Path)

  $content = Get-Content -LiteralPath $Path -Raw -Encoding UTF8
  if ($content -notmatch "(?m)^name:\s+[a-z0-9]+(?:-[a-z0-9]+)*\s*$") {
    throw "Skill name is missing or invalid: $Path"
  }
  if ($content -notmatch "(?m)^description:\s+.{30,}\s*$") {
    throw "Skill description is missing or too short: $Path"
  }
}

function Assert-OnePagePdf {
  param([Parameter(Mandatory = $true)][string]$Path)

  $bytes = [System.IO.File]::ReadAllBytes($Path)
  if ($bytes.Length -lt 1000 -or [System.Text.Encoding]::ASCII.GetString($bytes, 0, 4) -ne "%PDF") {
    throw "Invalid PDF: $Path"
  }
  $pdfText = [System.Text.Encoding]::GetEncoding(28591).GetString($bytes)
  $pageCount = [System.Text.RegularExpressions.Regex]::Matches(
    $pdfText,
    "/Type\s*/Page(?![s])"
  ).Count
  if ($pageCount -ne 1) {
    throw "Quick guide has $pageCount pages, expected exactly 1: $Path"
  }
}

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = [System.IO.Path]::GetFullPath((Join-Path $scriptRoot ".."))
$resourceRoot = Resolve-ContainedPath -Path (Join-Path $repoRoot "public\resources\claude-code-challenge") -Root $repoRoot -Label "Resource root"
$manifestPath = Resolve-ContainedPath -Path (Join-Path $resourceRoot "manifest.json") -Root $resourceRoot -Label "Manifest"
$temporaryRoot = Resolve-ContainedPath -Path (Join-Path $repoRoot ".tmp\challenge-resource-validate-$PID") -Root $repoRoot -Label "Temporary root"

if (-not (Test-Path -LiteralPath $manifestPath -PathType Leaf)) {
  throw "Resource manifest is missing. Run the resource build first."
}

$expectedArchives = @(
  "en/company-kit.zip",
  "en/second-brain.zip",
  "en/skills/consultant-skills.zip",
  "en/skills/developer-skills.zip",
  "en/skills/founder-skills.zip",
  "en/skills/marketing-skills.zip",
  "en/skills/operations-skills.zip",
  "en/starter-kit.zip",
  "en/workflow-kit.zip",
  "fr/company-kit.zip",
  "fr/second-brain.zip",
  "fr/skills/consultant-skills.zip",
  "fr/skills/developer-skills.zip",
  "fr/skills/founder-skills.zip",
  "fr/skills/marketing-skills.zip",
  "fr/skills/operations-skills.zip",
  "fr/starter-kit.zip",
  "fr/workflow-kit.zip"
)
$pdfSets = @{
  "starter-kit" = @("sheet-setup", "sheet-which-tool", "sheet-hooks", "sheet-manager")
  "workflow-kit" = @("sheet-context", "sheet-skills", "sheet-connections")
  "company-kit" = @("sheet-unattended", "sheet-instructions", "sheet-complete-guide", "sheet-team")
}
$forbiddenExtension = "\.(bat|cmd|com|dll|exe|js|mjs|cjs|ps1|py|sh|ts)$"
$secretPatterns = @(
  "sk-ant-[A-Za-z0-9_-]{12,}",
  "BEGIN [A-Z ]*PRIVATE KEY",
  "ANTHROPIC_API_KEY\s*=",
  "SUPABASE_SERVICE_ROLE_KEY\s*="
)

$manifest = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
if ($manifest.version -ne 1) { throw "Unsupported resource manifest version." }
if ($manifest.reviewDate -ne "2026-08-26") { throw "Unexpected resource review date." }
if (@($manifest.archives).Count -ne 18) { throw "Expected 18 resource archives." }
Compare-ExactList -Actual @($manifest.archives.path) -Expected $expectedArchives -Label "Archive inventory"

if (Test-Path -LiteralPath $temporaryRoot) {
  $verifiedTemporaryRoot = Resolve-ContainedPath -Path $temporaryRoot -Root (Join-Path $repoRoot ".tmp") -Label "Initial cleanup target"
  Remove-Item -LiteralPath $verifiedTemporaryRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $temporaryRoot -Force | Out-Null

try {
  foreach ($archive in $manifest.archives) {
    $archivePath = Resolve-ContainedPath -Path (Join-Path $resourceRoot ($archive.path -replace "/", "\")) -Root $resourceRoot -Label "Archive"
    if (-not (Test-Path -LiteralPath $archivePath -PathType Leaf)) {
      throw "Missing archive: $($archive.path)"
    }

    $extractPath = Resolve-ContainedPath -Path (Join-Path $temporaryRoot (($archive.path -replace "/", "-") -replace "\.zip$", "")) -Root $temporaryRoot -Label "Extraction target"
    New-Item -ItemType Directory -Path $extractPath -Force | Out-Null
    Expand-Archive -LiteralPath $archivePath -DestinationPath $extractPath -Force

    $files = Get-ChildItem -LiteralPath $extractPath -Recurse -Force -File
    $relative = @($files | ForEach-Object {
      $_.FullName.Substring($extractPath.Length + 1).Replace("\", "/")
    })
    Compare-ExactList -Actual $relative -Expected @($archive.files) -Label $archive.path

    if (-not (Test-Path -LiteralPath (Join-Path $extractPath "$($archive.topFolder)\START-HERE.md") -PathType Leaf)) {
      throw "START-HERE.md is missing from $($archive.path)"
    }
    if (-not (Test-Path -LiteralPath (Join-Path $extractPath "$($archive.topFolder)\VERIFIED-RESOURCES.md") -PathType Leaf)) {
      throw "VERIFIED-RESOURCES.md is missing from $($archive.path)"
    }

    foreach ($file in $files) {
      if ($file.Name -match $forbiddenExtension) {
        throw "Executable content is not allowed: $($file.FullName)"
      }
      $normalized = $file.FullName.Replace("\", "/")
      if ($normalized -match "/\.claude/hooks/" -or $normalized -match "/\.claude/settings(?:\.local)?\.json$") {
        throw "Active hook or settings content is not allowed: $normalized"
      }
      if ($file.Extension -eq ".md") {
        $text = Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8
        foreach ($pattern in $secretPatterns) {
          if ($text -match $pattern) { throw "Secret-like text found in $normalized" }
        }
      }
      if ($file.Name -eq "SKILL.md") { Assert-SkillMetadata -Path $file.FullName }
    }

    if ($pdfSets.ContainsKey([string]$archive.id)) {
      $suffix = if ($archive.locale -eq "fr") { "-fr" } else { "" }
      foreach ($pdfId in $pdfSets[[string]$archive.id]) {
        $pdfPath = Join-Path $extractPath "$($archive.topFolder)\PDF-GUIDES\$pdfId$suffix.pdf"
        if (-not (Test-Path -LiteralPath $pdfPath -PathType Leaf)) {
          throw "Missing approved PDF in $($archive.path): $pdfId$suffix.pdf"
        }
      }
      Assert-OnePagePdf -Path (Join-Path $extractPath "$($archive.topFolder)\QUICK-GUIDE.pdf")
    }

    Write-Host "Validated $($archive.path)"
  }

  foreach ($english in @($manifest.archives | Where-Object { $_.locale -eq "en" })) {
    $french = $manifest.archives | Where-Object { $_.locale -eq "fr" -and $_.id -eq $english.id } | Select-Object -First 1
    if (-not $french) { throw "Missing French pair for $($english.id)" }
    $englishNames = @($english.files | ForEach-Object {
      ($_ -replace "^$([regex]::Escape($english.topFolder))", "ROOT") -replace "\.pdf$", ".pdf"
    })
    $frenchNames = @($french.files | ForEach-Object {
      (($_ -replace "^$([regex]::Escape($french.topFolder))", "ROOT") -replace "-fr\.pdf$", ".pdf")
    })
    Compare-ExactList -Actual $frenchNames -Expected $englishNames -Label "Bilingual pair $($english.id)"
  }

  if ($CheckLinks) {
    $approvedLinks = @(
      "https://github.com/anthropics/skills",
      "https://github.com/obra/superpowers",
      "https://github.com/garrytan/gstack",
      "https://github.com/vercel-labs/agent-skills",
      "https://github.com/wshobson/agents",
      "https://github.com/hesreallyhim/awesome-claude-code"
    )
    foreach ($url in $approvedLinks) {
      $response = Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing -TimeoutSec 20
      if ($response.StatusCode -lt 200 -or $response.StatusCode -ge 400) {
        throw "Approved resource link failed: $url"
      }
      Write-Host "Checked $url"
    }
  }

  Write-Host "Validated all 18 challenge resource archives."
}
finally {
  if (Test-Path -LiteralPath $temporaryRoot) {
    $verifiedTemporaryRoot = Resolve-ContainedPath -Path $temporaryRoot -Root (Join-Path $repoRoot ".tmp") -Label "Final cleanup target"
    Remove-Item -LiteralPath $verifiedTemporaryRoot -Recurse -Force
  }
}
