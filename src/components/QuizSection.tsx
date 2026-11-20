import React, { useState } from 'react';
import { QuizModule, QuizQuestion } from '../types/culinary';
import { QUIZ_MODULES } from '../data/quizData';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, XCircle, RotateCcw, ChevronRight, HelpCircle, Sparkles, ChefHat, Trophy, ShieldCheck, Printer, Volume2 } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<QuizModule>(QUIZ_MODULES[0]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [studentName, setStudentName] = useState('Anak Didik Chef');
  const [showCertificate, setShowCertificate] = useState(false);

  const currentQ: QuizQuestion = selectedModule.questions[currentQuestionIndex];

  const playAnswerSound = (isCorrect: boolean) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (isCorrect) {
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      } else {
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.linearRampToValueAtTime(190, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // silent
    }
  };

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswerIndex(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswerIndex === null) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedAnswerIndex === currentQ.correctIndex;
    playAnswerSound(isCorrect);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedModule.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleRestartQuiz = (module?: QuizModule) => {
    if (module) setSelectedModule(module);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
    setShowCertificate(false);
  };

  const percentage = Math.round((score / selectedModule.questions.length) * 100);

  const getRankTitle = (pct: number) => {
    if (pct >= 90) return 'Chef de Cuisine (Pangkat Kehormatan Tertinggi)';
    if (pct >= 75) return 'Sous-Chef Handal (Penguasaan Teknik Sempurna)';
    if (pct >= 60) return 'Demi-Chef de Partie (Pemahaman Kokoh)';
    return 'Commis Apprentice (Perlu Memperdalam Sains Dapur)';
  };

  const progressPercentage = Math.round(((currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)) / selectedModule.questions.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Module Selector Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-bold text-amber-400">
          <Award className="w-3.5 h-3.5" />
          <span>Akademi Asah Otak &amp; Uji Cerdas Kuliner</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Uji Insting Resep &amp; Sains Dapur
        </h2>
        <p className="text-xs sm:text-sm text-stone-400">
          Uji ketajaman logikamu dalam mengendalikan api, menyelamatkan masakan gagal, dan meracik rempah aromatik.
        </p>

        {/* Module Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
          {QUIZ_MODULES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => handleRestartQuiz(mod)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedModule.id === mod.id
                  ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 font-bold shadow-md shadow-amber-950/20'
                  : 'bg-stone-900/90 border border-white/[0.08] text-stone-300 hover:text-white hover:border-amber-400/40'
              }`}
            >
              {mod.title} ({mod.level})
            </button>
          ))}
        </div>
      </div>

      {!quizFinished ? (
        /* Active Quiz Question Card */
        <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-6 sm:p-9 space-y-6 shadow-2xl relative">
          
          {/* Progress Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
                <ChefHat className="w-4 h-4" />
                <span>{selectedModule.title}</span>
                <span className="text-stone-600">·</span>
                <span className="text-stone-300 capitalize">{currentQ.category}</span>
              </div>
              <div className="text-stone-400 font-mono-num font-semibold">
                Soal {currentQuestionIndex + 1} / {selectedModule.questions.length}
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((option, idx) => {
              let optionStyle = 'bg-stone-900/70 border-white/[0.06] text-stone-200 hover:border-amber-400/40 hover:bg-stone-900';

              if (isAnswerSubmitted) {
                if (idx === currentQ.correctIndex) {
                  optionStyle = 'bg-emerald-950/40 border-emerald-500/80 text-emerald-100 font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)]';
                } else if (idx === selectedAnswerIndex) {
                  optionStyle = 'bg-red-950/40 border-red-500/80 text-red-200';
                } else {
                  optionStyle = 'bg-stone-900/30 border-white/[0.03] text-stone-500 opacity-50';
                }
              } else if (idx === selectedAnswerIndex) {
                optionStyle = 'bg-amber-500/10 border-amber-400 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.1)]';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border text-sm transition-all flex items-start gap-3.5 cursor-pointer ${optionStyle}`}
                >
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 text-xs font-mono-num font-bold mt-0.5 transition-colors ${
                    isAnswerSubmitted && idx === currentQ.correctIndex 
                      ? 'border-emerald-400 text-emerald-400 bg-emerald-950/60' 
                      : 'border-stone-700 text-stone-300'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="flex-1 leading-relaxed font-body">{option}</span>
                  {isAnswerSubmitted && idx === currentQ.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswerSubmitted && idx === selectedAnswerIndex && idx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswerSubmitted && (
            <div className={`p-5 rounded-2xl border space-y-2.5 transition-all ${
              selectedAnswerIndex === currentQ.correctIndex 
                ? 'bg-emerald-950/20 border-emerald-500/40 shadow-inner' 
                : 'bg-amber-950/20 border-amber-500/40 shadow-inner'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                {selectedAnswerIndex === currentQ.correctIndex ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    Jawaban Anda Tepat Sekali!
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    Pembahasan Sains Kuliner Chef
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-body">
                {currentQ.explanation}
              </p>
              <div className="pt-2 border-t border-white/[0.08] flex items-start gap-2 text-xs text-amber-300 italic">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Wejangan Dapur: "{currentQ.chefNote}"</span>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
            <div className="text-xs text-stone-400">
              Skor:{' '}
              <span className="font-mono-num font-bold text-amber-400 text-sm">{score}</span> / {currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)}
            </div>

            {!isAnswerSubmitted ? (
              <button
                disabled={selectedAnswerIndex === null}
                onClick={handleSubmitAnswer}
                className="px-6 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 hover:brightness-110 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer shadow-md active:scale-95"
              >
                Kunci Jawaban
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95"
              >
                <span>{currentQuestionIndex < selectedModule.questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Quiz Finished & Results / Certificate Deck */
        <div className="rounded-2xl bg-[#11131a] border border-white/[0.08] p-8 sm:p-10 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mx-auto shadow-inner">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Hasil Evaluasi Kuis
            </span>
            <h3 className="font-display text-3xl font-bold text-white">
              {getRankTitle(percentage)}
            </h3>
            <p className="text-sm text-stone-400 max-w-md mx-auto">
              Kamu berhasil menjawab <strong className="text-white">{score}</strong> dari <strong className="text-white">{selectedModule.questions.length}</strong> pertanyaan dengan tepat.
            </p>
          </div>

          <div className="inline-block p-5 rounded-2xl bg-stone-900/90 border border-white/[0.08] shadow-inner">
            <div className="text-xs text-stone-400 uppercase font-medium">Tingkat Ketajaman Insting</div>
            <div className="font-mono-num text-5xl font-extrabold text-amber-400 mt-1">
              {percentage}%
            </div>
          </div>

          {/* Certificate Toggle */}
          <div className="max-w-md mx-auto space-y-3 pt-2">
            <label className="block text-xs text-stone-300 text-left font-medium">
              Nama Lengkap Anak Didik untuk Sertifikat:
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Masukkan nama Anda..."
              className="w-full bg-stone-900 border border-white/[0.1] rounded-xl p-3 text-xs text-stone-100 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button
              onClick={() => setShowCertificate(true)}
              className="w-full py-3 px-4 text-xs font-bold rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Buka Sertifikat Kelulusan Resmi</span>
            </button>
          </div>

          {/* Certificate Modal / View */}
          {showCertificate && (
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-b from-[#161821] to-[#0f1117] border-2 border-amber-400/40 text-stone-100 relative overflow-hidden shadow-2xl max-w-2xl mx-auto">
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-amber-400/20 pointer-events-none rounded-xl" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-center gap-2.5 text-amber-400">
                  <ChefHat className="w-8 h-8" />
                  <span className="font-display text-lg font-bold uppercase tracking-widest">
                    Chef Culinary Academy
                  </span>
                </div>

                <div className="text-xs text-stone-400 uppercase tracking-widest font-medium">
                  Sertifikat Kompetensi Teori &amp; Resep Anti-Gagal
                </div>

                <div className="py-2">
                  <div className="text-xs text-stone-400">Diberikan dengan hormat kepada:</div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-amber-300 mt-1">
                    {studentName || 'Anak Didik Chef'}
                  </div>
                </div>

                <p className="text-xs text-stone-300 max-w-lg mx-auto leading-relaxed font-body">
                  Telah berhasil menyelesaikan evaluasi modul <strong>"{selectedModule.title}"</strong> dengan skor kelulusan <strong>{percentage}%</strong> dan membuktikan pemahaman mendalam pada titik kritis kegagalan memasak.
                </p>

                <div className="pt-6 flex items-center justify-between border-t border-white/[0.08] text-left text-xs">
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase">Gelar Keahlian</div>
                    <div className="font-bold text-stone-200 mt-0.5">{selectedModule.badgeName}</div>
                  </div>

                  <div className="text-center">
                    <ShieldCheck className="w-8 h-8 text-amber-400 mx-auto opacity-80" />
                    <span className="text-[9px] text-stone-400 font-mono-num font-semibold">VERIFIED MASTERCLASS</span>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-stone-500 uppercase">Tanda Tangan Penguji</div>
                    <div className="font-display font-semibold text-amber-300 italic mt-0.5">Chef Rayhan, M.C.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2 relative z-10">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak / Simpan PDF</span>
                </button>
              </div>
            </div>
          )}

          {/* Retake Button */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => handleRestartQuiz()}
              className="px-6 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-stone-950 hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis Ini</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
