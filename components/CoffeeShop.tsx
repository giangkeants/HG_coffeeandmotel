import Image from 'next/image';
import { CoffeeIcon, ClockIcon } from './icons';
import { Marquee } from './Marquee';

const HIGHLIGHTS = [
  {
    title: 'Hạt Arabica & Robusta',
    desc: 'Tuyển chọn từ Đà Lạt và Buôn Ma Thuột.',
    tag: 'Origin',
  },
  {
    title: 'Pha tay V60 · AeroPress',
    desc: 'Espresso và máy bán tự động chuẩn quốc tế.',
    tag: 'Method',
  },
  {
    title: 'Bánh ngọt nướng mỗi sáng',
    desc: 'Không gian gỗ ấm, yên tĩnh để làm việc.',
    tag: 'Bakery',
  },
  {
    title: 'Wifi mạnh · Ổ cắm nhiều',
    desc: 'Phù hợp freelancer và du khách lưu trú dài.',
    tag: 'Workspace',
  },
];

const MARQUEE_WORDS = [
  'Espresso',
  'Latte',
  'Cappuccino',
  'Pour Over',
  'Cold Brew',
  'Phin Việt',
  'Mocha',
  'Americano',
  'Bạc Xỉu',
];

export function CoffeeShop() {
  return (
    <section id="cafe" className="relative isolate overflow-hidden bg-coffee-900 text-cream-50">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-40px] top-12 select-none font-display text-[220px] font-bold leading-none text-cream-50/[0.04] sm:text-[280px]"
      >
        03
      </span>

      <div className="container-x relative grid gap-14 py-24 sm:py-28 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream-200/70">
            03 / 04 — Sip
          </span>
          <p className="section-eyebrow mt-3 !text-cream-200/85">Quán cà phê</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-[64px] xl:text-[72px]">
            Ly cà phê thủ công,
            <br />
            <span className="italic font-light text-cream-200">đậm đà</span> và mộc mạc.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
            Quán nằm ngay tầng trệt của motel — không gian gỗ ấm áp, mở cửa từ sớm để bạn bắt đầu
            ngày mới với một ly espresso, hoặc kết thúc tối muộn cùng tách cappuccino.
          </p>

          <ul className="mt-10 divide-y divide-cream-50/10 border-y border-cream-50/10">
            {HIGHLIGHTS.map((h, i) => (
              <li
                key={h.title}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 py-4 transition-colors hover:bg-cream-50/[0.03]"
              >
                <span className="font-mono text-[11px] tabular-nums text-cream-200/60">
                  ·{String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold leading-tight text-cream-50 sm:text-xl">
                    {h.title}
                  </p>
                  <p className="mt-0.5 text-sm text-cream-100/70">{h.desc}</p>
                </div>
                <span className="rounded-full border border-cream-50/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-100/75 transition-colors group-hover:border-cream-50/40 group-hover:text-cream-50">
                  {h.tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-2 text-sm text-cream-100">
              <ClockIcon className="h-4 w-4" />
              Mở cửa 06:00 – 18:30 mỗi ngày
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 px-4 py-2 text-sm text-cream-100/85">
              <CoffeeIcon className="h-4 w-4" />
              Take-away · Mang đi
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative ml-auto grid max-w-md grid-cols-6 grid-rows-6 gap-3 sm:gap-4">
            <div className="relative col-span-4 row-span-4 overflow-hidden rounded-[28px] border border-cream-50/15 bg-coffee-800">
              <Image
                src="/images/cafe/cafe.jpg"
                alt="Sảnh cà phê tại Hương Giang"
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-coffee-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-100 backdrop-blur">
                <CoffeeIcon className="h-3.5 w-3.5" />
                Sảnh cà phê
              </span>
            </div>

            <div className="relative col-span-2 row-span-3 col-start-5 row-start-1 overflow-hidden rounded-[24px] border border-cream-50/15 bg-coffee-800">
              <Image
                src="/images/cafe/cafe_view.jpg"
                alt="Khung cảnh trước quán nhìn ra phố"
                fill
                sizes="(min-width: 1024px) 160px, 30vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div className="relative col-span-2 row-span-3 col-start-5 row-start-4 overflow-hidden rounded-[24px] border border-cream-50/15 bg-coffee-800">
              <Image
                src="/images/cafe/bg.jpg"
                alt="Mặt tiền motel ban đêm"
                fill
                sizes="(min-width: 1024px) 160px, 30vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/85 to-transparent" />
              <p className="absolute inset-x-0 bottom-2 text-center font-display text-xs italic text-cream-100/90">
                Ánh đèn vàng ấm
              </p>
            </div>

            <div className="relative col-span-4 row-span-2 col-start-1 row-start-5 overflow-hidden rounded-[24px] border border-cream-50/15 bg-coffee-800">
              <div className="flex h-full items-center justify-between gap-3 bg-cream-50/[0.04] px-4 py-3 backdrop-blur-sm">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-200/80">
                    Best seller
                  </p>
                  <p className="mt-0.5 font-display text-base text-cream-50">
                    Cà phê sữa đá <span className="italic font-light">đậm đặc</span>
                  </p>
                </div>
                <CoffeeIcon className="h-7 w-7 text-cream-200/70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee
        items={MARQUEE_WORDS}
        Icon={CoffeeIcon}
        className="border-y border-cream-50/10 bg-coffee-800/50"
        inner="py-5 text-cream-50/85"
        separator={<span className="mx-6 text-cream-200/35">×</span>}
      />
    </section>
  );
}
