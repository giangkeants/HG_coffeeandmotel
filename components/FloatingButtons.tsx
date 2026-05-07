import { site, telHref, zaloHref, messengerHref } from '@/data/site';
import { PhoneIcon, ZaloIcon, MessengerIcon } from './icons';

export function FloatingButtons() {
  return (
    <div
      aria-label="Liên hệ nhanh"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <a
        href={messengerHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin Messenger"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-coffee-400 text-cream-50 shadow-soft ring-1 ring-coffee-400/30 transition-all hover:scale-105 hover:bg-coffee-500"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-coffee-400/40" />
        <MessengerIcon className="h-6 w-6" />
        <span className="sr-only">Messenger</span>
      </a>
      <a
        href={zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat qua Zalo"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-coffee-600 text-cream-50 shadow-soft ring-1 ring-coffee-600/30 transition-all hover:scale-105 hover:bg-coffee-700"
      >
        <ZaloIcon className="h-6 w-6" />
        <span className="sr-only">Zalo</span>
      </a>
      <a
        href={telHref}
        aria-label={`Gọi ${site.phoneDisplay}`}
        className="group relative inline-flex items-center gap-2 rounded-full bg-coffee-700 pr-5 ps-2 text-cream-50 shadow-soft ring-1 ring-coffee-700/30 transition-all hover:scale-[1.03] hover:bg-coffee-800"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-coffee-700/30" />
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coffee-800/40">
          <PhoneIcon className="h-5 w-5" />
        </span>
        <span className="hidden text-sm font-semibold tabular-nums lg:inline">
          {site.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
