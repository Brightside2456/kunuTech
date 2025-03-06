
import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { WasteCard } from "@/components/ui/waste-card";
import { WasteProgress } from "@/components/dashboard/waste-progress";
import { LeaderboardItem } from "@/components/dashboard/leaderboard-item";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, MapPin, PackagePlus, QrCode, Recycle, RotateCw, ShoppingBag, Trophy, Trash2 } from "lucide-react";

const Index = () => {
  // Sample chart data
  const chartData = [
    { name: "Jan", recycling: 40, general: 24, hazardous: 10 },
    { name: "Feb", recycling: 35, general: 26, hazardous: 8 },
    { name: "Mar", recycling: 50, general: 22, hazardous: 12 },
    { name: "Apr", recycling: 45, general: 20, hazardous: 7 },
    { name: "May", recycling: 60, general: 18, hazardous: 5 },
    { name: "Jun", recycling: 55, general: 19, hazardous: 9 },
    { name: "Jul", recycling: 70, general: 17, hazardous: 6 },
  ];
  
  // Sample leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Sarah Peterson", points: 2450, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop" },
    { rank: 2, name: "Michael Wong", points: 2180, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop" },
    { rank: 3, name: "Alex Johnson", points: 1930, avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&auto=format&fit=crop", isCurrentUser: true },
    { rank: 4, name: "Jessica Zhang", points: 1740, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&auto=format&fit=crop" },
    { rank: 5, name: "Raj Patel", points: 1620, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&auto=format&fit=crop" },
  ];
  
  return (
    <div className="min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="pl-16 md:pl-64">
        <AppHeader />
        
        <main className="px-4 pt-24 pb-20 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Welcome Section */}
            <section className="w-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-medium md:text-3xl">Welcome back, Alex</h1>
                  <p className="text-wastesense-gray-600 mt-1">Track your waste management progress and activity</p>
                </div>
                
                <Link to="/scanner">
                  <Button className="hidden md:flex gap-2">
                    <QrCode className="h-4 w-4" />
                    Scan Waste Bin
                  </Button>
                </Link>
              </div>
              
              {/* Stat Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <WasteCard
                  title="Total Recycled"
                  value="354 kg"
                  trend={{ value: 12, isPositive: true }}
                  icon={<Recycle className="h-5 w-5" />}
                />
                
                <WasteCard
                  title="Waste Reduction"
                  value="28%"
                  trend={{ value: 8, isPositive: true }}
                  icon={<Trash2 className="h-5 w-5" />}
                />
                
                <WasteCard
                  title="Items Reused"
                  value="46"
                  trend={{ value: 5, isPositive: true }}
                  icon={<RotateCw className="h-5 w-5" />}
                />
                
                <WasteCard
                  title="Green Points"
                  value="1,930"
                  trend={{ value: 3, isPositive: true }}
                  icon={<Trophy className="h-5 w-5" />}
                />
              </div>
            </section>
            
            {/* Middle Section: Progress + Chart */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left: Progress Bars */}
              <div className="rounded-xl border border-wastesense-gray-200 bg-white p-4 shadow-sm lg:col-span-1">
                <h2 className="text-lg font-medium mb-4">Monthly Progress</h2>
                
                <div className="space-y-6">
                  <WasteProgress
                    category="Recycling"
                    value={70}
                    max={60}
                    color="green"
                    icon={<Recycle className="h-4 w-4" />}
                  />
                  
                  <WasteProgress
                    category="General Waste"
                    value={15}
                    max={20}
                    color="blue"
                    icon={<Trash2 className="h-4 w-4" />}
                  />
                  
                  <WasteProgress
                    category="Hazardous Waste"
                    value={2}
                    max={5}
                    color="red"
                    icon={<Trash2 className="h-4 w-4" />}
                  />
                  
                  <WasteProgress
                    category="Items Reused"
                    value={12}
                    max={15}
                    color="gray"
                    icon={<RotateCw className="h-4 w-4" />}
                  />
                </div>
                
                <div className="mt-6 border-t border-wastesense-gray-200 pt-4">
                  <Link to="/analytics">
                    <Button variant="outline" className="w-full gap-1">
                      <BarChart3 className="h-4 w-4" />
                      View Detailed Analytics
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right: Analytics */}
              <div className="lg:col-span-2">
                <AnalyticsChart data={chartData} />
              </div>
            </div>
            
            {/* Bottom Section: Quick Actions + Leaderboard */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Quick Actions */}
              <section className="rounded-xl border border-wastesense-gray-200 bg-white p-4 shadow-sm">
                <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/map">
                    <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                      <MapPin className="h-6 w-6 text-wastesense-blue" />
                      <span>Find Nearest Bin</span>
                    </Button>
                  </Link>
                  
                  <Link to="/scanner">
                    <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                      <QrCode className="h-6 w-6 text-wastesense-green" />
                      <span>Scan QR Code</span>
                    </Button>
                  </Link>
                  
                  <Link to="/marketplace">
                    <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                      <ShoppingBag className="h-6 w-6 text-wastesense-blue" />
                      <span>Browse Marketplace</span>
                    </Button>
                  </Link>
                  
                  <Link to="/marketplace/new">
                    <Button variant="outline" className="h-auto w-full flex-col gap-2 py-4">
                      <PackagePlus className="h-6 w-6 text-wastesense-green" />
                      <span>List an Item</span>
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-4 rounded-xl bg-wastesense-green-light p-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-wastesense-green p-1 text-white">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-wastesense-green-dark">Weekly Challenge</h3>
                      <p className="text-sm text-wastesense-gray-700">Recycle 5kg of plastic this week to earn 100 bonus points!</p>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-white/50">
                        <div className="h-full w-3/5 rounded-full bg-wastesense-green"></div>
                      </div>
                      <p className="mt-1 text-xs text-wastesense-gray-700">3kg out of 5kg (60%)</p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Leaderboard */}
              <section className="rounded-xl border border-wastesense-gray-200 bg-white p-4 shadow-sm lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Leaderboard</h2>
                  <Link to="/leaderboard">
                    <Button variant="ghost" size="sm" className="gap-1 text-wastesense-green hover:text-wastesense-green-dark">
                      <Trophy className="h-4 w-4" />
                      Full Rankings
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-2">
                  {leaderboardData.map((user) => (
                    <LeaderboardItem
                      key={user.rank}
                      rank={user.rank}
                      name={user.name}
                      points={user.points}
                      avatar={user.avatar}
                      isCurrentUser={user.isCurrentUser}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
