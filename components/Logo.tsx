import { site } from '@/data/site';

type LogoMarkProps = {
  className?: string;
  title?: string;
};

/**
 * Logo mark — a coffee cup under an arch of steam,
 * symbolising the dual nature of Hương Giang Coffee and Motel:
 * a warm cup served under the shelter of a cosy guesthouse.
 *
 * Uses `currentColor` so callers control the colour via Tailwind `text-*`.
 */
export function LogoMark({ className, title = site.shortName }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <path
        d="M11 22 C 11 13, 17 7, 24 7 C 31 7, 37 13, 37 22"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M19 25 Q 21 22 19 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M29 25 Q 27 22 29 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 28 H 32 V 36 C 32 39, 30 41, 27 41 H 19 C 16 41, 14 39, 14 36 Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M32 30 C 37 30, 37 36, 32 36"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

type LogoWordmarkProps = {
  className?: string;
  markClassName?: string;
  /** When true, hides the small subtitle row under the brand name. */
  compact?: boolean;
};

/** Mark + brand name + subtitle. Use in Header / Footer / About. */
export function LogoWordmark({
  className,
  markClassName,
  compact = false,
}: LogoWordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className={markClassName ?? 'h-9 w-9 flex-shrink-0'} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-tight">
          {site.shortName}
        </span>
        {!compact && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] opacity-70">
            Coffee · Motel
          </span>
        )}
      </span>
    </span>
  );
}
