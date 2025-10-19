import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function InfoCard({ icon: Icon, title, description, children }: InfoCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300 hover:-translate-y-1" data-testid={`card-info-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-md bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}
