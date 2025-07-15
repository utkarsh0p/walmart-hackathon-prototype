import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">Walmart SmartHub</h2>
      <p className="text-gray-600 mb-10">Plan smarter. Shop smarter. Earn smarter.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">SmartPlay Rewards 
</h3>
          <p className="text-sm text-gray-600 mb-4">Complete challenges and earn points every time you shop.</p>
          <Link to="/dashboard" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Challenges</Link>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">SmartPlanner Assistant 
</h3>
          <p className="text-sm text-gray-600 mb-4">Plan birthdays, weddings, and festivals with smart AI checklists.</p>
          <Link to="/planner" className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">Start Planning</Link>
        </div>
      </div>
    </div>
  );
} 