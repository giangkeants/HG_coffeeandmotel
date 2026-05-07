import Image from 'next/image';
import { rooms, formatVND } from '@/data/rooms';
import { CheckIcon, PhoneIcon, ZaloIcon } from './icons';
import { telHref, zaloHref } from '@/data/site';

const POPULAR_ID = 'deluxe-twin';

export function Rooms() {
  return (
    <section id="rooms" className="relative overflow-hidden bg-coffee-50 py-24 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-6 select-none font-display text-[220px] font-bold leading-none text-coffee-900/[0.045] sm:text-[280px]"
      >
        02
      </span>

      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-coffee-500">
              02 / 04 — Stay
            </span>
            <p className="section-eyebrow mt-3">Phòng nghỉ</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.04] tracking-tight text-coffee-900 sm:text-5xl md:text-[56px]">
              Chọn phòng <span className="italic font-light text-coffee-700">phù hợp</span>
              <br />
              với hành trình của bạn.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-coffee-700/95 sm:text-lg">
              Tất cả phòng đều có máy lạnh, wifi tốc độ cao, dọn dẹp mỗi ngày và sử dụng vật dụng
              vệ sinh thân thiện với da.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-coffee-700">
              <span className="rounded-full border border-coffee-300 px-3 py-1.5">Máy lạnh</span>
              <span className="rounded-full border border-coffee-300 px-3 py-1.5">Wifi 100M</span>
              <span className="rounded-full border border-coffee-300 px-3 py-1.5">Nước nóng</span>
              <span className="rounded-full border border-coffee-300 px-3 py-1.5">TV cáp</span>
              <span className="rounded-full border border-coffee-300 px-3 py-1.5">Dọn mỗi ngày</span>
            </div>
          </div>
        </div>

        <ul role="list" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {rooms.map((room, i) => {
            const isPopular = room.id === POPULAR_ID;
            return (
              <li
                key={room.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft ${
                  isPopular
                    ? 'border-coffee-700/40 lg:-translate-y-3'
                    : 'border-coffee-200/70 hover:border-coffee-300'
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-coffee-100">
                  <Image
                    src={room.image}
                    alt={`${room.name} – ${room.type}`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/55 via-transparent to-transparent" />

                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.22em] text-cream-50/85"
                  >
                    0{i + 1} / {rooms.length}
                  </span>

                  {isPopular ? (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-coffee-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-coffee-800 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-coffee-700" />
                      Phổ biến
                    </span>
                  ) : null}

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div className="leading-tight">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-100/80">
                        {room.type}
                      </p>
                      <p className="mt-1 font-display text-2xl text-cream-50 drop-shadow-sm">
                        {room.name}
                      </p>
                    </div>
                    <span className="rounded-2xl bg-cream-50/95 px-3 py-1.5 text-right shadow-sm backdrop-blur">
                      <span className="block font-display text-lg font-bold leading-none text-coffee-900 tabular-nums">
                        {formatVND(room.pricePerNight)}
                      </span>
                      <span className="text-[10px] text-coffee-600">/ đêm</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-coffee-700/90">
                    <span className="font-semibold text-coffee-900">{room.size}</span>
                    <span className="mx-2 text-coffee-300">·</span>
                    {room.capacity}
                  </p>

                  <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm text-coffee-800">
                    {room.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-coffee-500" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex gap-2">
                    <a
                      href={telHref}
                      className={`flex-1 btn !py-2.5 text-sm shadow-sm ${
                        isPopular
                          ? 'bg-coffee-700 text-cream-50 hover:bg-coffee-800'
                          : 'bg-coffee-700 text-cream-50 hover:bg-coffee-800'
                      }`}
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Đặt qua điện thoại
                    </a>
                    <a
                      href={zaloHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat Zalo để đặt phòng"
                      className="btn !px-3 !py-2.5 bg-coffee-600 text-cream-50 hover:bg-coffee-700"
                    >
                      <ZaloIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 grid items-center gap-4 rounded-3xl border border-dashed border-coffee-300/80 bg-white/60 p-6 sm:grid-cols-[1fr_auto] lg:p-8">
          <div>
            <p className="font-display text-2xl text-coffee-900">
              Cần tư vấn riêng cho đoàn lớn?
            </p>
            <p className="mt-1.5 text-sm text-coffee-700/90">
              Lễ tân hỗ trợ ghép phòng, đặt sớm và combo cà phê — gọi trực tiếp để được phản hồi
              nhanh nhất.
            </p>
          </div>
          <div className="flex gap-2">
            <a href={telHref} className="btn-primary">
              <PhoneIcon className="h-4 w-4" />
              Liên hệ ngay
            </a>
            <a
              href={zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-coffee-600 text-cream-50 hover:bg-coffee-700"
            >
              <ZaloIcon className="h-4 w-4" />
              Zalo
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-coffee-700/80">
          * Giá có thể thay đổi vào dịp lễ và cuối tuần. Vui lòng gọi để xác nhận tình trạng phòng.
        </p>
      </div>
    </section>
  );
}
