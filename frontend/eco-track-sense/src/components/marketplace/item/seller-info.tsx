
interface SellerInfoProps {
  seller: {
    name: string;
    rating: number;
    avatar: string;
  };
}

export function SellerInfo({ seller }: SellerInfoProps) {
  if (!seller) return null;
  
  return (
    <div className="mt-2 flex items-center gap-2">
      <img 
        src={seller.avatar} 
        alt={seller.name}
        className="h-6 w-6 rounded-full object-cover"
      />
      <div className="text-xs">
        <span className="font-medium">{seller.name}</span>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-0.5">{seller.rating}</span>
        </div>
      </div>
    </div>
  );
}
