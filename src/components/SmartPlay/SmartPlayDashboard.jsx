import { NavLink } from "react-router-dom";

export default function SmartPlayDashboard() {
  return (
    <div>
      <nav className="mb-8 flex space-x-4 justify-center">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Dashboard</NavLink>
        <NavLink to="/challenges" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Challenges</NavLink>
        <NavLink to="/rewards" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Rewards</NavLink>
        <NavLink to="/wallet" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Wallet</NavLink>
      </nav>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Welcome back, Utkarsh!</h2>
      <p className="text-gray-600 mb-6">Track your points, complete challenges, and unlock rewards.</p>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-600 mb-1">Current Points</h3>
        <p className="text-3xl font-bold text-blue-700">1,250</p>
        <p className="text-sm text-gray-400">You 250 points away from your next badge!</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Featured Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Buy from 3 new categories",
            "Complete 2 online orders this month",
            "Redeem a coupon this week"
          ].map((title, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="font-medium text-gray-800">{title}</p>
              <p className="text-xs text-gray-500 mt-1">+150 pts</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 