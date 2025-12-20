import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl">
      <p className="text-sm text-slate-400">Local Time</p>
      <h3 className="text-3xl font-bold">
        {time.toLocaleTimeString()}
      </h3>
      <p className="text-slate-400">
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}
