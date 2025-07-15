import { useNavigate } from "react-router-dom";

export default function PlannerHome() {
  const navigate = useNavigate();

  const occasions = [
    { name: "Birthday", icon: "🎂" },
    { name: "Wedding", icon: "💍" },
    { name: "Housewarming", icon: "🏡" },
    { name: "Diwali", icon: "🪔" },
    { name: "Graduation", icon: "🎓" },
  ];

  const handleSelect = (occasion) => {
    navigate("/planner/details");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-700 mb-2">SmartPlanner</h2>
      <p className="text-gray-600 mb-6">What are you planning today?</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {occasions.map((o, i) => (
          <button
            key={i}
            onClick={() => handleSelect(o.name)}
            className="bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition text-left"
          >
            <div className="text-3xl mb-2">{o.icon}</div>
            <div className="font-semibold text-gray-800">{o.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
} 