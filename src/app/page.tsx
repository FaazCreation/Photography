import { About } from '@/components/sections/about';
import { BookUsCta } from '@/components/sections/book-us-cta';
import { Collaborators } from '@/components/sections/collaborators';
import { Gallery } from '@/components/sections/gallery';
import { Hero } from '@/components/sections/hero';
import { JoinUs } from '@/components/sections/join-us';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { WhatWeProvide } from '@/components/sections/what-we-provide';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <WhatWeProvide />
      <BookUsCta />
      <Testimonials />
      <Collaborators />
      <JoinUs />
    </>
  );
}
