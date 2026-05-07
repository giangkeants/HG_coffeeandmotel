import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';
import {
  PhoneIcon,
  ZaloIcon,
  MessengerIcon,
  FacebookIcon,
  MapPinIcon,
  MailIcon,
  ClockIcon,
} from './icons';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-coffee-50 py-24 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 -top-6 select-none font-display text-[200px] italic font-light leading-none text-coffee-700/[0.06] sm:text-[260px]"
      >
        Hello
      </span>

      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-coffee-500">
              Reach out
            </span>
            <p className="section-eyebrow mt-3">Liên hệ</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.04] tracking-tight text-coffee-900 sm:text-5xl md:text-[56px]">
              Đặt phòng hoặc
              <br />
              ghé <span className="italic font-light text-coffee-700">quán nhé?</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-coffee-700/95 sm:text-lg">
              Lễ tân hỗ trợ 24/7. Gọi điện, nhắn Zalo hay Messenger — chúng tôi đều phản hồi nhanh
              nhất có thể.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href={telHref}
              className="group block overflow-hidden rounded-3xl bg-coffee-900 p-8 text-cream-50 shadow-soft transition-transform hover:-translate-y-1"
              aria-label={`Gọi ngay ${site.phoneDisplay}`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-200/85">
                Hotline · 24/7
              </p>
              <p className="mt-3 font-display text-4xl tabular-nums leading-tight sm:text-5xl">
                {site.phoneDisplay}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm text-cream-100/80">
                  <PhoneIcon className="h-4 w-4" />
                  Bấm để gọi ngay
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-3xl text-cream-50/70 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </a>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <ContactCard
                href={zaloHref}
                external
                label="Zalo"
                sub="Chat ngay"
                icon={<ZaloIcon className="h-5 w-5" />}
                tone="bg-coffee-700 text-cream-50"
              />
              <ContactCard
                href={messengerHref}
                external
                label="Messenger"
                sub="Phản hồi nhanh"
                icon={<MessengerIcon className="h-5 w-5" />}
                tone="bg-coffee-500 text-cream-50"
              />
              <ContactCard
                href={facebookHref}
                external
                label="Fanpage"
                sub="Theo dõi tin mới"
                icon={<FacebookIcon className="h-5 w-5" />}
                tone="bg-[#1877F2] text-white"
              />
              <ContactCard
                href={`mailto:${site.email}`}
                label="Email"
                sub={site.email}
                icon={<MailIcon className="h-5 w-5" />}
                tone="bg-cream-50 text-coffee-900 ring-1 ring-coffee-200/80"
              />
            </div>

            <ul className="mt-4 divide-y divide-coffee-200/70 overflow-hidden rounded-2xl border border-coffee-200/70 bg-white/80">
              <InfoRow
                icon={<MapPinIcon className="h-4 w-4" />}
                label="Địa chỉ"
                value={site.address}
                href={site.mapsUrl}
                external
                cta="Mở Maps"
              />
              <InfoRow
                icon={<ClockIcon className="h-4 w-4" />}
                label="Giờ phục vụ"
                value={`${site.hours.reception} · Quán: ${site.hours.cafe}`}
              />
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-[32px] border border-coffee-200/70 shadow-soft">
              <iframe
                title={`Bản đồ ${site.name}`}
                src={site.mapsEmbed}
                width="100%"
                height="560"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-cream-50/95 p-4 backdrop-blur shadow-sm transition-colors hover:bg-cream-50"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coffee-700 text-cream-50">
                    <MapPinIcon className="h-4 w-4" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-coffee-600">
                      Vị trí
                    </span>
                    <span className="block text-sm font-semibold text-coffee-900">
                      {site.address}
                    </span>
                  </span>
                </span>
                <span className="hidden rounded-full bg-coffee-700 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-50 sm:inline-block">
                  Mở Maps →
                </span>
              </a>
            </div>

            <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-2xl border border-coffee-200/70 bg-white/80 text-center text-[12px] text-coffee-700">
              <div className="border-r border-coffee-200/70 px-3 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coffee-500">
                  Toạ độ
                </p>
                <p className="mt-1 font-mono text-coffee-900 tabular-nums">
                  {site.geo.lat.toFixed(4)} / {site.geo.lng.toFixed(4)}
                </p>
              </div>
              <div className="border-r border-coffee-200/70 px-3 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coffee-500">
                  Khu vực
                </p>
                <p className="mt-1 font-medium text-coffee-900">TT. Núi Sập</p>
              </div>
              <div className="px-3 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-coffee-500">
                  Tỉnh
                </p>
                <p className="mt-1 font-medium text-coffee-900">An Giang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  href: string;
  external?: boolean;
  label: string;
  sub: string;
  icon: React.ReactNode;
  tone: string;
};

function ContactCard({ href, external, label, sub, icon, tone }: CardProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group flex flex-col gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-0.5 ${tone}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-sm font-bold tracking-tight">{label}</p>
        <p className="mt-0.5 text-[11px] opacity-75">{sub}</p>
      </div>
    </a>
  );
}

type RowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  cta?: string;
};

function InfoRow({ icon, label, value, href, external, cta }: RowProps) {
  const content = (
    <>
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-coffee-700/10 text-coffee-700">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-coffee-500">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-coffee-900">{value}</p>
      </div>
      {cta ? (
        <span className="hidden rounded-full bg-coffee-700 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream-50 sm:inline-block">
          {cta}
        </span>
      ) : null}
    </>
  );

  const className = 'flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-coffee-50';

  if (href) {
    return (
      <li>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={className}
        >
          {content}
        </a>
      </li>
    );
  }
  return <li className={className}>{content}</li>;
}
