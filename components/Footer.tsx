import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';
import { FacebookIcon, MessengerIcon, ZaloIcon, PhoneIcon, MailIcon, MapPinIcon } from './icons';
import { LogoMark } from './Logo';

const NAV = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#rooms', label: 'Phòng' },
  { href: '#cafe', label: 'Cà phê' },
  { href: '#gallery', label: 'Thư viện' },
  { href: '#contact', label: 'Liên hệ' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-coffee-900 pt-16 text-cream-100">
      <div className="container-x grid gap-10 pb-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/15">
              <LogoMark className="h-7 w-7" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-xl text-cream-50">{site.shortName}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-200/70">
                Coffee · Motel · An Giang
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-100/80">
            {site.description}
          </p>

          <a
            href={telHref}
            className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-cream-50/10 px-4 py-3 text-cream-50 ring-1 ring-cream-50/10 transition-colors hover:bg-cream-50/15"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cream-50/15">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-cream-100/65">
                Hotline · 24/7
              </span>
              <span className="block font-display text-lg tabular-nums">{site.phoneDisplay}</span>
            </span>
          </a>

          <div className="mt-5 flex flex-wrap gap-2">
            <SocialChip href={zaloHref} label="Zalo" icon={<ZaloIcon className="h-4 w-4" />} />
            <SocialChip
              href={messengerHref}
              label="Messenger"
              icon={<MessengerIcon className="h-4 w-4" />}
            />
            <SocialChip
              href={facebookHref}
              label="Fanpage"
              icon={<FacebookIcon className="h-4 w-4" />}
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream-200/70">
            Khám phá
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-cream-100/85 transition-colors hover:text-cream-50"
                >
                  <span aria-hidden="true" className="text-cream-200/50">
                    →
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream-200/70">
            Thông tin liên hệ
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/85">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-cream-200/70" />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                {site.address}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-cream-200/70" />
              <a href={`mailto:${site.email}`} className="hover:text-cream-50">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-block h-4 w-4 flex-shrink-0 text-cream-200/70" />
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-200/70">
                  Giờ phục vụ
                </span>
                <span className="block">{site.hours.reception}</span>
                <span className="block text-cream-100/70">Quán cà phê: {site.hours.cafe}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none border-t border-cream-50/10 px-4 pb-1"
      >
        <p className="text-stroke-cream font-display text-[18vw] font-bold leading-[0.85] tracking-tight opacity-60">
          Hương Giang
        </p>
      </div>

      <div className="border-t border-cream-50/10 bg-coffee-900/95">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-5 text-xs text-cream-100/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono tracking-wide">
            Made with care · in An Giang · VN
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialChip({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-cream-50/15 bg-cream-50/5 px-3 py-1.5 text-xs text-cream-100/85 transition-colors hover:border-cream-50/30 hover:bg-cream-50/10 hover:text-cream-50"
    >
      {icon}
      {label}
    </a>
  );
}
