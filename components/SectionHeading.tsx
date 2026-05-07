import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-display mt-3">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-coffee-700/90 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
