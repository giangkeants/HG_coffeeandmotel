import { site, telHref, zaloHref, messengerHref } from '@/data/site';
import { PhoneIcon, ZaloIcon, MessengerIcon } from './icons';

export function FloatingButtons() {
  return (
    <div
      aria-label="Liên hệ nhanh"
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6"
    >
      <a
        href={messengerHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin Messenger"
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-coffee-400 text-cream-50 shadow-soft transition-transform hover:scale-105 hover:bg-coffee-500"
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
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-coffee-600 text-cream-50 shadow-soft transition-transform hover:scale-105 hover:bg-coffee-700"
      >
        <ZaloIcon className="h-6 w-6" />
        <span className="sr-only">Zalo</span>
      </a>
      <a
        href={telHref}
        aria-label={`Gọi ${site.phoneDisplay}`}
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-coffee-700 text-cream-50 shadow-soft transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-coffee-700/40" />
        <PhoneIcon className="h-6 w-6" />
        <span className="sr-only">Điện thoại</span>
      </a>
    </div>
  );
}
