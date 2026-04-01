import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { LessonMeta, Lesson } from "./types";

export type { LessonMeta, Lesson };
export { formatModuleName } from "./types";

const contentDir = path.join(process.cwd(), "content");

export function getModulesForStudent(studentId: string): string[] {
  const studentDir = path.join(contentDir, studentId);
  const studentModules = fs.existsSync(studentDir)
    ? fs
        .readdirSync(studentDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort()
    : [];

  // Append shared modules (available to all students)
  const sharedDir = path.join(contentDir, "shared");
  const sharedModules = fs.existsSync(sharedDir)
    ? fs
        .readdirSync(sharedDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => `shared--${d.name}`)
        .sort()
    : [];

  return [...studentModules, ...sharedModules];
}

function resolveModulePath(studentId: string, moduleSlug: string): string {
  if (moduleSlug.startsWith("shared--")) {
    return path.join(contentDir, "shared", moduleSlug.replace("shared--", ""));
  }
  return path.join(contentDir, studentId, moduleSlug);
}

export function getLessonsForModule(studentId: string, moduleSlug: string): LessonMeta[] {
  const moduleDir = resolveModulePath(studentId, moduleSlug);
  if (!fs.existsSync(moduleDir)) return [];
  return fs
    .readdirSync(moduleDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(moduleDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        title: data.title || f.replace(".md", ""),
        module: data.module || moduleSlug,
        order: data.order || 0,
        slug: f.replace(".md", ""),
        moduleSlug,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getLesson(studentId: string, moduleSlug: string, lessonSlug: string): Lesson | null {
  const filePath = path.join(resolveModulePath(studentId, moduleSlug), `${lessonSlug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    title: data.title || lessonSlug,
    module: data.module || moduleSlug,
    order: data.order || 0,
    slug: lessonSlug,
    moduleSlug,
    content,
  };
}

export interface AdjacentLesson {
  moduleSlug: string;
  slug: string;
  title: string;
}

export function getAdjacentLessons(
  studentId: string,
  moduleSlug: string,
  lessonSlug: string
): { prev: AdjacentLesson | null; next: AdjacentLesson | null } {
  const modules = getModulesForStudent(studentId);
  const allLessons: AdjacentLesson[] = [];

  for (const mod of modules) {
    const lessons = getLessonsForModule(studentId, mod);
    for (const l of lessons) {
      allLessons.push({ moduleSlug: mod, slug: l.slug, title: l.title });
    }
  }

  const currentIndex = allLessons.findIndex(
    (l) => l.moduleSlug === moduleSlug && l.slug === lessonSlug
  );

  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}

export function getCurriculum(studentId: string): string | null {
  const filePath = path.join(contentDir, studentId, "curriculum.md");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  return content;
}
