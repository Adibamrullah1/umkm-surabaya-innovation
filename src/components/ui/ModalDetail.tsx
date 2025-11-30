import { type UMKM } from '../../data/umkmData';

interface ModalDetailProps {
  umkm: UMKM | null;
  onClose: () => void;
}

export default function ModalDetail({ umkm, onClose }: ModalDetailProps) {
  if (!umkm) return null;

  // Placeholder image berdasarkan kategori agar lebih variatif
  const getImage = (cat: string) => {
    if (cat === 'Kuliner') return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000';
    if (cat === 'Fashion') return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000';
    return 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000';
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-slide-up">
        
        {/* Tombol Close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          ✕
        </button>

        {/* Gambar Header */}
        <div className="h-48 w-full relative">
          <img 
            src={getImage(umkm.category)} 
            alt={umkm.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
             <span className="text-white text-xs font-bold px-2 py-1 bg-indigo-600 rounded-md">
                {umkm.category}
             </span>
          </div>
        </div>

        {/* Konten */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-slate-900">{umkm.name}</h2>
          <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
            📍 {umkm.address}
          </p>

          <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
             <h4 className="text-sm font-semibold text-slate-800 mb-1">Tentang Usaha</h4>
             <p className="text-slate-600 text-sm leading-relaxed">
               {umkm.description}
             </p>
          </div>

          {/* Tombol Aksi */}
          <div className="mt-6 flex gap-3">
            <button 
                onClick={() => window.open(`https://wa.me/?text=Halo ${umkm.name}, saya lihat dari Web UMKM Surabaya`, '_blank')}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Hubungi WhatsApp</span>
            </button>
            <button 
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${umkm.lat},${umkm.lng}`, '_blank')}
                className="flex-1 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Rute Lokasi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}