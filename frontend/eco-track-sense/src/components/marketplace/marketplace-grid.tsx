
import { MarketplaceItem } from "./marketplace-item";

interface MarketplaceItemType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  location: string;
  image: string;
  seller: {
    name: string;
    rating: number;
    avatar: string;
  };
  postedAt: string;
}

interface MarketplaceGridProps {
  items: MarketplaceItemType[];
}

export function MarketplaceGrid({ items }: MarketplaceGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-wastesense-gray-700">No items found</h3>
        <p className="text-wastesense-gray-500 mt-2">Try changing your filter or search query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <MarketplaceItem
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          location={item.location}
          image={item.image}
          seller={item.seller}
          postedAt={item.postedAt}
        />
      ))}
    </div>
  );
}
