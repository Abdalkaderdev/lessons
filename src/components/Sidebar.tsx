"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Student } from "@/lib/students";
import { LessonMeta, formatModuleName } from "@/lib/types";

interface SidebarProps {
  student: Student;
  modules: { slug: string; lessons: LessonMeta[] }[];
}

export default function Sidebar({ student, modules }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-w-72 bg-slate-800 border-r border-slate-700 flex flex-col h-screen overflow-y-auto no-print">
      <div className="p-5 border-b border-slate-700">
        <Link href="/" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
          &larr; All Students
        </Link>
        <div className="flex items-center gap-3 mt-3">
          <div
            className={`w-9 h-9 rounded-full ${student.color} flex items-center justify-center text-white font-bold text-sm`}
          >
            {student.name[0]}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-100">{student.name}</h2>
            <p className="text-slate-400 text-xs">{student.age} years old</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <Link
          href={`/${student.id}`}
          className={`block px-3 py-2 rounded text-sm mb-3 transition-colors ${
            pathname === `/${student.id}`
              ? "text-blue-400 bg-blue-500/10"
              : "text-slate-300 hover:text-slate-100 hover:bg-slate-700"
          }`}
        >
          Curriculum Overview
        </Link>

        {modules.map((mod) => (
          <div key={mod.slug} className="mb-4">
            <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold px-3 mb-2">
              {formatModuleName(mod.slug)}
            </h3>
            {mod.lessons.map((lesson) => {
              const href = `/${student.id}/${mod.slug}/${lesson.slug}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={lesson.slug}
                  href={href}
                  className={`block px-3 py-1.5 text-sm rounded transition-colors ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10 border-l-2 border-blue-400"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-700"
                  }`}
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
