import React, { useState } from 'react';
import { BookOpen, Calculator, Globe,  Activity, Flag, Map, Beaker, Trophy, ExternalLink, Search, Menu, X } from 'lucide-react';
import logoPkbm from './assets/logo-pkbm.png';

// --- KONFIGURASI WARNA & DATA ---

// Palet Warna sesuai request
const colors = {
  white: '#FFFFFF',
  black: '#000000',
  darkGreen: '#1A5A2B', // Dikoreksi dari 1A5A2BK
  primaryGreen: '#388E3C',
  yellow: '#FFEB3B',
  darkYellow: '#ffae00ff',
};

// DATA MATA PELAJARAN (ROOT)
const subjects = [
  { id: 'matematika', name: 'Matematika', icon: Calculator },
  { id: 'indonesia', name: 'Bhs. Indonesia', icon: Flag },
  { id: 'inggris', name: 'Bhs. Inggris', icon: Globe },
  { id: 'ips', name: 'IPS', icon: Map },
  { id: 'ipa', name: 'IPA', icon: Beaker },
  { id: 'sejarah', name: 'Sejarah', icon: BookOpen },
  { id: 'pkn', name: 'PKN', icon:  Activity },
  { id: 'olahraga', name: 'Olahraga', icon: Trophy },
];

// DATA MATERI (BANK DATA)
// Nanti Anda tinggal menambahkan materi disini.
// Gambar menggunakan placeholder sementara.
const resourcesData = [
  {
    id: 1,
    subjectId: 'matematika',
    title: 'Operasi Hitung Pecahan',
    desc: 'Memahami perhitungan bilangan positif negatif menggunakan analogi khas PKBM.',
    url: 'https://jurangan-hitung.netlify.app/', // Ganti dengan link netlify materi
    logo: 'https://placehold.co/50x50/1A5A2B/FFF?text=1', 
  },
  {
    id: 2,
    subjectId: 'matematika',
    title: 'Aljabar Linear',
    desc: 'Konsep matriks dan operasi vektor.',
    url: '#',
    logo: 'https://placehold.co/50x50/388E3C/FFF?text=Alg',
  },
  {
    id: 3,
    subjectId: 'matematika',
    title: 'Statistika',
    desc: 'Pengolahan data, mean, median, dan modus.',
    url: '#',
    logo: 'https://placehold.co/50x50/E8D500/000?text=Stat',
  },
  {
    id: 4,
    subjectId: 'indonesia',
    title: 'Teks Prosedur',
    desc: 'Struktur dan kaidah kebahasaan teks prosedur.',
    url: '#',
    logo: 'https://placehold.co/50x50/FFEB3B/000?text=Ind',
  },
  {
    id: 5,
    subjectId: 'inggris',
    title: '16 Tenses',
    desc: 'Mastering English tenses with interactive examples.',
    url: '#',
    logo: 'https://placehold.co/50x50/1A5A2B/FFF?text=Eng',
  },
  {
    id: 6,
    subjectId: 'ipa',
    title: 'Sistem Pencernaan',
    desc: 'Anatomi dan fungsi organ pencernaan manusia.',
    url: '#',
    logo: 'https://placehold.co/50x50/388E3C/FFF?text=Bio',
  },
    {
    id: 7,
    subjectId: 'indonesia',
    title: 'Cerita Rakyat',
    desc: 'Menjelaskan cerita rakyat.',
    url: '#',
    logo: 'https://placehold.co/50x50/388E3C/FFF?text=Rkt',
  },
  // Tambahkan data lainnya sesuai kebutuhan...
];

