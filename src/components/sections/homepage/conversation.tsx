"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { homepageContent } from "@/lib/site-config";

const { valueProp } = homepageContent;
const messages = valueProp.conversation;

/** Cadence : "en train d'écrire" puis la bulle, message après message */
const TYPING_MS = 950;
const READ_MS = 650;
const FIRST_DELAY_MS = 300;
/** Filet de sécurité : au-delà du temps théorique + marge, tout est affiché. */
const FAIL_SAFE_MS =
  FIRST_DELAY_MS + messages.length * (TYPING_MS + READ_MS) + 1500;

function TypingBubble({ isAim }: { isAim: boolean }) {
  return (
    <div
      className={
        isAim
          ? "ml-auto flex w-fit items-center gap-1 rounded-2xl rounded-br-sm bg-primary/90 px-4 py-3"
          : "flex w-fit items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-3"
      }
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className={
            isAim
              ? "size-1.5 rounded-full bg-white/80"
              : "size-1.5 rounded-full bg-slate-400"
          }
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

function Bubble({ from, text }: { from: string; text: string }) {
  const isAim = from === "aim";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={isAim ? "flex justify-end" : "flex justify-start"}
    >
      <div
        className={
          isAim
            ? "flex max-w-[85%] items-end gap-2.5 flex-row-reverse"
            : "flex max-w-[85%] items-end gap-2.5"
        }
      >
        {/* Avatar */}
        {isAim ? (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
            AI
          </span>
        ) : (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">
            DG
          </span>
        )}
        <div
          className={
            isAim
              ? "rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-[15px] leading-relaxed text-white shadow-sm"
              : "rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-3 text-[15px] leading-relaxed text-foreground shadow-sm"
          }
        >
          {text}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * La conversation — le manifeste mis en scène : un dirigeant et AI Makers,
 * bulles qui s'écrivent toutes seules à l'arrivée dans le viewport.
 */
export function Conversation() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // Déclenchement une seule fois, dès que 20% du bloc entre dans le viewport.
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [step, setStep] = useState(0); // nombre de messages affichés
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setStep(messages.length);
      return;
    }
    if (step >= messages.length) {
      setTyping(false);
      return;
    }

    // pause de lecture, puis "écrit...", puis bulle suivante.
    // Les DEUX timers sont nettoyés par le cleanup de l'effet (le return
    // à l'intérieur d'un setTimeout ne nettoie rien — c'était le bug).
    let typeTimer: ReturnType<typeof setTimeout> | undefined;
    const readTimer = setTimeout(
      () => {
        setTyping(true);
        typeTimer = setTimeout(() => {
          setTyping(false);
          setStep((v) => Math.min(v + 1, messages.length));
        }, TYPING_MS);
      },
      step === 0 ? FIRST_DELAY_MS : READ_MS,
    );

    return () => {
      clearTimeout(readTimer);
      if (typeTimer !== undefined) clearTimeout(typeTimer);
    };
  }, [inView, step, prefersReducedMotion]);

  // Filet de sécurité : quoi qu'il arrive (timer perdu, onglet en arrière-plan,
  // re-render inattendu), toutes les bulles sont affichées après FAIL_SAFE_MS.
  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    const failSafe = setTimeout(() => {
      setTyping(false);
      setStep(messages.length);
    }, FAIL_SAFE_MS);
    return () => clearTimeout(failSafe);
  }, [inView, prefersReducedMotion]);

  return (
    <div ref={ref}>
      <div className="space-y-4">
        {messages.slice(0, step).map((message, i) => (
          <Bubble key={i} from={message.from} text={message.text} />
        ))}

        <AnimatePresence>
          {typing && step < messages.length && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={
                messages[step].from === "aim"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              <TypingBubble isAim={messages[step].from === "aim"} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* La suite de la conversation se passe en vrai */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= messages.length ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 text-sm text-muted-foreground"
      >
        {valueProp.conversationCta.prefix}{" "}
        <Link
          href={valueProp.conversationCta.href}
          className="cursor-pointer font-medium text-primary hover:underline"
        >
          {valueProp.conversationCta.label} →
        </Link>
        <span className="mx-2 text-border">·</span>
        <Link
          href="/equipe"
          className="cursor-pointer font-medium text-primary hover:underline"
        >
          L'équipe →
        </Link>
      </motion.p>
    </div>
  );
}
