'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import type { GalleryItem } from '@/data/gallery';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from './icons';

type Props = {
  items: GalleryItem[];
};

export function Lightbox({ items }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest('[data-gallery-index]') as HTMLElement | null;
      if (!trigger) return;
      e.preventDefault();
      const idx = Number(trigger.dataset.galleryIndex);
      if (!Number.isNaN(idx)) setIndex(idx);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = original;
    };
  }, [index, close, prev, next]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Ảnh ${index + 1} / ${items.length}: ${item.alt}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee-900/95 p-4 animate-fade-in"
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        aria-label="Đóng"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 backdrop-blur transition-colors hover:bg-cream-50/20"
      >
        <XIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Ảnh trước"
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 sm:flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 backdrop-blur transition-colors hover:bg-cream-50/20"
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Ảnh sau"
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 sm:flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 backdrop-blur transition-colors hover:bg-cream-50/20"
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>

      <figure
        className="relative max-h-[88vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto aspect-[3/2] w-full overflow-hidden rounded-2xl bg-coffee-800">
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-cream-100/90">
          <span>{item.alt}</span>
          <span className="tabular-nums text-cream-100/70">
            {index + 1} / {items.length}
          </span>
        </figcaption>

        <div className="mt-4 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50"
            aria-label="Ảnh trước"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 text-cream-50"
            aria-label="Ảnh sau"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </figure>
    </div>
  );
}
