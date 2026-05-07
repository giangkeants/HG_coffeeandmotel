export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: 'cafe' | 'room' | 'exterior';
  width: number;
  height: number;
};

const u = (id: string, w = 1400, q = 70) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const gallery: GalleryItem[] = [
  {
    id: 'cafe-bar',
    src: u('photo-1453614512568-c4024d13c247'),
    alt: 'Quầy bar cà phê với đèn vàng ấm',
    category: 'cafe',
    width: 1400,
    height: 933,
  },
  {
    id: 'cafe-latte',
    src: u('photo-1509042239860-f550ce710b93'),
    alt: 'Ly latte art bên cửa sổ',
    category: 'cafe',
    width: 1400,
    height: 1750,
  },
  {
    id: 'room-bed',
    src: u('photo-1505693416388-ac5ce068fe85'),
    alt: 'Phòng nghỉ giường đôi gọn gàng',
    category: 'room',
    width: 1400,
    height: 933,
  },
  {
    id: 'cafe-table',
    src: u('photo-1554118811-1e0d58224f24'),
    alt: 'Góc ngồi cà phê với cây xanh',
    category: 'cafe',
    width: 1400,
    height: 933,
  },
  {
    id: 'room-deluxe',
    src: u('photo-1631049307264-da0ec9d70304'),
    alt: 'Phòng Deluxe với cửa sổ view phố',
    category: 'room',
    width: 1400,
    height: 933,
  },
  {
    id: 'exterior-front',
    src: u('photo-1559599101-f09722fb4948'),
    alt: 'Mặt tiền motel kết hợp quán cà phê buổi tối',
    category: 'exterior',
    width: 1400,
    height: 933,
  },
  {
    id: 'cafe-pour',
    src: u('photo-1442512595331-e89e73853f31'),
    alt: 'Pha cà phê thủ công bằng tay',
    category: 'cafe',
    width: 1400,
    height: 933,
  },
  {
    id: 'room-family',
    src: u('photo-1566665797739-1674de7a421a'),
    alt: 'Phòng Family rộng rãi cho cả gia đình',
    category: 'room',
    width: 1400,
    height: 933,
  },
  {
    id: 'cafe-corner',
    src: u('photo-1559925393-8be0ec4767c8'),
    alt: 'Góc đọc sách trong quán',
    category: 'cafe',
    width: 1400,
    height: 933,
  },
];
