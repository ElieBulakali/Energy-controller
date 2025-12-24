# Energy-controller
⚡ Energy-Controller

Energy-Controller is a modern web dashboard designed to monitor, analyze, and optimize energy systems in real time.
It provides actionable insights through live alerts, system metrics, and environmental context to support better energy management decisions.

🚀 Live Demo

🔗 GitHub Pages:
https://<your-username>.github.io/Energy-Controller/

🎯 Purpose of the Application

The goal of Energy-Controller is to:

Monitor energy consumption trends

Detect abnormal energy usage

Track system health (battery, temperature, efficiency)

Alert operators in real time

Provide a scalable foundation for smart-grid and IoT energy platforms

🖥️ Key Features
1️⃣ Real-Time Dashboard

Energy consumption visualization

Battery level simulation

System status indicators

Clean, responsive UI (desktop & mobile)

2️⃣ Smart Alert System

🔥 High energy consumption alerts

⚠️ Low battery warnings

🌡️ Weather-based efficiency alerts

Auto-refresh every few seconds

Alert severity levels:

info

warning

danger

3️⃣ Weather Context (Simulated / Extendable)

Temperature-aware alerts

Designed for future real API integration

Context-based energy efficiency logic

4️⃣ Modular & Scalable Architecture

Custom React Hooks

Context API for global state

Clean folder separation

Production-ready structure

5️⃣ Dark / Light Mode (UI Ready)

Tailwind-based theming

Easily extendable for persistent user preferences

🧠 Functional Flow (How It Works)

Weather data (simulated) is provided through WeatherContext

useEnergyMonitor analyzes:

Energy usage

Battery level

Environmental conditions

Alerts are generated dynamically

Dashboard components display live system state

UI updates automatically without page reload

🏗️ Project Architecture
src/
 ├─ components/
 │   ├─ AlertsPanel.jsx
 │   ├─ AlertItem.jsx
 │   ├─ EnergyChart.jsx
 │   ├─ StatCard.jsx
 │   └─ SystemStatus.jsx
 │
 ├─ pages/
 │   └─ Dashboard.jsx
 │
 ├─ hooks/
 │   └─ useEnergyMonitor.js
 │
 ├─ context/
 │   └─ WeatherContext.jsx
 │
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css

🧩 Tech Stack
Layer	Technology
Frontend	React.js (Vite)
Styling	Tailwind CSS
State Management	React Context API
Logic Layer	Custom React Hooks
Charts	Chart.js / Recharts (extendable)
Build Tool	Vite
Deployment	GitHub Pages
🔐 Security & Stability

No hard-coded secrets

Clean hook lifecycle management

Interval cleanup handled properly

No circular imports

🧠 MIS SCHEMA (Management Information System)
📊 MIS Overview

The MIS structure defines how data flows, who consumes it, and how decisions are triggered within the system.

🧱 MIS Logical Schema
┌─────────────────────┐
│   Energy Sources    │
│ (Solar / Grid / IoT)│
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Data Acquisition   │
│ Sensors / APIs      │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│  Processing Layer   │
│ - Energy Analysis   │
│ - Threshold Engine  │
│ - Alert Generator   │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Application Layer   │
│ React + Hooks       │
│ Context API         │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Presentation Layer  │
│ Dashboard UI        │
│ Alerts & Charts     │
└─────────┬───────────┘
          ↓
┌─────────────────────┐
│ Decision Support    │
│ Operators / Admins  │
└─────────────────────┘

📂 MIS Data Entities
🔹 EnergyData
Field	Type
timestamp	Date
energyUsage	Number (%)
batteryLevel	Number (%)
efficiency	Number
🔹 WeatherData
Field	Type
temperature	Number (°C)
humidity	Number (%)
condition	String
🔹 Alert
Field	Type
id	UUID
type	info / warning / danger
message	String
createdAt	Date
resolved	Boolean
👥 MIS User Roles (Future-Ready)
Role	Permissions
Admin	Full system control
Operator	Monitor & acknowledge alerts
Viewer	Read-only dashboard access
📈 MIS KPIs Supported

Energy consumption trends

Alert frequency

System uptime

Battery health

Environmental impact correlation

🛣️ Roadmap

✅ Dashboard foundation

✅ Alert system

⏳ Real weather API integration

⏳ Real energy data (IoT / API)

⏳ Authentication & roles

⏳ Historical data & analytics

⏳ Notifications (email / SMS / push)

🧪 Local Development
git clone https://github.com/<username>/Energy-Controller.git
cd Energy-Controller
npm install
npm run dev

🌍 Deployment
npm run build
npm run deploy


Deployed using GitHub Pages with Vite base path configuration.

👤 Author

Elie Yeki Bulakali
Frontend Developer | Energy Systems Enthusiast

📜 License

MIT License — free to use, modify, and distribute.
