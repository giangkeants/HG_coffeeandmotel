import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { CoffeeIcon, CheckIcon } from './icons';

const HIGHLIGHTS = [
  'Hạt cà phê Arabica & Robusta tuyển chọn từ Đà Lạt, Buôn Ma Thuột',
  'Pha tay V60, AeroPress, espresso cùng máy bán tự động chuẩn quốc tế',
  'Bánh ngọt nướng mỗi sáng, không gian yên tĩnh để làm việc',
  'Wifi mạnh, ổ cắm nhiều — phù hợp freelancer & du khách',
];

export function CoffeeShop() {
  return (
    <section id="cafe" className="relative bg-coffee-900 py-20 text-cream-50 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="section-eyebrow !text-cream-200/80">Quán cà phê</p>
          <h2 className="heading-display mt-3 !text-cream-50">
            Ly cà phê thủ công, <br /> đậm đà và mộc mạc.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-cream-100/85 sm:text-lg">
            Quán nằm ngay tầng trệt của motel — không gian gỗ ấm áp, mở cửa từ sớm để bạn bắt đầu
            ngày mới với một ly espresso, hoặc kết thúc tối muộn cùng tách cappuccino.
          </p>

          <ul className="mt-6 space-y-3 text-sm sm:text-base">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-cream-200" />
                <span className="text-cream-100/90">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-2 text-sm text-cream-100">
            <CoffeeIcon className="h-4 w-4" />
            Mở cửa 06:30 – 22:30 mỗi ngày
          </div>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=70"
              alt="Ly latte với latte art bên cửa sổ"
              fill
              sizes="(min-width: 1024px) 280px, 45vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=70"
              alt="Barista pha cà phê thủ công"
              fill
              sizes="(min-width: 1024px) 280px, 45vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
