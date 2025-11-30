import { useState, useEffect } from 'react';
import HeroScene from './components/3d/HeroScene';
import SurabayaMap from './components/map/SurabayaMap';
import ModalDetail from './components/ui/ModalDetail';
import Navbar from './components/ui/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import ModalVolunteer from './components/ui/ModalVolunteer'; // <--- 1. Import Modal Volunteer
import { umkmData, type UMKM } from './data/umkmData';

function App() {
  // 1. State Filter Kategori
  const [activeCategory, setActiveCategory] = useState('Semua');
  
  // 2. State untuk Modal Detail
  const [selectedUMKM, setSelectedUMKM] = useState<UMKM | null>(null);

  // 3. State Loading Screen
  const [isLoading, setIsLoading] = useState(true);

  // 4. State untuk Modal Volunteer (BARU)
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  // Effect: Scroll ke atas saat refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Semua', 'Kuliner', 'Fashion', 'Kerajinan'];

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        
        <Navbar />

        {/* Modal Detail UMKM */}
        <ModalDetail 
          umkm={selectedUMKM} 
          onClose={() => setSelectedUMKM(null)} 
        />

        {/* --- 5. MODAL VOLUNTEER (Muncul jika state true) --- */}
        {showVolunteerModal && (
          <ModalVolunteer onClose={() => setShowVolunteerModal(false)} />
        )}

        {/* Hero Section */}
        <HeroScene /> 

        {/* Konten Utama */}
        <main id="map-section" className="flex-grow container mx-auto px-4 pb-12 -mt-24 relative z-20">
          
          {/* Card Peta Utama */}
          <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-10 border border-white/40 ring-1 ring-black/5 animate-slide-up">
            
            {/* Header Peta */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-100 pb-8 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-indigo-100 text-indigo-700 p-2 rounded-lg">📍</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
                    Peta Sebaran
                  </h2>
                </div>
                <p className="text-slate-500 text-base md:text-lg">
                  Temukan <strong>{umkmData.length} UMKM</strong> unggulan Surabaya. Gunakan filter di samping.
                </p>
              </div>
              
              {/* Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm
                      ${activeCategory === cat 
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 shadow-indigo-200' 
                        : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-white hover:border-indigo-300 hover:text-indigo-600'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Container Peta */}
            <div className="h-[500px] md:h-[650px] w-full rounded-3xl overflow-hidden shadow-inner border border-slate-200 ring-4 ring-slate-50 relative group">
              <div className="absolute top-6 right-6 z-[400] bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-slate-100 text-sm font-bold text-indigo-900 pointer-events-none transform group-hover:scale-105 transition-transform">
                Filter: <span className="text-indigo-600">{activeCategory}</span>
              </div>
              <SurabayaMap 
                filterCategory={activeCategory} 
                onSelectUMKM={(umkm) => setSelectedUMKM(umkm)} 
              />
            </div>
            
            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm font-medium text-slate-600">
               <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">
                  <span className="w-3 h-3 rounded-full bg-orange-500 shadow-sm"></span> Kuliner
               </div>
               <div className="flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full border border-purple-100">
                  <span className="w-3 h-3 rounded-full bg-purple-500 shadow-sm"></span> Fashion
               </div>
               <div className="flex items-center gap-2 px-3 py-1 bg-teal-50 rounded-full border border-teal-100">
                  <span className="w-3 h-3 rounded-full bg-teal-500 shadow-sm"></span> Kerajinan
               </div>
            </div>

          </div>

          {/* --- SECTION SKILLBRIDGE --- */}
          <section className="mt-24 grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
               <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-2">
                  🚀 Program Unggulan
               </div>
               <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                 SkillBridge: <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Relawan Digital</span>
               </h2>
               <p className="text-slate-600 text-lg leading-relaxed">
                 Menjembatani kesenjangan digital dengan menghubungkan profesional ahli dan UMKM. 
                 Platform micro-mentoring untuk solusi bisnis yang cepat dan tepat sasaran.
               </p>
               
               <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl shadow-sm">🤝</div>
                    <div>
                      <h4 className="font-bold text-slate-800">Matchmaking Cerdas</h4>
                      <p className="text-sm text-slate-500">Algoritma pencocokan kebutuhan UMKM dengan skill relawan.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-sm">📹</div>
                    <div>
                      <h4 className="font-bold text-slate-800">Sesi Micro-Mentoring</h4>
                      <p className="text-sm text-slate-500">Konsultasi virtual intensif 30-60 menit.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl shadow-sm">📂</div>
                    <div>
                      <h4 className="font-bold text-slate-800">Pustaka Aset Digital</h4>
                      <p className="text-sm text-slate-500">Akses gratis ke template laporan dan desain.</p>
                    </div>
                  </div>
               </div>

               {/* --- 6. UPDATE TOMBOL DENGAN ONCLICK --- */}
               <button 
                  onClick={() => setShowVolunteerModal(true)}
                  className="mt-4 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg transform hover:-translate-y-1"
               >
                  Gabung Jadi Relawan
               </button>
            </div>
            
            {/* Visualisasi SkillBridge */}
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-indigo-500 rounded-[2rem] opacity-20 blur-2xl animate-pulse"></div>
               <div className="relative bg-white rounded-[2rem] p-8 shadow-2xl border border-slate-100">
                  <div className="bg-slate-50 rounded-xl p-4 mb-4 border border-slate-200">
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
                      <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                      <div>
                        <div className="h-2 w-24 bg-gray-300 rounded mb-1"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                      </div>
                      <div className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Online</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                      <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-xl text-center">
                       <div className="text-3xl font-extrabold text-indigo-600">500+</div>
                       <div className="text-xs font-semibold text-indigo-400 uppercase">Jam Mentoring</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl text-center">
                       <div className="text-3xl font-extrabold text-orange-500">120</div>
                       <div className="text-xs font-semibold text-orange-400 uppercase">UMKM Terbantu</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-slate-400 italic">"SkillBridge membantu saya menata laporan keuangan hanya dalam 1 jam sesi mentoring."</p>
                    <p className="text-xs font-bold text-slate-800 mt-2">- Bu Ani, Pemilik Batik Semanggi</p>
                  </div>
               </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-slate-950 text-white py-16 border-t border-slate-900 mt-24">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">UMKM Surabaya Verse</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-10 leading-relaxed">
              Dibuat dengan ❤️ untuk mendukung transformasi digital UMKM. <br/>
              Menggabungkan teknologi modern dan kearifan lokal.
            </p>
            <div className="text-xs text-slate-600 border-t border-slate-900 pt-8">
              &copy; 2025 Tim Developer Surabaya. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;