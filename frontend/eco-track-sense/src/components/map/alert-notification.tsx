
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function AlertNotification() {
  return (
    <div className={cn(
      "absolute top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-md",
      "rounded-xl bg-white shadow-glass p-3 border border-wastesense-red/20",
      "flex items-center gap-3"
    )}>
      <div className="shrink-0 rounded-full bg-wastesense-red/10 p-2">
        <AlertTriangle className="h-5 w-5 text-wastesense-red" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">8 bins require immediate attention</p>
        <p className="text-xs text-wastesense-gray-500">3 bins are at critical capacity (&gt;90%)</p>
      </div>
      <Button variant="ghost" size="sm" className="shrink-0">
        View
      </Button>
    </div>
  );
}
