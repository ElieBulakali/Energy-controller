
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EnergyChart from "../components/EnergyChart";

export default function Dashboard() {
  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <Header />
        <EnergyChart />
      </main>
    </div>
  );
}
