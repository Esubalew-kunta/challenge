/**
 * One layout renders all ten sheets, printed to A4.
 *
 * Built as a page rather than in a design tool on purpose. It reads the same
 * facts the day pages read, so a command cannot say one thing on Day 1 and
 * something else on the sheet somebody printed. It also uses the site's own
 * tokens, so there is no second palette to keep in sync.
 *
 * The colours are written out here rather than taken from CSS variables
 * because this page is meant to be printed. A browser printing to PDF drops
 * background colours unless it is told not to, and a variable resolved against
 * a theme is one more thing that can come out wrong on paper. `print-color-adjust`
 * below is what keeps the blue band blue.
 *
 * Everything is sized in millimetres for the same reason: a sheet has to be
 * the same on every machine, and `rem` is whatever the reader's browser says
 * it is.
 */

import { RichText } from "./rich-text";
import { CHALLENGE_ROUTES } from "@/lib/challenge/registry";
import { siteConfig } from "@/lib/site-config";
import type { SheetBlock, SheetDoc } from "@/lib/challenge/sheets";

const INK = "#0f172a";
const MUTED = "#475569";
const LINE = "#e2e8f0";
const BLUE = "#2563eb";
const BLUE_DARK = "#1e40af";
const TINT = "#f1f5f9";
const ACCENT = "#e0e8ff";
const WARM = "#f59e0b";

/* ------------------------------------------------------------------ atoms */

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        margin: "0 0 2mm",
        fontSize: "2.6mm",
        fontWeight: 800,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: BLUE_DARK,
        borderBottom: `0.4mm solid ${ACCENT}`,
        paddingBottom: "1mm",
      }}
    >
      {children}
    </h2>
  );
}

/**
 * A list line, with an optional bold lead-in written as `**like this**` at the
 * very start.
 *
 * Deliberately not added to the shared `RichText`: the day content already
 * contains real `**` in glob patterns such as `**\/*.ts`, and a general bold
 * rule there would bold half a sentence somewhere nobody is looking. Anchoring
 * it to position zero, in this file only, means it cannot reach that content.
 */
function ListLine({ text }: { text: string }) {
  const match = /^\*\*(.+?)\*\*\s*/.exec(text);
  if (!match) return <RichText text={text} />;

  return (
    <>
      <strong style={{ fontWeight: 700, color: INK }}>
        <RichText text={match[1]} />
      </strong>{" "}
      <RichText text={text.slice(match[0].length)} />
    </>
  );
}

function Mono({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        display: "block",
        fontFamily: "var(--font-mono), ui-monospace, monospace",
        fontSize: "2.5mm",
        lineHeight: 1.5,
        color: INK,
        background: TINT,
        border: `0.25mm solid ${LINE}`,
        borderLeft: `0.8mm solid ${BLUE}`,
        borderRadius: "0.8mm",
        padding: "1.4mm 2mm",
        // `pre-wrap`, not the default.
        //
        // Without it every newline collapses into a space, and a shell script
        // or a settings file renders as one unreadable paragraph. The Setup
        // Sheet hid this because all of its commands are one line; the moment
        // a real script appeared it was obvious.
        //
        // `pre-wrap` rather than `pre` so a line that is still too wide wraps
        // instead of running off the edge of the paper, which cannot scroll.
        whiteSpace: "pre-wrap",
        overflowWrap: "anywhere",
      }}
    >
      {children}
    </code>
  );
}

/* ----------------------------------------------------------------- blocks */

