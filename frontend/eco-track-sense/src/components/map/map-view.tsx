
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { MapControls } from "./map-controls";
import { BinFilters } from "./bin-filters";
import { RouteOptimization } from "./route-optimization";
import { ListViewToggle } from "./list-view-toggle";
import { BinMarker } from "./bin-marker";
import { AlertNotification } from "./alert-notification";
import { BinInfoPanel } from "./bin-info-panel";
import { LoadingIndicator } from "./loading-indicator";

export function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [mapReady, setMapReady] = useState(false);
  const [showBinInfo, setShowBinInfo] = useState(false);
  
  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setMapReady(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative h-full w-full overflow-hidden">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          {/* Map Canvas */}
          <div 
            ref={mapContainer} 
            className="absolute inset-0 bg-wastesense-gray-100"
            // Placeholder for map, replace with actual map implementation
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "saturate(0.7) brightness(1.05)"
            }}
          ></div>
          
          {/* Map UI Components */}
          <MapControls />
          <BinFilters />
          <RouteOptimization />
          <ListViewToggle />
          
          {/* Bin Markers */}
          <BinMarker 
            position={{ left: "left-1/2", top: "top-1/2" }} 
            color="red" 
            binId="A245" 
            alert={true}
            onClick={() => setShowBinInfo(true)} 
          />
          
          <BinMarker 
            position={{ left: "left-[30%]", top: "top-[40%]" }} 
            color="blue" 
            binId="B112" 
            onClick={() => {}} 
          />
          
          <BinMarker 
            position={{ left: "left-[70%]", top: "top-[65%]" }} 
            color="green" 
            binId="C358" 
            onClick={() => {}} 
          />
          
          {/* Alerts and Info Panels */}
          <AlertNotification />
          <BinInfoPanel showBinInfo={showBinInfo} setShowBinInfo={setShowBinInfo} />
        </>
      )}
    </div>
  );
}
