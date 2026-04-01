import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface LessonMeta {
  title: string;
  module: string;
  order: number;
  slug: string;
  moduleSlug: string;
}

export interface Lesson extends LessonMeta {
  content: string;
}

export function getModulesForStudent(studentId: string): string[] {
  const studentDir = path.join(contentDir, studentId);
  if (!fs.existsSync(studentDir)) return [];
  return fs
    .readdirSync(studentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

export function getLessonsForModule(studentId: string, moduleSlug: string): LessonMeta[] {
  const moduleDir = path.join(contentDir, studentId, moduleSlug);
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
  const filePath = path.join(contentDir, studentId, moduleSlug, `${lessonSlug}.md`);
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

export function getCurriculum(studentId: string): string | null {
  const filePath = path.join(contentDir, studentId, "curriculum.md");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  return content;
}

export function formatModuleName(slug: string): string {
  return slug
    .replace(/^ai-for-/, "AI for ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
