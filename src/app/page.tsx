import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Gallery } from '@/components/sections/gallery';
import { AiTool } from '@/components/sections/ai-tool';
import { JoinUs } from '@/components/sections/join-us';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <AiTool />
      <JoinUs />
    </>
  );
}
