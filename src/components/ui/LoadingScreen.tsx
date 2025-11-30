import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Tahan loading screen selama 2.5 detik untuk memastikan aset 3D siap
    // Sekaligus memamerkan branding logo
    const timer = setTimeout(() => {
      setFade(true); // Mulai animasi menghilang
      setTimeout(onFinished, 800); // Hapus dari DOM setelah animasi selesai
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-800 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Logo Animasi */}
      <div className="relative flex items-center justify-center">
        {/* Lingkaran Luar Berputar */}
        <div className="w-24 h-24 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
        
        {/* Logo Tengah */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/50 animate-pulse">
              <span className="text-3xl font-bold text-white">S</span>
           </div>
        </div>
      </div>

      {/* Teks Loading */}
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold text-white tracking-widest animate-pulse">
          UMKM<span className="text-indigo-500">VERSE</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2 font-light">Memuat Aset Digital...</p>
      </div>

      {/* Progress Bar Hiasan */}
      <div className="mt-8 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-full origin-left animate-[grow_2.5s_ease-in-out]"></div>
      </div>

    </div>
  );
}