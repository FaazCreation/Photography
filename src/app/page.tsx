import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Gallery } from '@/components/sections/gallery';
import { AiTool } from '@/components/sections/ai-tool';
import { JoinUs } from '@/components/sections/join-us';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <AiTool />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}
