import React, { useState } from 'react';
import { StudentNote } from '../types/culinary';
import { BookMarked, Trash2, Plus, Calendar, Star, ChefHat, Sparkles } from 'lucide-react';

interface StudentJournalProps {
  notes: StudentNote[];
  onDeleteNote: (id: string) => void;
  onAddCustomNote: (note: Omit<StudentNote, 'id' | 'date'>) => void;
}

export const StudentJournal: React.FC<StudentJournalProps> = ({
  notes,
  onDeleteNote,
  onAddCustomNote
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customRating, setCustomRating] = useState(5);
  const [customTasting, setCustomTasting] = useState('');
  const [customLearnings, setCustomLearnings] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim() || !customTasting.trim()) return;

    onAddCustomNote({
      recipeId: 'custom-trial',
      recipeTitle: customTitle,
      batchRating: customRating,
      tastingNotes: customTasting,
      improvementsNextTime: customLearnings || 'Catatan mandiri anak didik di dapur studio.'
    });

    setCustomTitle('');
    setCustomTasting('');
    setCustomLearnings('');
    setShowAddForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <BookMarked className="w-4 h-4" />
            <span>Buku Harian & Jurnal Praktik Anak Didik</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-stone-100 mt-1">
            Log Evaluasi Memasak
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Rekam setiap kegagalan, kesuksesan tekstur, dan penyesuaian rasa untuk menjadi chef profesional.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-stone-950 hover:bg-amber-300 transition-colors flex items-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>{showAddForm ? 'Tutup Formulir' : 'Tambah Catatan Baru'}</span>
        </button>
      </div>

      {/* Manual Entry Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-[#12151d] border border-stone-800 space-y-4">
          <h4 className="font-display text-base font-bold text-stone-200">
            Catat Eksperimen Dapur Mandiri
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-stone-400 mb-1">Nama Masakan / Eksperimen</label>
              <input
                type="text"
                required
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="misal: Uji Coba Suhu Oven Croissant 180°C vs 200°C"
                className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs text-stone-400 mb-1">Penilaian Hasil (1-5)</label>
              <div className="flex items-center gap-1.5 pt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setCustomRating(star)}
                    className={`text-lg cursor-pointer ${star <= customRating ? 'text-amber-400' : 'text-stone-600'}`}
                  >
                    ★
                  </button>
                ))}
                <span className="text-xs text-stone-400 ml-2">({customRating}/5)</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs text-stone-400 mb-1">Catatan Rasa, Tekstur & Evaluasi</label>
            <textarea
              required
              rows={3}
              value={customTasting}
              onChange={(e) => setCustomTasting(e.target.value)}
              placeholder="Jelaskan aroma, kematangan daging, kelembutan bumbu, atau kendala yang dihadapi..."
              className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs text-stone-400 mb-1">Koreksi / Rencana Perbaikan untuk Batch Berikutnya</label>
            <input
              type="text"
              value={customLearnings}
              onChange={(e) => setCustomLearnings(e.target.value)}
              placeholder="misal: Kurangi garam 2 gram, keringkan kulit lebih lama"
              className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-xs rounded-lg bg-stone-800 text-stone-300 hover:text-white"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-stone-950 hover:bg-amber-300"
            >
              Simpan ke Logbook
            </button>
          </div>
        </form>
      )}

      {/* Notes List */}
      <div className="space-y-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#12151d] border border-stone-800/90 hover:border-stone-700 transition-colors space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-stone-100">
                      {note.recipeTitle}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5">
                      <Calendar className="w-3 h-3 text-stone-500" />
                      <span>{note.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <div className="flex items-center text-amber-400 text-sm">
                    {Array.from({ length: note.batchRating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {Array.from({ length: 5 - note.batchRating }).map((_, i) => (
                      <span key={i} className="text-stone-700">★</span>
                    ))}
                  </div>

                  <button
                    onClick={() => onDeleteNote(note.id)}
                    className="p-1.5 rounded text-stone-500 hover:text-red-400 hover:bg-stone-800 transition-colors cursor-pointer"
                    title="Hapus catatan"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-stone-400 font-medium">Catatan Tasting & Evaluasi:</span>
                  <p className="text-stone-200 mt-0.5 leading-relaxed bg-stone-900/60 p-3 rounded-lg border border-stone-800">
                    {note.tastingNotes}
                  </p>
                </div>

                {note.improvementsNextTime && (
                  <div className="flex items-start gap-2 text-amber-300 bg-amber-950/20 p-2.5 rounded-lg border border-amber-900/40">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Fokus Evaluasi Selanjutnya:</strong> {note.improvementsNextTime}</span>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#12151d] border border-stone-800/80 space-y-3">
            <BookMarked className="w-10 h-10 text-stone-600 mx-auto" />
            <h4 className="font-display text-base font-bold text-stone-300">
              Belum Ada Catatan Praktik
            </h4>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Setiap kali Anda memasak di mode "Studio Masak Anti-Gagal", Anda dapat menyimpan catatan evaluasi rasa di sini.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
