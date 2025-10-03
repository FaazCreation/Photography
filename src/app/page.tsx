import { About } from '@/components/sections/about';
import { Activities } from '@/components/sections/activities';
import { AdvisorPanel } from '@/components/sections/advisor-panel';
import { BookUsCta } from '@/components/sections/book-us-cta';
import { Collaborators } from '@/components/sections/collaborators';
import { Faq } from '@/components/sections/faq';
import { Gallery } from '@/components/sections/gallery';
import { Hero } from '@/components/sections/hero';
import { JoinUs } from '@/components/sections/join-us';
import { MemberSpotlight } from '@/components/sections/member-spotlight';
import { Stats } from '@/components/sections/stats';
import { Testimonials } from '@/components/sections/testimonials';
import { WhatWeProvide } from '@/components/sections/what-we-provide';
import { FounderPresident } from '@/components/sections/founder-president';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <AdvisorPanel />
      <Gallery />
      <FounderPresident />
      <WhatWeProvide />
      <Activities />
      <MemberSpotlight />
      <BookUsCta />
      <Testimonials />
      <Collaborators />
      <JoinUs />
      <Faq />
    </>
  );
}

    