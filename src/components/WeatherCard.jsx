import { useWeather } from "../context/WeatherContext";

const WeatherCard = () => {
  const weather = useWeather();

  if (!weather) return null;

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">🌤 Weather</h3>

      <p className="text-sm text-gray-500">{weather.city}</p>

      <p className="text-3xl font-bold mt-2">{weather.temp}°C</p>
      <p className="text-sm">{weather.condition}</p>

      <div className="flex justify-between text-sm mt-3">
        <span>💧 {weather.humidity}%</span>
      </div>
    </div>
  );
};

export default WeatherCard;
