import { Link } from "react-router-dom";

export default function SmartPlayRewardSummary() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-yellow-700 mb-2">
Planner Completed!</h2>
      <p className="text-gray-600 mb-6">You  ve successfully added your event bundle to the cart.</p>

      <div className="bg-white shadow-md p-6 rounded-xl inline-block mb-8">
        <h3 className="text-gray-700 text-lg font-medium mb-2">SmartPlay Points Earned</h3>
        <p className="text-4xl font-bold text-blue-700">+500</p>
        <p className="text-sm text-gray-500 mt-1">Bonus: +50 for full checklist completion</p>
      </div>

      <div className="space-y-4 max-w-md mx-auto text-left">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-gray-800 font-semibold">Refer a Friend</h4>
          <p className="text-sm text-gray-600">Invite a friend to try SmartPlanner and earn 100 bonus points.</p>
          <button className="mt-2 text-blue-600 text-sm hover:underline">Generate Referral Link</button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-gray-800 font-semibold">Share Your Plan</h4>
          <p className="text-sm text-gray-600">Post your event plan and earn 50 more points.</p>
          <button className="mt-2 text-blue-600 text-sm hover:underline">Share Plan</button>
        </div>
      </div>

      <div className="mt-10 space-x-4">
        <Link to="/wallet" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          View Wallet
        </Link>
        <Link to="/dashboard" className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300 transition">
          Go to SmartPlay
        </Link>
      </div>
    </div>
  );
} 