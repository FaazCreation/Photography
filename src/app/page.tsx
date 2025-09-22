import { About } from '@/components/sections/about';
import { AiTool } from '@/components/sections/ai-tool';
import { Collaborators } from '@/components/sections/collaborators';
import { Gallery } from '@/components/sections/gallery';
import { Hero } from '@/components/sections/hero';
import { JoinUs } from '@/components/sections/join-us';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Collaborators />
      <AiTool />
      <JoinUs />
    </>
  );
}
