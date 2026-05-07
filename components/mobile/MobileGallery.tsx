import Image from 'next/image';
import { gallery } from '@/data/gallery';

const MOBILE_HEIGHTS = [
  'h-56',
  'h-40',
  'h-44',
  'h-56',
  'h-44',
  'h-40',
  'h-52',
  'h-44',
  'h-56',
];

export function MobileGallery() {
  return (
    <section id="m-gallery" className="bg-cream-50 px-4 pb-12 pt-10">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coffee-500">
        Thư viện ảnh
      </p>
      <h2 className="mt-2 font-display text-3xl leading-[1.1] text-coffee-900">
        Một chút về <span className="italic text-coffee-700">không gian</span>
      </h2>
      <p className="mt-2 text-[13px] text-coffee-700/90">
        Bấm vào ảnh để xem toàn màn hình.
      </p>

      <div className="mt-5 columns-2 gap-3 [column-fill:_balance]">
        {gallery.map((item, i) => (
          <button
            key={item.id}
            type="button"
            data-gallery-index={i}
            aria-label={`Mở ảnh: ${item.alt}`}
            className={`group relative mb-3 block w-full overflow-hidden rounded-2xl bg-coffee-100 break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-500 ${
              MOBILE_HEIGHTS[i % MOBILE_HEIGHTS.length]
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-500 group-active:scale-[1.02]"
              loading="lazy"
            />
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee-900/80 via-coffee-900/20 to-transparent p-2.5 text-left"
              aria-hidden="true"
            >
              <span className="line-clamp-2 text-[11px] font-medium leading-snug text-cream-50">
                {item.alt}
              </span>
            </span>
          </button>
        ))}
      </div>

      <p className="mt-2 text-center text-[11px] text-coffee-600/80">
        {gallery.length} ảnh · cập nhật thường xuyên
      </p>
    </section>
  );
}
