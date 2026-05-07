import Image from 'next/image';
import { site, telHref, zaloHref, messengerHref } from '@/data/site';
import { PhoneIcon, ZaloIcon, MessengerIcon, MapPinIcon, ClockIcon } from './icons';

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cafe/bg.jpg"
          alt="Mặt tiền Hương Giang Coffee and Motel buổi tối với ánh đèn vàng ấm"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 via-coffee-900/55 to-coffee-900/85" />
      </div>

      <div className="container-x flex min-h-[88vh] flex-col justify-center py-20 text-cream-50 sm:py-28">
        <p className="section-eyebrow !text-cream-100/80 animate-fade-in">
          {site.tagline}
        </p>
        <h1
          id="hero-title"
          className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl animate-fade-up"
        >
          Nghỉ ngơi thật êm,
          <br />
          thưởng thức ly cà phê thật <span className="text-cream-200">đậm đà</span>.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg animate-fade-up">
          {site.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
          <a
            href={telHref}
            className="btn bg-cream-50 text-coffee-900 hover:bg-cream-100"
            aria-label={`Gọi ngay ${site.phoneDisplay}`}
          >
            <PhoneIcon className="h-4 w-4" />
            Gọi ngay {site.phoneDisplay}
          </a>
          <a
            href={zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-coffee-600 text-cream-50 hover:bg-coffee-700"
            aria-label="Chat với chúng tôi qua Zalo"
          >
            <ZaloIcon className="h-4 w-4" />
            Chat Zalo
          </a>
          <a
            href={messengerHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-coffee-400 text-cream-50 hover:bg-coffee-500"
            aria-label="Nhắn tin Messenger với fanpage"
          >
            <MessengerIcon className="h-4 w-4" />
            Messenger
          </a>
          <a href="#rooms" className="btn-outline border-cream-50/40 !text-cream-50 hover:!bg-cream-50/10">
            Xem phòng
          </a>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-4 text-sm sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl bg-cream-50/10 p-4 backdrop-blur-sm">
            <MapPinIcon className="mt-0.5 h-5 w-5 text-cream-200" />
            <div>
              <dt className="text-cream-100/70">Vị trí</dt>
              <dd className="font-medium">TT. Núi Sập, Thoại Sơn</dd>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-cream-50/10 p-4 backdrop-blur-sm">
            <ClockIcon className="mt-0.5 h-5 w-5 text-cream-200" />
            <div>
              <dt className="text-cream-100/70">Lễ tân nhà nghỉ</dt>
              <dd className="font-medium">Phục vụ 24/7</dd>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-cream-50/10 p-4 backdrop-blur-sm">
            <ClockIcon className="mt-0.5 h-5 w-5 text-cream-200" />
            <div>
              <dt className="text-cream-100/70">Quán cà phê</dt>
              <dd className="font-medium">{site.hours.cafe}</dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  );
}
