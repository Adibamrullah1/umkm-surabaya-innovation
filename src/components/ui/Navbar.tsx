import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors 
            ${scrolled ? 'text-slate-800' : 'text-white'}`}>
            UMKM<span className="text-indigo-500">Verse</span>
          </span>
        </div>

        {/* Menu (Simpel) */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
            className={`text-sm font-medium transition-colors hover:text-indigo-500
              ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
          >
            Jelajahi Peta
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-indigo-500/30">
            Gabung Mitra
          </button>
        </div>
      </div>
    </nav>
  );
}