import Image from 'next/image';
import { CoffeeIcon, BedIcon, MapPinIcon } from './icons';

const FEATURES = [
  {
    icon: BedIcon,
    title: 'Phòng nghỉ ấm cúng',
    desc: 'Nội thất gỗ tự nhiên, ánh sáng dịu, dọn dẹp mỗi ngày.',
  },
  {
    icon: CoffeeIcon,
    title: 'Cà phê thủ công',
    desc: 'Rang xay đậm đà, đồ uống đa dạng cho mọi gu.',
  },
  {
    icon: MapPinIcon,
    title: 'Vị trí thuận tiện',
    desc: 'Cạnh cầu Thoại Giang, gần hồ Ông Thoại & Trúc Lâm.',
  },
];

const STATS = [
  { value: '24/7', label: 'Lễ tân phục vụ' },
  { value: '03', label: 'Loại phòng' },
  { value: '06:00', label: 'Quán mở cửa' },
  { value: '100%', label: 'Wifi · máy lạnh' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream-50 py-24 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-10 select-none font-display text-[220px] font-bold leading-none text-coffee-900/[0.045] sm:text-[280px]"
      >
        01
      </span>

      <div className="container-x grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="relative lg:col-span-6">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[32px] bg-coffee-100 shadow-soft">
            <Image
              src="/images/cafe/cafe.jpg"
              alt="Góc cà phê ấm cúng tại Hương Giang Coffee and Motel"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
              loading="lazy"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-coffee-800 backdrop-blur">
              <CoffeeIcon className="h-3.5 w-3.5" />
              Sảnh cà phê
            </span>
          </div>

          <div className="absolute -left-2 bottom-6 hidden w-56 rotate-[-4deg] rounded-2xl border border-coffee-200 bg-cream-50 p-3 shadow-soft sm:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-coffee-100">
              <Image
                src="/images/cafe/cafe_view.jpg"
                alt="Khung cảnh trước quán nhìn ra phố"
                fill
                sizes="220px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-2 px-1 font-display text-sm leading-tight text-coffee-900">
              View phố nhỏ
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-coffee-600">
                Tĩnh lặng · Mộc mạc
              </span>
            </p>
          </div>

          <span
            aria-hidden="true"
            className="absolute -top-4 left-2 hidden font-mono text-[11px] uppercase tracking-[0.3em] text-coffee-500 sm:block"
          >
            01 / 04 — Welcome
          </span>
        </div>

        <div className="lg:col-span-6">
          <p className="section-eyebrow">Về chúng tôi</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.04] tracking-tight text-coffee-900 sm:text-5xl md:text-[56px]">
            Một chốn dừng chân,
            <br />
            <span className="italic font-light text-coffee-700">hai trải nghiệm</span> trọn vẹn.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-coffee-700/95 sm:text-lg">
            Hương Giang là nơi du khách có thể vừa nghỉ ngơi sau một ngày dài, vừa tận hưởng không
            gian cà phê yên tĩnh ngay tại sảnh. Chúng tôi tin một chuyến đi tốt bắt đầu từ một giấc
            ngủ ngon — và một ly cà phê thơm.
          </p>

          <ol className="mt-9 space-y-3">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <li
                key={title}
                className="group relative flex items-start gap-4 rounded-2xl border border-coffee-200/70 bg-white/70 p-5 transition-all hover:border-coffee-300 hover:bg-white hover:shadow-soft"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-coffee-700/8 text-coffee-700 transition-colors group-hover:bg-coffee-700 group-hover:text-cream-50">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tabular-nums text-coffee-500">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-coffee-900">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-coffee-700/90">{desc}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="self-center font-display text-2xl text-coffee-300 transition-transform group-hover:translate-x-1 group-hover:text-coffee-700"
                >
                  →
                </span>
              </li>
            ))}
          </ol>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-coffee-200/70 pt-7 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold tracking-tight text-coffee-900 sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-coffee-600">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
