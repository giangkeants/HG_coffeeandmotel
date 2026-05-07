import type { ComponentType } from 'react';
import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';
import {
  PhoneIcon,
  ZaloIcon,
  MessengerIcon,
  FacebookIcon,
  MapPinIcon,
  MailIcon,
  ClockIcon,
} from '../icons';

type QuickAction = {
  href: string;
  label: string;
  sub: string;
  Icon: ComponentType<{ className?: string }>;
  bg: string;
  external?: boolean;
};

const QUICK_ACTIONS: QuickAction[] = [
  {
    href: telHref,
    label: 'Gọi điện',
    sub: site.phoneDisplay,
    Icon: PhoneIcon,
    bg: 'bg-coffee-700 text-cream-50',
  },
  {
    href: zaloHref,
    label: 'Zalo',
    sub: 'Chat ngay',
    Icon: ZaloIcon,
    bg: 'bg-coffee-600 text-cream-50',
    external: true,
  },
  {
    href: messengerHref,
    label: 'Messenger',
    sub: 'Phản hồi nhanh',
    Icon: MessengerIcon,
    bg: 'bg-coffee-400 text-cream-50',
    external: true,
  },
  {
    href: facebookHref,
    label: 'Fanpage',
    sub: 'Theo dõi tin mới',
    Icon: FacebookIcon,
    bg: 'bg-[#1877F2] text-white',
    external: true,
  },
];

export function MobileContact() {
  return (
    <section id="m-contact" className="bg-coffee-50 px-4 pb-12 pt-10">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coffee-500">
        Liên hệ
      </p>
      <h2 className="mt-2 font-display text-3xl leading-[1.1] text-coffee-900">
        Đặt phòng hoặc <br />
        ghé <span className="italic text-coffee-700">quán nhé</span>?
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-coffee-700/90">
        Hỗ trợ 24/7. Chọn cách tiện nhất với bạn.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {QUICK_ACTIONS.map(({ href, label, sub, Icon, bg, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={`group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl p-4 active:scale-[0.98] transition-transform ${bg}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <Icon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight">{label}</span>
              <span className="block text-[11px] opacity-80">{sub}</span>
            </span>
            <span
              className="pointer-events-none absolute -right-3 -bottom-3 text-6xl opacity-10"
              aria-hidden="true"
            >
              <Icon className="h-16 w-16" />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl border border-coffee-200/70 shadow-soft">
        <iframe
          title={`Bản đồ ${site.name}`}
          src={site.mapsEmbed}
          width="100%"
          height="280"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-coffee-900 active:bg-coffee-50"
        >
          <span className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] uppercase tracking-wider text-coffee-500">
                Địa chỉ
              </span>
              <span className="block text-[13px] font-semibold">{site.address}</span>
            </span>
          </span>
          <span className="rounded-full bg-coffee-700 px-3 py-1.5 text-[11px] font-semibold text-cream-50">
            Mở Maps
          </span>
        </a>
      </div>

      <ul className="mt-4 space-y-2">
        <li className="flex items-center gap-3 rounded-2xl border border-coffee-200/70 bg-white p-3.5">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
            <ClockIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-coffee-500">Giờ phục vụ</p>
            <p className="text-[13px] font-semibold text-coffee-900">{site.hours.reception}</p>
            <p className="text-[12px] text-coffee-700/85">Quán cà phê: {site.hours.cafe}</p>
          </div>
        </li>
        <li>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 rounded-2xl border border-coffee-200/70 bg-white p-3.5 active:bg-coffee-50"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
              <MailIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-wider text-coffee-500">Email</p>
              <p className="truncate text-[13px] font-semibold text-coffee-900">{site.email}</p>
            </div>
            <span className="text-[11px] font-semibold text-coffee-700">Gửi</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
