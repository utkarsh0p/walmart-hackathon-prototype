import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const smartPlayActive = ["/dashboard", "/challenges", "/rewards", "/wallet"].some(path => location.pathname.startsWith(path));
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 bg-white shadow-md z-50">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700">Walmart SmartHub</h1>
          <div className="flex space-x-4 text-sm font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-700" : "text-gray-600"}>Home</NavLink>
            <NavLink
              to="/dashboard"
              className={smartPlayActive ? "text-blue-700" : "text-gray-600"}
            >
              SmartPlay
            </NavLink>
            <NavLink to="/planner" className={({ isActive }) => isActive ? "text-blue-700" : "text-gray-600"}>SmartPlanner</NavLink>
          </div>
        </nav>
      </header>

      <main className="px-4 py-6 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
} 