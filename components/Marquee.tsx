import type { ComponentType, ReactNode } from 'react';

type Props = {
  items: string[];
  Icon?: ComponentType<{ className?: string }>;
  className?: string;
  inner?: string;
  separator?: ReactNode;
  speed?: 'normal' | 'slow';
};

export function Marquee({
  items,
  Icon,
  className = 'border-y border-coffee-200/60 bg-cream-50 text-coffee-800',
  inner = 'py-5 text-coffee-800',
  separator,
  speed = 'normal',
}: Props) {
  const sep = separator ?? <span className="divider-dot mx-6" aria-hidden="true" />;
  const animation = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';

  const Row = (
    <ul className={`flex shrink-0 items-center ${inner}`}>
      {items.map((label, i) => (
        <li
          key={`${label}-${i}`}
          className="inline-flex shrink-0 items-center font-display text-2xl uppercase tracking-tight md:text-3xl lg:text-4xl"
        >
          {Icon ? <Icon className="mr-3 h-6 w-6 opacity-70" /> : null}
          <span>{label}</span>
          {sep}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className={`flex w-max items-center ${animation} group-hover:[animation-play-state:paused]`}>
        {Row}
        {Row}
      </div>
    </div>
  );
}
