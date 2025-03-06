
import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { MapView } from "@/components/map/map-view";

const Map = () => {
  return (
    <div className="min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="pl-16 md:pl-64">
        <AppHeader />
        <main className="pt-16 h-screen">
          <MapView />
        </main>
      </div>
    </div>
  );
};

export default Map;
