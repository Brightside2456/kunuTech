
import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { Button } from "@/components/ui/button";
import { 
  User, Bell, Shield, Map, CreditCard, 
  HelpCircle, Globe, Moon, Sun, Check 
} from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [darkMode, setDarkMode] = useState(false);
  
  const tabs = [
    { id: "account", label: "Account", icon: <User className="h-5 w-5" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-5 w-5" /> },
    { id: "privacy", label: "Privacy & Security", icon: <Shield className="h-5 w-5" /> },
    { id: "location", label: "Location", icon: <Map className="h-5 w-5" /> },
    { id: "billing", label: "Billing", icon: <CreditCard className="h-5 w-5" /> },
    { id: "help", label: "Help & Support", icon: <HelpCircle className="h-5 w-5" /> }
  ];
  
  return (
    <div className="flex min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <AppHeader />
        <main className="px-4 md:px-6 pt-24 pb-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Settings</h1>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar */}
              <div className="md:w-64 shrink-0">
                <div className="bg-white rounded-xl border border-wastesense-gray-200 p-2 shadow-sm">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm rounded-lg transition-colors ${
                        activeTab === tab.id 
                          ? "bg-wastesense-green-light text-wastesense-green-dark font-medium" 
                          : "text-wastesense-gray-700 hover:bg-wastesense-gray-100"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <span className={activeTab === tab.id ? "text-wastesense-green" : "text-wastesense-gray-500"}>
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Content Area */}
              <div className="flex-1">
                <div className="bg-white rounded-xl border border-wastesense-gray-200 p-6 shadow-sm">
                  {activeTab === "account" && (
                    <>
                      <h2 className="text-xl font-medium mb-6">Account Settings</h2>
                      
                      <div className="space-y-6">
                        {/* Profile Section */}
                        <div className="pb-6 border-b border-wastesense-gray-200">
                          <h3 className="text-lg font-medium mb-4">Profile Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-wastesense-gray-700 mb-1">
                                Full Name
                              </label>
                              <input 
                                type="text" 
                                defaultValue="Alex Johnson"
                                className="w-full px-4 py-2 rounded-lg border border-wastesense-gray-200 focus:outline-none focus:ring-2 focus:ring-wastesense-green-light focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-wastesense-gray-700 mb-1">
                                Email Address
                              </label>
                              <input 
                                type="email" 
                                defaultValue="alex.johnson@example.com"
                                className="w-full px-4 py-2 rounded-lg border border-wastesense-gray-200 focus:outline-none focus:ring-2 focus:ring-wastesense-green-light focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-wastesense-gray-700 mb-1">
                                Phone Number
                              </label>
                              <input 
                                type="tel" 
                                defaultValue="+1 (555) 123-4567"
                                className="w-full px-4 py-2 rounded-lg border border-wastesense-gray-200 focus:outline-none focus:ring-2 focus:ring-wastesense-green-light focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-wastesense-gray-700 mb-1">
                                Location
                              </label>
                              <input 
                                type="text" 
                                defaultValue="San Francisco, CA"
                                className="w-full px-4 py-2 rounded-lg border border-wastesense-gray-200 focus:outline-none focus:ring-2 focus:ring-wastesense-green-light focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Preferences Section */}
                        <div className="pb-6 border-b border-wastesense-gray-200">
                          <h3 className="text-lg font-medium mb-4">Preferences</h3>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Language</h4>
                                <p className="text-sm text-wastesense-gray-600">Select your preferred language</p>
                              </div>
                              <div className="flex items-center border border-wastesense-gray-200 rounded-md p-1">
                                <button className="flex items-center gap-2 px-3 py-1.5 bg-wastesense-gray-100 rounded text-sm font-medium">
                                  <Globe className="h-4 w-4" />
                                  English
                                </button>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Dark Mode</h4>
                                <p className="text-sm text-wastesense-gray-600">Toggle dark theme</p>
                              </div>
                              <button 
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                  darkMode ? "bg-wastesense-green" : "bg-wastesense-gray-300"
                                }`}
                                onClick={() => setDarkMode(!darkMode)}
                              >
                                <span className="sr-only">Toggle dark mode</span>
                                <span 
                                  className={`flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform ${
                                    darkMode ? "translate-x-5" : "translate-x-1"
                                  }`}
                                >
                                  {darkMode ? (
                                    <Moon className="h-3 w-3 text-wastesense-gray-600" />
                                  ) : (
                                    <Sun className="h-3 w-3 text-wastesense-gray-600" />
                                  )}
                                </span>
                              </button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Units of Measurement</h4>
                                <p className="text-sm text-wastesense-gray-600">Choose your preferred units</p>
                              </div>
                              <div className="flex gap-2">
                                <button className="px-3 py-1.5 bg-wastesense-green-light text-wastesense-green-dark rounded text-sm font-medium">
                                  Metric
                                </button>
                                <button className="px-3 py-1.5 bg-wastesense-gray-100 text-wastesense-gray-600 rounded text-sm font-medium">
                                  Imperial
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Account Management */}
                        <div>
                          <h3 className="text-lg font-medium mb-4">Account Management</h3>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Change Password</h4>
                                <p className="text-sm text-wastesense-gray-600">Update your password</p>
                              </div>
                              <Button variant="outline">Change</Button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-wastesense-gray-700">Data Export</h4>
                                <p className="text-sm text-wastesense-gray-600">Export all your account data</p>
                              </div>
                              <Button variant="outline">Download</Button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium text-wastesense-red">Delete Account</h4>
                                <p className="text-sm text-wastesense-gray-600">Permanently delete your account</p>
                              </div>
                              <Button variant="outline" className="text-wastesense-red border-wastesense-red/20 hover:bg-wastesense-red/10 hover:text-wastesense-red">
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-wastesense-gray-200 flex justify-end gap-3">
                        <Button variant="outline">Cancel</Button>
                        <Button className="flex items-center gap-2">
                          <Check className="h-4 w-4" />
                          <span>Save Changes</span>
                        </Button>
                      </div>
                    </>
                  )}
                  
                  {activeTab !== "account" && (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="bg-wastesense-gray-100 rounded-full p-4 mb-4">
                        {tabs.find(tab => tab.id === activeTab)?.icon}
                      </div>
                      <h2 className="text-xl font-medium mb-2">{tabs.find(tab => tab.id === activeTab)?.label} Settings</h2>
                      <p className="text-wastesense-gray-600 text-center max-w-md">
                        This section is under development. You'll be able to manage your {tabs.find(tab => tab.id === activeTab)?.label.toLowerCase()} settings here soon.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
