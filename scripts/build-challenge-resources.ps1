[CmdletBinding()]
param()

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

function Copy-DirectoryContents {
  param(
    [Parameter(Mandatory = $true)][string]$Source,
    [Parameter(Mandatory = $true)][string]$Destination
  )

  if (-not (Test-Path -LiteralPath $Source -PathType Container)) {
    throw "Missing source directory: $Source"
  }
  New-Item -ItemType Directory -Path $Destination -Force | Out-Null
  Get-ChildItem -LiteralPath $Source -Force | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination $Destination -Recurse -Force
  }
}

function Find-Browser {
  $candidates = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
  )
  $browser = $candidates | Where-Object { Test-Path -LiteralPath $_ -PathType Leaf } | Select-Object -First 1
  if (-not $browser) {
    throw "Chrome or Edge is required to build the localized quick guide PDFs."
  }
  return $browser
}

function Convert-InlineMarkdown {
  param([string]$Text)

  $encoded = [System.Net.WebUtility]::HtmlEncode($Text)
  return [System.Text.RegularExpressions.Regex]::Replace(
    $encoded,
    '`([^`]+)`',
    '<code>$1</code>'
  )
}

function Convert-MarkdownToHtml {
  param(
    [Parameter(Mandatory = $true)][string]$MarkdownPath,
    [Parameter(Mandatory = $true)][ValidateSet("en", "fr")][string]$Locale
  )

  $body = [System.Collections.Generic.List[string]]::new()
  $script:resourceBuildList = $null

  function Close-List {
    if ($script:resourceBuildList) {
      $body.Add("</$script:resourceBuildList>")
      $script:resourceBuildList = $null
    }
  }

  foreach ($line in Get-Content -LiteralPath $MarkdownPath -Encoding UTF8) {
    if ([string]::IsNullOrWhiteSpace($line)) {
      Close-List
      continue
    }
    if ($line -match "^# (.+)$") {
      Close-List
      $body.Add("<h1>$(Convert-InlineMarkdown $Matches[1])</h1>")
      continue
    }
    if ($line -match "^## (.+)$") {
      Close-List
      $body.Add("<h2>$(Convert-InlineMarkdown $Matches[1])</h2>")
      continue
    }
    if ($line -match "^\d+\.\s+(.+)$") {
      if ($script:resourceBuildList -ne "ol") {
        Close-List
        $script:resourceBuildList = "ol"
        $body.Add("<ol>")
      }
      $body.Add("<li>$(Convert-InlineMarkdown $Matches[1])</li>")
      continue
    }
    if ($line -match "^[-*]\s+(.+)$") {
      if ($script:resourceBuildList -ne "ul") {
        Close-List
        $script:resourceBuildList = "ul"
        $body.Add("<ul>")
      }
      $body.Add("<li>$(Convert-InlineMarkdown $Matches[1])</li>")
      continue
    }
    Close-List
    $body.Add("<p>$(Convert-InlineMarkdown $line)</p>")
  }
  Close-List

  $language = if ($Locale -eq "fr") { "fr" } else { "en" }
  $footer = if ($Locale -eq "fr") {
    "AIMakers, Challenge Claude Code en 30 jours"
  } else {
    "AIMakers, Claude Code 30 Day Challenge"
  }

  return @"
<!doctype html>
<html lang="$language">
<head>
  <meta charset="utf-8">
  <title>AIMakers Quick Guide</title>
  <style>
    @page { size: A4; margin: 16mm 18mm 18mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #152033; font-family: Arial, Helvetica, sans-serif; font-size: 11.5pt; line-height: 1.5; }
    body::before { content: "AIMAKERS"; display: block; color: #f4511e; font-size: 10pt; font-weight: 800; letter-spacing: 0.16em; margin-bottom: 13mm; }
    h1 { margin: 0 0 8mm; max-width: 165mm; color: #111827; font-size: 27pt; line-height: 1.08; letter-spacing: -0.025em; }
    h2 { margin: 8mm 0 3mm; color: #a63211; font-size: 15pt; line-height: 1.2; break-after: avoid; }
    p { margin: 0 0 4mm; }
    ol, ul { margin: 1mm 0 5mm; padding-left: 7mm; }
    li { margin: 0 0 2.5mm; padding-left: 1.5mm; }
    code { border-radius: 3px; background: #fff1eb; padding: 1px 4px; color: #7c2d12; font-family: Consolas, monospace; font-size: 0.9em; }
    footer { margin-top: 12mm; border-top: 1px solid #d8dee8; padding-top: 2.5mm; color: #667085; font-size: 8.5pt; }
  </style>
</head>
<body>
  $($body -join "`n  ")
  <footer>$footer</footer>
</body>
</html>
"@
}

function New-QuickGuidePdf {
  param(
    [Parameter(Mandatory = $true)][string]$Browser,
    [Parameter(Mandatory = $true)][string]$MarkdownPath,
    [Parameter(Mandatory = $true)][string]$OutputPath,
    [Parameter(Mandatory = $true)][ValidateSet("en", "fr")][string]$Locale,
    [Parameter(Mandatory = $true)][string]$WorkingDirectory
  )

  $htmlPath = Join-Path $WorkingDirectory "quick-guide.html"
  $profilePath = Join-Path $WorkingDirectory "browser-profile"
  New-Item -ItemType Directory -Path $profilePath -Force | Out-Null
  Convert-MarkdownToHtml -MarkdownPath $MarkdownPath -Locale $Locale |
    Set-Content -LiteralPath $htmlPath -Encoding UTF8

  $url = ([System.Uri]$htmlPath).AbsoluteUri
  $arguments = @(
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=3000",
    "`"--user-data-dir=$profilePath`"",
    "`"--print-to-pdf=$OutputPath`"",
    $url
  )
  $browserError = Join-Path $WorkingDirectory "browser-error.log"
  $browserOutput = Join-Path $WorkingDirectory "browser-output.log"
  $process = Start-Process `
    -FilePath $Browser `
    -ArgumentList $arguments `
    -RedirectStandardError $browserError `
    -RedirectStandardOutput $browserOutput `
    -WindowStyle Hidden `
    -Wait `
    -PassThru
  if ($process.ExitCode -ne 0) {
    $details = if (Test-Path -LiteralPath $browserError) {
      (Get-Content -LiteralPath $browserError -Tail 8) -join " "
    } else {
      "No browser error output was recorded."
    }
    throw "Browser PDF generation failed with exit code $($process.ExitCode): $details"
  }

  if (-not (Test-Path -LiteralPath $OutputPath -PathType Leaf)) {
    throw "Quick guide PDF was not created: $OutputPath"
  }
  $bytes = [System.IO.File]::ReadAllBytes($OutputPath)
  if ($bytes.Length -lt 1000 -or [System.Text.Encoding]::ASCII.GetString($bytes, 0, 4) -ne "%PDF") {
    throw "Quick guide PDF is invalid: $OutputPath"
  }
  $pdfText = [System.Text.Encoding]::GetEncoding(28591).GetString($bytes)
  $pageCount = [System.Text.RegularExpressions.Regex]::Matches(
    $pdfText,
    "/Type\s*/Page(?![s])"
  ).Count
  if ($pageCount -ne 1) {
    throw "Quick guide PDF has $pageCount pages, expected exactly 1: $OutputPath"
  }
}

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = [System.IO.Path]::GetFullPath((Join-Path $scriptRoot ".."))
$sourceRoot = Resolve-ContainedPath -Path (Join-Path $repoRoot "resources\challenge") -Root $repoRoot -Label "Source root"
$pdfRoot = Resolve-ContainedPath -Path (Join-Path $repoRoot "public\sheets") -Root $repoRoot -Label "PDF root"
$outputRoot = Resolve-ContainedPath -Path (Join-Path $repoRoot "public\resources\claude-code-challenge") -Root $repoRoot -Label "Output root"
$temporaryRoot = Resolve-ContainedPath -Path (Join-Path $repoRoot ".tmp\challenge-resource-build-$PID") -Root $repoRoot -Label "Temporary root"

$locales = @("en", "fr")
$categories = @("developer", "consultant", "operations", "founder", "marketing")
$milestones = @("second-brain", "starter-kit", "workflow-kit", "company-kit")
$pdfSets = @{
  "starter-kit" = @("sheet-setup", "sheet-which-tool", "sheet-hooks", "sheet-manager")
  "workflow-kit" = @("sheet-context", "sheet-skills", "sheet-connections")
  "company-kit" = @("sheet-unattended", "sheet-instructions", "sheet-complete-guide", "sheet-team")
}

if (Test-Path -LiteralPath $temporaryRoot) {
  $verifiedTemporaryRoot = Resolve-ContainedPath -Path $temporaryRoot -Root (Join-Path $repoRoot ".tmp") -Label "Temporary cleanup target"
  Remove-Item -LiteralPath $verifiedTemporaryRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $temporaryRoot -Force | Out-Null
New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null

$browser = Find-Browser
$records = [System.Collections.Generic.List[object]]::new()

try {
  foreach ($locale in $locales) {
    $localeOutput = Resolve-ContainedPath -Path (Join-Path $outputRoot $locale) -Root $outputRoot -Label "Locale output"
    New-Item -ItemType Directory -Path (Join-Path $localeOutput "skills") -Force | Out-Null

    foreach ($id in $milestones) {
      $source = Resolve-ContainedPath -Path (Join-Path $sourceRoot "$locale\$id") -Root $sourceRoot -Label "Milestone source"
      $topFolder = "claude-code-$id"
      $archiveStage = Resolve-ContainedPath -Path (Join-Path $temporaryRoot "$locale-$id") -Root $temporaryRoot -Label "Archive stage"
      $packageRoot = Join-Path $archiveStage $topFolder
      Copy-DirectoryContents -Source $source -Destination $packageRoot

      $verifiedGuide = Join-Path $packageRoot "VERIFIED-RESOURCES.md"
      if (-not (Test-Path -LiteralPath $verifiedGuide -PathType Leaf)) {
        Copy-Item -LiteralPath (Join-Path $sourceRoot "$locale\shared\VERIFIED-RESOURCES.md") -Destination $verifiedGuide
      }

      if ($pdfSets.ContainsKey($id)) {
        $guideRoot = Join-Path $packageRoot "PDF-GUIDES"
        New-Item -ItemType Directory -Path $guideRoot -Force | Out-Null
        $suffix = if ($locale -eq "fr") { "-fr" } else { "" }
        foreach ($pdfId in $pdfSets[$id]) {
          $pdfName = "$pdfId$suffix.pdf"
          $pdfSource = Join-Path $pdfRoot $pdfName
          if (-not (Test-Path -LiteralPath $pdfSource -PathType Leaf)) {
            throw "Missing approved worksheet PDF: $pdfSource"
          }
          Copy-Item -LiteralPath $pdfSource -Destination (Join-Path $guideRoot $pdfName)
        }
        New-QuickGuidePdf `
          -Browser $browser `
          -MarkdownPath (Join-Path $packageRoot "START-HERE.md") `
          -OutputPath (Join-Path $packageRoot "QUICK-GUIDE.pdf") `
          -Locale $locale `
          -WorkingDirectory $archiveStage
      }

      $archivePath = Resolve-ContainedPath -Path (Join-Path $localeOutput "$id.zip") -Root $outputRoot -Label "Archive output"
      if (Test-Path -LiteralPath $archivePath) { Remove-Item -LiteralPath $archivePath -Force }
      Compress-Archive -LiteralPath $packageRoot -DestinationPath $archivePath -CompressionLevel Optimal

      $files = Get-ChildItem -LiteralPath $packageRoot -Recurse -Force -File |
        ForEach-Object { $_.FullName.Substring($archiveStage.Length + 1).Replace("\", "/") } |
        Sort-Object
      $records.Add([ordered]@{
        id = $id
        locale = $locale
        path = "$locale/$id.zip"
        topFolder = $topFolder
        files = @($files)
      })
      Write-Host "Built $locale/$id.zip"
    }

    foreach ($category in $categories) {
      $id = "$category-skills"
      $source = Resolve-ContainedPath -Path (Join-Path $sourceRoot "$locale\skills\$category") -Root $sourceRoot -Label "Skills source"
      $topFolder = "$category-skills-pack"
      $archiveStage = Resolve-ContainedPath -Path (Join-Path $temporaryRoot "$locale-$id") -Root $temporaryRoot -Label "Skills archive stage"
      $packageRoot = Join-Path $archiveStage $topFolder
      Copy-DirectoryContents -Source $source -Destination $packageRoot
      Copy-Item `
        -LiteralPath (Join-Path $sourceRoot "$locale\shared\VERIFIED-RESOURCES.md") `
        -Destination (Join-Path $packageRoot "VERIFIED-RESOURCES.md") `
        -Force

      $archivePath = Resolve-ContainedPath -Path (Join-Path $localeOutput "skills\$id.zip") -Root $outputRoot -Label "Skills archive output"
      if (Test-Path -LiteralPath $archivePath) { Remove-Item -LiteralPath $archivePath -Force }
      Compress-Archive -LiteralPath $packageRoot -DestinationPath $archivePath -CompressionLevel Optimal

      $files = Get-ChildItem -LiteralPath $packageRoot -Recurse -Force -File |
        ForEach-Object { $_.FullName.Substring($archiveStage.Length + 1).Replace("\", "/") } |
        Sort-Object
      $records.Add([ordered]@{
        id = $id
        locale = $locale
        path = "$locale/skills/$id.zip"
        topFolder = $topFolder
        files = @($files)
      })
      Write-Host "Built $locale/skills/$id.zip"
    }
  }

  $manifest = [ordered]@{
    version = 1
    reviewDate = "2026-08-26"
    archives = @($records | Sort-Object { $_.path })
  }
  $manifestJson = $manifest | ConvertTo-Json -Depth 8
  [System.IO.File]::WriteAllText(
    (Join-Path $outputRoot "manifest.json"),
    $manifestJson,
    [System.Text.UTF8Encoding]::new($false)
  )
  Write-Host "Built $($records.Count) resource archives."
}
finally {
  if (Test-Path -LiteralPath $temporaryRoot) {
    $verifiedTemporaryRoot = Resolve-ContainedPath -Path $temporaryRoot -Root (Join-Path $repoRoot ".tmp") -Label "Final cleanup target"
    Remove-Item -LiteralPath $verifiedTemporaryRoot -Recurse -Force
  }
}
