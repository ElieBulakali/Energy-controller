
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", energy: 400 },
  { name: "Tue", energy: 300 },
  { name: "Wed", energy: 500 },
  { name: "Thu", energy: 200 },
  { name: "Fri", energy: 450 },
];

export default function EnergyChart() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
      <h3 className="mb-4 font-semibold text-lg">Energy Usage</h3>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
