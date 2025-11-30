import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { umkmData, type UMKM } from '../../data/umkmData';
import L from 'leaflet';

// --- Fix: Ikon Default Leaflet sering hilang di React, ini perbaikannya ---
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// ------------------------------------------------------------------------

// Props untuk menerima kategori filter DAN fungsi select dari App.tsx
interface SurabayaMapProps {
  filterCategory: string;
  onSelectUMKM: (umkm: UMKM) => void; // <--- Props baru ditambahkan
}

export default function SurabayaMap({ filterCategory, onSelectUMKM }: SurabayaMapProps) {
  
  // LOGIKA FILTER:
  const filteredData = filterCategory === 'Semua' 
    ? umkmData 
    : umkmData.filter(item => item.category === filterCategory);

  // Helper: Warna badge berdasarkan kategori
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Kuliner': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Fashion': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Kerajinan': return 'bg-teal-100 text-teal-800 border-teal-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-full w-full rounded-xl overflow-hidden shadow-inner border border-gray-300 relative z-0">
      <MapContainer 
        center={[-7.275, 112.74]} // Titik tengah Surabaya
        zoom={12} 
        scrollWheelZoom={true} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {filteredData.map((umkm) => (
          <Marker key={umkm.id} position={[umkm.lat, umkm.lng]}>
            <Popup className="custom-popup">
              <div className="p-1 min-w-[200px]">
                {/* Kategori Badge */}
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${getCategoryColor(umkm.category)}`}>
                  {umkm.category}
                </span>

                {/* Judul & Alamat */}
                <h3 className="font-bold text-lg text-slate-800 mt-2 leading-tight">
                  {umkm.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2 italic">
                  {umkm.address}
                </p>
                
                {/* Deskripsi Singkat */}
                <p className="text-sm text-gray-700 leading-relaxed border-t pt-2 border-gray-100 line-clamp-2">
                  {umkm.description}
                </p>

                {/* Tombol Aksi - SEKARANG BERFUNGSI */}
                <button 
                  onClick={() => onSelectUMKM(umkm)} // <--- Panggil fungsi saat diklik
                  className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-1.5 rounded transition-colors"
                >
                  Lihat Detail
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}