import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { QRScanner } from "@/components/scanner/qr-scanner";
import { Button } from "@/components/ui/button";
import { Camera, ImagePlus, RefreshCw, Zap, CheckCircle, Trophy } from "lucide-react";
import { useState } from "react";

const Scanner = () => {
  const [scannedResult, setScannedResult] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const [pointsAwarded, setPointsAwarded] = useState(0);
  
  const handleScan = (data: string | null) => {
    if (data) {
      setScannedResult(data);
      setIsScanning(false);
      // Simulate points being awarded
      setPointsAwarded(Math.floor(Math.random() * 50) + 10);
    }
  };
  
  const resetScanner = () => {
    setScannedResult(null);
    setIsScanning(true);
    setPointsAwarded(0);
  };
  
  return (
    <div className="flex min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <AppHeader />
        <main className="px-4 md:px-6 pt-24 pb-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold">QR Scanner</h1>
              <p className="mt-1 text-wastesense-gray-600">
                Scan a bin's QR code to register waste disposal and earn points
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-wastesense-gray-200 p-6 shadow-sm">
              {isScanning ? (
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-md aspect-square mx-auto mb-6 rounded-lg overflow-hidden">
                    <QRScanner />
                    
                    {/* Scanner overlay */}
                    <div className="absolute inset-0 border-2 border-wastesense-green rounded-lg">
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-wastesense-green"></div>
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-wastesense-green"></div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-wastesense-green"></div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-wastesense-green"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center mb-6">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Camera className="h-4 w-4" />
                      <span>Switch Camera</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ImagePlus className="h-4 w-4" />
                      <span>Upload Image</span>
                    </Button>
                  </div>
                  
                  <div className="text-center max-w-md mx-auto">
                    <h3 className="text-lg font-medium mb-2">How to scan</h3>
                    <ol className="text-wastesense-gray-600 text-sm space-y-2 text-left">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-wastesense-gray-100 h-5 w-5 text-xs font-medium mr-2 mt-0.5">1</span>
                        <span>Locate the QR code on the waste bin or disposal station.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-wastesense-gray-100 h-5 w-5 text-xs font-medium mr-2 mt-0.5">2</span>
                        <span>Position your camera to clearly capture the QR code.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-wastesense-gray-100 h-5 w-5 text-xs font-medium mr-2 mt-0.5">3</span>
                        <span>Hold steady until the code is recognized.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-wastesense-gray-100 h-5 w-5 text-xs font-medium mr-2 mt-0.5">4</span>
                        <span>Complete the disposal process to earn points.</span>
                      </li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-wastesense-green-light flex items-center justify-center mb-6">
                    <CheckCircle className="h-12 w-12 text-wastesense-green" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">Scan Successful!</h2>
                  <p className="text-wastesense-gray-600 mb-6 text-center">
                    You've successfully registered your waste disposal
                  </p>
                  
                  <div className="bg-wastesense-green-light text-wastesense-green-dark p-4 rounded-lg mb-6 w-full max-w-md">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium">Points Awarded</h3>
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-1" />
                        <span className="font-bold text-xl">+{pointsAwarded}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Bin Type:</span>
                        <span className="font-medium">Recycling Bin #R-104</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium">Central Park, Area B</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span className="font-medium">{new Date().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={resetScanner}
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>Scan Again</span>
                    </Button>
                    <Button
                      className="flex items-center gap-2"
                    >
                      <Zap className="h-4 w-4" />
                      <span>View Your Impact</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 bg-white rounded-xl border border-wastesense-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Recent Scans</h3>
              
              <div className="divide-y divide-wastesense-gray-100">
                {[
                  { type: "Recycling Bin", location: "Downtown, Block C", time: "Today, 10:30 AM", points: 15 },
                  { type: "Compost Bin", location: "Farmer's Market", time: "Yesterday, 2:15 PM", points: 20 },
                  { type: "E-Waste Bin", location: "Tech Center", time: "Apr 15, 4:45 PM", points: 35 }
                ].map((scan, index) => (
                  <div key={index} className="py-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{scan.type}</p>
                      <p className="text-sm text-wastesense-gray-600">{scan.location}</p>
                      <p className="text-xs text-wastesense-gray-500">{scan.time}</p>
                    </div>
                    <div className="flex items-center text-wastesense-green font-medium">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>+{scan.points}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scanner;
