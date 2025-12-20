export default function SystemStatus() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl">
      <h3 className="font-semibold mb-4">System Status</h3>

      <ul className="space-y-3 text-sm">
        <li className="flex justify-between">
          <span>Grid</span>
          <span className="text-green-400">Online</span>
        </li>
        <li className="flex justify-between">
          <span>Solar</span>
          <span className="text-yellow-400">Producing</span>
        </li>
        <li className="flex justify-between">
          <span>Battery</span>
          <span className="text-blue-400">78%</span>
        </li>
      </ul>
    </div>
  );
}
