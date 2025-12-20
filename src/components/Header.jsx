
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <h2 className="text-3xl font-bold">Make Things Simple!</h2>
      <p className="opacity-70">Energy monitoring dashboard</p>
    </motion.div>
  );
}
