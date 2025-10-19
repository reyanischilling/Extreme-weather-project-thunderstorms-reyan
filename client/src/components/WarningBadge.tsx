import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Zap, CloudRain } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WarningBadgeProps {
  type: "watch" | "warning" | "severe";
  label: string;
  description: string;
}

export default function WarningBadge({ type, label, description }: WarningBadgeProps) {
  const config = {
    watch: {
      icon: CloudRain,
      className: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    },
    warning: {
      icon: AlertTriangle,
      className: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    severe: {
      icon: Zap,
      className: "bg-red-500/20 text-red-300 border-red-500/30",
    },
  };

  const { icon: Icon, className } = config[type];

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="outline" className={`gap-1.5 ${className}`} data-testid={`badge-warning-${type}`}>
          <Icon className="w-3.5 h-3.5" />
          {label}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
