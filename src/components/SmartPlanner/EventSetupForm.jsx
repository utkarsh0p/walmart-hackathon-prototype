import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EventSetupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    guests: "",
    budget: "",
    theme: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/planner/checklist");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-700 mb-2">Event Details</h2>
      <p className="text-gray-600 mb-6">Fill in your event details to generate a personalized checklist.</p>

      <form onSubmit={handleSubmit} className="grid gap-5 max-w-xl">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Event Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Number of Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Budget (Optional)</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Theme (Optional)</label>
          <input
            type="text"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Generate Checklist
        </button>
      </form>
    </div>
  );
} 