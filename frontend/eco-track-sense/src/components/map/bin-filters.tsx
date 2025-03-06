
import { Button } from "@/components/ui/button";

export function BinFilters() {
  return (
    <div className="absolute top-20 left-4 md:left-[280px] flex flex-col gap-2 md:flex-row">
      <Button variant="secondary" size="sm" className="shadow-sm bg-white hover:bg-wastesense-gray-100 gap-2">
        <div className="w-2 h-2 rounded-full bg-wastesense-green"></div>
        Empty (12)
      </Button>
      <Button variant="secondary" size="sm" className="shadow-sm bg-white hover:bg-wastesense-gray-100 gap-2">
        <div className="w-2 h-2 rounded-full bg-wastesense-blue"></div>
        Half-Full (24)
      </Button>
      <Button variant="secondary" size="sm" className="shadow-sm bg-white hover:bg-wastesense-gray-100 gap-2">
        <div className="w-2 h-2 rounded-full bg-wastesense-red"></div>
        Full (8)
      </Button>
    </div>
  );
}
