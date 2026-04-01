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

export function formatModuleName(slug: string): string {
  const name = slug.startsWith("shared:") ? slug.replace("shared:", "") : slug;
  return name
    .replace(/^ai-for-/, "AI for ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
