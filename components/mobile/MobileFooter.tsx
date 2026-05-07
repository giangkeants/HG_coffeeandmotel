import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';
import { FacebookIcon, MessengerIcon, ZaloIcon, PhoneIcon } from '../icons';
import { LogoMark } from '../Logo';

export function MobileFooter() {
  return (
    <footer className="bg-coffee-900 px-5 pb-[calc(env(safe-area-inset-bottom)+96px)] pt-10 text-cream-100">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/15">
          <LogoMark className="h-7 w-7" />
        </span>
        <div className="leading-tight">
          <p className="font-display text-lg text-cream-50">{site.shortName}</p>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream-200/70">
            Coffee · Motel
          </p>
        </div>
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-cream-100/80">
        Nhà nghỉ ấm cúng kết hợp quán cà phê tại TT. Núi Sập, Thoại Sơn — An Giang.
      </p>

      <div className="mt-5 grid grid-cols-4 gap-2">
        <a
          href={telHref}
          aria-label="Gọi điện"
          className="flex flex-col items-center gap-1 rounded-2xl bg-cream-50/10 py-3 text-[10px] font-medium text-cream-100 active:bg-cream-50/20"
        >
          <PhoneIcon className="h-4 w-4" />
          Gọi
        </a>
        <a
          href={zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zalo"
          className="flex flex-col items-center gap-1 rounded-2xl bg-cream-50/10 py-3 text-[10px] font-medium text-cream-100 active:bg-cream-50/20"
        >
          <ZaloIcon className="h-4 w-4" />
          Zalo
        </a>
        <a
          href={messengerHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
          className="flex flex-col items-center gap-1 rounded-2xl bg-cream-50/10 py-3 text-[10px] font-medium text-cream-100 active:bg-cream-50/20"
        >
          <MessengerIcon className="h-4 w-4" />
          Messenger
        </a>
        <a
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fanpage"
          className="flex flex-col items-center gap-1 rounded-2xl bg-cream-50/10 py-3 text-[10px] font-medium text-cream-100 active:bg-cream-50/20"
        >
          <FacebookIcon className="h-4 w-4" />
          Fanpage
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 text-[12px]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-200/70">
            Giờ phục vụ
          </p>
          <p className="mt-1.5 text-cream-100/85">{site.hours.reception}</p>
          <p className="text-cream-100/70">Cà phê: {site.hours.cafe}</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-200/70">
            Hotline
          </p>
          <p className="mt-1.5 font-semibold text-cream-50 tabular-nums">{site.phoneDisplay}</p>
          <p className="text-cream-100/70">{site.email}</p>
        </div>
      </div>

      <p className="mt-6 border-t border-cream-50/10 pt-4 text-center text-[11px] text-cream-100/60">
        © {new Date().getFullYear()} {site.name}
        <br />
        {site.address}
      </p>
    </footer>
  );
}
