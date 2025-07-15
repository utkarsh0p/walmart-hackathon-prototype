import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChecklistPage() {
  const navigate = useNavigate();

  const [checklist, setChecklist] = useState([
    {
      category: "decor",
      items: [
        { name: "Balloons", qty: 50, selected: true },
        { name: "Fairy Lights", qty: 3, selected: true },
        { name: "Table Covers", qty: 5, selected: true },
      ],
    },
    {
      category: "food",
      items: [
        { name: "Snacks Platter", qty: 2, selected: true },
        { name: "Cake", qty: 1, selected: true },
        { name: "Drinks", qty: 20, selected: true },
      ],
    },
    {
      category: "return gifts",
      items: [
        { name: "Gift Bags", qty: 20, selected: true },
        { name: "Stationery Kit", qty: 20, selected: false },
      ],
    },
  ]);

  const toggleItem = (catIndex, itemIndex) => {
    const updated = [...checklist];
    updated[catIndex].items[itemIndex].selected = !updated[catIndex].items[itemIndex].selected;
    setChecklist(updated);
  };

  const handleContinue = () => {
    navigate("/planner/bundle");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-700 mb-2">Your Event Checklist</h2>
      <p className="text-gray-600 mb-6">Toggle items you'd like to include in your bundle.</p>

      <div className="space-y-6">
        {checklist.map((group, groupIdx) => (
          <div key={groupIdx}>
            <h3 className="font-semibold text-gray-700 mb-2">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx} className="bg-white p-4 rounded-md shadow flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleItem(groupIdx, itemIdx)}
                    className="w-5 h-5"
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="mt-8 bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 transition"
      >
        Continue to Bundle
      </button>
    </div>
  );
} 