
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MarketplaceItemDetailsProps {
  title: string;
  description: string;
  price: number;
  location: string;
  postedAt: string;
}

export function MarketplaceItemDetails({ 
  title, 
  description, 
  price, 
  location, 
  postedAt 
}: MarketplaceItemDetailsProps) {
  return (
    <>
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="font-medium line-clamp-1">{title}</h3>
        <span className="shrink-0 text-sm font-semibold text-wastesense-green">
          {typeof price === "number" ? `$${price}` : price}
        </span>
      </div>
      
      <p className="mb-3 text-sm text-wastesense-gray-600 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-wastesense-gray-500">
        <span>{location}</span>
        <span>{postedAt}</span>
      </div>
    </>
  );
}