function Block({ block }: { block: SheetBlock }) {
  if (block.kind === "commands") {
    return (
      <section style={{ marginBottom: "4mm" }}>
        <Heading>{block.heading}</Heading>
        {block.items.map((item, i) => (
          <div key={i} style={{ marginBottom: "2.2mm" }}>
            <p
              style={{
                margin: "0 0 0.8mm",
                fontSize: "2.5mm",
                fontWeight: 600,
                color: MUTED,
              }}
            >
              {item.label}
            </p>
            <Mono>{item.code}</Mono>
            {item.note ? (
              <p style={{ margin: "0.8mm 0 0", fontSize: "2.3mm", color: MUTED }}>
                <RichText text={item.note} />
              </p>
            ) : null}
          </div>
        ))}
      </section>
    );
  }

  if (block.kind === "table") {
    return (
      <section style={{ marginBottom: "4mm" }}>
        <Heading>{block.heading}</Heading>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "2.5mm",
          }}
        >
          <thead>
            <tr>
              {block.head.map((h, i) => (
                <th
                  key={i}
                  style={{
                    textAlign: "left",
                    fontSize: "2.2mm",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: MUTED,
                    background: TINT,
                    padding: "1.2mm 1.6mm",
                    borderBottom: `0.3mm solid ${LINE}`,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "1.2mm 1.6mm",
                      borderBottom: `0.25mm solid ${LINE}`,
                      verticalAlign: "top",
                      color: j === 0 ? INK : MUTED,
                      fontWeight: j === 0 ? 600 : 400,
                      fontFamily:
                        j === 0 && cell.startsWith("/")
                          ? "var(--font-mono), ui-monospace, monospace"
                          : undefined,
                      whiteSpace: j === 0 ? "nowrap" : undefined,
                    }}
                  >
                    <RichText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  if (block.kind === "fixes") {
    return (
      <section style={{ marginBottom: "4mm" }}>
        <Heading>{block.heading}</Heading>
        {block.items.map((item, i) => (
          <div
            key={i}
            style={{
              marginBottom: "1.8mm",
              paddingLeft: "2.4mm",
              borderLeft: `0.7mm solid ${WARM}`,
            }}
          >
            <p
              style={{
                margin: "0 0 0.5mm",
                fontSize: "2.5mm",
                fontWeight: 700,
                color: INK,
              }}
            >
              <RichText text={item.problem} />
            </p>
            <p style={{ margin: 0, fontSize: "2.35mm", lineHeight: 1.45, color: MUTED }}>
              <RichText text={item.fix} />
            </p>
          </div>
        ))}
      </section>
    );
  }

  if (block.kind === "list") {
    return (
      <section style={{ marginBottom: "4mm" }}>
        <Heading>{block.heading}</Heading>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                position: "relative",
                paddingLeft: "3.2mm",
                marginBottom: "1.4mm",
                fontSize: "2.4mm",
                lineHeight: 1.45,
                color: MUTED,
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: 0,
                  top: "1.1mm",
                  width: "1.4mm",
                  height: "1.4mm",
                  borderRadius: "50%",
                  background: BLUE,
                }}
              />
              <ListLine text={item} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  // note
  return (
    <section style={{ marginBottom: "4mm" }}>
      <div
        style={{
          background: ACCENT,
          border: `0.25mm solid ${BLUE}`,
          borderRadius: "1.2mm",
          padding: "2.4mm 2.8mm",
        }}
      >
        <p
          style={{
            margin: "0 0 1mm",
            fontSize: "2.3mm",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: BLUE_DARK,
          }}
        >
          {block.heading}
        </p>
        <p style={{ margin: 0, fontSize: "2.45mm", lineHeight: 1.45, color: INK }}>
          <RichText text={block.body} />
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- page */

export function SheetDocView({ doc }: { doc: SheetDoc }) {
  const dayPath = `${CHALLENGE_ROUTES.en}/day-${doc.day}`;

  return (
    <>
      {/*
        Print rules.

        This page lives under the (print) root layout, so there is no site
        header or footer on it and nothing has to be hidden by selector. An
        earlier version tried `body > *:not(.sheet-root)` from inside the
        English layout, which also hid the container the sheet sits in, and
        every PDF came out blank.

        What is left is the minimum: A4 with no browser margin, the screen-only
        note dropped, and colour-adjust. That last line is what stops a browser
        stripping the blue rule and the tinted blocks on the way to PDF, which
        is the most common way a printed page comes out looking unfinished.
      */}
      <style>{`
        @page { size: A4 portrait; margin: 0; }
        @media print {
          html, body { background: #fff !important; }
          .sheet-root { padding: 0 !important; background: #fff !important; }
          .sheet-page { box-shadow: none !important; margin: 0 !important; }
          .sheet-noprint { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div
        className="sheet-root"
        style={{ background: "#f8fafc", padding: "10mm 0", color: INK }}
      >
        {/* Screen only: says what this is and how to keep it. */}
        <div
          className="sheet-noprint"
          style={{
            width: "210mm",
            maxWidth: "100%",
            margin: "0 auto 6mm",
            padding: "0 6mm",
            fontSize: "3.4mm",
            color: MUTED,
          }}
        >
          Sheet {doc.slot} of 10, from Day {doc.day}. Print this page, or save it
          as PDF, to keep it. This line is not on the printed sheet.
        </div>

        <div
          className="sheet-page"
          style={{
            width: "210mm",
            minHeight: "297mm",
            margin: "0 auto",
            background: "#fff",
            boxShadow: "0 1mm 4mm rgba(15,23,42,0.10)",
            display: "flex",
            flexDirection: "column",
            fontFamily: "var(--font-sans), system-ui, sans-serif",
          }}
        >
          {/*
            Header.

            A thin blue rule rather than a deep filled band. A block of solid
            colour across the top of an A4 page eats the space the content needs
            and drinks ink on a real printer, and it left nowhere light enough
            to put the logo, which carries dark type.
          */}
          <div style={{ height: "2.5mm", background: BLUE, flex: "none" }} />

          <header
            style={{
              padding: "7mm 12mm 5mm",
              borderBottom: `0.4mm solid ${LINE}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "6mm",
                marginBottom: "4mm",
              }}
            >
              {/*
                The logo file is a square mark, not a wordmark: 482 by 479. On
                its own at this size it reads as an anonymous blue dot, so the
                name is set beside it. Same lockup the site header uses.
              */}
              <span style={{ display: "flex", alignItems: "center", gap: "2.5mm" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-aimakers.png"
                  alt=""
                  style={{ height: "9mm", width: "9mm" }}
                />
                <span
                  style={{
                    fontSize: "4.4mm",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    color: INK,
                  }}
                >
                  AI Makers
                </span>
              </span>
              <span
                style={{
                  fontSize: "2.6mm",
                  fontWeight: 800,
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: BLUE_DARK,
                }}
              >
                30 Days of Claude Code
              </span>
            </div>

            <h1
              style={{
                margin: "0 0 1.5mm",
                fontSize: "9mm",
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: INK,
              }}
            >
              {doc.title}
            </h1>
            <p style={{ margin: 0, fontSize: "3.4mm", color: MUTED }}>
              {doc.strapline}
            </p>
          </header>

          {/* Two columns */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8mm",
              padding: "7mm 12mm",
            }}
          >
            <div>
              {doc.left.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>
            <div>
              {doc.right.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>
          </div>

          {/*
            Footer.

            Two links out and nothing else. The verification date is
            deliberately NOT printed (owner's call, 20 August 2026), so the
            sheet points back at the site instead, which is the version that
            cannot go stale in somebody's inbox. `VERIFIED_AGAINST` still
            governs when WE re-check the content; it is simply not shown.
          */}
          <footer
            style={{
              borderTop: `0.4mm solid ${LINE}`,
              padding: "4mm 12mm 6mm",
              display: "flex",
              justifyContent: "space-between",
              gap: "4mm",
              fontSize: "2.4mm",
              color: MUTED,
            }}
          >
            <span>
              The full lesson:{" "}
              <a
                href={`${siteConfig.url}${dayPath}`}
                style={{ color: BLUE_DARK, fontWeight: 700, textDecoration: "none" }}
              >
                aimakers.fr{dayPath}
              </a>
            </span>
            <span>
              All thirty days:{" "}
              <a
                href={`${siteConfig.url}${CHALLENGE_ROUTES.en}`}
                style={{ color: BLUE_DARK, fontWeight: 700, textDecoration: "none" }}
              >
                aimakers.fr{CHALLENGE_ROUTES.en}
              </a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
