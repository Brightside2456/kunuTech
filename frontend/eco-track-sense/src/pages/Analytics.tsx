
import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { WasteProgress } from "@/components/dashboard/waste-progress";
import { Package, Recycle, AlertTriangle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample analytics data
const chartData = [
  { name: "Jan", recycling: 56, general: 38, hazardous: 8 },
  { name: "Feb", recycling: 62, general: 42, hazardous: 10 },
  { name: "Mar", recycling: 70, general: 40, hazardous: 9 },
  { name: "Apr", recycling: 69, general: 36, hazardous: 12 },
  { name: "May", recycling: 78, general: 30, hazardous: 8 },
  { name: "Jun", recycling: 85, general: 28, hazardous: 7 },
  { name: "Jul", recycling: 80, general: 25, hazardous: 6 },
];

const Analytics = () => {
  return (
    <div className="flex min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <AppHeader />
        <main className="px-4 md:px-6 pt-24 pb-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Waste Analytics</h1>
                <p className="mt-1 text-wastesense-gray-600">
                  Track your waste management performance and identify areas for improvement
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Filter by date</span>
                </Button>
                <Button variant="outline">Export Data</Button>
              </div>
            </div>
            
            {/* Progress Cards */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-wastesense-gray-200 p-5 shadow-sm">
                <WasteProgress
                  category="Recycling"
                  value={85}
                  max={100}
                  color="green"
                  icon={<Recycle className="h-5 w-5" />}
                />
              </div>
              <div className="bg-white rounded-xl border border-wastesense-gray-200 p-5 shadow-sm">
                <WasteProgress
                  category="General Waste"
                  value={28}
                  max={50}
                  color="blue"
                  icon={<Package className="h-5 w-5" />}
                />
              </div>
              <div className="bg-white rounded-xl border border-wastesense-gray-200 p-5 shadow-sm">
                <WasteProgress
                  category="Hazardous"
                  value={7}
                  max={20}
                  color="red"
                  icon={<AlertTriangle className="h-5 w-5" />}
                />
              </div>
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <AnalyticsChart data={chartData} className="lg:col-span-3" />
              
              <div className="bg-white rounded-xl border border-wastesense-gray-200 p-5 shadow-sm lg:col-span-1">
                <h3 className="text-lg font-medium mb-4">Waste Composition</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Recycling</span>
                      <span className="text-sm text-wastesense-gray-600">70%</span>
                    </div>
                    <div className="w-full bg-wastesense-green-light rounded-full h-2">
                      <div className="bg-wastesense-green h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">General Waste</span>
                      <span className="text-sm text-wastesense-gray-600">23%</span>
                    </div>
                    <div className="w-full bg-wastesense-blue-light rounded-full h-2">
                      <div className="bg-wastesense-blue h-2 rounded-full" style={{ width: "23%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Hazardous</span>
                      <span className="text-sm text-wastesense-gray-600">7%</span>
                    </div>
                    <div className="w-full bg-wastesense-red-light rounded-full h-2">
                      <div className="bg-wastesense-red h-2 rounded-full" style={{ width: "7%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-wastesense-gray-200 p-5 shadow-sm lg:col-span-2">
                <h3 className="text-lg font-medium mb-4">Waste Reduction Progress</h3>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-4xl font-bold text-wastesense-green">-23%</p>
                    <p className="text-sm text-wastesense-gray-600">Reduction from last year</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">120 kg</p>
                    <p className="text-sm text-wastesense-gray-600">Total waste this month</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-wastesense-gray-200">
                  <h4 className="text-sm font-medium mb-2">Reduction Trends</h4>
                  <div className="flex items-end gap-2 h-32">
                    {[70, 65, 58, 62, 50, 45].map((height, index) => (
                      <div key={index} className="flex-1 group">
                        <div className="relative">
                          <div className="absolute bottom-0 inset-x-0 w-full bg-wastesense-green-light group-hover:bg-wastesense-green/20 rounded-t-sm transition-colors" style={{ height: `${height}%` }}></div>
                          <div className="absolute bottom-0 inset-x-0 w-full bg-wastesense-green rounded-t-sm" style={{ height: `${height-20}%` }}></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-wastesense-gray-600">{`Month ${index + 1}`}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
