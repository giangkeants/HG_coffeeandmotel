export type Room = {
  id: string;
  name: string;
  type: string;
  pricePerNight: number;
  capacity: string;
  size: string;
  amenities: string[];
  image: string;
  blurDataURL?: string;
};

export const rooms: Room[] = [
  {
    id: 'standard-double',
    name: 'Phòng Standard',
    type: 'Giường đôi',
    pricePerNight: 200_000,
    capacity: '1 – 2 khách',
    size: '16 m²',
    amenities: ['Máy lạnh', 'Wifi tốc độ cao', 'TV cáp', 'Nước nóng'],
    image:
      '/images/rooms/2people.jpg',
  },
  {
    id: 'deluxe-twin',
    name: 'Phòng Deluxe',
    type: 'Hai giường đơn',
    pricePerNight: 300_000,
    capacity: '2 – 3 khách',
    size: '22 m²',
    amenities: ['Máy lạnh', 'Wifi tốc độ cao', 'TV cáp', 'Nước nóng'],
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=70',
  },
  {
    id: 'family-suite',
    name: 'Phòng Family',
    type: 'Giường tầng',
    pricePerNight: 500_000,
    capacity: '3 – 4 khách',
    size: '28 m²',
    amenities: ['Máy lạnh', 'Wifi tốc độ cao', 'TV cáp', 'Nước nóng'],
    image:
      '/images/rooms/8people.jpg',
  },
];

export function formatVND(value: number): string {
  return value.toLocaleString('vi-VN') + 'đ';
}
