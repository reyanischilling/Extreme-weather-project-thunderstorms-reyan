import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface CitationCardProps {
  number: number;
  title: string;
  author: string;
  source: string;
  url?: string;
}

export default function CitationCard({ number, title, author, source, url }: CitationCardProps) {
  const CardWrapper = url ? 'a' : 'div';
  const cardProps = url
    ? {
        href: url,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'block no-underline',
      }
    : {};

  return (
    <CardWrapper {...cardProps}>
      <Card className="hover-elevate transition-all duration-300 hover:-translate-y-0.5" data-testid={`card-citation-${number}`}>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">{number}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium mb-1 flex items-center gap-2">
                {title}
                {url && <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
              </h4>
              <p className="text-sm text-muted-foreground">{author}</p>
              <p className="text-sm text-muted-foreground italic">{source}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
