import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { CoffeeIcon, BedIcon, MapPinIcon } from './icons';

const FEATURES = [
  {
    icon: BedIcon,
    title: 'Phòng nghỉ ấm cúng',
    desc: 'Nội thất gỗ tự nhiên, ánh sáng dịu nhẹ, được dọn dẹp mỗi ngày.',
  },
  {
    icon: CoffeeIcon,
    title: 'Cà phê thủ công',
    desc: 'Coffee rang xay thơm ngon, cùng với nhiều loại đồ uống đa dạng khác.',
  },
  {
    icon: MapPinIcon,
    title: 'Vị trí thuận tiện',
    desc: 'Nằm bên cầu Thoại Giang, gần hồ Ông Thoại, thiền viện Trúc Lâm và các điểm du lịch nổi tiếng khác.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-cream-50 py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-coffee-100 shadow-soft">
          <Image
            src="/images/cafe/cafe.jpg"
            alt="Góc cà phê ấm cúng tại Hương Giang Coffee and Motel"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Về chúng tôi"
            title={
              <>
                Một chốn dừng chân,
                <br />
                hai trải nghiệm trọn vẹn.
              </>
            }
            description="Hương Giang Coffee and Motel là nơi du khách có thể vừa nghỉ ngơi sau một ngày dài, vừa tận hưởng không gian cà phê yên tĩnh ngay tại sảnh. Chúng tôi tin một chuyến đi tốt bắt đầu từ một giấc ngủ ngon và một ly cà phê thơm."
          />

          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="rounded-2xl border border-coffee-200/70 bg-white/60 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg text-coffee-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-coffee-700/90">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
