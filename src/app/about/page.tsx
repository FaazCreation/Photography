import { About } from '../../components/sections/about';
import { AdvisorPanel } from '../../components/sections/advisor-panel';
import { AdvisorSpeech } from '../../components/sections/advisor-speech';
import { MissionVision } from '../../components/sections/mission-vision';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About TCPC',
  description: 'Learn about the story, mission, and vision of the Tejgaon College Photography Club (TCPC). Meet our advisors and understand our passion for photography.',
};

export default function AboutPage() {
  return (
    <>
      <div className="container pt-12 md:pt-24 lg:pt-32">
        <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary leading-tight">
            Our Story
            </h1>
            <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
            Learn more about who we are, what we do and why we do it at Tejgaon College Photography Club (TCPC).
            </p>
        </div>
      </div>
      <About />
      <MissionVision />
      <AdvisorSpeech />
      <AdvisorPanel />
    </>
  );
}
