import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// Komponen Kristal Digital
function DigitalCrystal() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((_state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh 
        ref={meshRef}
        scale={hovered ? 2.5 : 2.2} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color={hovered ? "#ec4899" : "#6366f1"} 
          wireframe 
          emissive={hovered ? "#ec4899" : "#6366f1"}
          emissiveIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  
  // Fungsi untuk scroll halus ke bagian peta
  const scrollToMap = () => {
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // UBAH DISINI: h-[60vh] menjadi h-screen (Layar Penuh)
    <div className="h-screen w-full bg-slate-950 relative overflow-hidden">
      
      {/* Canvas 3D */}
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="blue" intensity={2} />
        <DigitalCrystal />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Overlay Teks */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none z-10 bg-gradient-to-b from-transparent via-transparent to-slate-950/80">
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_25px_rgba(99,102,241,0.6)] text-center px-4 animate-fade-in-down">
          SURABAYA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">UMKM</span> VERSE
        </h1>
        
        <p className="mt-6 text-lg md:text-2xl text-slate-300 max-w-3xl text-center px-6 font-light leading-relaxed">
          Platform digital interaktif untuk mengeksplorasi potensi ekonomi lokal <br className="hidden md:block"/> dan mendukung UMKM Surabaya Go Digital.
        </p>
        
        {/* Tombol Mulai Jelajahi (Pointer Events harus auto agar bisa diklik) */}
        <div className="mt-10 pointer-events-auto">
          <button 
            onClick={scrollToMap}
            className="group relative px-8 py-4 bg-white text-indigo-900 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Mulai Jelajahi 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

      </div>
    </div>
  );
}