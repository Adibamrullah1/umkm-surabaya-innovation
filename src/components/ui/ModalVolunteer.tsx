import { useState } from 'react';

interface ModalVolunteerProps {
  onClose: () => void;
}

export default function ModalVolunteer({ onClose }: ModalVolunteerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi loading kirim data
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-slide-up">
        
        {/* Tombol Close */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          ✕
        </button>

        {!isSubmitted ? (
          /* TAMPILAN FORMULIR */
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Jadi Relawan Digital</h3>
              <p className="text-slate-500 text-sm mt-1">Bantu UMKM Surabaya naik kelas dengan keahlianmu.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                <input required type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Contoh: Budi Santoso" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Keahlian Utama</label>
                <select className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option>Digital Marketing (Ads/Socmed)</option>
                  <option>Desain Grafis & Branding</option>
                  <option>Fotografi Produk</option>
                  <option>Manajemen Keuangan / Excel</option>
                  <option>Legalitas & Perizinan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">LinkedIn / Portofolio</label>
                <input required type="url" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://linkedin.com/in/..." />
              </div>

              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-indigo-500/30 mt-2">
                Daftar Sekarang
              </button>
            </form>
          </div>
        ) : (
          /* TAMPILAN SUKSES */
          <div className="p-8 text-center py-12">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl animate-bounce">
              🎉
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Terima Kasih!</h3>
            <p className="text-slate-600 mt-2">
              Data Anda telah kami terima. Tim SkillBridge akan menghubungi Anda via Email/WhatsApp untuk proses matching.
            </p>
            <button 
              onClick={onClose}
              className="mt-6 bg-slate-100 text-slate-700 hover:bg-slate-200 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
}