export default function StatCard({ title, value, unit }) {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="text-3xl font-bold mt-2">
        {value} <span className="text-lg text-slate-400">{unit}</span>
      </h3>
    </div>
  );
}
