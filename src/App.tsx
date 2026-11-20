import React, { useState, useEffect } from 'react';
import { Recipe, Category, Difficulty, StudentNote } from './types/culinary';
import { RECIPES_DATA } from './data/recipesData';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { RecipeCard } from './components/RecipeCard';
import { FailProofCookingMode } from './components/FailProofCookingMode';
import { QuizSection } from './components/QuizSection';
import { StudentJournal } from './components/StudentJournal';
import { GlossaryModal } from './components/GlossaryModal';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { KitchenConverterModal } from './components/KitchenConverterModal';
import { Footer } from './components/Footer';
import { Search, Flame, SlidersHorizontal, BookOpen, Award, Sparkles, ChefHat, Scale, ArrowUp } from 'lucide-react';

const INITIAL_NOTES: StudentNote[] = [
  {
    id: 'note-1',
    recipeId: 'rendang-wagyu-karamelisasi',
    recipeTitle: 'Rendang Daging Sapi Karamelisasi Minyak Kelapa',
    date: '18 Oktober 2026',
    batchRating: 5,
    tastingNotes: 'Gerakan menimba di 30 menit awal terbukti krusial. Santan tidak pecah sama sekali dan bumbu kalio mengental dengan minyak kelapa murni yang wangi.',
    improvementsNextTime: 'Potong daging sengkel sedikit lebih tebal agar tekstur serat lebih mantap saat 4 jam reduksi.'
  },
  {
    id: 'note-2',
    recipeId: 'pan-seared-salmon-crispy-dabu',
    recipeTitle: 'Salmon Crispy Skin dengan Sambal Dabu-Dabu Segar',
    date: '21 Oktober 2026',
    batchRating: 4,
    tastingNotes: 'Teknik menekan kulit salmon 30 detik pertama berhasil membuat seluruh kulit rata menyentuh wajan panas. Kulit renyah seperti keripik.',
    improvementsNextTime: 'Pastikan minyak sambal dabu-dabu benar-benar panas berasap sebelum disiram ke bawang.'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'recipes' | 'cooking' | 'quiz' | 'journal'>('recipes');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(RECIPES_DATA[0]);
  const [detailModalRecipe, setDetailModalRecipe] = useState<Recipe | null>(null);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isConverterOpen, setIsConverterOpen] = useState(false);

  // Filters for Recipe Catalog
  const [selectedCategory, setSelectedCategory] = useState<Category>('Semua');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Student Journal State (synced with localStorage)
  const [journalNotes, setJournalNotes] = useState<StudentNote[]>(() => {
    try {
      const saved = localStorage.getItem('chef_student_notes');
      return saved ? JSON.parse(saved) : INITIAL_NOTES;
    } catch {
      return INITIAL_NOTES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('chef_student_notes', JSON.stringify(journalNotes));
    } catch {
      // ignore
    }
  }, [journalNotes]);

  const handleSaveJournalEntry = (entry: {
    recipeId: string;
    recipeTitle: string;
    batchRating: number;
    tastingNotes: string;
    improvementsNextTime: string;
  }) => {
    const newNote: StudentNote = {
      id: `note-${Date.now()}`,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      ...entry
    };
    setJournalNotes((prev) => [newNote, ...prev]);
  };

  const handleDeleteJournalNote = (id: string) => {
    setJournalNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleAddCustomJournalNote = (noteData: Omit<StudentNote, 'id' | 'date'>) => {
    const newNote: StudentNote = {
      id: `custom-${Date.now()}`,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      ...noteData
    };
    setJournalNotes((prev) => [newNote, ...prev]);
  };

  const handleStartCooking = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setActiveTab('cooking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickStartCooking = () => {
    setActiveTab('cooking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter recipes
  const filteredRecipes = RECIPES_DATA.filter((recipe) => {
    const matchesCategory = selectedCategory === 'Semua' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'Semua' || recipe.difficulty === selectedDifficulty;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#090b10] text-stone-100 flex flex-col font-body selection:bg-amber-400 selection:text-stone-950 relative">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenConverter={() => setIsConverterOpen(true)}
        onQuickStartCooking={handleQuickStartCooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'recipes' && (
          <div className="space-y-12 pb-12">
            
            {/* Hero Visual Section */}
            <HeroBanner
              onExploreRecipes={() => {
                const el = document.getElementById('katalog-resep');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenQuiz={() => {
                setActiveTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectFeaturedRecipe={(recipeId) => {
                const rec = RECIPES_DATA.find((r) => r.id === recipeId);
                if (rec) handleStartCooking(rec);
              }}
            />

            {/* Recipe Catalog Section */}
            <section id="katalog-resep" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>Kurikulum Masterclass</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                    Koleksi Resep Anti-Gagal Pilihan Chef
                  </h2>
                  <p className="text-xs text-stone-400 mt-1">
                    Setiap resep dilengkapi pemantauan titik kritis dan profil rasa agar anak didik tidak gagal.
                  </p>
                </div>

                {/* Contemporary Search Box */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari resep: Rendang, Salmon, Croissant..."
                    className="w-full bg-[#11131a] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors shadow-inner"
                  />
                </div>
              </div>

              {/* Filter Tabs (Interactive Segmented Controls - Allowed) */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                  {(['Semua', 'Viral Premium & Pastry', 'Cocktail & Mixology Segar', 'Nusantara Modern', 'Gourmet Seafood & Grill', 'Artisanal Bakery'] as Category[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-xs rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-amber-400 text-stone-950 font-bold shadow-md shadow-amber-950/20'
                          : 'bg-[#11131a] border border-white/[0.08] text-stone-300 hover:text-white hover:border-amber-400/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-400 bg-[#11131a] px-3 py-1.5 rounded-xl border border-white/[0.08]">
                  <span className="flex items-center gap-1 font-medium text-stone-300">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Level:</span>
                  </span>
                  {['Semua', 'Pemula', 'Menengah', 'Mahir'].map((dif) => (
                    <button
                      key={dif}
                      onClick={() => setSelectedDifficulty(dif)}
                      className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer text-xs ${
                        selectedDifficulty === dif
                          ? 'bg-stone-800 text-amber-300 font-bold'
                          : 'hover:text-stone-200'
                      }`}
                    >
                      {dif}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recipe Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelectRecipe={(r) => setDetailModalRecipe(r)}
                    onCookRecipe={(r) => handleStartCooking(r)}
                  />
                ))}
              </div>

              {/* Modern Bento Interactive Feature Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
                
                {/* Bento Card 1: Quiz Callout */}
                <div className="p-6 rounded-2xl bg-[#11131a] border border-white/[0.08] space-y-3 relative overflow-hidden flex flex-col justify-between group hover:border-amber-400/30 transition-all">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Kuis Asah Otak Kuliner
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Uji instingmu seputar sains rasa, reaksi Maillard, dan pertolongan pertama masakan gagal (kitchen rescue).
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('quiz');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="pt-2 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Mulai Kuis &amp; Uji Cerdas</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bento Card 2: Unit Converter */}
                <div className="p-6 rounded-2xl bg-[#11131a] border border-white/[0.08] space-y-3 relative overflow-hidden flex flex-col justify-between group hover:border-amber-400/30 transition-all">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Kalkulator Takaran &amp; Suhu
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Konversi takaran sendok makan, sendok teh, gram, dan suhu oven Celsius ke Fahrenheit seketika.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsConverterOpen(true)}
                    className="pt-2 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Buka Kalkulator Dapur</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bento Card 3: Kitchen Glossary */}
                <div className="p-6 rounded-2xl bg-[#11131a] border border-white/[0.08] space-y-3 relative overflow-hidden flex flex-col justify-between group hover:border-amber-400/30 transition-all">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Kamus Istilah Kuliner
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Pahami teknik Prancis &amp; internasional: Deglaze, Emulsi, Chiffonade, Brunoise, dan Lamination.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsGlossaryOpen(true)}
                    className="pt-2 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Eksplorasi Glosarium Chef</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </section>
          </div>
        )}

        {/* Tab 2: Studio Masak Anti-Gagal */}
        {activeTab === 'cooking' && (
          <FailProofCookingMode
            recipe={selectedRecipe}
            onBackToOverview={() => setActiveTab('recipes')}
            onSaveJournalEntry={handleSaveJournalEntry}
          />
        )}

        {/* Tab 3: Kuis Asah Otak Kuliner */}
        {activeTab === 'quiz' && (
          <QuizSection />
        )}

        {/* Tab 4: Jurnal Murid */}
        {activeTab === 'journal' && (
          <StudentJournal
            notes={journalNotes}
            onDeleteNote={handleDeleteJournalNote}
            onAddCustomNote={handleAddCustomJournalNote}
          />
        )}
      </main>

      {/* Floating Modern Quick Utilities */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2 pointer-events-auto">
        <button
          onClick={() => setIsConverterOpen(true)}
          className="p-3 rounded-2xl bg-[#11131a]/90 backdrop-blur-xl border border-white/[0.1] text-amber-400 hover:text-amber-300 hover:border-amber-400/40 shadow-xl transition-all cursor-pointer flex items-center gap-2 group"
          title="Kalkulator Takaran Sendok & Suhu Oven"
        >
          <Scale className="w-4 h-4" />
          <span className="hidden sm:inline text-xs font-bold text-stone-200 group-hover:text-amber-300 pr-1">
            Konversi Takaran
          </span>
        </button>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-[#11131a]/90 backdrop-blur-xl border border-white/[0.1] text-stone-400 hover:text-white hover:border-white/20 shadow-xl transition-all cursor-pointer"
          title="Kembali ke Atas"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        recipe={detailModalRecipe}
        onClose={() => setDetailModalRecipe(null)}
        onStartCooking={handleStartCooking}
      />

      {/* Searchable Culinary Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      {/* Modern Kitchen Converter Modal */}
      <KitchenConverterModal
        isOpen={isConverterOpen}
        onClose={() => setIsConverterOpen(false)}
      />

      {/* Quiet Tasteful Footer */}
      <Footer
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onSelectTab={setActiveTab}
      />

    </div>
  );
}
