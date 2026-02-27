// src/components/ui/Overlay.tsx
import { Dock } from './Dock';
import { Sparkles, Activity, Clock, Layers } from 'lucide-react';

export function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 text-white z-20">
      {/* 2026 Header: Floating minimal bar */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg z-50 pointer-events-auto transition-all hover:bg-white/10 hover:border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
          <span className="text-xs font-mono tracking-widest text-cyan-200/80">
            SYSTEM ONLINE
          </span>
        </div>
        <div className="h-4 w-[1px] bg-white/10" />
        <div className="text-sm font-bold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-transparent bg-clip-text text-transparent">
          AURA OS v2.0
        </div>
      </header>

      {/* Bento Grid Content - Left */}
      <div className="absolute top-32 left-8 md:left-16 flex flex-col gap-4 w-64 pointer-events-auto">
        {/* Card 1: Main Title */}
        <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl group transition-all hover:border-cyan-500/30 hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.15)]">
          <div className="mb-2 p-2 w-fit rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300">
            <Sparkles size={20} />
          </div>
          <h1 className="text-3xl font-medium tracking-tighter text-white mb-1">
            Immersive
          </h1>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Experience the next generation of spatial computing.
          </p>
        </div>

        {/* Card 2: Stats */}
        <div className="p-5 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3">
            <Activity size={18} className="text-green-400" />
            <span className="text-xs font-mono text-gray-300">GPU LOAD</span>
          </div>
          <span className="text-sm font-bold text-white">12%</span>
        </div>
      </div>

      {/* Bento Grid Content - Right */}
      <div className="absolute top-32 right-8 md:right-16 flex flex-col gap-4 w-64 pointer-events-auto">
        <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
              <Layers size={20} />
            </div>
            <Clock size={16} className="text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Layers</h3>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-400 border border-white/5">
              Depth
            </span>
            <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-400 border border-white/5">
              Bloom
            </span>
            <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-gray-400 border border-white/5">
              Noise
            </span>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
}
