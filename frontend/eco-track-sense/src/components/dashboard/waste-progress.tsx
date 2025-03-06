
import { cn } from "@/lib/utils";

interface WasteProgressProps {
  category: string;
  value: number;
  max: number;
  color: "green" | "blue" | "red" | "gray";
  icon?: React.ReactNode;
  className?: string;
}

export function WasteProgress({
  category,
  value,
  max,
  color,
  icon,
  className,
}: WasteProgressProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  const getColorClass = () => {
    switch (color) {
      case "green":
        return "bg-wastesense-green";
      case "blue":
        return "bg-wastesense-blue";
      case "red":
        return "bg-wastesense-red";
      case "gray":
      default:
        return "bg-wastesense-gray-400";
    }
  };
  
  const getBgColorClass = () => {
    switch (color) {
      case "green":
        return "bg-wastesense-green-light";
      case "blue":
        return "bg-wastesense-blue-light";
      case "red":
        return "bg-wastesense-red-light";
      case "gray":
      default:
        return "bg-wastesense-gray-200";
    }
  };
  
  return (
    <div className={cn("animate-fade-in", className)}>
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-wastesense-gray-500">{icon}</span>}
          <span className="text-sm font-medium">{category}</span>
        </div>
        <span className="text-sm text-wastesense-gray-600">
          {value} / {max} kg
        </span>
      </div>
      
      <div className={cn("h-2 w-full overflow-hidden rounded-full", getBgColorClass())}>
        <div
          className={cn("h-full rounded-full transition-all duration-500", getColorClass())}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="mt-1 flex justify-between text-xs text-wastesense-gray-500">
        <span>{percentage}% of monthly goal</span>
        {percentage >= 100 && <span className="font-medium text-wastesense-green">Goal Achieved!</span>}
      </div>
    </div>
  );
}
