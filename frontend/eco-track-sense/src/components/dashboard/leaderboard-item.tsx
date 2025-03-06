
import { cn } from "@/lib/utils";

interface LeaderboardItemProps {
  rank: number;
  name: string;
  points: number;
  avatar: string;
  isCurrentUser?: boolean;
  className?: string;
}

export function LeaderboardItem({
  rank,
  name,
  points,
  avatar,
  isCurrentUser = false,
  className,
}: LeaderboardItemProps) {
  return (
    <div className={cn(
      "flex items-center p-3 rounded-lg transition-colors",
      isCurrentUser ? "bg-wastesense-green/5 border border-wastesense-green/20" : "hover:bg-wastesense-gray-50",
      className
    )}>
      <div className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
        rank === 1 
          ? "bg-yellow-100 text-yellow-700" 
          : rank === 2 
            ? "bg-gray-100 text-gray-700" 
            : rank === 3 
              ? "bg-amber-100 text-amber-700"
              : "bg-wastesense-gray-100 text-wastesense-gray-700"
      )}>
        {rank}
      </div>
      
      <div className="ml-3 flex items-center">
        <img 
          src={avatar} 
          alt={name} 
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className={cn(
            "text-sm font-medium",
            isCurrentUser && "text-wastesense-green"
          )}>
            {name} {isCurrentUser && <span className="text-xs">(You)</span>}
          </p>
          <p className="text-xs text-wastesense-gray-500">
            {points.toLocaleString()} points
          </p>
        </div>
      </div>
      
      {isCurrentUser && (
        <div className="ml-auto rounded-full bg-wastesense-green/10 px-2 py-0.5 text-xs font-medium text-wastesense-green">
          Your Rank
        </div>
      )}
    </div>
  );
}
