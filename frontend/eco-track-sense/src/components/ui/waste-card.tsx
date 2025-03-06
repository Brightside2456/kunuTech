
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface WasteCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function WasteCard({ title, value, icon, trend, className }: WasteCardProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-white p-6 shadow-glass-sm transition-all hover:shadow-glass",
      "border border-wastesense-gray-200/50",
      "animate-fade-in",
      className
    )}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-wastesense-gray-500">{title}</h3>
          <p className="text-2xl font-semibold">{value}</p>
          
          {trend && (
            <div className="flex items-center gap-1 text-sm">
              <span className={cn(
                "flex items-center",
                trend.isPositive ? "text-wastesense-green" : "text-wastesense-red"
              )}>
                {trend.isPositive ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                )}
                {Math.abs(trend.value)}%
              </span>
              <span className="text-wastesense-gray-400">from last period</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="rounded-full bg-wastesense-gray-100 p-3 text-wastesense-gray-600">
            {icon}
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 right-0 h-16 w-16 -translate-y-1/4 translate-x-1/4 rounded-full bg-gradient-to-br from-wastesense-green/10 to-wastesense-blue/5 blur-xl"></div>
    </div>
  );
}
