export interface Student {
  id: string;
  name: string;
  age: number;
  color: string;
  textColor: string;
  description: string;
  modules: string[];
}

export const students: Student[] = [
  {
    id: "omar",
    name: "Omar",
    age: 17,
    color: "bg-blue-600",
    textColor: "text-blue-400",
    description: "AI for Websites, School, Social Media & Design, Images",
    modules: ["ai-for-websites", "ai-for-school", "ai-for-social-media", "ai-for-images"],
  },
  {
    id: "fares",
    name: "Fares",
    age: 10,
    color: "bg-green-600",
    textColor: "text-green-400",
    description: "AI for Studying, Fun, Creativity",
    modules: ["ai-for-studying", "ai-for-fun", "ai-for-creativity"],
  },
  {
    id: "ali",
    name: "Ali",
    age: 20,
    color: "bg-red-600",
    textColor: "text-red-400",
    description: "AI for Business, Writing, Data, Websites/Apps, Productivity",
    modules: ["ai-for-business", "ai-for-writing", "ai-for-data", "ai-for-websites", "ai-for-productivity"],
  },
];

export function getStudent(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}
