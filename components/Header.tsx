import Link from 'next/link';
import { site, telHref } from '@/data/site';
import { PhoneIcon } from './icons';
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
    <header className="sticky top-0 z-40 border-b border-coffee-200/60 bg-cream-50/85 backdrop-blur supports-[backdrop-filter]:bg-cream-50/70">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.name} — Trang chủ`}
          className="flex items-center gap-2.5 font-display text-coffee-900 transition-opacity hover:opacity-80"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-coffee-700 text-cream-50 shadow-sm">
            <LogoMark className="h-6 w-6" />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-base font-semibold tracking-tight">
              {site.shortName}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-coffee-600">
              Coffee · Motel
            </span>
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-coffee-800 transition-colors hover:bg-coffee-700/5 hover:text-coffee-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={telHref}
          className="btn-primary !px-4 !py-2 text-sm"
          aria-label={`Gọi ${site.phoneDisplay}`}
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Gọi ngay</span>
          <span className="sm:hidden">Gọi</span>
        </a>
      </div>
    </header>
  );
}
