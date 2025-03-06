
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnalyticsChartProps {
  data: any[];
  className?: string;
}

export function AnalyticsChart({ data, className }: AnalyticsChartProps) {
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">("month");
  
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md border border-wastesense-gray-200 bg-white p-3 shadow-md">
          <p className="mb-1 font-medium">{label}</p>
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="flex items-center gap-2 text-sm">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-wastesense-gray-600">{entry.name}:</span>
              <span className="font-medium">{entry.value} kg</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className={cn("rounded-xl border border-wastesense-gray-200 bg-white p-4 shadow-sm", className)}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium">Waste Collection Trends</h3>
        
        <div className="flex gap-1 overflow-hidden rounded-md border border-wastesense-gray-200 bg-wastesense-gray-100 p-0.5">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-7 rounded-sm px-3 py-1 text-xs transition-all",
              timeRange === "week" 
                ? "bg-white text-wastesense-gray-900 shadow-sm" 
                : "bg-transparent text-wastesense-gray-600 hover:bg-white/50"
            )}
            onClick={() => setTimeRange("week")}
          >
            Week
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-7 rounded-sm px-3 py-1 text-xs transition-all",
              timeRange === "month" 
                ? "bg-white text-wastesense-gray-900 shadow-sm" 
                : "bg-transparent text-wastesense-gray-600 hover:bg-white/50"
            )}
            onClick={() => setTimeRange("month")}
          >
            Month
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-7 rounded-sm px-3 py-1 text-xs transition-all",
              timeRange === "year" 
                ? "bg-white text-wastesense-gray-900 shadow-sm" 
                : "bg-transparent text-wastesense-gray-600 hover:bg-white/50"
            )}
            onClick={() => setTimeRange("year")}
          >
            Year
          </Button>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRecycling" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#27AE60" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#27AE60" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorGeneral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3498DB" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3498DB" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorHazardous" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E74C3C" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#E74C3C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEE" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 12, fill: '#757575' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 12, fill: '#757575' }}
              unit=" kg"
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="recycling" 
              stroke="#27AE60" 
              fillOpacity={1}
              fill="url(#colorRecycling)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
              name="Recycling"
            />
            <Area 
              type="monotone" 
              dataKey="general" 
              stroke="#3498DB" 
              fillOpacity={1}
              fill="url(#colorGeneral)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
              name="General"
            />
            <Area 
              type="monotone" 
              dataKey="hazardous" 
              stroke="#E74C3C" 
              fillOpacity={1}
              fill="url(#colorHazardous)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
              name="Hazardous"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-wastesense-green" />
          <span className="text-sm text-wastesense-gray-600">Recycling</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-wastesense-blue" />
          <span className="text-sm text-wastesense-gray-600">General</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-wastesense-red" />
          <span className="text-sm text-wastesense-gray-600">Hazardous</span>
        </div>
      </div>
    </div>
  );
}
