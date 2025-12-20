import AlertItem from "./AlertItem";
import useEnergyMonitor from "../hooks/useEnergyMonitor";
import { useWeather } from "../context/WeatherContext";



<AlertsPanel weatherTemp={weather?.temp} />


const AlertsPanel = ({ weatherTemp }) => {
  const weather = useWeather();
  const alerts = useEnergyMonitor(weatherTemp);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-3">🔔 Alerts</h3>

      {alerts.length === 0 ? (
        <p className="text-sm text-gray-500">✅ System operating normally</p>
      ) : (
        <div className="space-y-2">
          {alerts.map((alert, index) => (
            <AlertItem
              key={index}
              type={alert.type}
              message={alert.message}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlertsPanel;
