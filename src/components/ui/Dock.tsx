// src/components/ui/Dock.tsx
import { Home, Compass, MessageSquare, Settings } from 'lucide-react';

export function Dock() {
  const items = [
    { icon: <Home size={22} />, label: "Home" },
    { icon: <Compass size={22} />, label: "Explore" },
    { icon: <MessageSquare size={22} />, label: "Chat" },
    { icon: <Settings size={22} />, label: "Config" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto">
      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-2xl border border-white/20 px-4 py-3 rounded-3xl shadow-2xl transition-all hover:bg-black/70">
        {items.map((item, index) => (
          <button
            key={index}
            className="group relative p-3 rounded-2xl transition-all duration-300 hover:bg-white/10 active:scale-95"
          >
            <div className="text-white/70 group-hover:text-cyan-400 transition-colors">
              {item.icon}
            </div>
            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg backdrop-blur-md pointer-events-none whitespace-nowrap shadow-lg">
              {item.label}
            </span>
            {/* Reflection dot */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_8px_2px_rgba(0,255,255,0.6)]" />
          </button>
        ))}
      </div>
    </div>
  );
}
