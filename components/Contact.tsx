import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';
import { SectionHeading } from './SectionHeading';
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
    <section id="contact" className="bg-coffee-50 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Liên hệ"
          title="Đặt phòng hoặc ghé quán?"
          description="Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy gọi điện hoặc nhắn Zalo để được tư vấn nhanh nhất."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-3">
            <ContactRow
              icon={<PhoneIcon className="h-5 w-5" />}
              label="Điện thoại"
              value={site.phoneDisplay}
              href={telHref}
              cta="Gọi ngay"
            />
            <ContactRow
              icon={<ZaloIcon className="h-5 w-5" />}
              label="Zalo"
              value={site.phoneDisplay}
              href={zaloHref}
              cta="Mở Zalo"
              external
              tone="zalo"
            />
            <ContactRow
              icon={<MessengerIcon className="h-5 w-5" />}
              label="Messenger"
              value={`@${site.social.facebookHandle}`}
              href={messengerHref}
              cta="Nhắn tin"
              external
              tone="messenger"
            />
            <ContactRow
              icon={<FacebookIcon className="h-5 w-5" />}
              label="Fanpage Facebook"
              value="facebook.com/coffeeandmotelhuonggiang"
              href={facebookHref}
              cta="Xem trang"
              external
              tone="facebook"
            />
            <ContactRow
              icon={<MailIcon className="h-5 w-5" />}
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
              cta="Gửi email"
            />
            <ContactRow
              icon={<MapPinIcon className="h-5 w-5" />}
              label="Địa chỉ"
              value={site.address}
              href={site.mapsUrl}
              cta="Mở Maps"
              external
            />
            <ContactRow
              icon={<ClockIcon className="h-5 w-5" />}
              label="Giờ phục vụ"
              value={`${site.hours.reception} • Quán: ${site.hours.cafe}`}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-coffee-200/70 shadow-soft">
              <iframe
                title={`Bản đồ ${site.name}`}
                src={site.mapsEmbed}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Tone = 'default' | 'zalo' | 'messenger' | 'facebook';

type RowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  cta?: string;
  external?: boolean;
  tone?: Tone;
};

const TONES: Record<Tone, { iconBg: string; iconColor: string; ctaBg: string }> = {
  default: {
    iconBg: 'bg-coffee-700/10',
    iconColor: 'text-coffee-700',
    ctaBg: 'bg-coffee-700 text-cream-50',
  },
  zalo: {
    iconBg: 'bg-coffee-600/15',
    iconColor: 'text-coffee-700',
    ctaBg: 'bg-coffee-600 text-cream-50',
  },
  messenger: {
    iconBg: 'bg-coffee-400/20',
    iconColor: 'text-coffee-600',
    ctaBg: 'bg-coffee-400 text-cream-50',
  },
  facebook: {
    iconBg: 'bg-[#1877F2]/10',
    iconColor: 'text-[#1877F2]',
    ctaBg: 'bg-[#1877F2] text-white',
  },
};

function ContactRow({ icon, label, value, href, cta, external, tone = 'default' }: RowProps) {
  const t = TONES[tone];
  const content = (
    <>
      <span
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${t.iconBg} ${t.iconColor}`}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-coffee-500">{label}</p>
        <p className="truncate font-medium text-coffee-900">{value}</p>
      </div>
      {cta && href ? (
        <span
          className={`hidden rounded-full px-3 py-1.5 text-xs font-medium sm:inline-flex ${t.ctaBg}`}
        >
          {cta}
        </span>
      ) : null}
    </>
  );

  const className =
    'flex items-center gap-4 rounded-2xl border border-coffee-200/70 bg-white p-4 transition-colors hover:border-coffee-300';

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}
