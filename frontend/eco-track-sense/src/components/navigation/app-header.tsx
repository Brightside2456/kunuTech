
import { cn } from "@/lib/utils";
import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/map":
        return "Map View";
      case "/marketplace":
        return "Circular Economy";
      case "/dashboard":
        return "User Dashboard";
      case "/analytics":
        return "Analytics";
      case "/scanner":
        return "QR Scanner";
      default:
        return "WasteSense";
    }
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
      "py-3 md:py-4 px-4 md:px-6",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="text-lg font-medium md:text-xl">
            <span className="hidden md:inline">{getPageTitle()}</span>
            <span className="md:hidden">WS</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden relative md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-9 pr-4 py-2 rounded-lg bg-muted/50 border-none text-sm focus:outline-none focus:ring-1 focus:ring-primary/20 w-[180px] md:w-[220px] transition-all"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-wastesense-red"></span>
          </Button>
          
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
