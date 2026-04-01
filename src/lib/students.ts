export interface Student {
  id: string;
  name: string;
  age: number;
  gradient: string;
  accentColor: string;
  bgTint: string;
  emoji: string;
  tagline: string;
  description: string;
  modules: string[];
}

export const students: Student[] = [
  {
    id: "omar",
    name: "Omar",
    age: 17,
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    accentColor: "#3b82f6",
    bgTint: "rgba(59, 130, 246, 0.06)",
    emoji: "rocket",
    tagline: "Builder",
    description: "AI for Websites, School, Social Media & Design, Images",
    modules: ["ai-for-websites", "ai-for-school", "ai-for-social-media", "ai-for-images"],
  },
  {
    id: "fares",
    name: "Fares",
    age: 10,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    accentColor: "#14b8a6",
    bgTint: "rgba(20, 184, 166, 0.06)",
    emoji: "sparkles",
    tagline: "Explorer",
    description: "AI for Studying, Fun, Creativity",
    modules: ["ai-for-studying", "ai-for-fun", "ai-for-creativity"],
  },
  {
    id: "ali",
    name: "Ali",
    age: 20,
    gradient: "from-amber-400 via-orange-500 to-red-600",
    accentColor: "#f59e0b",
    bgTint: "rgba(245, 158, 11, 0.06)",
    emoji: "briefcase",
    tagline: "Strategist",
    description: "AI for Business, Writing, Data, Websites/Apps, Productivity",
    modules: ["ai-for-business", "ai-for-writing", "ai-for-data", "ai-for-websites", "ai-for-productivity"],
  },
];

export function getStudent(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}
