import React from 'react';
import { ChefHat, Heart, BookOpen, Award, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenGlossary: () => void;
  onSelectTab: (tab: 'recipes' | 'cooking' | 'quiz' | 'journal') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGlossary, onSelectTab }) => {
  return (
    <footer className="bg-[#090b0e] border-t border-stone-800 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Philosophy (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-stone-100 font-display text-lg font-bold">
              <ChefHat className="w-5 h-5 text-amber-400" />
              <span>Chef Academy · Dapur Edukasi Kuliner</span>
            </div>
            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              Platform edukasi kuliner khusus didedikasikan untuk anak didik dan pencinta kuliner. Diciptakan dengan pemahaman sains rasa, teknik presisi, dan program panduan anti-gagal agar setiap masakan mencapai standar maestro.
            </p>
            <div className="text-[11px] text-stone-500 italic">
              "Keahlian memasak bukan sekadar hafalan resep, melainkan ketajaman insting menguasai api, waktu, dan rasa."
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
              Kurikulum & Fitur
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('recipes')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Katalog Resep Maestro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('cooking')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Studio Masak Anti-Gagal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('quiz')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Kuis Asah Otak Dapur
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('journal')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Buku Catatan Murid
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Resources (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
              Referensi Edukasi
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={onOpenGlossary}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Kamus Istilah Kuliner</span>
                </button>
              </li>
              <li className="text-stone-500 text-[11px]">
                Suhu & Reaksi Maillard
              </li>
              <li className="text-stone-500 text-[11px]">
                Panduan Emulsi & Reduksi
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Chef Academy. Hak Cipta Edukasi Terlindungi.
          </div>
          <div className="flex items-center gap-2">
            <span>Didedikasikan untuk Anak Didik & Calon Chef Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
