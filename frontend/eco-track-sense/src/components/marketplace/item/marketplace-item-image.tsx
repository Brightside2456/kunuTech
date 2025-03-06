
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";

interface MarketplaceItemImageProps {
  image: string;
  title: string;
  location: string;
}

export function MarketplaceItemImage({ image, title, location }: MarketplaceItemImageProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="relative aspect-square overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm text-wastesense-gray-600 hover:text-wastesense-red hover:bg-white"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
      >
        <Heart 
          className={cn(
            "h-4 w-4 transition-colors",
            isFavorite ? "fill-wastesense-red text-wastesense-red" : ""
          )} 
        />
      </Button>
      <div className="absolute bottom-2 left-2">
        <span className="rounded-full bg-wastesense-gray-900/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-xs">
          {location}
        </span>
      </div>
    </div>
  );
}
