
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function ActionButtons() {
  return (
    <div className="mt-3 flex gap-2">
      <Button className="w-full gap-1 text-sm" size="sm">
        View Details
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8">
        <MessageSquare className="h-4 w-4" />
      </Button>
    </div>
  );
}
