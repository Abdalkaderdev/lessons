"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Student } from "@/lib/students";
import { LessonMeta, formatModuleName } from "@/lib/types";
import { StudentIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  student: Student;
  modules: { slug: string; lessons: LessonMeta[] }[];
}

export default function Sidebar({ student, modules }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile header bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 md:hidden"
        style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: student.gradient }}
          >
            <StudentIcon icon={student.icon} size={16} color="white" />
          </div>
          <span
            className="text-sm font-medium"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            {student.name}
          </span>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar flex flex-col h-screen overflow-y-auto no-print
          fixed inset-0 z-50 transition-transform duration-300 ease-in-out
          md:static md:translate-x-0 md:w-72 md:min-w-72
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: 'var(--bg-surface)' }}
      >
        {/* Mobile close button */}
        <div className="flex justify-end p-3 md:hidden">
          <button
            onClick={closeSidebar}
            className="p-2 rounded-lg"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Student header */}
        <div className="p-5 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <Link
            href="/"
            className="text-xs font-medium transition-colors hover:opacity-100 opacity-50 flex items-center gap-1.5"
            style={{ color: 'var(--text-secondary)' }}
            onClick={closeSidebar}
          >
            <span>&larr;</span> All Students
          </Link>

          <div className="flex items-center gap-3 mt-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: student.gradient }}
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
            onClick={closeSidebar}
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
                    onClick={closeSidebar}
                  >
                    {lesson.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
        <div className="p-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
