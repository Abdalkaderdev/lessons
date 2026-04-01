import Link from "next/link";
import { Student } from "@/lib/students";

const emojiMap: Record<string, string> = {
  rocket: "\u{1F680}",
  sparkles: "\u{2728}",
  briefcase: "\u{1F4BC}",
};

export default function StudentCard({ student }: { student: Student }) {
  return (
    <Link href={`/${student.id}`} className="student-card block group">
      {/* Top gradient bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${student.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Background glow */}
      <div
        className="card-glow"
        style={{ background: `radial-gradient(circle, ${student.accentColor}15, transparent 70%)` }}
      />

      {/* Emoji + Tagline */}
      <div className="flex items-center gap-2.5 mb-6">
        <span className="text-2xl">{emojiMap[student.emoji] || ""}</span>
        <span className="card-tagline" style={{ color: student.accentColor }}>
          {student.tagline}
        </span>
      </div>

      {/* Name — big and editorial */}
      <h3
        className="card-name text-4xl mb-1 leading-tight"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        {student.name}
      </h3>

      {/* Age */}
      <p className="text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
        {student.age} years old
      </p>

      {/* Divider */}
      <div
        className="h-px mb-5 opacity-60"
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
        <span
          className="text-sm transition-transform duration-300 group-hover:translate-x-1"
          style={{ color: student.accentColor }}
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
