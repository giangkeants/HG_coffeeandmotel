export const site = {
  name: 'Hương Giang Coffee and Motel',
  shortName: 'Hương Giang',
  tagline: 'Nhà nghỉ ấm cúng • Cà phê thơm mỗi sáng',
  description:
    'Hương Giang Coffee and Motel — nhà nghỉ ấm cúng kết hợp quán cà phê ngay mặt tiền tại thị trấn Núi Sập, mang đến chỗ nghỉ thoải mái và những ly cà phê đậm đà cho hành trình của bạn.',
  url: 'https://huong-giang-cafe-motel.vercel.app',
  ogImage:
    'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80',

  // Liên hệ
  phone: '02963711688',
  phoneDisplay: '0296 371 1688',
  // Số dùng cho zalo.me — bỏ số 0 đầu, thêm 84
  zaloPhone: '842963711688',

  email: 'hello@huonggiangcafemotel.vn',
  address: 'Đường tỉnh 943, TT. Núi Sập, H. Thoại Sơn, T. An Giang',

  // Toạ độ thực tế của quán (dùng cho Google Maps embed)
  geo: {
    lat: 10.2606131,
    lng: 105.2579117,
  },

  hours: {
    cafe: '06:00 – 18:30 hằng ngày',
    reception: 'Lễ tân 24/7',
  },

  social: {
    facebook: 'https://www.facebook.com/coffeeandmotelhuonggiang/',
    facebookHandle: 'coffeeandmotelhuonggiang',
    messenger: 'https://m.me/coffeeandmotelhuonggiang',
    instagram: '',
  },

  // URL Google Maps gốc (mở app/website)
  mapsUrl: 'https://maps.app.goo.gl/wBJbmpv8JdnfDnYVA',

  // URL nhúng iframe Google Maps (không cần API key)
  mapsEmbed:
    'https://www.google.com/maps?q=10.2606131,105.2579117&hl=vi&z=17&output=embed',
} as const;

export type Site = typeof site;

export const telHref = `tel:${site.phone.replace(/\s+/g, '')}`;
export const zaloHref = `https://zalo.me/${site.zaloPhone}`;
export const messengerHref = site.social.messenger;
export const facebookHref = site.social.facebook;
