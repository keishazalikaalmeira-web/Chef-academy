import React from 'react';
import { ChefHat, BookOpen, Flame, Award, BookMarked, Sparkles, Scale } from 'lucide-react';

interface NavbarProps {
  activeTab: 'recipes' | 'cooking' | 'quiz' | 'journal';
  setActiveTab: (tab: 'recipes' | 'cooking' | 'quiz' | 'journal') => void;
  onOpenGlossary: () => void;
  onOpenConverter: () => void;
  onQuickStartCooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenGlossary,
  onOpenConverter,
  onQuickStartCooking
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#090b10]/85 backdrop-blur-xl border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <div 
          onClick={() => setActiveTab('recipes')}
          className="flex items-center gap-3 cursor-pointer shrink-0 group select-none"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-transparent border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:scale-105 group-hover:border-amber-400 transition-all">
              <ChefHat className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-stone-100 via-stone-200 to-amber-200 bg-clip-text text-transparent group-hover:to-amber-300 transition-all whitespace-nowrap">
              Chef Academy
            </span>
            <span className="text-[10px] text-stone-400 font-medium tracking-widest uppercase">
              Resep Anti-Gagal & Edukasi
            </span>
          </div>
        </div>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-xl border border-white/[0.06] text-xs font-medium">
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'recipes'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Koleksi Resep</span>
          </button>

          <button
            onClick={() => setActiveTab('cooking')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'cooking'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Studio Anti-Gagal</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Kuis Asah Otak</span>
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'journal'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                : 'text-stone-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Jurnal Murid</span>
          </button>

          <button
            onClick={onOpenGlossary}
            className="px-3.5 py-2 rounded-lg whitespace-nowrap text-stone-300 hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Kamus Kuliner</span>
          </button>

          <button
            onClick={onOpenConverter}
            className="px-3.5 py-2 rounded-lg whitespace-nowrap text-stone-300 hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-1.5 cursor-pointer"
            title="Kalkulator Takaran & Suhu"
          >
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Konversi</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenConverter}
            className="lg:hidden p-2 rounded-lg bg-stone-900 border border-white/[0.08] text-stone-300 hover:text-white"
            title="Kalkulator Konversi"
          >
            <Scale className="w-4 h-4 text-amber-400" />
          </button>

          <button
            onClick={onQuickStartCooking}
            className="px-4 py-2.5 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 rounded-xl transition-all whitespace-nowrap shadow-[0_4px_20px_rgba(245,158,11,0.25)] flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Mulai Masak Anti-Gagal</span>
          </button>
        </div>

      </div>
    </header>
  );
};
