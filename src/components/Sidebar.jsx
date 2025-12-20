export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 p-6">
      <h1 className="text-2xl font-bold mb-10 tracking-wide">
        Energy Controller
      </h1>

      <ul className="space-y-4 text-slate-200">
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Dashboard</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Consumption</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Solar</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Battery</li>
        <li className="opacity-80 hover:opacity-100 cursor-pointer">Settings</li>
      </ul>
    </aside>
  );
}

