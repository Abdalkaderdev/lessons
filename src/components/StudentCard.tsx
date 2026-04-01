import Link from "next/link";
import { Student } from "@/lib/students";
import { StudentIcon, ArrowRightIcon } from "./Icons";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <Link href={`/${student.id}`} className="student-card block group">
      {/* Top gradient bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: student.gradient }}
      />

      {/* Background glow */}
      <div
        className="card-glow"
        style={{ background: `radial-gradient(circle, ${student.accentColor}15, transparent 70%)` }}
      />

      {/* Icon + Tagline */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: student.gradient }}
        >
          <StudentIcon icon={student.icon} size={20} color="white" />
        </div>
        <span className="card-tagline" style={{ color: student.accentColor }}>
          {student.tagline}
        </span>
      </div>

      {/* Name */}
      <h3
        className="card-name text-4xl mb-4 leading-tight"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        {student.name}
      </h3>

      {/* Divider */}
      <div
        className="h-px mb-4 opacity-60"
        style={{ background: `linear-gradient(to right, ${student.accentColor}40, transparent)` }}
      />

      {/* Description */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
        {student.description}
      </p>

      {/* Module count + arrow */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          {student.modules.length} module{student.modules.length !== 1 ? 's' : ''}
        </span>
        <ArrowRightIcon
          size={16}
          color={student.accentColor}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
