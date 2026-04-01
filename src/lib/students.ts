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
    gradient: "linear-gradient(135deg, #4A90D9, #2B5EA7)",
    accentColor: "#2E6FBA",
    bgTint: "rgba(46, 111, 186, 0.06)",
    icon: "rocket",
    tagline: "Builder",
    description: "Websites, School, Social Media, Design, Coding, Career",
    modules: ["ai-for-websites", "ai-for-school", "ai-for-social-media", "ai-for-images", "ai-for-coding", "ai-for-jobs", "ai-for-money"],
  },
  {
    id: "fares",
    name: "Fares",
    gradient: "linear-gradient(135deg, #F09070, #D85A35)",
    accentColor: "#D06538",
    bgTint: "rgba(208, 101, 56, 0.06)",
    icon: "sparkle",
    tagline: "Explorer",
    description: "Studying, Fun, Creativity, Languages, Health",
    modules: ["ai-for-studying", "ai-for-fun", "ai-for-creativity", "ai-for-languages", "ai-for-health"],
  },
  {
    id: "ali",
    name: "Ali",
    gradient: "linear-gradient(135deg, #3DAA85, #1F7055)",
    accentColor: "#2D8F6F",
    bgTint: "rgba(45, 143, 111, 0.06)",
    icon: "briefcase",
    tagline: "Strategist",
    description: "Business, Writing, Data, Marketing, Legal, Hiring, Websites",
    modules: ["ai-for-business", "ai-for-writing", "ai-for-data", "ai-for-websites", "ai-for-productivity", "ai-for-hiring", "ai-for-legal", "ai-for-marketing", "ai-for-customer-service"],
  },
];

export function getStudent(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}
