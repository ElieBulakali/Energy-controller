import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EnergyChart from "../components/EnergyChart";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen text-slate-100">
      <Sidebar />

      <main className="flex-1 p-8 space-y-8 bg-gradient-to-br from-slate-950 to-blue-950">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <EnergyChart />
          <EnergyChart />
          <EnergyChart />
        </div>
      </main>
    </div>
  );
}

