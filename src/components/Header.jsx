import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-2"
    >
      <h2 className="text-4xl font-bold">Make Things Simple!</h2>
      <p className="text-slate-400">
        Real-time energy monitoring & control
      </p>
    </motion.div>
  );
}
