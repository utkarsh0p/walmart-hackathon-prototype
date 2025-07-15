import { NavLink } from "react-router-dom";

export default function ChallengesPage() {
  const challenges = [
    {
      title: "Buy from 3 new categories",
      progress: 2,
      total: 3,
      status: "In Progress",
      points: 150,
    },
    {
      title: "Complete 2 online orders this month",
      progress: 1,
      total: 2,
      status: "In Progress",
      points: 200,
    },
    {
      title: "Redeem a coupon this week",
      progress: 1,
      total: 1,
      status: "Completed",
      points: 100,
    },
  ];

  return (
    <div>
      <nav className="mb-8 flex space-x-4 justify-center">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Dashboard</NavLink>
        <NavLink to="/challenges" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Challenges</NavLink>
        <NavLink to="/rewards" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Rewards</NavLink>
        <NavLink to="/wallet" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Wallet</NavLink>
      </nav>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Your Smart Challenges</h2>
      <p className="text-gray-600 mb-6">Complete these tasks to earn points and unlock new rewards!</p>

      <div className="space-y-4">
        {challenges.map((c, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">{c.title}</h3>
              <span className={`text-sm font-medium ${c.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
                {c.status}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${(c.progress / c.total) * 100}%` }}
              ></div>
            </div>

            <div className="text-sm text-gray-500">
              Progress: {c.progress} / {c.total}  +{c.points} pts
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 