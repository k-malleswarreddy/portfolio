import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-400" />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold text-gradient">KM</div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 font-mono text-sm text-slate-400"
      >
        Initializing portfolio<span className="animate-pulse">...</span>
      </motion.p>
    </motion.div>
  );
}
