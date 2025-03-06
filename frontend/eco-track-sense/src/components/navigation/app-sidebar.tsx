
import { cn } from "@/lib/utils";
import { 
  HomeIcon, BarChart3Icon, ShoppingBagIcon, 
  MapPinIcon, QrCodeIcon, TrophyIcon, 
  UserIcon, SettingsIcon, HelpCircleIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function AppSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  
  const navigationItems = [
    { 
      title: "Dashboard", 
      icon: <HomeIcon className="h-5 w-5" />, 
      path: "/" 
    },
    { 
      title: "Map View", 
      icon: <MapPinIcon className="h-5 w-5" />, 
      path: "/map" 
    },
    { 
      title: "Marketplace", 
      icon: <ShoppingBagIcon className="h-5 w-5" />, 
      path: "/marketplace" 
    },
    { 
      title: "Analytics", 
      icon: <BarChart3Icon className="h-5 w-5" />, 
      path: "/analytics" 
    },
    { 
      title: "QR Scanner", 
      icon: <QrCodeIcon className="h-5 w-5" />, 
      path: "/scanner" 
    },
    { 
      title: "Leaderboard", 
      icon: <TrophyIcon className="h-5 w-5" />, 
      path: "/leaderboard" 
    }
  ];
  
  const userItems = [
    { 
      title: "Profile", 
      icon: <UserIcon className="h-5 w-5" />, 
      path: "/profile" 
    },
    { 
      title: "Settings", 
      icon: <SettingsIcon className="h-5 w-5" />, 
      path: "/settings" 
    },
    { 
      title: "Help", 
      icon: <HelpCircleIcon className="h-5 w-5" />, 
      path: "/help" 
    }
  ];
  
  const NavItem = ({ item }: { item: { title: string; icon: JSX.Element; path: string } }) => {
    const isActive = location.pathname === item.path;
    
    return (
      <Link to={item.path}>
        <Button
          variant="ghost"
          className={cn(
            "flex w-full items-center justify-start gap-3 px-4 py-2.5 transition-all duration-200",
            isActive
              ? "bg-wastesense-green/10 text-wastesense-green-dark font-medium"
              : "text-wastesense-gray-600 hover:bg-wastesense-gray-100 hover:text-wastesense-gray-800",
            !isExpanded && "px-3"
          )}
        >
          <span className={cn(
            "transition-all duration-200",
            isActive ? "text-wastesense-green" : "text-current"
          )}>
            {item.icon}
          </span>
          {isExpanded && <span>{item.title}</span>}
        </Button>
      </Link>
    );
  };
  
  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-30 flex flex-col border-r border-wastesense-gray-200 bg-white transition-all duration-300",
      isExpanded ? "w-64" : "w-16"
    )}>
      <div className="flex h-16 items-center px-4">
        <div className={cn(
          "flex items-center",
          isExpanded ? "justify-between w-full" : "justify-center"
        )}>
          {isExpanded ? (
            <span className="text-xl font-semibold text-wastesense-green">WasteSense</span>
          ) : (
            <span className="text-xl font-semibold text-wastesense-green">WS</span>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "ml-auto shrink-0",
              isExpanded ? "" : "hidden"
            )}
            onClick={() => setIsExpanded(false)}
          >
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </Button>
          
          {!isExpanded && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute -right-3 top-8 rounded-full border border-wastesense-gray-200 bg-white p-1 shadow-sm"
              onClick={() => setIsExpanded(true)}
            >
              <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86514 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86514 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          )}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        <div className={cn("mb-3", !isExpanded && "px-1")}>
          {isExpanded && (
            <p className="mb-1 px-2 text-xs font-medium text-wastesense-gray-400">
              MAIN NAVIGATION
            </p>
          )}
          <nav className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </nav>
        </div>
        
        <div className={cn("mt-auto", !isExpanded && "px-1")}>
          {isExpanded && (
            <p className="mb-1 px-2 text-xs font-medium text-wastesense-gray-400">
              USER
            </p>
          )}
          <nav className="flex flex-col gap-1">
            {userItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </nav>
        </div>
      </div>
      
      <div className={cn(
        "mt-auto p-4 border-t border-wastesense-gray-200",
        isExpanded ? "block" : "hidden"
      )}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-wastesense-green-light text-wastesense-green">
            <UserIcon className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Alex Johnson</span>
            <span className="text-xs text-wastesense-gray-500">Premium User</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
