import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const generateWeather = () => {
      setWeather({
        city: "Kigali",
        temp: Math.floor(20 + Math.random() * 12), // 20 → 32
        humidity: Math.floor(50 + Math.random() * 30),
        condition: ["Sunny", "Cloudy", "Rainy"][
          Math.floor(Math.random() * 3)
        ],
      });
    };

    generateWeather();
    const interval = setInterval(generateWeather, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext); {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used inside WeatherProvider");
  }
  return context;
};
