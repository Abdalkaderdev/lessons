import { notFound } from "next/navigation";
import { getStudent } from "@/lib/students";
import { getModulesForStudent, getLessonsForModule } from "@/lib/content";
import Sidebar from "@/components/Sidebar";

export default async function StudentLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ student: string }>;
}) {
  const { student: studentId } = await params;
  const student = getStudent(studentId);
  if (!student) notFound();

  const moduleSlugs = getModulesForStudent(studentId);
  const modules = moduleSlugs.map((slug) => ({
    slug,
    lessons: getLessonsForModule(studentId, slug),
  }));

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar student={student} modules={modules} />
      <main className="flex-1 overflow-y-auto p-4 pt-16 md:p-8 md:pt-8">{children}</main>
    </div>
  );
}
