import Scene from './components/canvas/Scene';
import { Overlay } from './components/ui/Overlay';
import './styles/index.css';

function App() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        <Overlay />
      </div>
    </div>
  );
}

export default App;
