
import { Search } from "lucide-react";

export function MarketplaceSearch({ 
  onSearchChange 
}: { 
  onSearchChange: (value: string) => void 
}) {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-wastesense-gray-400" />
      <input 
        type="text" 
        placeholder="Search for items..." 
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-wastesense-gray-200 focus:outline-none focus:ring-2 focus:ring-wastesense-green-light focus:border-transparent"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
