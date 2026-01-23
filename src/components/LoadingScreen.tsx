import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // Speed of counter

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center">
      
      <div className="text-center">
        {/* Main "LOADING" Text - Strong Bold */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.2em] uppercase mb-2">
          LOAD<span className="text-blue-600">ING</span>
        </h1>

        {/* Percentage Counter - Below Loading */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] w-12 bg-blue-600/30"></div>
          <span className="text-4xl md:text-5xl font-black text-blue-500 tracking-tighter tabular-nums">
            {progress}%
          </span>
          <div className="h-[2px] w-12 bg-blue-600/30"></div>
        </div>
      </div>

      {/* Modern Slim Progress Bar */}
      <div className="mt-10 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-12 text-center">
        <p className="text-gray-500 text-[9px] uppercase tracking-[0.5em] font-bold mb-2">
          Portfolio OS v2.0
        </p>
        <h2 className="text-white/40 font-black text-xs tracking-[0.3em] uppercase">
          SENESH <span className="text-blue-900">PAHAN</span>
        </h2>
      </div>

    </div>
  );
}