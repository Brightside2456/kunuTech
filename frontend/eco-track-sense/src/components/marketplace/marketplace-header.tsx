
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function MarketplaceHeader() {
  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Circular Economy</h1>
        <p className="mt-1 text-wastesense-gray-600">
          Buy, sell, or trade items to reduce waste and promote sustainability
        </p>
      </div>
      
      <Button className="flex items-center gap-2">
        <PlusCircle className="h-4 w-4" />
        <span>List New Item</span>
      </Button>
    </div>
  );
}
