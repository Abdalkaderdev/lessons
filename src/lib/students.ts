export interface Student {
  id: string;
  name: string;
  gradient: string;
  accentColor: string;
  bgTint: string;
  icon: string;
  tagline: string;
  description: string;
  modules: string[];
}

export const students: Student[] = [
  {
    id: "omar",
    name: "Omar",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    accentColor: "#3b82f6",
    bgTint: "rgba(59, 130, 246, 0.06)",
    icon: "rocket",
    tagline: "Builder",
    description: "Websites, School, Social Media, Design, Coding, Career",
    modules: ["ai-for-websites", "ai-for-school", "ai-for-social-media", "ai-for-images", "ai-for-coding", "ai-for-jobs", "ai-for-money"],
  },
  {
    id: "fares",
    name: "Fares",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    accentColor: "#14b8a6",
    bgTint: "rgba(20, 184, 166, 0.06)",
    icon: "sparkle",
    tagline: "Explorer",
    description: "Studying, Fun, Creativity, Languages, Health",
    modules: ["ai-for-studying", "ai-for-fun", "ai-for-creativity", "ai-for-languages", "ai-for-health"],
  },
  {
    id: "ali",
    name: "Ali",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    accentColor: "#f59e0b",
    bgTint: "rgba(245, 158, 11, 0.06)",
    icon: "briefcase",
    tagline: "Strategist",
    description: "Business, Writing, Data, Marketing, Legal, Hiring, Websites",
    modules: ["ai-for-business", "ai-for-writing", "ai-for-data", "ai-for-websites", "ai-for-productivity", "ai-for-hiring", "ai-for-legal", "ai-for-marketing", "ai-for-customer-service"],
  },
];

export function getStudent(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}
