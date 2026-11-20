import React, { useState } from 'react';
import { Flame, ChevronRight, Award, Sparkles, ChefHat, Timer, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroBannerProps {
  onExploreRecipes: () => void;
  onOpenQuiz: () => void;
  onSelectFeaturedRecipe: (recipeId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreRecipes,
  onOpenQuiz,
  onSelectFeaturedRecipe
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#090b10] border-b border-white/[0.07] py-12 md:py-20">
      
      {/* Contemporary Glow & Radial Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Modern Kicker Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-medium text-stone-300">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-amber-400 font-semibold">Chef Academy Indonesia</span>
                <span className="text-stone-600">·</span>
                <span className="text-stone-300">Bimbingan Khusus Anak Didik</span>
              </div>

              {/* Contemporary Headline */}
              <h1 
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Sains Rasa &amp; Panduan Resep{' '}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Anti-Gagal Maestro
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-body max-w-2xl">
                Bukan sekadar buku resep biasa. Di sini kamu mempelajari fisiologi panas, kimia emulsi, dan detik-detik kritis penentu masakan berhasil agar insting memasakmu setara chef restoran bintang lima.
              </p>
            </div>

            {/* Contemporary Proof Bento Metric Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
              <div className="space-y-0.5">
                <div className="font-mono-num text-2xl sm:text-3xl font-extrabold text-amber-400">99.2%</div>
                <div className="text-[11px] text-stone-400 font-medium">Sukses Anti-Gagal</div>
              </div>
              <div className="space-y-0.5 border-l border-white/[0.08] pl-3">
                <div className="font-mono-num text-2xl sm:text-3xl font-extrabold text-stone-100">4 Master</div>
                <div className="text-[11px] text-stone-400 font-medium">Kategori Masakan</div>
              </div>
              <div className="space-y-0.5 border-l border-white/[0.08] pl-3">
                <div className="font-mono-num text-2xl sm:text-3xl font-extrabold text-stone-100">3 Modul</div>
                <div className="text-[11px] text-stone-400 font-medium">Kuis Uji Cerdas</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreRecipes}
                className="px-6 py-3 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 rounded-xl transition-all shadow-[0_6px_25px_rgba(245,158,11,0.28)] flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Flame className="w-4 h-4 fill-current" />
                <span>Eksplorasi Kurikulum Resep</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-5 py-3 text-xs font-semibold text-stone-200 bg-stone-900/80 hover:bg-stone-800 hover:text-white border border-white/[0.1] rounded-xl transition-all flex items-center gap-2 cursor-pointer hover:border-amber-500/40"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Asah Otak Kuliner</span>
              </button>
            </div>

            {/* Daily Chef Wisdom Ticker */}
            <div className="flex items-center gap-2.5 text-xs text-stone-400 bg-amber-500/5 border border-amber-500/15 p-3 rounded-xl">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="italic leading-relaxed">
                <strong>Wejangan Hari Ini:</strong> "Jangan pernah menabur garam pada kulit ikan lebih dari 1 menit sebelum masuk wajan, agar kelembapannya tidak merusak kerenyahan kulit."
              </span>
            </div>

          </div>

          {/* Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-stone-900 shadow-2xl flex-1 flex flex-col justify-end group min-h-[380px]">
              
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_chef_kitchen_1792735456814.jpg"
                  alt="Chef Maestro di Dapur Profesional"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-stone-900 flex flex-col items-center justify-center p-8 text-center">
                  <ChefHat className="w-12 h-12 text-amber-400 mb-3" />
                  <span className="font-display text-lg font-bold text-stone-100">Dapur Kuliner Maestro</span>
                </div>
              )}

              {/* Contemporary Deep Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/40 to-transparent pointer-events-none" />

              {/* Top Floating Contemporary Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-stone-200 flex items-center gap-1.5 shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Protokol Anti-Gagal Aktif</span>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-[11px] font-mono-num font-bold text-amber-300">
                  Batch #2026
                </div>
              </div>

              {/* Bottom Interactive Spotlight Card */}
              <div className="relative z-10 m-4 p-4 rounded-xl bg-stone-900/85 backdrop-blur-xl border border-white/[0.1] shadow-xl space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Sensasi Viral Anti-Mainstream</span>
                    </div>
                    <div className="font-display text-base font-bold text-white mt-0.5">
                      Dubai Chewy Pistachio Kunafa Cookie
                    </div>
                    <div className="text-xs text-stone-300 mt-0.5 line-clamp-1">
                      Kunafa kataifi brown butter renyah dengan lelehan pistachio lava
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectFeaturedRecipe('dubai-chewy-pistachio-kunafa')}
                    className="px-3.5 py-2 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-md active:scale-95"
                  >
                    Buka Resep
                  </button>
                </div>

                {/* Micro Flavor Profile Preview */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-stone-400">
                  <span>Crunch: <strong className="text-amber-300 font-mono-num">98%</strong></span>
                  <span>Aroma: <strong className="text-amber-300 font-mono-num">99%</strong></span>
                  <span>Panggang: <strong className="text-stone-200 font-mono-num">12 mnt</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
