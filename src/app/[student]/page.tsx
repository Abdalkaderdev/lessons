import { notFound } from "next/navigation";
import { getStudent } from "@/lib/students";
import { getCurriculum, getModulesForStudent, getLessonsForModule } from "@/lib/content";
import { marked } from "marked";
import Link from "next/link";

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
  const firstLesson =
    moduleSlugs.length > 0
      ? getLessonsForModule(studentId, moduleSlugs[0])?.[0]
      : null;

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-100 mb-2">{student.name}&apos;s Dashboard</h1>
      <p className="text-slate-400 mb-8">{student.description}</p>

      {firstLesson && (
        <Link
          href={`/${studentId}/${firstLesson.moduleSlug}/${firstLesson.slug}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg mb-8 transition-colors"
        >
          Start First Lesson &rarr;
        </Link>
      )}

      {curriculumHtml && (
        <div
          className="lesson-body prose-invert"
          dangerouslySetInnerHTML={{ __html: curriculumHtml }}
        />
      )}
    </div>
  );
}
