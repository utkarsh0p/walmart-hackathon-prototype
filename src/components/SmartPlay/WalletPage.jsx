import { NavLink } from "react-router-dom";

export default function WalletPage() {
  const transactions = [
    { type: "Earned", description: "Completed challenge: Buy 3 new categories", points: "+150", date: "Jul 12" },
    { type: "Redeemed", description: " 50 Off Coupon", points: "-100", date: "Jul 10" },
    { type: "Earned", description: "Referred a friend", points: "+200", date: "Jul 08" },
    { type: "Donated", description: "Tree Planting Campaign", points: "-250", date: "Jul 05" },
  ];

  const donations = [
    { title: "Plant a Tree", cost: 100 },
    { title: "Support Clean Water", cost: 200 },
  ];

  return (
    <div>
      <nav className="mb-8 flex space-x-4 justify-center">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Dashboard</NavLink>
        <NavLink to="/challenges" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Challenges</NavLink>
        <NavLink to="/rewards" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Rewards</NavLink>
        <NavLink to="/wallet" className={({ isActive }) => isActive ? "text-blue-700 font-bold underline" : "text-gray-600 hover:text-blue-700"}>Wallet</NavLink>
      </nav>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">SmartPlay Wallet</h2>
      <p className="text-gray-600 mb-6">Track your points and make a difference.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white p-4 rounded-lg text-center shadow">
          <h3 className="text-sm text-gray-500">Total Points</h3>
          <p className="text-2xl font-bold text-blue-700">1,250</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center shadow">
          <h3 className="text-sm text-gray-500">Lifetime Points</h3>
          <p className="text-2xl font-bold text-blue-700">6,540</p>
        </div>
        <div className="bg-white p-4 rounded-lg text-center shadow">
          <h3 className="text-sm text-gray-500">Expiring Soon</h3>
          <p className="text-2xl font-bold text-yellow-600">50</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">Transaction History</h3>
      <ul className="mb-10">
        {transactions.map((tx, i) => (
          <li key={i} className="bg-white p-4 rounded-lg mb-3 shadow-sm">
            <div className="flex justify-between text-sm">
              <span>{tx.description}</span>
              <span className={`font-semibold ${tx.type === "Earned" ? "text-green-600" : tx.type === "Redeemed" ? "text-red-500" : "text-yellow-600"}`}>
                {tx.points}
              </span>
            </div>
            <div className="text-xs text-gray-400 mt-1">{tx.date}</div>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">Make a Donation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donations.map((d, i) => (
          <div key={i} className="bg-green-50 p-4 rounded-lg shadow-md">
            <h4 className="font-semibold text-green-700">{d.title}</h4>
            <p className="text-sm text-gray-600 mb-3">Donate {d.cost} points</p>
            <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
              Donate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 