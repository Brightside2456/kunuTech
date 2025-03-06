
import { List } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ListViewToggle() {
  return (
    <div className="absolute bottom-24 left-4 md:left-[280px]">
      <Button 
        variant="secondary"
        className="shadow-sm bg-white hover:bg-wastesense-gray-100 gap-2"
        onClick={() => {}}
      >
        <List className="h-5 w-5" />
        List View
      </Button>
    </div>
  );
}
