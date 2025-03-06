
import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { useState } from "react";
import { MarketplaceHeader } from "@/components/marketplace/marketplace-header";
import { MarketplaceFilterBar } from "@/components/marketplace/marketplace-filter-bar";
import { CategoryFilter } from "@/components/marketplace/category-filter";
import { MarketplaceGrid } from "@/components/marketplace/marketplace-grid";
import { marketplaceItems } from "@/components/marketplace/marketplace-data";

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Filter items based on active category and search query
  const filteredItems = marketplaceItems.filter(item => {
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    const matchesSearch = searchQuery 
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="flex min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <AppHeader />
        <main className="px-4 md:px-6 pt-24 pb-8">
          <div className="mx-auto max-w-6xl">
            <MarketplaceHeader />
            <MarketplaceFilterBar onSearchChange={setSearchQuery} />
            <CategoryFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            <MarketplaceGrid items={filteredItems} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Marketplace;
