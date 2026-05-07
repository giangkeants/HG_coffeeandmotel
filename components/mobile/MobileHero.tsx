import Image from 'next/image';
import { site, telHref, zaloHref, messengerHref } from '@/data/site';
import {
  PhoneIcon,
  ZaloIcon,
  MessengerIcon,
  MapPinIcon,
  ClockIcon,
  CoffeeIcon,
  BedIcon,
} from '../icons';

export function MobileHero() {
  return (
    <section
      id="m-home"
      aria-labelledby="m-hero-title"
      className="relative isolate bg-cream-50 pb-6"
    >
      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden rounded-b-[36px]">
        <Image
          src="/images/cafe/bg.jpg"
          alt="Mặt tiền Hương Giang Coffee and Motel buổi tối"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/40 via-coffee-900/55 to-coffee-900/95" />

        <div className="relative flex h-full flex-col px-5 pt-6 text-cream-50">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cream-50/30 bg-cream-50/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-cream-100 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-100 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream-100" />
              </span>
              Đang mở cửa
            </span>
          </div>

          <div className="mt-auto pb-6 animate-fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-200/85">
              {site.tagline}
            </p>
            <h1
              id="m-hero-title"
              className="mt-3 font-display text-[40px] leading-[1.05] tracking-tight"
            >
              Ngủ thật êm,
              <br />
              cà phê thật <span className="italic text-cream-200">đậm đà</span>.
            </h1>
            <p className="mt-3 max-w-[20rem] text-[14px] leading-relaxed text-cream-100/90">
              Nhà nghỉ ấm cúng kết hợp quán cà phê tại TT. Núi Sập, Thoại Sơn — An Giang.
            </p>
          </div>
        </div>
      </div>

      <div className="-mt-12 px-4">
        <div className="relative rounded-3xl border border-coffee-200/70 bg-white p-4 shadow-soft">
          <a
            href={telHref}
            aria-label={`Gọi ${site.phoneDisplay}`}
            className="flex w-full items-center justify-between gap-3 rounded-2xl bg-coffee-700 px-4 py-3.5 text-cream-50 active:scale-[0.99] transition-transform"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cream-50/15">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-cream-100/70">
                  Gọi đặt phòng
                </span>
                <span className="block text-base font-semibold tabular-nums">
                  {site.phoneDisplay}
                </span>
              </span>
            </span>
            <span className="text-xs font-medium text-cream-100/80">24/7</span>
          </a>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <a
              href={zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-coffee-600 px-3 py-3 text-cream-50 active:scale-[0.98] transition-transform"
              aria-label="Chat Zalo"
            >
              <ZaloIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Chat Zalo</span>
            </a>
            <a
              href={messengerHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-coffee-400 px-3 py-3 text-cream-50 active:scale-[0.98] transition-transform"
              aria-label="Nhắn Messenger"
            >
              <MessengerIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Messenger</span>
            </a>
          </div>
        </div>

        <ul className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
          <li className="flex flex-col items-center gap-1.5 rounded-2xl border border-coffee-200/70 bg-white/80 px-2 py-3 text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <span className="font-semibold leading-tight text-coffee-900">Núi Sập</span>
            <span className="text-[10px] text-coffee-600">Thoại Sơn</span>
          </li>
          <li className="flex flex-col items-center gap-1.5 rounded-2xl border border-coffee-200/70 bg-white/80 px-2 py-3 text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
              <BedIcon className="h-4 w-4" />
            </span>
            <span className="font-semibold leading-tight text-coffee-900">Lễ tân</span>
            <span className="text-[10px] text-coffee-600">24/7</span>
          </li>
          <li className="flex flex-col items-center gap-1.5 rounded-2xl border border-coffee-200/70 bg-white/80 px-2 py-3 text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
              <CoffeeIcon className="h-4 w-4" />
            </span>
            <span className="font-semibold leading-tight text-coffee-900">Cà phê</span>
            <span className="text-[10px] text-coffee-600">06:00 – 18:30</span>
          </li>
        </ul>

        <a
          href="#m-rooms"
          className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-coffee-700"
        >
          <ClockIcon className="h-3.5 w-3.5" />
          Xem phòng & giá tốt
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
