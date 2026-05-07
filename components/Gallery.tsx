import Image from 'next/image';
import { gallery, type GalleryItem } from '@/data/gallery';
import { site } from '@/data/site';

const SPAN_PATTERNS = [
  'sm:col-span-2 sm:row-span-2',
  '',
  'sm:row-span-2',
  '',
  'sm:col-span-2',
  '',
  'sm:row-span-2',
  '',
  '',
];

const CATEGORY_LABEL: Record<GalleryItem['category'], string> = {
  cafe: 'Cà phê',
  room: 'Phòng',
  exterior: 'Ngoại thất',
};

const CATEGORY_COUNTS = gallery.reduce(
  (acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  },
  {} as Record<GalleryItem['category'], number>,
);

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream-50 py-24 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-8 select-none font-display text-[220px] font-bold leading-none text-coffee-900/[0.045] sm:text-[280px]"
      >
        04
      </span>

      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-coffee-500">
              04 / 04 — See
            </span>
            <p className="section-eyebrow mt-3">Thư viện ảnh</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.04] tracking-tight text-coffee-900 sm:text-5xl md:text-[56px]">
              Một chút về
              <br />
              <span className="italic font-light text-coffee-700">không gian</span> của chúng tôi.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-coffee-700/95 sm:text-lg">
              Bấm vào bất kỳ ảnh nào để xem ở chế độ phóng to. Cập nhật thường xuyên trên Fanpage.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-coffee-700 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50">
                Tất cả · {gallery.length}
              </span>
              {(Object.keys(CATEGORY_LABEL) as GalleryItem['category'][]).map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-coffee-300 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-coffee-700"
                >
                  {CATEGORY_LABEL[cat]} · {CATEGORY_COUNTS[cat] ?? 0}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ul
          role="list"
          className="mt-14 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {gallery.map((item, i) => (
            <li
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-coffee-100 ring-1 ring-coffee-900/5 transition-shadow hover:shadow-soft ${SPAN_PATTERNS[i] ?? ''}`}
            >
              <button
                type="button"
                data-gallery-index={i}
                aria-label={`Mở ảnh: ${item.alt}`}
                className="absolute inset-0 z-20 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-500"
              />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                loading="lazy"
              />

              <span
                className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-coffee-800 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-coffee-700" />
                {CATEGORY_LABEL[item.category]}
              </span>

              <span
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cream-50/0 text-cream-50 opacity-0 backdrop-blur transition-all duration-300 group-hover:bg-cream-50/15 group-hover:opacity-100"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="h-4 w-4"
                >
                  <path
                    d="M21 21l-6-6M11 17a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 8v6M8 11h6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-2 bg-gradient-to-t from-coffee-900/75 via-coffee-900/30 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                aria-hidden="true"
              >
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-cream-100/85">
                  {String(i + 1).padStart(2, '0')} / {gallery.length}
                </p>
                <p className="mt-1 text-sm font-medium text-cream-50">{item.alt}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-coffee-200 pt-7 text-sm text-coffee-700 sm:flex-row">
          <p>
            Cập nhật thường xuyên — theo dõi{' '}
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-coffee-900 underline-offset-4 hover:underline"
            >
              Fanpage Hương Giang
            </a>{' '}
            để xem nhiều ảnh mới.
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-coffee-300 px-4 py-2 text-coffee-800 transition-colors hover:bg-coffee-700/5"
          >
            Xem trên Google Maps
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
