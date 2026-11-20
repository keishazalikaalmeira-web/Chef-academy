import React, { useState, useEffect, useRef } from 'react';
import { Recipe, CookingStep } from '../types/culinary';
import confetti from 'canvas-confetti';
import { 
  Play, Pause, RotateCcw, CheckCircle2, AlertTriangle, 
  Sparkles, ChefHat, Clock, Thermometer, ShieldCheck, 
  ArrowLeft, ArrowRight, Utensils, Save, Check, Plus, Minus,
  Maximize2, Minimize2, Volume2, VolumeX, Flame
} from 'lucide-react';

interface FailProofCookingModeProps {
  recipe: Recipe;
  onBackToOverview: () => void;
  onSaveJournalEntry: (entry: {
    recipeId: string;
    recipeTitle: string;
    batchRating: number;
    tastingNotes: string;
    improvementsNextTime: string;
  }) => void;
}

export const FailProofCookingMode: React.FC<FailProofCookingModeProps> = ({
  recipe,
  onBackToOverview,
  onSaveJournalEntry
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [portionMultiplier, setPortionMultiplier] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [isCountertopMode, setIsCountertopMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Timer state
  const currentStep: CookingStep = recipe.steps[currentStepIndex] || recipe.steps[0];
  const initialSeconds = (currentStep?.durationMinutes || 5) * 60;
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [timerRunning, setTimerRunning] = useState(false);

  // Journal form state
  const [rating, setRating] = useState(5);
  const [tastingNotes, setTastingNotes] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);

  // Reset timer when step changes
  useEffect(() => {
    const stepSeconds = (currentStep?.durationMinutes || 5) * 60;
    setTimeLeft(stepSeconds);
    setTimerRunning(false);
  }, [currentStepIndex, recipe]);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerRunning) {
      setTimerRunning(false);
      playChime();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timeLeft]);

  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.15);
        gain.gain.setValueAtTime(0, now + i * 0.15);
        gain.gain.linearRampToValueAtTime(0.25, now + i * 0.15 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.7);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.15);
        osc.stop(now + i * 0.15 + 0.7);
      });
    } catch {
      // Audio fallback silent
    }
  };

  const triggerFinishConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleIngredient = (name: string) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleNextStep = () => {
    if (currentStepIndex < recipe.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      triggerFinishConfetti();
    }
  };

  const handleSaveJournal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tastingNotes.trim()) return;
    onSaveJournalEntry({
      recipeId: recipe.id,
      recipeTitle: recipe.title,
      batchRating: rating,
      tastingNotes,
      improvementsNextTime: `Praktik porsi ${portionMultiplier}x. Tahap kritis "${currentStep.title}" berhasil dieksekusi.`
    });
    setNotesSaved(true);
    triggerFinishConfetti();
    setTimeout(() => setNotesSaved(false), 3000);
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 ${isCountertopMode ? 'fixed inset-0 z-50 bg-[#090b10] max-w-none px-6 py-6 overflow-y-auto' : ''}`}>
      
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div className="space-y-1">
          <button
            onClick={onBackToOverview}
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-amber-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Katalog Resep</span>
          </button>
          
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
              Studio Masak Anti-Gagal
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-xs text-stone-300 font-mono-num font-semibold">{recipe.antiGagalRating}% Tingkat Keberhasilan</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            {recipe.title}
          </h2>
        </div>

        {/* Countertop Controls: Portion Scaler, Fullscreen Mode, Sound */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          
          {/* Scaler */}
          <div className="flex items-center gap-2 bg-[#12151e] border border-white/[0.08] p-1.5 rounded-xl shadow-inner">
            <span className="text-xs text-stone-400 font-medium pl-2">Porsi:</span>
            <button
              onClick={() => setPortionMultiplier((prev) => Math.max(0.5, prev - 0.5))}
              className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center justify-center transition-colors cursor-pointer"
              title="Kurangi porsi"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono-num font-bold text-amber-400 px-1 text-sm">
              {portionMultiplier}x
            </span>
            <button
              onClick={() => setPortionMultiplier((prev) => prev + 0.5)}
              className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center justify-center transition-colors cursor-pointer"
              title="Tambah porsi"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
              soundEnabled 
                ? 'bg-[#12151e] border-white/[0.08] text-amber-400 hover:text-amber-300' 
                : 'bg-stone-900 border-white/[0.06] text-stone-500'
            }`}
            title={soundEnabled ? 'Matikan Suara Timer' : 'Aktifkan Suara Timer'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mode Layar Penuh Dapur (Countertop View) */}
          <button
            onClick={() => setIsCountertopMode(!isCountertopMode)}
            className={`px-3 py-2 text-xs font-semibold rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
              isCountertopMode 
                ? 'bg-amber-400 text-stone-950 font-bold border-amber-400' 
                : 'bg-[#12151e] border-white/[0.08] text-stone-300 hover:text-white'
            }`}
            title="Mode Meja Dapur / Countertop"
          >
            {isCountertopMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isCountertopMode ? 'Keluar Mode Dapur' : 'Mode Meja Dapur'}</span>
          </button>

        </div>
      </div>

      {/* Main 2-Zone Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Zone: Mise-en-Place & Ingredients Checklist (4 cols) */}
        <div className={`space-y-6 ${isCountertopMode ? 'lg:col-span-4' : 'lg:col-span-4'}`}>
          <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Utensils className="w-4 h-4" />
                </div>
                <h3 className="font-display text-base font-bold text-white">
                  Mise-en-Place &amp; Bahan
                </h3>
              </div>
              <span className="text-xs text-amber-400 font-mono-num font-bold">
                {Object.values(checkedIngredients).filter(Boolean).length}/{recipe.ingredients.length} Siap
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Timbang seluruh bahan dengan presisi sebelum mulai menyalakan kompor.
            </p>

            {/* Checklist */}
            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
              {recipe.ingredients.map((ing, idx) => {
                const scaledAmount = (ing.amount * portionMultiplier);
                const isChecked = !!checkedIngredients[ing.name];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleIngredient(ing.name)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 ${
                      isChecked 
                        ? 'bg-amber-950/20 border-amber-900/40 text-stone-500 line-through'
                        : 'bg-stone-900/70 border-white/[0.06] text-stone-200 hover:border-amber-400/30 hover:bg-stone-900'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? 'bg-amber-400 border-amber-400 text-stone-950' : 'border-stone-600'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="flex-1 leading-snug">
                      <span className="font-mono-num font-bold text-amber-300">
                        {scaledAmount % 1 === 0 ? scaledAmount : scaledAmount.toFixed(1)} {ing.unit}{' '}
                      </span>
                      <span className="font-medium">{ing.name}</span>
                      {ing.notes && (
                        <div className="text-[11px] text-stone-400 no-underline italic mt-0.5">
                          {ing.notes}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Peralatan Diperlukan */}
          <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-5 space-y-3">
            <h4 className="font-display text-sm font-bold text-stone-200 flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-amber-400" />
              <span>Peralatan Wajib di Meja Kerja</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-300">
              {recipe.equipmentNeeded.map((eq, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Zone: Interactive Step-by-Step with Timer & Anti-Gagal Guard (8 cols) */}
        <div className={`space-y-6 ${isCountertopMode ? 'lg:col-span-8' : 'lg:col-span-8'}`}>
          
          {/* Step Stepper Progress Bar */}
          <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-4">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                Progres Tahapan Memasak
              </span>
              <span className="text-xs font-mono-num font-bold text-amber-400">
                Tahap {currentStepIndex + 1} dari {recipe.steps.length}
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {recipe.steps.map((st, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStepIndex(i)}
                  className={`py-2.5 px-1 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer truncate ${
                    i === currentStepIndex
                      ? 'bg-amber-400 text-stone-950 font-bold shadow-md shadow-amber-950/20'
                      : i < currentStepIndex
                      ? 'bg-amber-950/40 text-amber-300 border border-amber-900/60'
                      : 'bg-stone-900 border border-white/[0.06] text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Tahap {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Current Step Active Card */}
          <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Step Header */}
            <div className="space-y-2 border-b border-white/[0.08] pb-5">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 font-mono-num font-bold border border-amber-400/30">
                  Langkah #{currentStep.stepNumber}
                </span>
                {currentStep.temperatureOrFire && (
                  <span className="flex items-center gap-1.5 text-stone-200 font-medium bg-stone-900 px-3 py-1 rounded-full border border-white/[0.06]">
                    <Thermometer className="w-3.5 h-3.5 text-orange-400" />
                    <span>{currentStep.temperatureOrFire}</span>
                  </span>
                )}
                {currentStep.durationMinutes && (
                  <span className="flex items-center gap-1.5 text-stone-400 font-mono-num bg-stone-900 px-3 py-1 rounded-full border border-white/[0.06]">
                    <Clock className="w-3.5 h-3.5 text-amber-400/70" />
                    <span>Target: {currentStep.durationMinutes} mnt</span>
                  </span>
                )}
              </div>

              <h3 className={`font-display font-bold text-white leading-snug ${isCountertopMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                {currentStep.title}
              </h3>
            </div>

            {/* Detailed Step Instruction Text */}
            <div className={`text-stone-200 leading-relaxed font-body ${isCountertopMode ? 'text-lg sm:text-xl font-medium' : 'text-sm sm:text-base'}`}>
              {currentStep.instruction}
            </div>

            {/* Contemporary Kitchen Timer Deck */}
            {currentStep.durationMinutes && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-stone-900/90 to-[#141722] border border-white/[0.09] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shadow-inner">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 font-medium">Timer Masak Presisi</div>
                    <div className={`font-mono-num font-extrabold tracking-tight text-amber-400 ${isCountertopMode ? 'text-5xl' : 'text-4xl'}`}>
                      {formatTime(timeLeft)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className={`px-5 py-3 text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-md active:scale-95 ${
                      timerRunning
                        ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/40'
                        : 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 hover:brightness-110'
                    }`}
                  >
                    {timerRunning ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Jeda Timer</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>{timeLeft < (currentStep.durationMinutes * 60) ? 'Lanjutkan' : 'Mulai Timer'}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setTimerRunning(false);
                      setTimeLeft((currentStep.durationMinutes || 5) * 60);
                    }}
                    className="p-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
                    title="Reset waktu"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Critical Fail-Proof Checkpoint (The Chef's Golden Rule) */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/30 p-5 sm:p-6 space-y-2.5 shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Kunci Anti-Gagal Chef (Critical Control Point)</span>
              </div>
              <p className={`text-stone-100 leading-relaxed font-body ${isCountertopMode ? 'text-base sm:text-lg font-medium' : 'text-xs sm:text-sm'}`}>
                {currentStep.antiGagalSecret}
              </p>
            </div>

            {/* Culinary Science Box */}
            <div className="rounded-2xl bg-[#0e1017] border border-white/[0.06] p-5 space-y-2">
              <div className="flex items-center gap-2 text-stone-300 font-semibold text-xs tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Sains Dapur: Reaksi Kimia &amp; Fisika Bahan</span>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                {currentStep.culinaryScience}
              </p>
            </div>

            {/* Bottom Step Actions */}
            <div className="flex items-center justify-between gap-4 pt-5 border-t border-white/[0.08]">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-stone-900 border border-white/[0.08] text-stone-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Langkah Sebelumnya</span>
              </button>

              {currentStepIndex < recipe.steps.length - 1 ? (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95"
                >
                  <span>Langkah Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={triggerFinishConfetti}
                  className="flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-950/60 px-5 py-2.5 rounded-xl border border-emerald-500/40 cursor-pointer shadow-lg active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Selesai Memasak! Rayakan Batch Ini 🎉</span>
                </button>
              )}
            </div>

          </div>

          {/* Student Batch Notes Form */}
          <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-6 sm:p-7 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Save className="w-4 h-4" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Jurnal Hasil Masak Anak Didik
                </h4>
              </div>
              {notesSaved && (
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                  <Check className="w-3.5 h-3.5" />
                  Tersimpan di Jurnal Murid!
                </span>
              )}
            </div>

            <p className="text-xs text-stone-400">
              Catat aroma, kerenyahan kulit, atau kematangan daging untuk dikonsultasikan langsung bersama Chef.
            </p>

            <form onSubmit={handleSaveJournal} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-300 font-medium">Beri Bintang Batch:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className={`text-lg cursor-pointer transition-transform hover:scale-125 ${
                        star <= rating ? 'text-amber-400' : 'text-stone-600'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="text-xs text-stone-400 ml-1">({rating}/5 Bintang)</span>
                </div>
              </div>

              <div>
                <textarea
                  value={tastingNotes}
                  onChange={(e) => setTastingNotes(e.target.value)}
                  placeholder="Contoh: Kulit salmon berderak renyah sempurna. Wajan stainless steel berhasil melepaskan kerak tanpa lengket..."
                  rows={3}
                  className="w-full bg-stone-900/90 border border-white/[0.08] rounded-xl p-3.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={!tastingNotes.trim()}
                className="px-5 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer disabled:opacity-40 active:scale-95 shadow-md"
              >
                Simpan Catatan Masak Ini
              </button>
            </form>
          </div>

          {/* Recipe Troubleshooting Matrix */}
          <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-6 space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h4 className="font-display text-base font-bold text-white">
                Troubleshooting Matrix: Pencegahan Kesalahan Fatal
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {recipe.commonFailures.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-900/80 border border-white/[0.06] space-y-2 text-xs">
                  <div className="text-red-300 font-semibold flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{item.mistake}</span>
                  </div>
                  <div className="text-emerald-300 font-medium flex items-start gap-1.5 pl-3 border-l-2 border-emerald-500/60 leading-relaxed">
                    <span>Solusi Chef: {item.prevention}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
