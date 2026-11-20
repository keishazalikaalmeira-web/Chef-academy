import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { X, Search, BookOpen, Sparkles } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  if (!isOpen) return null;

  const categories = ['Semua', 'Teknik Panas', 'Teknik Potong', 'Sains Rasa', 'Baking & Pastry'];

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.exampleInCooking && item.exampleInCooking.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#12151d] border border-stone-800 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-stone-100">
                Kamus Istilah Kuliner Chef
              </h3>
              <p className="text-xs text-stone-400">
                Pahami kosakata teknik internasional & sains rasa untuk anak didik
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-stone-800 bg-[#0e1117] space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari istilah: Maillard, Deglaze, Emulsi, Brunoise..."
              className="w-full bg-stone-900 border border-stone-800 rounded-lg pl-9 pr-4 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-stone-950 font-bold'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary List */}
        <div className="p-6 overflow-y-auto space-y-4">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((term, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-500/30 transition-colors space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-base font-bold text-amber-300">
                      {term.term}
                    </span>
                    {term.pronunciation && (
                      <span className="text-[11px] font-mono-num text-stone-400">
                        [{term.pronunciation}]
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-stone-400 bg-stone-800 px-2 py-0.5 rounded">
                    {term.category}
                  </span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed font-body">
                  {term.definition}
                </p>

                <div className="pt-2 border-t border-stone-800/60 flex items-start gap-1.5 text-xs text-stone-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-300">Penerapan di Dapur:</strong> {term.exampleInCooking}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-stone-500 text-xs">
              Tidak menemukan istilah kuliner yang cocok dengan kata kunci "{searchQuery}".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-800 bg-[#0e1117] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 text-stone-200 hover:text-white cursor-pointer"
          >
            Tutup Kamus
          </button>
        </div>

      </div>
    </div>
  );
};
