
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-blue-900 to-slate-900 p-6">
      <h1 className="text-xl font-bold mb-8">Energy Controller</h1>
      <ul className="space-y-4 opacity-80">
        <li>Dashboard</li>
        <li>Consumption</li>
        <li>Solar</li>
        <li>Battery</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
