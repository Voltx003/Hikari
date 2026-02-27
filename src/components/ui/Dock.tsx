// src/components/ui/Dock.tsx
import { Home, Compass, MessageSquare, Settings } from 'lucide-react';

export function Dock() {
  const items = [
    { icon: <Home size={24} />, label: "Home" },
    { icon: <Compass size={24} />, label: "Explore" },
    { icon: <MessageSquare size={24} />, label: "Chat" },
    { icon: <Settings size={24} />, label: "Config" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl shadow-2xl transition-all hover:scale-105 hover:bg-white/15">
        {items.map((item, index) => (
          <button
            key={index}
            className="group relative p-3 rounded-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 active:scale-95"
          >
            <div className="text-white/80 group-hover:text-cyan-400 transition-colors">
              {item.icon}
            </div>
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded-md backdrop-blur-md pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
            {/* Reflection dot */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_8px_2px_rgba(0,255,255,0.6)]" />
          </button>
        ))}
      </div>
    </div>
  );
}
