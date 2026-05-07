'use client';

import { useEffect, useState } from 'react';
import { site, telHref, zaloHref, messengerHref } from '@/data/site';
import { PhoneIcon, ZaloIcon, MessengerIcon } from '../icons';

export function MobileStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-cream-50/95 to-cream-50/0" />
      <nav
        aria-label="Liên hệ nhanh"
        className="flex items-stretch gap-2 bg-cream-50/95 px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur shadow-[0_-8px_30px_-12px_rgba(62,42,28,0.35)]"
      >
        <a
          href={telHref}
          aria-label={`Gọi ${site.phoneDisplay}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-coffee-700 px-3 py-3 text-cream-50 active:scale-[0.98] transition-transform"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="text-[13px] font-semibold leading-none">Gọi đặt phòng</span>
        </a>
        <a
          href={zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-2xl bg-coffee-600 text-cream-50 active:scale-95 transition-transform"
        >
          <ZaloIcon className="h-5 w-5" />
        </a>
        <a
          href={messengerHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn Messenger"
          className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-2xl bg-coffee-400 text-cream-50 active:scale-95 transition-transform"
        >
          <MessengerIcon className="h-5 w-5" />
        </a>
      </nav>
    </div>
  );
}
