# Thư mục ảnh — Hương Giang Coffee and Motel

Thả ảnh vào đúng thư mục con bên dưới. Tất cả file trong `public/` đều được Next.js phục vụ tự động ở đường dẫn `/images/...`.

## Cấu trúc thư mục

```
public/images/
├── hero/        # Ảnh banner đầu trang (1 ảnh, ngang, lớn)
├── rooms/       # Ảnh các phòng nghỉ (theo từng loại phòng)
├── cafe/        # Ảnh quán cà phê (đồ uống, không gian, barista)
├── exterior/    # Ảnh mặt tiền motel + quán
├── gallery/     # Ảnh tổng hợp dùng cho khu vực Gallery
└── og/          # Ảnh Open Graph cho khi share lên FB / Zalo (1200x630)
```

## Quy ước đặt tên (gợi ý)

| Thư mục      | File mẫu                              | Mô tả |
| ------------ | ------------------------------------- | ----- |
| `hero/`      | `banner.jpg`                          | Ảnh hero chính trên trang chủ |
| `rooms/`     | `standard.jpg`, `deluxe.jpg`, `family.jpg` | Một ảnh đại diện cho từng phòng |
| `cafe/`      | `bar.jpg`, `latte.jpg`, `pour-over.jpg`, `corner.jpg` | Không gian + đồ uống |
| `exterior/`  | `front-day.jpg`, `front-night.jpg`    | Mặt tiền ban ngày / ban đêm |
| `gallery/`   | `01.jpg`, `02.jpg`, …                 | Đánh số cho dễ sắp xếp |
| `og/`        | `og.jpg`                              | 1200×630 px, dưới 300KB |

## Tối ưu trước khi upload (rất quan trọng)

Next.js sẽ tự convert sang **AVIF/WebP** khi serve, nhưng bạn vẫn nên optimize file gốc:

- **Kích thước**: ảnh hero/gallery tối đa **2000px** chiều rộng. Ảnh phòng/cafe **1600px**.
- **Định dạng**: ưu tiên `.jpg` cho ảnh chụp, `.png` cho logo / có nền trong suốt.
- **Dung lượng**: mỗi ảnh **< 500 KB** (dùng [squoosh.app](https://squoosh.app), [tinypng.com](https://tinypng.com) hoặc `sharp`).
- **Tỉ lệ gợi ý**:
  - Hero: 16:9 hoặc 21:9
  - Rooms / Gallery: 4:3
  - Cafe (portrait): 3:4

## Cách dùng trong code

Sau khi thả ảnh vào, sửa các file dữ liệu để trỏ tới đường dẫn local:

### `data/site.ts` — ảnh OG

```ts
ogImage: '/images/og/og.jpg',
```

### `data/rooms.ts` — ảnh phòng

```ts
{
  id: 'standard-double',
  // ...
  image: '/images/rooms/standard.jpg',
},
```

### `data/gallery.ts` — ảnh thư viện

```ts
{
  id: 'cafe-bar',
  src: '/images/gallery/01.jpg',
  alt: 'Quầy bar cà phê...',
  // ...
}
```

### `components/Hero.tsx` — ảnh banner

```tsx
<Image src="/images/hero/banner.jpg" ... />
```

### `components/About.tsx` & `components/CoffeeShop.tsx`

Đổi các URL Unsplash thành `/images/cafe/...` tương ứng.

## Lưu ý quan trọng

- **Không cần khai báo domain** trong `next.config.mjs` cho ảnh local — `remotePatterns` chỉ cần thiết cho ảnh từ host bên ngoài (như Unsplash).
- Sau khi tất cả ảnh đã chuyển sang local, **có thể xoá block `remotePatterns`** trong `next.config.mjs` để bảo mật chặt hơn.
- Đường dẫn trong code **không bao gồm `public/`** — Next.js tự ánh xạ. Tức `public/images/hero/banner.jpg` ↔ `/images/hero/banner.jpg`.
- Đặt tên file **chữ thường, dấu gạch ngang**, không khoảng trắng & không dấu tiếng Việt: `phong-deluxe.jpg` ✅, `Phòng Deluxe.jpg` ❌.
