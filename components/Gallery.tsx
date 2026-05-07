import Image from 'next/image';
import dynamic from 'next/dynamic';
import { gallery } from '@/data/gallery';
import { SectionHeading } from './SectionHeading';

const Lightbox = dynamic(() => import('./Lightbox').then((m) => m.Lightbox));

const SPAN_PATTERNS = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
  'sm:col-span-2',
  '',
  '',
  '',
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream-50 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Thư viện ảnh"
          title="Một chút về không gian của chúng tôi"
          description="Bấm vào bất kỳ ảnh nào để xem ở chế độ phóng to."
        />

        <ul
          role="list"
          className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {gallery.map((item, i) => (
            <li
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-coffee-100 ${SPAN_PATTERNS[i] ?? ''}`}
            >
              <button
                type="button"
                data-gallery-index={i}
                aria-label={`Mở ảnh: ${item.alt}`}
                className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-500"
              />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee-900/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs font-medium text-cream-50">{item.alt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox items={gallery} />
    </section>
  );
}
