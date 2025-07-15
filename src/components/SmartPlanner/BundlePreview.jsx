import { useNavigate } from "react-router-dom";

export default function BundlePreview() {
  const navigate = useNavigate();

  const items = [
    { name: "Balloons", qty: 50, price: 200 },
    { name: "Cake", qty: 1, price: 500 },
    { name: "Drinks", qty: 20, price: 300 },
    { name: "Gift Bags", qty: 20, price: 400 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    navigate("/planner/reward-summary");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-700 mb-2">Review Your Bundle</h2>
      <p className="text-gray-600 mb-6">Here s what you ve selected for your event.</p>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">Qty: {item.qty}</p>
            </div>
            <p className="text-blue-700 font-semibold"> {item.price}</p>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <p className="text-gray-700 font-medium mb-1">Total: <span className="text-xl font-bold text-blue-700"> {total}</span></p>
        <button
          onClick={handleCheckout}
          className="mt-2 bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Add to Cart & Continue
        </button>
      </div>
    </div>
  );
} 