
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", energy: 400 },
  { name: "Tue", energy: 300 },
  { name: "Wed", energy: 500 },
  { name: "Thu", energy: 200 },
  { name: "Fri", energy: 450 }
];

export default function EnergyChart() {
  return (
    <div className="bg-slate-900/60 p-6 rounded-2xl shadow-xl">
      <h3 className="mb-4 font-semibold">Energy Usage</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="energy" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
