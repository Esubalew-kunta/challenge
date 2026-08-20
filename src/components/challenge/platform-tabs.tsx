"use client";

/**
 * Windows, macOS and the desktop app get equal billing, never a footnote.
 * The reference site assumes a Mac terminal throughout, so a Windows reader
 * runs a command that cannot work and assumes they broke something.
 *
 * The choice is remembered, so a reader picks their system once on Day 1 and
 * never has to think about it again.
 */

import type { PlatformPanel } from "@/lib/challenge/types";
import { CodeBlock } from "./code-block";
import { Paragraphs } from "./rich-text";
import { useStored, writeStored } from "./use-stored";

const STORE_KEY = "cc30.platform";

export function PlatformTabs({ panels }: { panels: PlatformPanel[] }) {
  const first = panels[0]?.id ?? "";
  const stored = useStored(STORE_KEY, first);

  // A day may not offer every platform. If the remembered one is not on this
  // page, fall back to the first tab rather than showing nothing.
  const panel = panels.find((p) => p.id === stored) ?? panels[0];

  return (
    <div className="flex flex-col gap-3">
      <div
        role="tablist"
        aria-label="Choose your system"
        className="flex flex-wrap gap-1.5"
      >
        {panels.map((p) => (
          <button
            key={p.id}
            role="tab"
            type="button"
            aria-selected={p.id === panel?.id}
            onClick={() => writeStored(STORE_KEY, p.id)}
            className={
              p.id === panel?.id
                ? "rounded-sm border border-primary bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground"
                : "rounded-sm border border-border bg-card px-3.5 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            }
          >
            {p.label}
          </button>
        ))}
      </div>

      {panel ? (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Paragraphs items={panel.body} />
          </div>
          {panel.code ? <CodeBlock {...panel.code} /> : null}
          {panel.extraCode ? <CodeBlock {...panel.extraCode} /> : null}
        </div>
      ) : null}
    </div>
  );
}
