import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';
import { FacebookIcon, MessengerIcon, ZaloIcon, PhoneIcon } from './icons';
import { LogoMark } from './Logo';

export function Footer() {
  return (
    <footer className="bg-coffee-900 py-12 text-cream-100">
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/15">
              <LogoMark className="h-7 w-7" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-xl text-cream-50">{site.shortName}</p>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream-200/70">
                Coffee · Motel
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-100/80">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream-200/70">
            Liên hệ
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={telHref} className="inline-flex items-center gap-2 hover:text-cream-50">
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={messengerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream-50"
              >
                <MessengerIcon className="h-4 w-4" />
                Messenger
              </a>
            </li>
            <li>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream-50"
              >
                <FacebookIcon className="h-4 w-4" />
                Fanpage
              </a>
            </li>
            <li>
              <a
                href={zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream-50"
              >
                <ZaloIcon className="h-4 w-4" />
                Chat Zalo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream-200/70">
            Giờ phục vụ
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream-100/80">
            <li>{site.hours.reception}</li>
            <li>Quán cà phê: {site.hours.cafe}</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-10 flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>{site.address}</p>
      </div>
    </footer>
  );
}
