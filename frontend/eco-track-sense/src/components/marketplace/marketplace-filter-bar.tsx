
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { MarketplaceSearch } from "./marketplace-search";

interface MarketplaceFilterBarProps {
  onSearchChange: (value: string) => void;
}

export function MarketplaceFilterBar({ onSearchChange }: MarketplaceFilterBarProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <MarketplaceSearch onSearchChange={onSearchChange} />
      <Button variant="outline" className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        <span>Filters</span>
      </Button>
    </div>
  );
}
