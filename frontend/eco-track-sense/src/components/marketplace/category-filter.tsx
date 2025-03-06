
import { Button } from "@/components/ui/button";
import { Laptop, Sofa, Shirt, Recycle, Package, AlertTriangle, FileText } from "lucide-react";
import { ReactNode } from "react";

interface Category {
  id: string;
  label: string;
  icon: ReactNode;
}

export const categories: Category[] = [
  { id: "electronics", label: "Electronics", icon: <Laptop className="h-4 w-4" /> },
  { id: "furniture", label: "Furniture", icon: <Sofa className="h-4 w-4" /> },
  { id: "clothing", label: "Clothing", icon: <Shirt className="h-4 w-4" /> },
  { id: "materials", label: "Materials", icon: <Recycle className="h-4 w-4" /> },
  { id: "general", label: "General", icon: <Package className="h-4 w-4" /> },
  { id: "hazardous", label: "Hazardous", icon: <AlertTriangle className="h-4 w-4" /> },
  { id: "documents", label: "Documents", icon: <FileText className="h-4 w-4" /> }
];

interface CategoryFilterProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <div className="flex gap-2">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          className="whitespace-nowrap"
          onClick={() => onCategoryChange(null)}
        >
          All Items
        </Button>
        
        {categories.map(category => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className="whitespace-nowrap flex items-center gap-1.5"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.icon}
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
