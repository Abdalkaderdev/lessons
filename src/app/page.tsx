import { students } from "@/lib/students";
import StudentCard from "@/components/StudentCard";

export default function HomePage() {
  return (
    <div className="home-hero">
      <div className="max-w-6xl mx-auto px-8 w-full">
        {/* Header */}
        <div className="mb-20 animate-entrance delay-1">
          <p
            className="text-[0.7rem] uppercase tracking-[0.3em] mb-6"
            style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-body)' }}
          >
            Teaching Dashboard
          </p>
          <h1
            className="text-6xl md:text-7xl leading-[0.95] mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            AI<br />
            <span className="italic" style={{ color: 'var(--accent-warm)' }}>Lessons</span>
          </h1>
          <p className="text-lg max-w-md" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Select a student to open their personalized curriculum and start teaching.
          </p>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {students.map((student, i) => (
            <div key={student.id} className={`animate-entrance delay-${i + 3}`}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-20 animate-fade delay-5">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            3 students &middot; {students.reduce((acc, s) => acc + s.modules.length, 0)} modules &middot; Built for teaching AI literacy
          </p>
        </div>
      </div>
    </div>
  );
}