export default function BankApps() {
  const [selectedSubject, setSelectedSubject] = useState('matematika');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter materi berdasarkan subject yang dipilih
  const filteredResources = resourcesData.filter(
    (res) => res.subjectId === selectedSubject
  );

  const currentSubjectName = subjects.find(s => s.id === selectedSubject)?.name;

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans selection:bg-green-200">
      
      {/* BACKGROUND BLOBS (Untuk efek Glassmorphism) */}
      <div className="fixed inset-0 z-0 bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#388E3C] opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFEB3B] opacity-30 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-[#E8D500] opacity-20 blur-[80px]"></div>
      </div>

      <div className="relative z-10 flex h-screen overflow-hidden">
        
        {/* SIDEBAR (KIRI) */}
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <aside 
          className={`
            fixed md:relative z-50 w-72 h-full flex flex-col justify-between
            transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            border-r border-white/40 shadow-xl
          `}
          style={{
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)', // Safari support
          }}
        >
          {/* LOGO AREA (SESUAI REQUEST: TENGAH) */}
          <div className="flex flex-col items-center justify-center pt-10 pb-6 px-6 text-center border-b border-gray-200/50">
            <p className="text-xs font-bold tracking-widest text-[#1A5A2B] uppercase mb-2 opacity-80">
              Powered By
            </p>
            
            {/* TEMPAT LOGO - DIUBAH MENJADI LINGKARAN (rounded-full) */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1A5A2B] to-[#388E3C] p-1 shadow-lg mb-3 flex items-center justify-center transform hover:scale-105 transition-all cursor-pointer group">
               <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                  {/* Ganti src ini dengan logo PKBM Anda nanti */}
                  <img 
                    src={logoPkbm} 
                    alt="PKBM Logo" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
               </div>
            </div>

            <h1 className="text-lg font-extrabold text-[#1A5A2B] leading-tight">
              PKBM Padamukti
            </h1>
            <p className="text-sm text-[#E8D500] font-bold tracking-wide">
              SUPER BANK APPS
            </p>
          </div>

          {/* LIST MAPEL (ROOT) */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 scrollbar-hide">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              const isActive = selectedSubject === subject.id;
              
              return (
                <button
                  key={subject.id}
                  onClick={() => {
                    setSelectedSubject(subject.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#1A5A2B] to-[#388E3C] text-white shadow-lg shadow-green-900/20' 
                      : 'hover:bg-white/50 text-gray-600 hover:text-[#1A5A2B] hover:shadow-md'
                    }
                  `}
                >
                  <div className={`
                    p-2 rounded-lg transition-colors
                    ${isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-white'}
                  `}>
                    <Icon size={18} />
                  </div>
                  <span className="font-semibold text-sm tracking-wide">{subject.name}</span>
                  
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FFEB3B] shadow-[0_0_8px_rgba(255,235,59,0.8)]"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* FOOTER SIDEBAR */}
          <div className="p-6 text-center text-xs text-gray-400 border-t border-gray-200/50">
            &copy; 2025 PKBM Padamukti. Web Pembelajaran dengan Corak Khas PKBM. <br/>Semua Hak Dilindungi.
          </div>
        </aside>


        {/* KONTEN UTAMA (KANAN) */}
        <main className="flex-1 h-full overflow-y-auto relative">
          
          {/* HEADER MOBILE */}
          <header className="md:hidden flex items-center justify-between p-4 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <span className="font-bold text-[#1A5A2B]">Bank Apps</span>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
            >
              <Menu size={20} />
            </button>
          </header>

          <div className="max-w-7xl mx-auto p-6 md:p-12">
            
            {/* JUDUL SECTION */}
            <div className="mb-10 animate-fade-in-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFEB3B]/20 text-[#E8D500] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFEB3B]/30">
                Materi Pembelajaran
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                {currentSubjectName}
              </h2>
              <p className="text-gray-500 max-w-2xl">
                Pilih modul materi di bawah ini untuk mengakses website pembelajaran interaktif.
              </p>
            </div>

            {/* GRID MATERI */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredResources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Card Container - Glass Style */}
                    <div 
                      className="h-full rounded-2xl p-5 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-4"
                      style={{
                        background: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                      }}
                    >
                      {/* Header Card: Logo & Action */}
                      <div className="w-full flex justify-between items-start">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 bg-white p-0.5 shadow-sm group-hover:shadow-md transition-shadow">
                          <img 
                            src={resource.logo} 
                            alt={`${resource.title} Logo`}
                            className="w-full h-full object-cover rounded-md"
                            style={{ imageRendering: 'pixelated' }} // Efek pixel
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-gray-400 group-hover:text-[#388E3C] group-hover:bg-[#388E3C]/10 transition-colors">
                          <ExternalLink size={14} />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#1A5A2B] transition-colors mb-2 line-clamp-1">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                          {resource.desc}
                        </p>
                      </div>

                      {/* Decorative Bottom Bar */}
                      <div className="mt-auto pt-4 w-full">
                        <div className="h-1 w-full bg-gray-200/50 rounded-full overflow-hidden">
                          <div className="h-full w-0 group-hover:w-full bg-[#FFEB3B] transition-all duration-500 ease-out"></div>
                        </div>
                        <p className="text-[10px] text-right mt-2 text-gray-400 font-medium">Klik untuk akses</p>
                      </div>

                    </div>
                  </a>
                ))}
              </div>
            ) : (
              // Empty State
              <div 
                className="w-full py-20 rounded-3xl flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 bg-white/30 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="text-gray-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Belum ada materi</h3>
                <p className="text-gray-500 text-sm mt-1">Materi untuk mapel ini akan segera ditambahkan.</p>
              </div>
            )}
            
          </div>
        </main>
      </div>
    </div>
  );
}