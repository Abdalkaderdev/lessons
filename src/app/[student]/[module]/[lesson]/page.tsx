import { notFound } from "next/navigation";
import Link from "next/link";
import { getStudent } from "@/lib/students";
import { getLesson, formatModuleName } from "@/lib/content";
import LessonViewer from "@/components/LessonViewer";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ student: string; module: string; lesson: string }>;
}) {
  const { student: studentId, module: moduleSlug, lesson: lessonSlug } = await params;
  const student = getStudent(studentId);
  if (!student) notFound();

  const lesson = getLesson(studentId, moduleSlug, lessonSlug);
  if (!lesson) notFound();

  return (
    <div className="flex flex-col h-full">
      <nav
        className="flex items-center gap-2 text-sm px-6 py-3 no-print"
        style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
      >
        <Link href="/" className="transition-colors hover:opacity-100 opacity-60" style={{ color: 'var(--text-secondary)' }}>
          Home
        </Link>
        <span className="opacity-30">/</span>
        <Link href={`/${studentId}`} className="transition-colors hover:opacity-100 opacity-60" style={{ color: 'var(--text-secondary)' }}>
          {student.name}
        </Link>
        <span className="opacity-30">/</span>
        <span className="opacity-40">{formatModuleName(moduleSlug)}</span>
        <span className="opacity-30">/</span>
        <span style={{ color: 'var(--text-primary)' }}>{lesson.title}</span>
      </nav>
      <div className="flex-1 overflow-hidden">
        <LessonViewer
          content={lesson.content}
          title={lesson.title}
          studentName={student.name}
          accentColor={student.accentColor}
        />
      </div>
    </div>
  );
}
