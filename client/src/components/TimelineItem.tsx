import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ year, title, description, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-border" />
      )}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-chart-3 border-4 border-background" />
      
      <Card className="hover-elevate transition-all duration-300">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-chart-3">{year}</span>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
