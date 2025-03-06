
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface BinMarkerProps {
  position: {
    left: string;
    top: string;
  };
  color: string;
  binId: string;
  alert?: boolean;
  onClick: () => void;
}

export function BinMarker({ position, color, binId, alert = false, onClick }: BinMarkerProps) {
  return (
    <button 
      className={`absolute ${position.left} ${position.top} -translate-x-1/2 -translate-y-1/2 group`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <MapPin className={`h-8 w-8 text-wastesense-${color} drop-shadow-md`} />
          {alert && (
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-wastesense-red ring-2 ring-white animate-pulse"></div>
          )}
        </div>
        <div className={cn(
          "mt-1 px-2 py-0.5 rounded-full bg-white/90 shadow-sm text-xs transition-all",
          "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
        )}>
          <span className="font-medium">Bin #{binId}</span>
        </div>
      </div>
    </button>
  );
}
