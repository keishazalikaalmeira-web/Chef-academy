export type Category = 'Semua' | 'Viral Premium & Pastry' | 'Cocktail & Mixology Segar' | 'Nusantara Modern' | 'Gourmet Seafood & Grill' | 'Artisanal Bakery' | 'Teknik Dasar';
export type Difficulty = 'Pemula' | 'Menengah' | 'Mahir';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface CookingStep {
  stepNumber: number;
  title: string;
  instruction: string;
  durationMinutes?: number; // for timer
  antiGagalSecret: string; // The crucial fail-proof checkpoint
  culinaryScience: string; // Why it works chemically/physically
  temperatureOrFire?: string; // e.g. "Api Sedang-Kecil (150°C)"
  checkpointType: 'suhu' | 'waktu' | 'tekstur' | 'aroma' | 'teknik';
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  difficulty: Difficulty;
  cookTimeMinutes: number;
  prepTimeMinutes: number;
  servingsBase: number;
  antiGagalRating: number; // e.g. 99%
  image: string;
  description: string;
  chefQuote: string;
  ingredients: Ingredient[];
  equipmentNeeded: string[];
  steps: CookingStep[];
  commonFailures: {
    mistake: string;
    prevention: string;
  }[];
  flavorProfile: {
    umami: number; // 0-100
    spicy: number; // 0-100
    aroma: number; // 0-100
    complexity: number; // 0-100
    crispiness: number; // 0-100
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  chefNote: string;
  category: string;
}

export interface QuizModule {
  id: string;
  title: string;
  subtitle: string;
  level: 'Dasar' | 'Menengah' | 'Masterclass';
  questionsCount: number;
  timeLimitSeconds: number;
  badgeName: string;
  questions: QuizQuestion[];
}

export interface GlossaryTerm {
  term: string;
  frenchOrOrigin?: string;
  pronunciation?: string;
  definition: string;
  exampleInCooking: string;
  category: 'Teknik Potong' | 'Teknik Panas' | 'Baking & Pastry' | 'Sains Rasa';
}

export interface StudentNote {
  id: string;
  recipeId: string;
  recipeTitle: string;
  date: string;
  batchRating: number; // 1-5 stars
  tastingNotes: string;
  improvementsNextTime: string;
}
