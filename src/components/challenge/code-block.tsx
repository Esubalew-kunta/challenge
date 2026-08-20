"use client";

/**
 * The copy-paste block is the atomic unit of every lesson on this challenge.
 * It is the single best thing the reference site does, so it is the one piece
 * of that design we keep unchanged.
 */

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { CodeBlock as CodeBlockData } from "@/lib/challenge/types";

export function CodeBlock({ label, code }: CodeBlockData) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked. The code is still selectable by hand.
    }
  };

  return (
    <div className="overflow-hidden rounded-md bg-foreground shadow-sm">
      <div className="flex items-center gap-2 border-b border-white/10 py-2 pl-4 pr-2">
        <span className="font-mono text-xs text-white/55">{label}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
          className="ml-auto inline-flex items-center gap-1.5 rounded-[6px] border border-white/15 px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-white/55 transition-colors hover:border-white/35 hover:text-white/90"
        >
          {copied ? (
            <>
              <Check className="size-3" aria-hidden />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3" aria-hidden />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[0.8125rem] leading-[1.75] text-white/90">
        {code}
      </pre>
    </div>
  );
}
