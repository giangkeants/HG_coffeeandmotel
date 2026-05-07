import Link from 'next/link';
import { site, telHref, zaloHref, messengerHref } from '@/data/site';
import { PhoneIcon, MapPinIcon, ClockIcon, ZaloIcon, MessengerIcon } from './icons';
import { LogoMark } from './Logo';

const NAV = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#rooms', label: 'Phòng' },
  { href: '#cafe', label: 'Cà phê' },
  { href: '#gallery', label: 'Thư viện' },
  { href: '#contact', label: 'Liên hệ' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="hidden border-b border-coffee-800/30 bg-coffee-900 text-cream-100/85 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-200 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cream-200" />
              </span>
              Lễ tân 24/7 · Đang nhận đặt phòng
            </span>
            <span className="hidden items-center gap-1.5 xl:inline-flex">
              <ClockIcon className="h-3.5 w-3.5" />
              Quán: {site.hours.cafe}
            </span>
            <span className="hidden items-center gap-1.5 xl:inline-flex">
              <MapPinIcon className="h-3.5 w-3.5" />
              TT. Núi Sập · Thoại Sơn · An Giang
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-cream-50"
            >
              <ZaloIcon className="h-3.5 w-3.5" />
              Zalo
            </a>
            <a
              href={messengerHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-cream-50"
            >
              <MessengerIcon className="h-3.5 w-3.5" />
              Messenger
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-1.5 font-semibold tabular-nums text-cream-50"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-coffee-200/60 bg-cream-50/85 backdrop-blur supports-[backdrop-filter]:bg-cream-50/70">
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${site.name} — Trang chủ`}
            className="group flex items-center gap-3 text-coffee-900"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-coffee-700 text-cream-50 shadow-sm transition-transform group-hover:-rotate-6">
              <LogoMark className="h-6 w-6" />
              <span className="pointer-events-none absolute -inset-1 -z-10 rounded-[18px] bg-coffee-700/15 blur" />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg font-semibold tracking-tight">
                {site.shortName}
              </span>
              <span className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-coffee-600">
                Coffee
                <span className="divider-dot" aria-hidden="true" />
                Motel
                <span className="divider-dot" aria-hidden="true" />
                <span className="text-coffee-500">Est. An Giang</span>
              </span>
            </span>
          </Link>

          <nav aria-label="Điều hướng chính" className="hidden md:block">
            <ul className="flex items-center gap-1 text-sm">
              {NAV.map((item, i) => (
                <li key={item.href} className="flex items-center">
                  <a href={item.href} className="nav-link">
                    <span className="mr-1 text-[10px] tabular-nums text-coffee-500">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#rooms"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-coffee-800 transition-colors hover:bg-coffee-700/5 lg:inline-flex"
            >
              Xem phòng
            </a>
            <a
              href={telHref}
              className="btn-primary !px-4 !py-2 text-sm shadow-soft"
              aria-label={`Gọi ${site.phoneDisplay}`}
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Đặt phòng</span>
              <span className="sm:hidden">Gọi</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
