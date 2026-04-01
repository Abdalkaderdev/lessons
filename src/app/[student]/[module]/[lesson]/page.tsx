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
      <nav className="flex items-center gap-2 text-sm text-slate-400 px-6 py-3 border-b border-slate-700 no-print">
        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/${studentId}`} className="hover:text-blue-400 transition-colors">{student.name}</Link>
        <span>/</span>
        <span className="text-slate-500">{formatModuleName(moduleSlug)}</span>
        <span>/</span>
        <span className="text-slate-200">{lesson.title}</span>
      </nav>
      <div className="flex-1 overflow-hidden">
        <LessonViewer
          content={lesson.content}
          title={lesson.title}
          studentName={student.name}
        />
      </div>
    </div>
  );
}
