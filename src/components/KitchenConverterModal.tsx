import React, { useState } from 'react';
import { X, Scale, Thermometer, ArrowRightLeft, Sparkles } from 'lucide-react';

interface KitchenConverterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KitchenConverterModal: React.FC<KitchenConverterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'weight' | 'temp'>('weight');

  // Weight & Volume Converter State
  const [ingredientType, setIngredientType] = useState<'flour' | 'sugar' | 'butter' | 'liquid'>('flour');
  const [amountGrams, setAmountGrams] = useState<number>(100);

  // Temperature State
  const [celsius, setCelsius] = useState<number>(180);

  if (!isOpen) return null;

  // Conversions (approximate culinary standards)
  // 1 sdm tepung ~ 10g, gula ~ 15g, butter ~ 14g, air ~ 15ml
  const getSdmRatio = () => {
    switch (ingredientType) {
      case 'flour': return 10;
      case 'sugar': return 15;
      case 'butter': return 14;
      case 'liquid': return 15;
    }
  };

  const getSdtRatio = () => {
    switch (ingredientType) {
      case 'flour': return 3.3;
      case 'sugar': return 5;
      case 'butter': return 4.5;
      case 'liquid': return 5;
    }
  };

  const getCupRatio = () => {
    switch (ingredientType) {
      case 'flour': return 125;
      case 'sugar': return 200;
      case 'butter': return 227;
      case 'liquid': return 240;
    }
  };

  const sdmResult = (amountGrams / getSdmRatio()).toFixed(1);
  const sdtResult = (amountGrams / getSdtRatio()).toFixed(1);
  const cupResult = (amountGrams / getCupRatio()).toFixed(2);

  const fahrenheitResult = Math.round((celsius * 9) / 5 + 32);
  const getGasMark = (c: number) => {
    if (c < 140) return 'Very Low / 1/2';
    if (c <= 150) return 'Gas Mark 2 (Low)';
    if (c <= 180) return 'Gas Mark 4 (Moderate)';
    if (c <= 200) return 'Gas Mark 6 (Hot)';
    if (c <= 220) return 'Gas Mark 7 (Very Hot)';
    return 'Gas Mark 8-9 (Extremely Hot)';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#11131a] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Glow Header */}
        <div className="relative p-6 border-b border-white/[0.08] flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shadow-inner">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-stone-100 flex items-center gap-1.5">
                <span>Konversi Takaran & Suhu Dapur</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h3>
              <p className="text-xs text-stone-400">
                Hitung takaran sendok, gram, dan suhu oven dalam hitungan detik
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/[0.08] bg-[#0c0e14]">
          <button
            onClick={() => setActiveTab('weight')}
            className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'weight'
                ? 'text-amber-400 border-b-2 border-amber-400 bg-amber-500/5'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Gram & Sendok / Cup</span>
          </button>

          <button
            onClick={() => setActiveTab('temp')}
            className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'temp'
                ? 'text-amber-400 border-b-2 border-amber-400 bg-amber-500/5'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Thermometer className="w-4 h-4" />
            <span>Suhu Oven (°C / °F)</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {activeTab === 'weight' ? (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-2">Pilih Jenis Bahan:</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'flour', label: 'Tepung' },
                    { id: 'sugar', label: 'Gula' },
                    { id: 'butter', label: 'Mentega' },
                    { id: 'liquid', label: 'Cairan/Air' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setIngredientType(t.id as unknown as 'flour' | 'sugar' | 'butter' | 'liquid')}
                      className={`py-2 px-1 text-center rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        ingredientType === t.id
                          ? 'bg-amber-400 text-stone-950 font-bold'
                          : 'bg-stone-900 border border-white/[0.08] text-stone-300 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-2">
                  Jumlah Berat (Gram): <span className="font-mono-num font-bold text-amber-400">{amountGrams} gram</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={amountGrams}
                  onChange={(e) => setAmountGrams(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono-num mt-1">
                  <span>5g</span>
                  <span>100g</span>
                  <span>250g</span>
                  <span>500g</span>
                </div>
              </div>

              {/* Converted Results Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-stone-900/80 border border-white/[0.08] text-center">
                  <div className="text-[11px] text-stone-400 uppercase font-medium">Sendok Makan</div>
                  <div className="font-mono-num text-xl font-bold text-amber-400 mt-1">
                    ~{sdmResult}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">sdm rata</div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-900/80 border border-white/[0.08] text-center">
                  <div className="text-[11px] text-stone-400 uppercase font-medium">Sendok Teh</div>
                  <div className="font-mono-num text-xl font-bold text-stone-100 mt-1">
                    ~{sdtResult}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">sdt rata</div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-900/80 border border-white/[0.08] text-center">
                  <div className="text-[11px] text-stone-400 uppercase font-medium">Cangkir / Cup</div>
                  <div className="font-mono-num text-xl font-bold text-stone-100 mt-1">
                    ~{cupResult}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">standar US cup</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-2">
                  Atur Suhu Celsius (°C): <span className="font-mono-num font-bold text-amber-400">{celsius}°C</span>
                </label>
                <input
                  type="range"
                  min="60"
                  max="250"
                  step="5"
                  value={celsius}
                  onChange={(e) => setCelsius(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono-num mt-1">
                  <span>60°C (Slow Cook)</span>
                  <span>180°C (Baking)</span>
                  <span>250°C (Roast)</span>
                </div>
              </div>

              {/* Temp Results */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-stone-900/80 border border-white/[0.08] text-center">
                  <div className="text-xs text-stone-400 uppercase font-medium">Fahrenheit (°F)</div>
                  <div className="font-mono-num text-2xl font-bold text-amber-400 mt-1">
                    {fahrenheitResult}°F
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">Standar resep internasional</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/80 border border-white/[0.08] text-center">
                  <div className="text-xs text-stone-400 uppercase font-medium">Gas Mark Inggris</div>
                  <div className="font-mono-num text-base font-bold text-stone-100 mt-1">
                    {getGasMark(celsius)}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">Oven gas konvensional</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                <strong>Tips Chef:</strong> Jika menggunakan oven dengan kipas (fan-forced convection), turunkan suhu 15-20°C dari suhu yang tertera di resep agar kue tidak cepat gosong di luar.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#0c0e14] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 text-stone-200 hover:text-white cursor-pointer"
          >
            Selesai
          </button>
        </div>

      </div>
    </div>
  );
};
