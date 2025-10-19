import {
  Accordion,
  AccordionContent,
  AccordionItem as AccordionItemUI,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItemUI value="item-1">
        <AccordionTrigger className="text-left text-lg font-medium" data-testid="button-accordion-toggle">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          {answer}
        </AccordionContent>
      </AccordionItemUI>
    </Accordion>
  );
}
