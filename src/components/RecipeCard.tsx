import React, { useState } from 'react';
import { Recipe } from '../types/culinary';
import { Clock, Flame, ShieldAlert, ArrowRight, CheckCircle2, Sparkles, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onSelectRecipe: (recipe: Recipe) => void;
  onCookRecipe: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onSelectRecipe,
  onCookRecipe
}) => {
  const [imgError, setImgError] = useState(false);
  const [showFlavorHover, setShowFlavorHover] = useState(false);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Pemula': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Menengah': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Mahir': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      default: return 'text-stone-400 bg-stone-500/10 border-stone-500/20';
    }
  };

  return (
    <div 
      className="group relative rounded-2xl bg-[#11131a] border border-white/[0.08] overflow-hidden flex flex-col hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)]"
      onMouseEnter={() => setShowFlavorHover(true)}
      onMouseLeave={() => setShowFlavorHover(false)}
    >
      {/* Recipe Image Lead */}
      <div 
        onClick={() => onSelectRecipe(recipe)}
        className="relative h-60 w-full overflow-hidden bg-stone-900 cursor-pointer"
      >
        {!imgError ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-900">
            <ChefHat className="w-10 h-10 text-stone-600 mb-2" />
            <span className="text-xs text-stone-400 font-medium">{recipe.title}</span>
          </div>
        )}

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-[#11131a]/30 to-transparent pointer-events-none" />

        {/* Floating Top Category */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-stone-200 border border-white/10 flex items-center gap-1.5 shadow-md">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>{recipe.category}</span>
        </div>

        {/* Floating Anti-Gagal Rating Badge */}
        <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-amber-400/15 backdrop-blur-md text-[11px] text-amber-300 font-bold border border-amber-400/30 flex items-center gap-1 shadow-md">
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono-num">{recipe.antiGagalRating}% Anti-Gagal</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-3">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs text-stone-400">
            <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${getDifficultyColor(recipe.difficulty)}`}>
              {recipe.difficulty}
            </span>
            <span className="text-stone-600">·</span>
            <span className="flex items-center gap-1 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-400/80" />
              <span className="font-mono-num">{recipe.cookTimeMinutes} mnt</span>
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400">{recipe.steps.length} Langkah</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectRecipe(recipe)}
            className="font-display text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
          >
            {recipe.title}
          </h3>

          <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
            {recipe.subtitle}
          </p>
        </div>

        {/* Modern Interactive Flavor Profile Radar Bars */}
        <div className="p-3 rounded-xl bg-stone-900/70 border border-white/[0.06] space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-stone-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Profil Rasa &amp; Karakter:
            </span>
            <span className="text-stone-500 font-mono-num text-[10px]">
              Umami {recipe.flavorProfile.umami}%
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[10px] text-stone-300">
            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-stone-400">Umami</span>
                <span className="font-mono-num text-amber-300">{recipe.flavorProfile.umami}%</span>
              </div>
              <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${recipe.flavorProfile.umami}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-stone-400">Aroma</span>
                <span className="font-mono-num text-amber-300">{recipe.flavorProfile.aroma}%</span>
              </div>
              <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: `${recipe.flavorProfile.aroma}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-stone-400">Renyah</span>
                <span className="font-mono-num text-amber-300">{recipe.flavorProfile.crispiness}%</span>
              </div>
              <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${recipe.flavorProfile.crispiness}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Critical Anti-Gagal Secret Highlight */}
        <div className="p-3 rounded-xl bg-amber-500/[0.07] border border-amber-500/20 text-xs space-y-1">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase tracking-wider">
            <ShieldAlert className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Kunci Anti-Gagal Chef</span>
          </div>
          <p className="text-stone-300 line-clamp-2 text-[11px] leading-relaxed italic">
            {recipe.steps[0]?.antiGagalSecret}
          </p>
        </div>

        {/* Interactive Buttons */}
        <div className="pt-2 flex items-center gap-2 border-t border-white/[0.08]">
          <button
            onClick={() => onCookRecipe(recipe)}
            className="flex-1 py-2.5 px-3 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:brightness-110 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shadow-md active:scale-98"
          >
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Mulai Program Masak</span>
          </button>

          <button
            onClick={() => onSelectRecipe(recipe)}
            className="py-2.5 px-3.5 text-xs font-semibold text-stone-300 bg-white/[0.05] hover:bg-white/[0.09] hover:text-white rounded-xl transition-all border border-white/[0.08] flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <span>Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
