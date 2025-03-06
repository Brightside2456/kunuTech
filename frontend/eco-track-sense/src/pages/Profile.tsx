
import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { Button } from "@/components/ui/button";
import { 
  User, Edit, MapPin, Mail, Phone, Award, 
  Calendar, Camera, Check, Settings, ChevronRight 
} from "lucide-react";

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <AppHeader />
        <main className="px-4 md:px-6 pt-24 pb-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="text-2xl md:text-3xl font-bold">Your Profile</h1>
              <div className="mt-4 md:mt-0">
                <Button className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <div className="bg-white rounded-xl border border-wastesense-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <img 
                      src="https://randomuser.me/api/portraits/men/42.jpg" 
                      alt="Alex Johnson" 
                      className="h-24 w-24 rounded-full object-cover"
                    />
                    <button className="absolute bottom-0 right-0 bg-wastesense-green text-white p-1.5 rounded-full border-2 border-white">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <h2 className="mt-4 text-xl font-semibold">Alex Johnson</h2>
                  <p className="text-wastesense-gray-600">Premium User</p>
                  
                  <div className="mt-4 flex gap-3">
                    <div className="p-2 bg-wastesense-green-light text-wastesense-green rounded-lg flex gap-1 items-center text-sm">
                      <Award className="h-4 w-4" />
                      <span>Level 8</span>
                    </div>
                    <div className="p-2 bg-wastesense-gray-100 text-wastesense-gray-600 rounded-lg flex gap-1 items-center text-sm">
                      <Check className="h-4 w-4" />
                      <span>Verified</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="mt-6 w-full flex items-center gap-2">
                    <Edit className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-wastesense-gray-200">
                  <h3 className="text-sm font-medium text-wastesense-gray-600 mb-4">Contact Information</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-wastesense-gray-400" />
                      <span className="text-sm">alex.johnson@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-wastesense-gray-400" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-wastesense-gray-400" />
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-wastesense-gray-400" />
                      <span className="text-sm">Joined March 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Stats Card */}
                <div className="bg-white rounded-xl border border-wastesense-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-medium mb-4">Waste Management Stats</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-wastesense-gray-50 rounded-lg p-4">
                      <p className="text-wastesense-gray-600 text-sm">Total Recycled</p>
                      <p className="text-2xl font-bold mt-1">586 kg</p>
                    </div>
                    <div className="bg-wastesense-gray-50 rounded-lg p-4">
                      <p className="text-wastesense-gray-600 text-sm">Items Traded</p>
                      <p className="text-2xl font-bold mt-1">24</p>
                    </div>
                    <div className="bg-wastesense-gray-50 rounded-lg p-4">
                      <p className="text-wastesense-gray-600 text-sm">CO₂ Reduced</p>
                      <p className="text-2xl font-bold mt-1">128 kg</p>
                    </div>
                    <div className="bg-wastesense-gray-50 rounded-lg p-4">
                      <p className="text-wastesense-gray-600 text-sm">Points Earned</p>
                      <p className="text-2xl font-bold mt-1">6,930</p>
                    </div>
                  </div>
                </div>
                
                {/* Achievements Card */}
                <div className="bg-white rounded-xl border border-wastesense-gray-200 p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Recent Achievements</h3>
                    <Button variant="ghost" className="text-sm text-wastesense-green">
                      View All
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Waste Warrior", description: "Recycled over 500kg of waste", date: "Last week", points: 250 },
                      { title: "Perfect Streak", description: "30 days of consistent recycling", date: "2 weeks ago", points: 300 },
                      { title: "Community Hero", description: "Helped 5 neighbors with recycling", date: "Last month", points: 200 }
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center p-3 rounded-lg border border-wastesense-gray-200">
                        <div className="p-2 bg-wastesense-green-light rounded-lg">
                          <Award className="h-5 w-5 text-wastesense-green" />
                        </div>
                        <div className="ml-3 flex-1">
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-sm text-wastesense-gray-600">{achievement.description}</p>
                          <p className="text-xs text-wastesense-gray-500 mt-1">{achievement.date}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-wastesense-green font-medium">+{achievement.points}</span>
                          <p className="text-xs text-wastesense-gray-500">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Activity Card */}
                <div className="bg-white rounded-xl border border-wastesense-gray-200 p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Recent Activity</h3>
                    <Button variant="ghost" className="text-sm text-wastesense-green">
                      View All
                    </Button>
                  </div>
                  
                  <div className="divide-y divide-wastesense-gray-100">
                    {[
                      { action: "Recycled 5kg of paper waste", location: "North Station Bin", time: "Today, 2:30 PM" },
                      { action: "Listed 'Old Laptop' on marketplace", location: "Circular Economy", time: "Yesterday, 10:15 AM" },
                      { action: "Disposed 2kg of general waste", location: "Community Center", time: "Apr 10, 9:45 AM" },
                      { action: "Traded 'Wooden Shelf' with Emily", location: "Pickup at Main St.", time: "Apr 5, 4:20 PM" }
                    ].map((activity, index) => (
                      <div key={index} className="py-3 flex items-center justify-between">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-wastesense-gray-600">{activity.location}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-wastesense-gray-500">{activity.time}</span>
                          <ChevronRight className="ml-2 h-4 w-4 text-wastesense-gray-400" />
                        </div>
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

export default Profile;
