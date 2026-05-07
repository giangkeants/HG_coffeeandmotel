import Image from 'next/image';
import { CoffeeIcon, CheckIcon, ClockIcon } from '../icons';

const HIGHLIGHTS = [
  { label: 'Hạt Arabica & Robusta', desc: 'Đà Lạt · Buôn Ma Thuột' },
  { label: 'Pha tay V60 / AeroPress', desc: 'Espresso chuẩn quốc tế' },
  { label: 'Bánh ngọt nướng mỗi sáng', desc: 'Không gian yên tĩnh' },
  { label: 'Wifi mạnh, ổ cắm nhiều', desc: 'Phù hợp freelancer' },
];

export function MobileCoffeeShop() {
  return (
    <section id="m-cafe" className="relative bg-coffee-900 pb-12 pt-10 text-cream-50">
      <div className="px-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-200/80">
          Quán cà phê
        </p>
        <h2 className="mt-2 font-display text-3xl leading-[1.1]">
          Ly cà phê thủ công, <br />
          <span className="italic text-cream-200">đậm đà</span> & mộc mạc.
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-cream-100/90">
          Quán nằm ngay tầng trệt motel — không gian gỗ ấm áp, mở từ sớm để bạn bắt đầu ngày mới.
        </p>
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto px-4 pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative aspect-[3/4] h-56 flex-shrink-0 overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=70"
            alt="Ly latte với latte art"
            fill
            sizes="60vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee-900/85 to-transparent p-3 text-cream-50">
            <p className="text-[11px] font-medium">Latte art</p>
          </div>
        </div>
        <div className="relative aspect-[3/4] h-56 flex-shrink-0 overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=70"
            alt="Barista pha cà phê thủ công"
            fill
            sizes="60vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee-900/85 to-transparent p-3 text-cream-50">
            <p className="text-[11px] font-medium">Pha tay V60</p>
          </div>
        </div>
        <div className="relative aspect-[3/4] h-56 flex-shrink-0 overflow-hidden rounded-3xl">
          <Image
            src="/images/cafe/cafe_view.jpg"
            alt="View quán cà phê"
            fill
            sizes="60vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee-900/85 to-transparent p-3 text-cream-50">
            <p className="text-[11px] font-medium">Không gian quán</p>
          </div>
        </div>
      </div>

      <ul className="mt-5 space-y-2 px-4">
        {HIGHLIGHTS.map((h) => (
          <li
            key={h.label}
            className="flex items-start gap-3 rounded-2xl border border-cream-50/10 bg-cream-50/5 p-3 backdrop-blur"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-cream-50/10 text-cream-100">
              <CheckIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[14px] font-semibold leading-tight text-cream-50">{h.label}</p>
              <p className="mt-0.5 text-[12px] text-cream-100/75">{h.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mx-4 mt-5 flex items-center justify-between gap-3 rounded-2xl bg-cream-50/10 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cream-50/15 text-cream-100">
            <ClockIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-cream-100/70">Giờ mở cửa</p>
            <p className="text-sm font-semibold text-cream-50">06:00 – 18:30 mỗi ngày</p>
          </div>
        </div>
        <CoffeeIcon className="h-5 w-5 text-cream-200" />
      </div>
    </section>
  );
}
