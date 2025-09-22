import { About } from '@/components/sections/about';
import { AdvisorPanel } from '@/components/sections/advisor-panel';
import { AdvisorSpeech } from '@/components/sections/advisor-speech';
import { MissionVision } from '@/components/sections/mission-vision';

export default function AboutPage() {
  return (
    <>
      <About />
      <MissionVision />
      <AdvisorSpeech />
      <AdvisorPanel />
    </>
  );
}
