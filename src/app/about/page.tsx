import { About } from '@/components/sections/about';
import { AdvisorPanel } from '@/components/sections/advisor-panel';
import { AdvisorSpeech } from '@/components/sections/advisor-speech';

export default function AboutPage() {
  return (
    <>
      <About />
      <AdvisorSpeech />
      <AdvisorPanel />
    </>
  );
}