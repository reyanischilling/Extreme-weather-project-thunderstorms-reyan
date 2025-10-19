import AccordionItem from '../AccordionItem';

export default function AccordionItemExample() {
  return (
    <div className="p-8 max-w-2xl">
      <AccordionItem
        question="How does a thunderstorm form?"
        answer="Thunderstorms form when warm, moist air rises rapidly through cooler air in an unstable atmosphere. As the warm air rises, it cools and condenses, forming towering cumulonimbus clouds. The rapid vertical development creates strong updrafts and downdrafts, leading to the electrical activity we see as lightning and hear as thunder."
      />
    </div>
  );
}
