import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EnergyChart from "../components/EnergyChart";
import Clock from "../components/Clock";
import WeatherCard from "../components/WeatherCard";
import StatCard from "../components/StatCard";
import SystemStatus from "../components/SystemStatus";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen text-slate-100">
      <Sidebar />

      <main className="flex-1 p-8 space-y-8 bg-gradient-to-br from-slate-950 to-blue-950">
        <Header />

        {/* Top widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Clock />
          <WeatherCard />
          <StatCard title="Consumption Today" value="32.5" unit="kWh" />
          <StatCard title="Solar Production" value="18.2" unit="kWh" />
        </div>

        {/* Charts & status */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <EnergyChart />
          </div>
          <SystemStatus />
        </div>
      </main>
    </div>
  );
}
