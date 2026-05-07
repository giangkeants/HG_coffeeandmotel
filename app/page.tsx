import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Rooms } from '@/components/Rooms';
import { CoffeeShop } from '@/components/CoffeeShop';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { MobileHeader } from '@/components/mobile/MobileHeader';
import { MobileHero } from '@/components/mobile/MobileHero';
import { MobileAbout } from '@/components/mobile/MobileAbout';
import { MobileRooms } from '@/components/mobile/MobileRooms';
import { MobileCoffeeShop } from '@/components/mobile/MobileCoffeeShop';
import { MobileGallery } from '@/components/mobile/MobileGallery';
import { MobileContact } from '@/components/mobile/MobileContact';
import { MobileFooter } from '@/components/mobile/MobileFooter';
import { MobileStickyBar } from '@/components/mobile/MobileStickyBar';
import { gallery } from '@/data/gallery';
import { site, telHref, zaloHref, messengerHref, facebookHref } from '@/data/site';

const Lightbox = dynamic(() => import('@/components/Lightbox').then((m) => m.Lightbox));

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.zaloPhone}`,
  image: site.ogImage,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Đường tỉnh 943',
    addressLocality: 'TT. Núi Sập',
    addressRegion: 'H. Thoại Sơn, T. An Giang',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.mapsUrl,
  sameAs: [facebookHref, messengerHref, zaloHref, telHref].filter(Boolean),
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Wifi miễn phí', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Quán cà phê tại chỗ', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Lễ tân 24/7', value: true },
  ],
};

export default function HomePage() {
  return (
    <>
      <div className="md:hidden">
        <MobileHeader />
        <main id="main">
          <MobileHero />
          <MobileAbout />
          <MobileRooms />
          <MobileCoffeeShop />
          <MobileGallery />
          <MobileContact />
        </main>
        <MobileFooter />
        <MobileStickyBar />
      </div>

      <div className="hidden md:block">
        <Header />
        <main id="main-desktop">
          <Hero />
          <About />
          <Rooms />
          <CoffeeShop />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>

      <Lightbox items={gallery} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
