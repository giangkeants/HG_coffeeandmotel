'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';
import {
  PhoneIcon,
  ZaloIcon,
  MessengerIcon,
  FacebookIcon,
  MapPinIcon,
  ClockIcon,
  XIcon,
} from '../icons';
import { LogoMark } from '../Logo';

const NAV = [
  { href: '#m-about', label: 'Giới thiệu', desc: 'Về Hương Giang' },
  { href: '#m-rooms', label: 'Phòng nghỉ', desc: 'Standard, Deluxe, Family' },
  { href: '#m-cafe', label: 'Cà phê', desc: 'Quán & menu' },
  { href: '#m-gallery', label: 'Thư viện ảnh', desc: 'Không gian thực tế' },
  { href: '#m-contact', label: 'Liên hệ', desc: 'Đặt phòng & chỉ đường' },
];

function BurgerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h10" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 shadow-[0_4px_18px_-12px_rgba(62,42,28,0.35)] backdrop-blur'
          : 'bg-cream-50/80 backdrop-blur supports-[backdrop-filter]:bg-cream-50/60'
      }`}
    >
      <div className="flex h-14 items-center justify-between px-4">
        <Link
          href="/"
          aria-label={`${site.name} — Trang chủ`}
          className="flex items-center gap-2.5 text-coffee-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coffee-700 text-cream-50 shadow-sm">
            <LogoMark className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight">
              {site.shortName}
            </span>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-coffee-600">
              Coffee · Motel
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <a
            href={telHref}
            aria-label={`Gọi ${site.phoneDisplay}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-700 text-cream-50 active:scale-95 transition-transform"
          >
            <PhoneIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Mở menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-coffee-200 bg-white text-coffee-800 active:scale-95 transition-transform"
          >
            <BurgerIcon />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-coffee-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu chính"
        className={`fixed right-0 top-0 z-50 h-[100dvh] w-[88vw] max-w-sm transform overflow-y-auto bg-cream-50 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-coffee-200/70 bg-cream-50/95 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coffee-700 text-cream-50">
              <LogoMark className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-semibold text-coffee-900">
                {site.shortName}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-coffee-600">
                Menu
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Đóng menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-coffee-100 text-coffee-800 active:scale-95 transition-transform"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Điều hướng" className="px-5 pb-2 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coffee-500">
            Khám phá
          </p>
          <ul className="mt-3 space-y-1.5">
            {NAV.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-coffee-200/70 bg-white px-4 py-3 text-coffee-900 transition-colors active:bg-coffee-50"
                >
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold leading-tight">
                      {item.label}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-coffee-600">{item.desc}</p>
                  </div>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-coffee-100 text-coffee-700 text-sm tabular-nums">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-2 px-5 pb-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coffee-500">
            Liên hệ nhanh
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={telHref}
              className="flex items-center gap-2 rounded-2xl bg-coffee-700 px-3 py-3 text-cream-50 active:scale-[0.98] transition-transform"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Gọi ngay</span>
            </a>
            <a
              href={zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-coffee-600 px-3 py-3 text-cream-50 active:scale-[0.98] transition-transform"
              onClick={() => setOpen(false)}
            >
              <ZaloIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Zalo</span>
            </a>
            <a
              href={messengerHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-coffee-400 px-3 py-3 text-cream-50 active:scale-[0.98] transition-transform"
              onClick={() => setOpen(false)}
            >
              <MessengerIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Messenger</span>
            </a>
            <a
              href={facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-[#1877F2] px-3 py-3 text-white active:scale-[0.98] transition-transform"
              onClick={() => setOpen(false)}
            >
              <FacebookIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Fanpage</span>
            </a>
          </div>
        </div>

        <div className="mx-5 my-2 rounded-2xl border border-coffee-200/70 bg-white/80 p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0 text-sm">
              <p className="text-[10px] uppercase tracking-wider text-coffee-500">Địa chỉ</p>
              <p className="font-medium text-coffee-900">{site.address}</p>
            </div>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
              <ClockIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0 text-sm">
              <p className="text-[10px] uppercase tracking-wider text-coffee-500">Giờ phục vụ</p>
              <p className="font-medium text-coffee-900">{site.hours.reception}</p>
              <p className="text-coffee-700/80">Quán cà phê: {site.hours.cafe}</p>
            </div>
          </div>
        </div>

        <p className="px-5 pb-[max(env(safe-area-inset-bottom),1.25rem)] pt-3 text-center text-[11px] text-coffee-600/80">
          © {new Date().getFullYear()} {site.shortName} · An Giang
        </p>
      </aside>
    </header>
  );
}
