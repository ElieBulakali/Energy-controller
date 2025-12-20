export default function WeatherCard() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl">
      <p className="text-sm text-slate-400">Weather</p>

      <div className="flex items-center justify-between mt-4">
        <div>
          <h3 className="text-3xl font-bold">24°C</h3>
          <p className="text-slate-400">Partly Cloudy</p>
        </div>

        <div className="text-4xl">⛅</div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Kigali, Rwanda
      </p>
    </div>
  );
}
