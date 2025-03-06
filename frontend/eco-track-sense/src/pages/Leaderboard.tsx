
import { Trophy } from "lucide-react";
import { AppHeader } from "@/components/navigation/app-header";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { LeaderboardItem } from "@/components/dashboard/leaderboard-item";

// Sample leaderboard data
const leaderboardData = [
  {
    id: 1,
    rank: 1,
    name: "Emma Thompson",
    points: 8750,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    rank: 2,
    name: "James Wilson",
    points: 7890,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    rank: 3,
    name: "Sophia Martinez",
    points: 7520,
    avatar: "https://randomuser.me/api/portraits/women/37.jpg",
  },
  {
    id: 4,
    rank: 4,
    name: "Alex Johnson",
    points: 6930,
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    isCurrentUser: true,
  },
  {
    id: 5,
    rank: 5,
    name: "Olivia Brown",
    points: 6280,
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    id: 6,
    rank: 6,
    name: "Noah Garcia",
    points: 5970,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 7,
    rank: 7,
    name: "Ava Williams",
    points: 5780,
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    id: 8,
    rank: 8,
    name: "William Davis",
    points: 5430,
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 9,
    rank: 9,
    name: "Isabella Lee",
    points: 5240,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    id: 10,
    rank: 10,
    name: "Michael Kim",
    points: 4980,
    avatar: "https://randomuser.me/api/portraits/men/73.jpg",
  },
];

const Leaderboard = () => {
  return (
    <div className="flex min-h-screen bg-wastesense-gray-50">
      <AppSidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <AppHeader />
        <main className="px-4 md:px-6 pt-24 pb-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Community Leaderboard</h1>
                <p className="mt-1 text-wastesense-gray-600">
                  See how you rank against other environmentally conscious users
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center bg-wastesense-green-light text-wastesense-green-dark p-2 px-4 rounded-lg">
                <Trophy className="mr-2 h-5 w-5" />
                <span className="text-sm font-medium">Your Position: 4th Place</span>
              </div>
            </div>
            
            {/* Top 3 Users */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {leaderboardData.slice(0, 3).map((user) => (
                <div key={user.id} className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-wastesense-gray-200">
                  <div className={`text-2xl font-bold h-12 w-12 flex items-center justify-center rounded-full mb-4 ${
                    user.rank === 1 
                      ? "bg-yellow-100 text-yellow-700"
                      : user.rank === 2
                        ? "bg-gray-100 text-gray-700"
                        : "bg-amber-100 text-amber-700"
                  }`}>
                    {user.rank}
                  </div>
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="h-20 w-20 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-medium">{user.name}</h3>
                  <p className="text-wastesense-green font-medium">{user.points.toLocaleString()} points</p>
                </div>
              ))}
            </div>
            
            {/* Leaderboard List */}
            <div className="bg-white rounded-xl border border-wastesense-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-wastesense-gray-200">
                <h2 className="text-lg font-medium">All Participants</h2>
              </div>
              <div className="divide-y divide-wastesense-gray-100">
                {leaderboardData.map((user) => (
                  <LeaderboardItem
                    key={user.id}
                    rank={user.rank}
                    name={user.name}
                    points={user.points}
                    avatar={user.avatar}
                    isCurrentUser={user.isCurrentUser}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leaderboard;
