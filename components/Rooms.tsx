import Image from 'next/image';
import { rooms, formatVND } from '@/data/rooms';
import { SectionHeading } from './SectionHeading';
import { CheckIcon, PhoneIcon, ZaloIcon } from './icons';
import { telHref, zaloHref } from '@/data/site';

export function Rooms() {
  return (
    <section id="rooms" className="bg-coffee-50 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Phòng nghỉ"
          title="Chọn phòng phù hợp với bạn"
          description="Tất cả các phòng đều có máy lạnh, wifi tốc độ cao, dọn dẹp mỗi ngày và sử dụng vật dụng vệ sinh thân thiện với da."
        />

        <ul
          role="list"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rooms.map((room) => (
            <li
              key={room.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-coffee-200/70 bg-white shadow-sm transition-shadow hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-coffee-100">
                <Image
                  src={room.image}
                  alt={`${room.name} – ${room.type}`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-coffee-900">{room.name}</h3>
                  <p className="whitespace-nowrap text-right text-sm text-coffee-600">
                    <span className="block text-lg font-semibold text-coffee-900">
                      {formatVND(room.pricePerNight)}
                    </span>
                    <span className="text-xs">/ đêm</span>
                  </p>
                </div>
                <p className="mt-1 text-sm text-coffee-700/90">
                  {room.type} • {room.size} • {room.capacity}
                </p>

                <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-coffee-800">
                  {room.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-coffee-500" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-2">
                  <a href={telHref} className="btn-primary flex-1 !py-2.5 text-sm">
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
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-coffee-700/80">
          * Giá có thể thay đổi vào dịp lễ và cuối tuần. Vui lòng gọi để xác nhận tình trạng phòng.
        </p>
      </div>
    </section>
  );
}
