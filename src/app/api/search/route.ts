import { type NextRequest } from "next/server";
import {
  getModulesForStudent,
  getLessonsForModule,
  getLesson,
} from "@/lib/content";
import { formatModuleName } from "@/lib/types";

interface SearchResult {
  title: string;
  moduleName: string;
  moduleSlug: string;
  lessonSlug: string;
  snippet: string;
}

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q")?.trim();
  const studentId = searchParams.get("student");

  if (!query || !studentId) {
    return Response.json([]);
  }

  if (query.length < 2) {
    return Response.json([]);
  }

  const results: SearchResult[] = [];
  const modules = getModulesForStudent(studentId);
  const lowerQuery = query.toLowerCase();
  const MAX_RESULTS = 20;

  for (const moduleSlug of modules) {
    if (results.length >= MAX_RESULTS) break;

    const lessons = getLessonsForModule(studentId, moduleSlug);

    for (const lessonMeta of lessons) {
      if (results.length >= MAX_RESULTS) break;

      const lesson = getLesson(studentId, moduleSlug, lessonMeta.slug);
      if (!lesson) continue;

      const fullText = lesson.content;
      const lowerText = fullText.toLowerCase();
      const matchIndex = lowerText.indexOf(lowerQuery);

      // Also check title match
      const titleMatch = lesson.title.toLowerCase().includes(lowerQuery);

      if (matchIndex === -1 && !titleMatch) continue;

      let snippet = "";
      if (matchIndex !== -1) {
        const snippetRadius = 50;
        const start = Math.max(0, matchIndex - snippetRadius);
        const end = Math.min(fullText.length, matchIndex + query.length + snippetRadius);
        snippet = (start > 0 ? "..." : "") +
          fullText.slice(start, end).replace(/\n/g, " ").trim() +
          (end < fullText.length ? "..." : "");
      } else {
        // Title match only — use start of content as snippet
        snippet = fullText.slice(0, 100).replace(/\n/g, " ").trim() +
          (fullText.length > 100 ? "..." : "");
      }

      results.push({
        title: lesson.title,
        moduleName: formatModuleName(moduleSlug),
        moduleSlug,
        lessonSlug: lessonMeta.slug,
        snippet,
      });
    }
  }

  return Response.json(results);
}
