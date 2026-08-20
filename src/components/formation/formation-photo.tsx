import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FormationPhotoProps = {
  src?: string;
  alt?: string;
  /** Libellé affiché sur le placeholder quand aucune photo n'existe encore */
  placeholderLabel?: string;
  className?: string;
};

/**
 * Photo de session de formation, avec placeholder brandé quand la photo
 * n'existe pas encore (remplacer simplement en ajoutant `photo` dans
 * src/lib/formations.ts).
 */
export function FormationPhoto({
  src,
  alt,
  placeholderLabel = "Photo de session à venir",
  className,
}: FormationPhotoProps) {
  if (!src) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-muted/40 text-muted-foreground",
          className
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/10">
          <ImageIcon className="size-6 text-primary" />
        </span>
        <span className="text-sm">{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <div className={cn("group overflow-hidden rounded-2xl", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}
