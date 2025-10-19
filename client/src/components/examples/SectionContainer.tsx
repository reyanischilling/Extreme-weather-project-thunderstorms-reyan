import SectionContainer from '../SectionContainer';

export default function SectionContainerExample() {
  return (
    <SectionContainer
      id="example"
      title="Section Title"
      subtitle="This is a subtitle that provides additional context"
    >
      <p className="text-center">Section content goes here</p>
    </SectionContainer>
  );
}
