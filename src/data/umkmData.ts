export interface UMKM {
  id: number;
  name: string;
  category: 'Kuliner' | 'Fashion' | 'Kerajinan';
  address: string;
  lat: number;
  lng: number;
  description: string;
}

export const umkmData: UMKM[] = [
  // KULINER
  {
    id: 1,
    name: "Sambal Bu Rudy",
    category: "Kuliner",
    address: "Jl. Dharmahusada No. 140, Mojo, Gubeng",
    lat: -7.276483,
    lng: 112.765403,
    description: "Sambal khas Surabaya yang melegenda dan menjadi oleh-oleh wajib."
  },
  {
    id: 2,
    name: "Lapis Kukus Pahlawan",
    category: "Kuliner",
    address: "Jl. Genteng Besar No. 77, Genteng",
    lat: -7.256245,
    lng: 112.742358,
    description: "Kue lapis kukus lembut dengan berbagai varian rasa khas Surabaya."
  },
  {
    id: 3,
    name: "Spikoe Resep Kuno",
    category: "Kuliner",
    address: "Jl. Rungkut Madya No. 41, Rungkut Kidul",
    lat: -7.332301,
    lng: 112.784520,
    description: "Kue lapis legit dengan resep kuno yang otentik dan premium."
  },
  {
    id: 4,
    name: "Bebek Sinjay (A. Yani)",
    category: "Kuliner",
    address: "Jl. Ahmad Yani No. 151-H, Wonocolo",
    lat: -7.314560,
    lng: 112.732150,
    description: "Bebek goreng nikmat dengan sambal pencit yang pedas segar."
  },
  {
    id: 5,
    name: "Rawon Setan Mbak Endang",
    category: "Kuliner",
    address: "Jl. Embong Malang No. 78/I, Genteng",
    lat: -7.261230,
    lng: 112.738910,
    description: "Rawon daging sapi dengan kuah hitam pekat yang gurih dan pedas."
  },
  {
    id: 6,
    name: "Sate Klopo Ondomohen",
    category: "Kuliner",
    address: "Jl. Walikota Mustajab No. 36, Ketabang",
    lat: -7.260850,
    lng: 112.744560,
    description: "Sate daging sapi/ayam yang dibakar dengan bumbu kelapa parut."
  },
  {
    id: 7,
    name: "Cakue Peneleh",
    category: "Kuliner",
    address: "Jl. Bunguran No. 45 (Pasar Atom), Pabean Cantian",
    lat: -7.243510,
    lng: 112.741280,
    description: "Cakue legendaris dengan varian isi udang dan ayam yang lezat."
  },
  {
    id: 8,
    name: "Almond Crispy Wisata Rasa",
    category: "Kuliner",
    address: "Jl. Mayjen Sungkono No. 135, Dukuh Pakis",
    lat: -7.289450,
    lng: 112.723120,
    description: "Camilan renyah tipis bertabur almond dan keju."
  },
  {
    id: 9,
    name: "Sentra Ikan Bulak",
    category: "Kuliner",
    address: "Jl. Cumpat No. 1, Kedung Cowek, Bulak",
    lat: -7.228940,
    lng: 112.793210,
    description: "Pusat olahan hasil laut segar dan ikan asap khas pesisir Surabaya."
  },
  {
    id: 10,
    name: "Kue Kering Gembili",
    category: "Kuliner",
    address: "Jl. Gembili I No. 35, Jagir, Wonokromo",
    lat: -7.302140,
    lng: 112.741890,
    description: "Produsen aneka kue kering rumahan yang populer saat hari raya."
  },

  // FASHION
  {
    id: 11,
    name: "Batik Wistara",
    category: "Fashion",
    address: "Jl. Tambak Medokan Ayu VI C No. 56B, Rungkut",
    lat: -7.324560,
    lng: 112.791230,
    description: "Batik tulis dan cap dengan motif kontemporer khas Surabaya."
  },
  {
    id: 12,
    name: "Batik Semanggi",
    category: "Fashion",
    address: "Sememi Jaya Gg. VIII No. 12, Benowo",
    lat: -7.241020,
    lng: 112.645310,
    description: "Kerajinan batik dengan motif ikonik daun semanggi."
  },
  {
    id: 13,
    name: "Batik Putat Jaya",
    category: "Fashion",
    address: "Jl. Putat Jaya Punden II No. 33, Sawahan",
    lat: -7.284530,
    lng: 112.714210,
    description: "Karya batik dari warga eks-lokalisasi Dolly yang berdaya saing."
  },
  {
    id: 14,
    name: "Batik Mangrove (Seruil)",
    category: "Fashion",
    address: "Jl. Wonorejo Timur No. 1, Rungkut",
    lat: -7.310560,
    lng: 112.804320,
    description: "Batik unik yang menggunakan pewarna alami dari getah mangrove."
  },
  {
    id: 15,
    name: "Namira Ecoprint",
    category: "Fashion",
    address: "Wisma Kedung Asem Indah Blok G No. 7, Rungkut",
    lat: -7.321280,
    lng: 112.783450,
    description: "Fashion ramah lingkungan dengan teknik cetak daun alami (ecoprint)."
  },
  {
    id: 16,
    name: "Cak Cuk Surabaya",
    category: "Fashion",
    address: "Jl. Ahmad Yani No. 263, Siwalankerto",
    lat: -7.342150,
    lng: 112.734510,
    description: "Distro kaos dengan kata-kata jenaka khas Suroboyoan."
  },
  {
    id: 17,
    name: "Elemwe",
    category: "Fashion",
    address: "Jl. Wiratno No. 36, Kenjeran",
    lat: -7.245670,
    lng: 112.789120,
    description: "Butik fashion yang memadukan batik dengan desain modern."
  },
  {
    id: 18,
    name: "Alra Style",
    category: "Fashion",
    address: "Jl. Ciliwung No. 66, Darmo, Wonokromo",
    lat: -7.294320,
    lng: 112.735640,
    description: "Pusat busana muslim dan fashion wanita trendy."
  },
  {
    id: 19,
    name: "Batik Mirota",
    category: "Fashion",
    address: "Jl. Sulawesi No. 24, Gubeng",
    lat: -7.278910,
    lng: 112.745630,
    description: "Pusat kerajinan batik dan souvenir terlengkap di tengah kota."
  },
  {
    id: 20,
    name: "Exodos57",
    category: "Fashion",
    address: "Jl. Ciliwung No. 66, Darmo, Wonokromo",
    lat: -7.294320,
    lng: 112.735640,
    description: "Sepatu boots kulit dan denim lokal dengan kualitas internasional."
  },

  // KERAJINAN
  {
    id: 21,
    name: "Tiara Handicraft",
    category: "Kerajinan",
    address: "Jl. Sidosermo Indah II No. 5, Wonocolo",
    lat: -7.313450,
    lng: 112.746780,
    description: "Kerajinan tangan berkualitas karya teman-teman disabilitas."
  },
  {
    id: 22,
    name: "Godong (Kriya Daun)",
    category: "Kerajinan",
    address: "Jl. Rungkut Asri Timur XIII No. 14, Rungkut",
    lat: -7.325610,
    lng: 112.786540,
    description: "Kerajinan unik berbahan dasar tulang daun kering."
  },
  {
    id: 23,
    name: "Dian Art",
    category: "Kerajinan",
    address: "Jl. Rungkut Menanggal Harapan Blok K-30",
    lat: -7.334120,
    lng: 112.781230,
    description: "Aksesoris dan perhiasan handmade dari kawat tembaga dan batu alam."
  },
  {
    id: 24,
    name: "Revolt Industry",
    category: "Kerajinan",
    address: "Jl. Tenggilis Barat I No. 21, Tenggilis Mejoyo",
    lat: -7.321450,
    lng: 112.763420,
    description: "Produk kulit (leather goods) maskulin seperti dompet dan tas."
  },
  {
    id: 25,
    name: "Dewa Kerajinan",
    category: "Kerajinan",
    address: "Sentra Ikan Bulak / Jl. Pantai Kenjeran",
    lat: -7.228940,
    lng: 112.793210,
    description: "Souvenir dan kerajinan tangan dari kerang laut khas Kenjeran."
  },
  {
    id: 26,
    name: "Vitri Art",
    category: "Kerajinan",
    address: "Jl. Tenggilis Mejoyo AA-10, Rungkut",
    lat: -7.323210,
    lng: 112.765430,
    description: "Kerajinan kaca hias dan dekorasi rumah estetik."
  },
  {
    id: 27,
    name: "D’Recycle",
    category: "Kerajinan",
    address: "Jl. Medokan Ayu MA I H-14, Rungkut",
    lat: -7.329870,
    lng: 112.801230,
    description: "Produk kreatif daur ulang dari bahan bekas menjadi barang bernilai."
  },
  {
    id: 28,
    name: "Boneka Kedung Asem",
    category: "Kerajinan",
    address: "Jl. Wisma Kedung Asem Indah, Rungkut",
    lat: -7.321050,
    lng: 112.783120,
    description: "Sentra pembuatan boneka lucu untuk souvenir dan mainan."
  },
  {
    id: 29,
    name: "Eceng Gondok Kebraon",
    category: "Kerajinan",
    address: "Kebraon Indah Permai Blok C-46, Karangpilang",
    lat: -7.336780,
    lng: 112.693450,
    description: "Anyaman eceng gondok menjadi tas, keranjang, dan furnitur."
  },
  {
    id: 30,
    name: "Clay Garden",
    category: "Kerajinan",
    address: "Jl. Ngagel Wasana III No. 47, Gubeng",
    lat: -7.291230,
    lng: 112.764320,
    description: "Kerajinan tanah liat (clay) berupa pot bunga dan dekorasi taman."
  }
];