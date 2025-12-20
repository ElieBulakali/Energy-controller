import { useEffect, useState } from "react";

export default function useEnergyMonitor(weatherTemp) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // données simulées (plus tard API réelle)
      const energyUsage = Math.floor(Math.random() * 100);
      const batteryLevel = Math.floor(Math.random() * 100);

      const newAlerts = [];

      if (energyUsage > 80) {
        newAlerts.push({
          type: "danger",
          message: "High energy consumption detected",
        });
      }

      if (batteryLevel < 20) {
        newAlerts.push({
          type: "warning",
          message: "Battery level critically low",
        });
      }

      if (weatherTemp && weatherTemp > 30) {
        newAlerts.push({
          type: "info",
          message: "High temperature may affect energy efficiency",
        });
      }

      setAlerts(newAlerts);
    }, 4000);

    return () => clearInterval(interval);
  }, [weatherTemp]);

  return alerts;
}
