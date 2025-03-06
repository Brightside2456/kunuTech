
import { cn } from "@/lib/utils";
import { MarketplaceItemImage } from "./item/marketplace-item-image";
import { MarketplaceItemDetails } from "./item/marketplace-item-details";
import { SellerInfo } from "./item/seller-info";
import { ActionButtons } from "./item/action-buttons";

export interface MarketplaceItemProps {
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  seller: {
    name: string;
    rating: number;
    avatar: string;
  };
  postedAt: string;
  className?: string;
}

export function MarketplaceItem({
  title,
  description,
  price,
  location,
  image,
  seller,
  postedAt,
  className,
}: MarketplaceItemProps) {
  return (
    <div className={cn(
      "group overflow-hidden rounded-xl bg-white border border-wastesense-gray-200/50 transition-all hover:shadow-glass",
      "animate-fade-in",
      className
    )}>
      <MarketplaceItemImage 
        image={image}
        title={title}
        location={location}
      />
      
      <div className="p-4">
        <MarketplaceItemDetails
          title={title}
          description={description}
          price={price}
          location={location}
          postedAt={postedAt}
        />
        
        <SellerInfo seller={seller} />
        
        <ActionButtons />
      </div>
    </div>
  );
}
