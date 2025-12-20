import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WeatherProvider } from "./context/WeatherContext";

<WeatherProvider>
  <App />
</WeatherProvider>


ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

