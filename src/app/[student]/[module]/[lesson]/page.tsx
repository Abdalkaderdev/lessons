import { notFound } from "next/navigation";
import Link from "next/link";
import { getStudent } from "@/lib/students";
import { getLesson, getAdjacentLessons, formatModuleName } from "@/lib/content";
import LessonViewer from "@/components/LessonViewer";
import TeacherNotes from "@/components/TeacherNotes";
import BookmarkButton from "@/components/BookmarkButton";

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

  const wordCount = lesson.content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const { prev, next } = getAdjacentLessons(studentId, moduleSlug, lessonSlug);

  return (
    <div className="flex flex-col h-full">
      <nav
        className="flex items-center justify-between px-6 py-3 no-print"
        style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
      >
        <div className="flex items-center gap-2 text-sm min-w-0">
          <Link href="/" className="transition-colors hover:opacity-100 opacity-60 shrink-0" style={{ color: 'var(--text-secondary)' }}>
            Home
          </Link>
          <span className="opacity-30 shrink-0">/</span>
          <Link href={`/${studentId}`} className="transition-colors hover:opacity-100 opacity-60 shrink-0" style={{ color: 'var(--text-secondary)' }}>
            {student.name}
          </Link>
          <span className="opacity-30 shrink-0">/</span>
          <span className="opacity-40 shrink-0 hidden md:inline">{formatModuleName(moduleSlug)}</span>
          <span className="opacity-30 shrink-0 hidden md:inline">/</span>
          <span className="truncate" style={{ color: 'var(--text-primary)' }}>{lesson.title}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <BookmarkButton
            studentId={studentId}
            lessonKey={`${moduleSlug}:${lessonSlug}`}
            lessonTitle={lesson.title}
            moduleSlug={moduleSlug}
            lessonSlug={lessonSlug}
          />
          <TeacherNotes
            studentId={studentId}
            lessonKey={`${moduleSlug}:${lessonSlug}`}
          />
        </div>
      </nav>
      <div className="flex-1 overflow-hidden">
        <LessonViewer
          content={lesson.content}
          title={lesson.title}
          studentName={student.name}
          accentColor={student.accentColor}
          readingTime={readingTime}
        />
      </div>
      {(prev || next) && (
        <div
          className="no-print"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            padding: '1rem 1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)',
          }}
        >
          {prev ? (
            <Link
              href={`/${studentId}/${prev.moduleSlug}/${prev.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.5rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
                transition: 'border-color 0.15s',
              }}
            >
              <span style={{ fontSize: '1.25rem', color: 'var(--accent-warm)', flexShrink: 0 }}>&larr;</span>
              <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Previous Lesson</span>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/${studentId}/${next.moduleSlug}/${next.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '0.75rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.5rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
                transition: 'border-color 0.15s',
              }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: 0 }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Next Lesson</span>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>{next.title}</span>
              </span>
              <span style={{ fontSize: '1.25rem', color: 'var(--accent-warm)', flexShrink: 0 }}>&rarr;</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  );
}
