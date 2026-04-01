"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Student } from "@/lib/students";
import { LessonMeta, formatModuleName } from "@/lib/types";
import { StudentIcon } from "./Icons";

interface SidebarProps {
  student: Student;
  modules: { slug: string; lessons: LessonMeta[] }[];
}

export default function Sidebar({ student, modules }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sidebar w-72 min-w-72 flex flex-col h-screen overflow-y-auto no-print">
      {/* Student header */}
      <div className="p-5 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
        <Link
          href="/"
          className="text-xs font-medium transition-colors hover:opacity-100 opacity-50 flex items-center gap-1.5"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span>&larr;</span> All Students
        </Link>

        <div className="flex items-center gap-3 mt-4">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${student.gradient} flex items-center justify-center`}
          >
            <StudentIcon icon={student.icon} size={20} color="white" />
          </div>
          <div>
            <h2
              className="text-lg leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              {student.name}
            </h2>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{student.tagline}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <Link
          href={`/${student.id}`}
          className={`sidebar-link block px-3 py-2 rounded-lg text-sm mb-3 ${
            pathname === `/${student.id}` ? "active" : ""
          }`}
          style={{
            color: pathname === `/${student.id}` ? 'var(--accent-warm)' : 'var(--text-secondary)',
            fontWeight: pathname === `/${student.id}` ? 500 : 400,
          }}
        >
          Curriculum Overview
        </Link>

        {modules.map((mod) => (
          <div key={mod.slug} className="mb-5">
            <h3
              className="text-[0.65rem] uppercase tracking-[0.15em] font-semibold px-3 mb-2"
              style={{ color: 'var(--text-muted)' }}
            >
              {formatModuleName(mod.slug)}
            </h3>
            {mod.lessons.map((lesson) => {
              const href = `/${student.id}/${mod.slug}/${lesson.slug}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={lesson.slug}
                  href={href}
                  className={`sidebar-link block px-3 py-1.5 text-[0.82rem] rounded-lg ${isActive ? "active" : ""}`}
                  style={{
                    color: isActive ? 'var(--accent-warm)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 500 : 400,
                    ...(isActive ? { borderLeft: `2px solid ${student.accentColor}` } : {}),
                  }}
                >
                  {lesson.title}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
