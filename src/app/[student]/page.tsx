import { notFound } from "next/navigation";
import { getStudent } from "@/lib/students";
import { getCurriculum, getModulesForStudent, getLessonsForModule } from "@/lib/content";
import { marked } from "marked";
import Link from "next/link";
import ProgressDashboard from "@/components/ProgressDashboard";

export default async function StudentDashboard({
  params,
}: {
  params: Promise<{ student: string }>;
}) {
  const { student: studentId } = await params;
  const student = getStudent(studentId);
  if (!student) notFound();

  const curriculumMd = getCurriculum(studentId);
  const curriculumHtml = curriculumMd ? marked(curriculumMd) : null;

  const moduleSlugs = getModulesForStudent(studentId);
  const modules = moduleSlugs.map((slug) => ({
    slug,
    lessons: getLessonsForModule(studentId, slug),
  }));
  const firstLesson =
    modules.length > 0 ? modules[0].lessons[0] : null;

  return (
    <div className="max-w-3xl">
      <p
        className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold mb-4"
        style={{ color: student.accentColor }}
      >
        {student.tagline}
      </p>
      <h1
        className="text-4xl mb-2"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
      >
        {student.name}&apos;s Curriculum
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
        {student.description}
      </p>

      {firstLesson && (
        <Link
          href={`/${studentId}/${firstLesson.moduleSlug}/${firstLesson.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:translate-x-1 mb-10"
          style={{
            background: `${student.accentColor}18`,
            color: student.accentColor,
            border: `1px solid ${student.accentColor}30`,
          }}
        >
          Start First Lesson <span>&rarr;</span>
        </Link>
      )}

      <ProgressDashboard
        modules={modules}
        studentName={student.name}
        accentColor={student.accentColor}
      />

      {curriculumHtml && (
        <div className="mt-10">
          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Full Curriculum
          </h2>
          <div
            className="lesson-body"
            dangerouslySetInnerHTML={{ __html: curriculumHtml }}
          />
        </div>
      )}
    </div>
  );
}
