import { motion } from 'framer-motion';

export function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 text-white z-10">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-center"
      >
        <div className="text-2xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Cosmic UI
        </div>
        <nav className="space-x-6 text-sm font-light tracking-wide opacity-80 pointer-events-auto">
          <a href="#" className="hover:text-cyan-400 transition-colors">Mission</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Tech</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
        </nav>
      </motion.header>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="flex flex-col items-center justify-center text-center space-y-4"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-cyan-200 to-blue-500">
            FUTURE
          </span>
          <br />
          <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 opacity-80">
            AWAITS
          </span>
        </h1>
        <p className="max-w-md text-gray-300 font-light text-lg backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/10">
          Explore the depths of the digital universe. Experience interaction like never before.
        </p>
        <button className="pointer-events-auto mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white font-medium tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
          Launch Experience
        </button>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex justify-between items-end text-xs text-gray-500 uppercase tracking-widest"
      >
        <div>
          Coordinates: <span className="text-cyan-400">42.00° N, 12.00° E</span>
        </div>
        <div>
          Status: <span className="text-green-400 animate-pulse">Online</span>
        </div>
      </motion.footer>
    </div>
  );
}
