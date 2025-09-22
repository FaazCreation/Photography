import { About } from '@/components/sections/about';
import { AiTool } from '@/components/sections/ai-tool';
import { Collaborators } from '@/components/sections/collaborators';
import { Gallery } from '@/components/sections/gallery';
import { Hero } from '@/components/sections/hero';
import { JoinUs } from '@/components/sections/join-us';
import { Stats } from '@/components/sections/stats';
import { WhatWeProvide } from '@/components/sections/what-we-provide';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <WhatWeProvide />
      <Collaborators />
      <AiTool />
      <JoinUs />
    </>
  );
}
