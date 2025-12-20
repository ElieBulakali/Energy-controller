const styles = {
  danger: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
  info: "bg-blue-100 text-blue-700",
};

const icons = {
  danger: "🚨",
  warning: "⚠️",
  info: "ℹ️",
};

const AlertItem = ({ type, message }) => {
  return (
    <div
      className={`p-3 rounded-lg text-sm flex items-center gap-2 ${styles[type]}`}
    >
      <span>{icons[type]}</span>
      <span>{message}</span>
    </div>
  );
};

export default AlertItem;
