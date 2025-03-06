
import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RouteOptimization() {
  return (
    <div className="absolute bottom-24 right-4">
      <Button 
        className="shadow-md gap-2"
        onClick={() => {}}
      >
        <Truck className="h-5 w-5" />
        Optimize Route
      </Button>
    </div>
  );
}
