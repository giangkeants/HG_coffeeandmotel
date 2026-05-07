import Image from 'next/image';
import { site, telHref, zaloHref, messengerHref } from '@/data/site';
import { PhoneIcon, ZaloIcon, MessengerIcon, MapPinIcon, ClockIcon, BedIcon } from './icons';
import { LogoMark } from './Logo';

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cafe/bg.jpg"
          alt="Mặt tiền Hương Giang Coffee and Motel buổi tối với ánh đèn vàng ấm"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 via-coffee-900/55 to-coffee-900/95" />
        <div className="absolute inset-0 bg-grain-soft opacity-[0.18] mix-blend-overlay" />
      </div>

      <span
        className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.4em] text-cream-100/55 lg:block"
        aria-hidden="true"
      >
        Est. An Giang · Núi Sập · Thoại Sơn
      </span>

      <span
        className="pointer-events-none absolute right-8 top-28 hidden text-[10px] font-mono tracking-[0.18em] text-cream-100/55 lg:block"
        aria-hidden="true"
      >
        N 10.260613° · E 105.257912°
      </span>

      <div className="container-x relative grid min-h-[92vh] gap-10 py-24 text-cream-50 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 animate-fade-in">
            <span className="inline-flex h-8 items-center gap-2 rounded-full border border-cream-50/25 bg-cream-50/10 px-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-100 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-200 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream-200" />
              </span>
              Đang mở cửa
            </span>
            <span className="hidden h-px flex-1 bg-cream-50/25 sm:block" />
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-cream-100/70 sm:inline">
              {site.tagline}
            </span>
          </div>

          <h1
            id="hero-title"
            className="mt-7 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl xl:text-[88px] animate-fade-up"
          >
            Nghỉ ngơi thật <span className="italic font-light text-cream-200">êm</span>,
            <br />
            cà phê thật{' '}
            <span className="relative inline-block">
              <span className="italic font-light text-cream-200">đậm đà</span>
              <svg
                viewBox="0 0 240 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-cream-200/70"
                aria-hidden="true"
              >
                <path
                  d="M2 8 C 60 2, 120 12, 238 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg animate-fade-up">
            {site.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up">
            <a
              href={telHref}
              className="group btn bg-cream-50 text-coffee-900 hover:bg-cream-100"
              aria-label={`Gọi ngay ${site.phoneDisplay}`}
            >
              <PhoneIcon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              Gọi ngay
              <span className="ml-1 tabular-nums text-coffee-700">{site.phoneDisplay}</span>
            </a>
            <a
              href={zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-coffee-600 text-cream-50 hover:bg-coffee-700"
              aria-label="Chat với chúng tôi qua Zalo"
            >
              <ZaloIcon className="h-4 w-4" />
              Chat Zalo
            </a>
            <a
              href={messengerHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-coffee-400 text-cream-50 hover:bg-coffee-500"
              aria-label="Nhắn tin Messenger với fanpage"
            >
              <MessengerIcon className="h-4 w-4" />
              Messenger
            </a>
            <a
              href="#rooms"
              className="btn-outline border-cream-50/40 !text-cream-50 hover:!bg-cream-50/10"
            >
              Xem phòng →
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-cream-50/15 bg-cream-50/[0.06] text-sm backdrop-blur-sm sm:grid-cols-3">
            <div className="flex items-start gap-3 bg-cream-50/[0.04] p-4">
              <MapPinIcon className="mt-0.5 h-5 w-5 text-cream-200" />
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-cream-100/65">Vị trí</dt>
                <dd className="font-medium">TT. Núi Sập · Thoại Sơn</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-cream-50/[0.04] p-4">
              <BedIcon className="mt-0.5 h-5 w-5 text-cream-200" />
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-cream-100/65">Lễ tân</dt>
                <dd className="font-medium">Phục vụ 24/7</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-cream-50/[0.04] p-4">
              <ClockIcon className="mt-0.5 h-5 w-5 text-cream-200" />
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-cream-100/65">Quán cà phê</dt>
                <dd className="font-medium">{site.hours.cafe}</dd>
              </div>
            </div>
          </dl>
        </div>

        <aside
          className="relative hidden lg:col-span-4 lg:flex lg:justify-end"
          aria-hidden="true"
        >
          <div className="relative w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-cream-50/20 shadow-soft">
              <Image
                src="/images/cafe/cafe.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coffee-900/85 to-transparent p-5 text-cream-50">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-100/85">
                  Khoảnh khắc
                </p>
                <p className="mt-1 font-display text-lg leading-tight">
                  Sảnh cà phê ấm
                  <br />
                  ngay tầng trệt
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 w-44 rotate-[-4deg] overflow-hidden rounded-2xl border border-cream-50/25 bg-cream-50 p-3 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-coffee-100">
                <Image
                  src="/images/cafe/cafe_view.jpg"
                  alt=""
                  fill
                  sizes="170px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-coffee-700">
                Phòng nghỉ · Cà phê
              </p>
            </div>

            <div className="absolute -right-4 -top-6 flex h-24 w-24 items-center justify-center">
              <span className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="h-full w-full text-cream-50/85">
                  <defs>
                    <path
                      id="hero-circle"
                      d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text
                    fontSize="9.4"
                    letterSpacing="2.2"
                    fill="currentColor"
                    fontFamily="var(--font-display, Georgia, serif)"
                  >
                    <textPath href="#hero-circle">
                      HƯƠNG GIANG · COFFEE · MOTEL · 
                    </textPath>
                  </text>
                </svg>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50 text-coffee-800 shadow-sm">
                <LogoMark className="h-6 w-6" />
              </span>
            </div>
          </div>
        </aside>
      </div>

      <a
        href="#about"
        aria-label="Cuộn xuống phần giới thiệu"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-cream-100/80 transition-opacity hover:text-cream-50 md:inline-flex"
      >
        <span>Cuộn xuống</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          className="h-4 w-4 animate-scroll-hint"
          aria-hidden="true"
        >
          <path d="M12 4v15m0 0-5-5m5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
