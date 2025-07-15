import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SmartPlayDashboard from "./components/SmartPlay/SmartPlayDashboard";
import ChallengesPage from "./components/SmartPlay/ChallengesPage";
import RewardsPage from "./components/SmartPlay/RewardsPage";
import WalletPage from "./components/SmartPlay/WalletPage";
import PlannerHome from "./components/SmartPlanner/PlannerHome";
import EventSetupForm from "./components/SmartPlanner/EventSetupForm";
import ChecklistPage from "./components/SmartPlanner/ChecklistPage";
import BundlePreview from "./components/SmartPlanner/BundlePreview";
import SmartPlayRewardSummary from "./components/SmartPlanner/SmartPlayRewardSummary";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<SmartPlayDashboard />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/planner" element={<PlannerHome />} />
          <Route path="/planner/details" element={<EventSetupForm />} />
          <Route path="/planner/checklist" element={<ChecklistPage />} />
          <Route path="/planner/bundle" element={<BundlePreview />} />
          <Route path="/planner/reward-summary" element={<SmartPlayRewardSummary />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
