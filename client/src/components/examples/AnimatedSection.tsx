import AnimatedSection from '../AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export default function AnimatedSectionExample() {
  return (
    <div className="p-8 space-y-8">
      <AnimatedSection>
        <Card>
          <CardContent className="pt-6">
            <p>This content fades in when scrolled into view</p>
          </CardContent>
        </Card>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <Card>
          <CardContent className="pt-6">
            <p>This content fades in with a delay</p>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
