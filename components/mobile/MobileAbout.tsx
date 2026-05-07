import Image from 'next/image';
import { CoffeeIcon, BedIcon, MapPinIcon, CheckIcon } from '../icons';

const FEATURES = [
  {
    icon: BedIcon,
    title: 'Phòng nghỉ ấm cúng',
    desc: 'Nội thất gỗ tự nhiên, dọn dẹp mỗi ngày, vệ sinh kỹ.',
    accent: 'bg-coffee-100 text-coffee-800',
  },
  {
    icon: CoffeeIcon,
    title: 'Cà phê thủ công',
    desc: 'Rang xay đậm đà, đa dạng đồ uống cho mọi gu.',
    accent: 'bg-coffee-700 text-cream-50',
  },
  {
    icon: MapPinIcon,
    title: 'Vị trí thuận tiện',
    desc: 'Cạnh cầu Thoại Giang, gần hồ Ông Thoại & Trúc Lâm.',
    accent: 'bg-cream-100 text-coffee-800',
  },
];

const QUICK_FACTS = ['Wifi tốc độ cao', 'Máy lạnh', 'Nước nóng', 'Chỗ để xe rộng'];

export function MobileAbout() {
  return (
    <section id="m-about" className="bg-cream-50 px-4 pb-12 pt-10">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coffee-500">
        Về chúng tôi
      </p>
      <h2 className="mt-2 font-display text-3xl leading-[1.1] text-coffee-900">
        Một chốn dừng chân,
        <br />
        <span className="italic text-coffee-700">hai trải nghiệm</span> trọn vẹn.
      </h2>

      <div className="relative mt-5 overflow-hidden rounded-3xl bg-coffee-100 shadow-soft">
        <div className="relative aspect-[5/4] w-full">
          <Image
            src="/images/cafe/cafe.jpg"
            alt="Góc cà phê ấm cúng tại Hương Giang"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/70 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-cream-50">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream-100/80">
              Không gian
            </p>
            <p className="mt-1 font-display text-lg leading-tight">
              Mộc mạc, ấm áp & yên tĩnh
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-coffee-700/95">
        Hương Giang là nơi du khách có thể vừa nghỉ ngơi sau một ngày dài, vừa tận hưởng không gian
        cà phê yên tĩnh ngay tại sảnh. Một chuyến đi tốt bắt đầu từ một giấc ngủ ngon và một ly cà
        phê thơm.
      </p>

      <ul className="mt-6 space-y-3">
        {FEATURES.map(({ icon: Icon, title, desc, accent }) => (
          <li
            key={title}
            className="flex items-start gap-3 rounded-2xl border border-coffee-200/70 bg-white p-4"
          >
            <span
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${accent}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold text-coffee-900">{title}</h3>
              <p className="mt-0.5 text-[13px] leading-relaxed text-coffee-700/90">{desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-2xl border border-dashed border-coffee-300/70 bg-cream-100/40 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coffee-600">
          Tiện ích đi kèm
        </p>
        <ul className="mt-2.5 grid grid-cols-2 gap-y-2 text-[13px] text-coffee-800">
          {QUICK_FACTS.map((f) => (
            <li key={f} className="flex items-center gap-1.5">
              <CheckIcon className="h-3.5 w-3.5 text-coffee-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
