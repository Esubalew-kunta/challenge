"use client";

/**
 * The reader commits to an answer before seeing anything.
 *
 * A "show answer" button lets people skip the thinking, which is the same as
 * having no question at all. Getting one wrong is the moment somebody actually
 * learns something, so the explanation only appears once they have chosen.
 *
 * The answer is remembered in the reader's own browser and nowhere else, so
 * coming back to a day shows what they picked rather than a blank page. It also
 * feeds the score. Nothing is sent to us and nothing is gated: a wrong answer
 * still counts the question as answered and still completes the day.
 */

import { Check, X } from "lucide-react";
import { uiFor } from "@/lib/challenge/locale";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { UNANSWERED } from "@/lib/challenge/progress";
import type { Question } from "@/lib/challenge/types";
import { RichText } from "./rich-text";
import { useProgress } from "./use-progress";

function QuestionCard({
  question,
  index,
  total,
  picked,
  onPick,
  locale,
}: {
  question: Question;
  index: number;
  total: number;
  locale: ChallengeLocale;
  /** The stored choice, or null when this one has not been answered yet. */
  picked: number | null;
  onPick: (option: number) => void;
}) {
  const answered = picked !== null;

  return (
    <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-5 shadow-sm">
      <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {uiFor(locale).quizCounter(index + 1, total)}
      </span>

      <p className="text-[1.0625rem] font-semibold leading-snug">
        <RichText text={question.question} />
      </p>

      <div className="flex flex-col gap-2">
        {question.options.map((option, i) => {
          const isCorrect = i === question.answer;
          const isPicked = i === picked;

          let tone =
            "border-border bg-background text-foreground hover:border-primary";
          let markTone = "border-border text-muted-foreground";

          if (answered && isCorrect) {
            tone = "border-success bg-success/10 text-success";
            markTone = "border-success text-success";
          } else if (answered && isPicked) {
            tone = "border-destructive bg-destructive/10 text-destructive";
            markTone = "border-destructive text-destructive";
          } else if (answered) {
            tone = "border-border bg-background text-foreground opacity-50";
          }

          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => onPick(i)}
              className={`flex items-start gap-3 rounded-sm border px-3.5 py-3 text-left text-[0.9375rem] leading-snug transition-colors ${tone} ${
                answered ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span
                className={`mt-0.5 grid size-5 flex-none place-items-center rounded-[6px] border font-mono text-[0.7rem] font-bold ${markTone}`}
              >
                {answered && isCorrect ? (
                  <Check className="size-3" aria-hidden />
                ) : answered && isPicked ? (
                  <X className="size-3" aria-hidden />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              <span>
                <RichText text={option} />
              </span>
            </button>
          );
        })}
      </div>

      {answered ? (
        <div className="rounded-r-sm border-l-[3px] border-primary bg-accent px-4 py-3 text-[0.9375rem]">
          <strong className="font-semibold">
            {String.fromCharCode(65 + question.answer)} is right.
          </strong>{" "}
          <RichText text={question.explanation} />
        </div>
      ) : null}
    </div>
  );
}

export function Quiz({
  questions,
  day,
  locale = "en",
}: {
  questions: Question[];
  day: number;
  locale?: ChallengeLocale;
}) {
  const { state, answer } = useProgress();
  const row = state.answers[day];

  return (
    <div className="flex flex-col gap-4">
      {questions.map((q, i) => {
        const stored = Array.isArray(row) ? row[i] : undefined;
        const picked =
          typeof stored === "number" && stored !== UNANSWERED ? stored : null;

        return (
          <QuestionCard
            key={i}
            question={q}
            index={i}
            total={questions.length}
            picked={picked}
            locale={locale}
            onPick={(option) => answer(day, i, option, questions.length)}
          />
        );
      })}
    </div>
  );
}


