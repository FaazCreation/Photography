import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";


const faqItems = [
    {
        question: "Who can join the Tejgaon College Photography Club (TCPC)?",
        answer: "Membership is open to all currently enrolled students at Tejgaon College, regardless of their department or skill level. Whether you're a seasoned photographer or just starting with a smartphone, you're welcome to join."
    },
    {
        question: "Is there a membership fee?",
        answer: "There is a small annual fee for standard membership, which helps cover the costs of workshops, equipment maintenance and events. We also offer a premium membership with additional benefits."
    },
    {
        question: "Do I need to own a professional camera?",
        answer: "Not at all! While many of our members use DSLRs or mirrorless cameras, many others use point-and-shoot cameras or even just their smartphones. We believe that creativity isn't tied to equipment. Plus, the club has equipment that members can borrow."
    },
    {
        question: "How often does the club meet?",
        answer: "We typically hold meetings or workshops every Friday afternoon. Photo walks and special events are usually scheduled on weekends. All event details are posted on our Events page and social media channels."
    },
    {
        question: "What kind of activities does the TCPC organize?",
        answer: "We organize a wide range of activities including technical workshops (e.g., lighting, post-processing), creative photo walks, guest speaker sessions with professional photographers, internal competitions and an annual public exhibition."
    }
]

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in-up [animation-delay:1.3s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-primary/10 p-4 rounded-full">
                <HelpCircle className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-primary leading-tight">
                <span className="sm:hidden">FAQ</span>
                <span className="hidden sm:inline">Frequently Asked Questions</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-lg">
                Have questions? We've got answers. Here are some of the most common inquiries we receive.
            </p>
        </div>
        <div className="mx-auto max-w-3xl pt-12">
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-base sm:text-lg text-left hover:no-underline">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-sm sm:text-base text-muted-foreground pr-6">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
