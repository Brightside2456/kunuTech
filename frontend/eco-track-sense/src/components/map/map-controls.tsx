
import { Layers, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MapControls() {
  return (
    <div className="absolute top-20 right-4 flex flex-col gap-2">
      <Button variant="secondary" size="icon" className="h-10 w-10 shadow-sm bg-white hover:bg-wastesense-gray-100">
        <Layers className="h-5 w-5" />
      </Button>
      <Button variant="secondary" size="icon" className="h-10 w-10 shadow-sm bg-white hover:bg-wastesense-gray-100">
        <Navigation className="h-5 w-5" />
      </Button>
    </div>
  );
}
