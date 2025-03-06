
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, QrCode, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export function QRScanner() {
  const [scanning, setScanning] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Simulate scanner
  const handleStartScan = () => {
    setScanning(true);
    setSuccess(false);
    setError(null);
    
    // Simulate success after 3 seconds
    setTimeout(() => {
      setScanning(false);
      setSuccess(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 3000);
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-2xl",
        scanning ? "border-4 border-wastesense-blue" : "border border-wastesense-gray-200",
        success ? "border-4 border-wastesense-green" : ""
      )}>
        {/* Camera View (Placeholder) */}
        <div 
          className={cn(
            "absolute inset-0 overflow-hidden",
            scanning ? "bg-wastesense-gray-900" : "bg-wastesense-gray-100"
          )}
        >
          {!scanning && !success && (
            <div className="flex h-full flex-col items-center justify-center">
              <QrCode className="h-16 w-16 text-wastesense-gray-400" />
              <p className="mt-4 text-center text-wastesense-gray-500">
                Position the QR code within the frame to scan
              </p>
            </div>
          )}
          
          {scanning && (
            <div className="flex h-full flex-col items-center justify-center">
              {/* Stylized scanner animation */}
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 border-2 border-wastesense-blue/50"></div>
                <div className="absolute inset-x-0 top-0 h-px animate-[scanner_2s_ease-in-out_infinite] bg-wastesense-blue shadow-lg"></div>
                
                {/* Scanner corner marks */}
                <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-wastesense-blue"></div>
                <div className="absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-wastesense-blue"></div>
                <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-wastesense-blue"></div>
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-wastesense-blue"></div>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-wastesense-gray-300">
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Scanning...</span>
              </div>
            </div>
          )}
          
          {success && (
            <div className="flex h-full flex-col items-center justify-center bg-wastesense-green-light">
              <div className="rounded-full bg-white p-4">
                <CheckCircle className="h-12 w-12 text-wastesense-green" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-wastesense-green-dark">
                Scan Successful!
              </h3>
              
              <div className="mt-8 w-[80%] rounded-xl bg-white p-4 shadow-md">
                <h4 className="font-medium">Waste Bin #B112</h4>
                <p className="text-sm text-wastesense-gray-600">Recycling - Paper & Cardboard</p>
                
                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-wastesense-gray-500">Location:</span>
                  <span className="font-medium">Office Building 3, Floor 2</span>
                </div>
                
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-wastesense-gray-500">Points Earned:</span>
                  <span className="font-medium text-wastesense-green">+15 points</span>
                </div>
                
                <div className="mt-4 text-center text-xs text-wastesense-gray-500">
                  Thank you for properly disposing your waste!
                </div>
              </div>
            </div>
          )}
          
          {error && (
            <div className="flex h-full flex-col items-center justify-center">
              <div className="rounded-full bg-wastesense-red-light p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-wastesense-red">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-medium text-wastesense-red-dark">
                Scan Failed
              </h3>
              <p className="mt-2 text-wastesense-gray-600">{error}</p>
              <Button className="mt-6" onClick={handleStartScan}>
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {!scanning && !success && (
        <Button 
          onClick={handleStartScan}
          className="mt-6 gap-2 px-8"
          size="lg"
        >
          <QrCode className="h-5 w-5" />
          Start Scanning
        </Button>
      )}
      
      {scanning && (
        <Button 
          variant="outline"
          onClick={() => setScanning(false)}
          className="mt-6"
        >
          Cancel Scan
        </Button>
      )}
      
      {success && (
        <Button 
          onClick={handleStartScan}
          className="mt-6"
          variant="outline"
        >
          Scan Another Code
        </Button>
      )}
      
      <div className="mt-10 w-full max-w-md rounded-xl bg-wastesense-gray-50 p-4">
        <h3 className="font-medium">How to use the QR Scanner</h3>
        <ol className="mt-2 space-y-2 text-sm text-wastesense-gray-600">
          <li className="flex items-start gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wastesense-green-light text-xs font-medium text-wastesense-green">1</span>
            <span>Find the QR code on the waste bin you want to use.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wastesense-green-light text-xs font-medium text-wastesense-green">2</span>
            <span>Click the "Start Scanning" button and position your camera to capture the QR code.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wastesense-green-light text-xs font-medium text-wastesense-green">3</span>
            <span>Once scanned, you'll earn points for proper waste disposal and contribute to a cleaner environment.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
