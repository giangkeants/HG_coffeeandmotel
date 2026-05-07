import Image from 'next/image';
import { rooms, formatVND } from '@/data/rooms';
import { telHref, zaloHref } from '@/data/site';
import { CheckIcon, PhoneIcon, ZaloIcon } from '../icons';

export function MobileRooms() {
  return (
    <section id="m-rooms" className="relative bg-coffee-50 pb-12 pt-10">
      <div className="px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coffee-500">
              Phòng nghỉ
            </p>
            <h2 className="mt-2 font-display text-3xl leading-[1.1] text-coffee-900">
              Chọn phòng phù hợp
            </h2>
          </div>
          <span className="rounded-full bg-coffee-700/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-coffee-700">
            {rooms.length} loại
          </span>
        </div>
        <p className="mt-2 text-[14px] leading-relaxed text-coffee-700/90">
          Vuốt ngang để xem hết — tất cả đều có máy lạnh, wifi tốc độ cao và dọn dẹp mỗi ngày.
        </p>
      </div>

      <div
        role="list"
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {rooms.map((room, idx) => (
          <article
            key={room.id}
            role="listitem"
            className="flex w-[82vw] max-w-[340px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-coffee-200/70 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-coffee-100">
              <Image
                src={room.image}
                alt={`${room.name} – ${room.type}`}
                fill
                sizes="82vw"
                className="object-cover"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute left-3 top-3 flex items-center gap-1.5">
                <span className="rounded-full bg-coffee-900/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream-50 backdrop-blur">
                  {room.type}
                </span>
              </div>
              <div className="absolute right-3 bottom-3 rounded-2xl bg-cream-50/95 px-3 py-1.5 text-right shadow-sm backdrop-blur">
                <p className="text-[16px] font-bold leading-none text-coffee-900 tabular-nums">
                  {formatVND(room.pricePerNight)}
                </p>
                <p className="mt-0.5 text-[10px] text-coffee-600">/ đêm</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-coffee-900">
                  {room.name}
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-coffee-500">
                  {idx + 1}/{rooms.length}
                </span>
              </div>
              <p className="mt-1 text-[12px] text-coffee-600">
                {room.size} • {room.capacity}
              </p>

              <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-[12px] text-coffee-800">
                {room.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-1.5">
                    <CheckIcon className="h-3.5 w-3.5 text-coffee-500" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href={telHref}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-coffee-700 px-3 py-2.5 text-xs font-semibold text-cream-50 active:scale-[0.98] transition-transform"
                  aria-label={`Gọi đặt ${room.name}`}
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  Gọi đặt phòng
                </a>
                <a
                  href={zaloHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-coffee-600 text-cream-50 active:scale-95 transition-transform"
                  aria-label="Chat Zalo để đặt phòng"
                >
                  <ZaloIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}

        <div
          className="flex w-[60vw] max-w-[260px] flex-shrink-0 snap-start flex-col items-start justify-between rounded-3xl border border-dashed border-coffee-300 bg-cream-100/60 p-5"
          aria-hidden="false"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coffee-600">
            Cần tư vấn?
          </p>
          <p className="mt-2 font-display text-lg leading-tight text-coffee-900">
            Chúng tôi luôn ở đây 24/7
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-coffee-700/90">
            Gọi điện trực tiếp hoặc nhắn Zalo, lễ tân sẽ phản hồi ngay.
          </p>
          <div className="mt-4 flex w-full gap-2">
            <a
              href={telHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-coffee-700 px-3 py-2 text-xs font-semibold text-cream-50"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              Gọi
            </a>
            <a
              href={zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-coffee-600 px-3 py-2 text-xs font-semibold text-cream-50"
            >
              <ZaloIcon className="h-3.5 w-3.5" />
              Zalo
            </a>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5 px-4">
        {rooms.map((r) => (
          <span
            key={r.id}
            className="h-1.5 w-6 rounded-full bg-coffee-300/70"
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="mt-4 px-6 text-center text-[11px] leading-relaxed text-coffee-700/80">
        * Giá có thể thay đổi vào dịp lễ và cuối tuần.
        <br />
        Vui lòng gọi để xác nhận tình trạng phòng.
      </p>
    </section>
  );
}
