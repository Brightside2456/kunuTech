
import { Info, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BinInfoPanelProps {
  showBinInfo: boolean;
  setShowBinInfo: (show: boolean) => void;
}

export function BinInfoPanel({ showBinInfo, setShowBinInfo }: BinInfoPanelProps) {
  return (
    <div className={cn(
      "absolute bottom-16 left-1/2 -translate-x-1/2 w-[95%] max-w-md",
      "rounded-xl bg-white shadow-glass p-4 border border-wastesense-gray-200/50",
      "transition-all duration-300 transform",
      showBinInfo 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-4 pointer-events-none"
    )}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-wastesense-red animate-pulse"></div>
          <h3 className="font-medium">Waste Bin #A245</h3>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-6 w-6 p-0"
          onClick={() => setShowBinInfo(false)}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </Button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-wastesense-gray-500 text-sm">Fill Level:</span>
          <span className="text-sm font-medium">87% (Critical)</span>
        </div>
        
        <div className="w-full bg-wastesense-gray-200 rounded-full h-2.5">
          <div className="bg-wastesense-red h-2.5 rounded-full" style={{ width: '87%' }}></div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-wastesense-gray-500">Last Collection:</p>
            <p className="font-medium">3 days ago</p>
          </div>
          <div>
            <p className="text-wastesense-gray-500">Estimate Full:</p>
            <p className="font-medium">~7 hours</p>
          </div>
          <div>
            <p className="text-wastesense-gray-500">Type:</p>
            <p className="font-medium">Mixed Waste</p>
          </div>
          <div>
            <p className="text-wastesense-gray-500">Location:</p>
            <p className="font-medium">Main St. & 5th Ave</p>
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button className="w-full gap-1" size="sm">
            <Truck className="h-4 w-4" />
            Add to Route
          </Button>
          <Button variant="outline" className="w-full gap-1" size="sm">
            <Info className="h-4 w-4" />
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
