import { NavLink } from "react-router-dom";

export default function RewardsPage() {
  const badges = [
    { title: "SmartSaver", desc: "Earned 1000 points", earned: true },
    { title: "Explorer", desc: "Shopped 5 categories", earned: true },
    { title: "Eco-Shopper", desc: "Completed 3 green purchases", earned: false },
  ];

  const rewards = [
    { title: " 50 Off Coupon", cost: 100 },
    { title: "Free Delivery", cost: 200 },
    { title: "10% Off Apparel", cost: 150 },
  ];

  return (
    <div>
      <nav className="mb-8 flex space-x-4 justify-center">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Dashboard</NavLink>
        <NavLink to="/challenges" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Challenges</NavLink>
        <NavLink to="/rewards" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Rewards</NavLink>
        <NavLink to="/wallet" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Wallet</NavLink>
      </nav>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Rewards & Badges</h2>
      <p className="text-gray-600 mb-8">Earn badges and redeem exciting rewards!</p>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Badges</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {badges.map((b, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg shadow-md ${b.earned ? "bg-green-50" : "bg-gray-100 opacity-60 grayscale"}`}
          >
            <h4 className="text-blue-700 font-semibold">{b.title}</h4>
            <p className="text-sm text-gray-600">{b.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">Redeemable Rewards</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {rewards.map((r, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h4 className="text-blue-700 font-semibold">{r.title}</h4>
            <p className="text-sm text-gray-500 mb-2">Cost: {r.cost} pts</p>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition">
              Redeem
            </button>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-xl font-bold text-yellow-700 mb-2">
 Spin to Win</h3>
        <p className="text-sm text-gray-600 mb-4">Try your luck and win bonus points!</p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition">
          SPIN
        </button>
      </div>
    </div>
  );
} 