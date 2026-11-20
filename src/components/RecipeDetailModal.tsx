import React from 'react';
import { Recipe } from '../types/culinary';
import { X, Clock, Flame, ShieldAlert, ChefHat, CheckCircle2, Utensils, ArrowRight } from 'lucide-react';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onStartCooking: (recipe: Recipe) => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  onStartCooking
}) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#12151d] border border-stone-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Top Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12151d] via-[#12151d]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-stone-300 hover:text-white transition-colors cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title info over image */}
          <div className="absolute bottom-5 left-6 right-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-amber-400 text-stone-950 font-bold px-2 py-0.5 rounded">
                {recipe.category}
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-stone-300 font-mono-num">{recipe.cookTimeMinutes} Menit Masak</span>
              <span className="text-stone-300">·</span>
              <span className="text-amber-300 font-mono-num">{recipe.antiGagalRating}% Anti-Gagal</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-100">
              {recipe.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              {recipe.subtitle}
            </p>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Chef Quote Philosophy */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
            <ChefHat className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200 leading-relaxed italic font-body">
              {recipe.chefQuote}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {recipe.description}
          </p>

          {/* Ingredients & Equipment Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Ingredients (7 cols) */}
            <div className="md:col-span-7 space-y-3">
              <h4 className="font-display text-sm font-bold text-stone-200 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>Komposisi Bahan Resep ({recipe.servingsBase} Porsi Standar)</span>
              </h4>
              <div className="space-y-1.5 max-h-60 overflow-y-auto pr-2">
                {recipe.ingredients.map((ing, i) => (
                  <div key={i} className="p-2 rounded bg-stone-900/60 border border-stone-800 text-xs flex justify-between items-center">
                    <span className="text-stone-200">{ing.name}</span>
                    <span className="font-mono-num font-semibold text-amber-300 shrink-0 ml-2">
                      {ing.amount} {ing.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment & Critical Secrets (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="space-y-2">
                <h4 className="font-display text-sm font-bold text-stone-200">
                  Peralatan Dapur
                </h4>
                <ul className="text-xs text-stone-300 space-y-1">
                  {recipe.equipmentNeeded.map((eq, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>Kunci Sukses Anti-Gagal</span>
                </div>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  Resep ini dilengkapi dengan sistem alarm kontrol titik kritis di setiap tahapannya. Pastikan Anda mengikuti instruksi studio interaktif.
                </p>
              </div>
            </div>

          </div>

          {/* Steps Preview */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-stone-200">
              Ikhtisar {recipe.steps.length} Tahapan Memasak
            </h4>
            <div className="space-y-2">
              {recipe.steps.map((st, i) => (
                <div key={i} className="p-3 rounded-lg bg-stone-900/50 border border-stone-800 flex items-start gap-3 text-xs">
                  <span className="w-5 h-5 rounded bg-amber-400/20 text-amber-400 font-mono-num font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold text-stone-200">{st.title}</div>
                    <div className="text-stone-400 line-clamp-1 mt-0.5">{st.instruction}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-5 border-t border-stone-800 bg-[#0e1117] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-400 hover:text-white"
          >
            Tutup
          </button>

          <button
            onClick={() => {
              onClose();
              onStartCooking(recipe);
            }}
            className="px-6 py-2.5 text-xs font-bold rounded-lg bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Flame className="w-4 h-4 fill-current" />
            <span>Mulai Program Masak Anti-Gagal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
