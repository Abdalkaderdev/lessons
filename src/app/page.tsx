import { students } from "@/lib/students";
import StudentCard from "@/components/StudentCard";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-100 mb-2">AI Lessons</h1>
      <p className="text-slate-400 mb-10">Select a student to begin teaching.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
