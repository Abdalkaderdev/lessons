import Link from "next/link";
import { Student } from "@/lib/students";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <Link
      href={`/${student.id}`}
      className="block bg-slate-800 border border-slate-700 rounded-xl p-7 hover:border-blue-500 hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-black/30"
    >
      <div
        className={`w-14 h-14 rounded-full ${student.color} flex items-center justify-center text-white font-bold text-xl mb-4`}
      >
        {student.name[0]}
      </div>
      <h3 className="text-xl font-semibold text-slate-100 mb-1">{student.name}</h3>
      <p className="text-slate-400 text-sm mb-3">{student.age} years old</p>
      <p className="text-slate-300 text-sm leading-relaxed">{student.description}</p>
    </Link>
  );
}
