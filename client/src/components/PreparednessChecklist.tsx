import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface ChecklistItem {
  id: string;
  label: string;
}

interface PreparednessChecklistProps {
  title: string;
  items: ChecklistItem[];
}

export default function PreparednessChecklist({ title, items }: PreparednessChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleCheck = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <Checkbox
                id={item.id}
                checked={checked[item.id] || false}
                onCheckedChange={() => handleCheck(item.id)}
                data-testid={`checkbox-${item.id}`}
              />
              <label
                htmlFor={item.id}
                className={`text-sm cursor-pointer transition-colors ${
                  checked[item.id] ? "text-muted-foreground line-through" : ""
                }`}
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
