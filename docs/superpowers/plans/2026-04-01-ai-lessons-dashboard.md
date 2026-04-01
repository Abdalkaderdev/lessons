# AI Lessons Teaching Dashboard — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Next.js teaching dashboard that renders markdown lessons in slide/full mode with print support, deployed on Vercel.

**Architecture:** Next.js 14 App Router with file-based content in `/content`. Markdown files with frontmatter are read at build time via Node `fs`. A shared layout provides sidebar navigation. Lesson viewer splits markdown on `---` for slide mode. Progress stored in localStorage.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, gray-matter (frontmatter parsing), marked (markdown→HTML), localStorage

---

## File Structure

```
lessons/
├── content/                          ← Markdown lesson content
│   ├── omar/
│   │   ├── curriculum.md
│   │   └── ai-for-websites/
│   │       ├── 01-intro-to-claude.md
│   │       ├── 02-github-basics.md
│   │       ├── 03-build-a-website.md
│   │       ├── 04-vercel-deployment.md
│   │       └── 05-domains.md
│   ├── fares/
│   │   └── curriculum.md
│   └── ali/
│       └── curriculum.md
├── src/
│   ├── app/
│   │   ├── layout.tsx                ← Root layout with dark theme
│   │   ├── page.tsx                  ← Home: student selector cards
│   │   ├── globals.css               ← Tailwind + print styles
│   │   ├── [student]/
│   │   │   ├── layout.tsx            ← Student layout with sidebar
│   │   │   ├── page.tsx              ← Student dashboard
│   │   │   └── [module]/
│   │   │       └── [lesson]/
│   │   │           └── page.tsx      ← Lesson viewer
│   ├── lib/
│   │   ├── content.ts                ← Read/parse markdown files
│   │   ├── students.ts               ← Student metadata (name, age, color, topics)
│   │   └── slides.ts                 ← Split markdown into slides
│   └── components/
│       ├── StudentCard.tsx            ← Card on home page
│       ├── Sidebar.tsx                ← Module/lesson navigation
│       ├── LessonViewer.tsx           ← Slide + full mode viewer (client component)
│       ├── SlideControls.tsx          ← Bottom bar: slide counter, nav buttons
│       ├── PrintButton.tsx            ← Print trigger button
│       └── ProgressCheckbox.tsx       ← Exercise checkbox with localStorage
├── __tests__/
│   ├── content.test.ts               ← Tests for content loading
│   └── slides.test.ts                ← Tests for slide splitting
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

### Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`, `next.config.js`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.js`, `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`
- Delete: `app/` (old static HTML app)

- [ ] **Step 1: Create Next.js project**

```bash
cd /c/Users/max/lessons
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack --use-npm
```

When prompted about overwriting, select yes. This scaffolds the project in the current directory.

- [ ] **Step 2: Install dependencies**

```bash
npm install gray-matter marked
npm install -D @types/marked
```

- [ ] **Step 3: Delete old static app**

```bash
rm -rf app/
```

- [ ] **Step 4: Verify it runs**

```bash
npm run dev
```

Expected: Next.js dev server starts on `http://localhost:3000`, shows default Next.js page.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js project with Tailwind"
```

---

### Task 2: Move Content to `/content` Directory

**Files:**
- Create: `content/omar/`, `content/fares/`, `content/ali/` with restructured markdown files
- Delete: `Omar/`, `Fares/`, `Ali/`

- [ ] **Step 1: Create content directory structure**

```bash
mkdir -p content/omar/ai-for-websites
mkdir -p content/fares
mkdir -p content/ali
```

- [ ] **Step 2: Move and rename Omar's lessons**

```bash
cp Omar/curriculum.md content/omar/curriculum.md
cp Omar/lesson-01-intro-to-claude.md content/omar/ai-for-websites/01-intro-to-claude.md
cp Omar/lesson-02-github-basics.md content/omar/ai-for-websites/02-github-basics.md
cp Omar/lesson-03-build-a-website.md content/omar/ai-for-websites/03-build-a-website.md
cp Omar/lesson-04-vercel-deployment.md content/omar/ai-for-websites/04-vercel-deployment.md
cp Omar/lesson-05-domains.md content/omar/ai-for-websites/05-domains.md
```

- [ ] **Step 3: Move Fares and Ali curricula**

```bash
cp Fares/curriculum.md content/fares/curriculum.md
cp Ali/curriculum.md content/ali/curriculum.md
```

- [ ] **Step 4: Add frontmatter to each lesson file**

Add YAML frontmatter to the top of each lesson file in `content/omar/ai-for-websites/`. Example for `01-intro-to-claude.md` — prepend before the existing `# Lesson 01` heading:

```markdown
---
title: "Introduction to Claude"
module: "AI for Websites"
order: 1
---
```

For `02-github-basics.md`:
```markdown
---
title: "GitHub Basics"
module: "AI for Websites"
order: 2
---
```

For `03-build-a-website.md`:
```markdown
---
title: "Build a Website"
module: "AI for Websites"
order: 3
---
```

For `04-vercel-deployment.md`:
```markdown
---
title: "Deploying with Vercel"
module: "AI for Websites"
order: 4
---
```

For `05-domains.md`:
```markdown
---
title: "Domains"
module: "AI for Websites"
order: 5
---
```

- [ ] **Step 5: Delete old directories**

```bash
rm -rf Omar/ Fares/ Ali/
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: restructure content into /content directory with frontmatter"
```

---

### Task 3: Student Metadata and Content Loading Library

**Files:**
- Create: `src/lib/students.ts`, `src/lib/content.ts`, `src/lib/slides.ts`
- Create: `__tests__/slides.test.ts`

- [ ] **Step 1: Create student metadata**

Create `src/lib/students.ts`:

```typescript
export interface Student {
  id: string;
  name: string;
  age: number;
  color: string;        // Tailwind bg color class
  textColor: string;    // Tailwind text color class
  description: string;
  modules: string[];    // folder names in content/[student]/
}

export const students: Student[] = [
  {
    id: "omar",
    name: "Omar",
    age: 17,
    color: "bg-blue-600",
    textColor: "text-blue-400",
    description: "AI for Websites, School, Social Media & Design, Images",
    modules: ["ai-for-websites", "ai-for-school", "ai-for-social-media", "ai-for-images"],
  },
  {
    id: "fares",
    name: "Fares",
    age: 10,
    color: "bg-green-600",
    textColor: "text-green-400",
    description: "AI for Studying, Fun, Creativity",
    modules: ["ai-for-studying", "ai-for-fun", "ai-for-creativity"],
  },
  {
    id: "ali",
    name: "Ali",
    age: 20,
    color: "bg-red-600",
    textColor: "text-red-400",
    description: "AI for Business, Writing, Data, Websites/Apps, Productivity",
    modules: ["ai-for-business", "ai-for-writing", "ai-for-data", "ai-for-websites", "ai-for-productivity"],
  },
];

export function getStudent(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}
```

- [ ] **Step 2: Create content loading library**

Create `src/lib/content.ts`:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface LessonMeta {
  title: string;
  module: string;
  order: number;
  slug: string;       // filename without extension
  moduleSlug: string; // folder name
}

export interface Lesson extends LessonMeta {
  content: string; // raw markdown body (no frontmatter)
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
```

- [ ] **Step 3: Create slides utility**

Create `src/lib/slides.ts`:

```typescript
export function splitIntoSlides(markdown: string): string[] {
  return markdown
    .split(/\n---\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}
```

- [ ] **Step 4: Write test for slides utility**

Install vitest:

```bash
npm install -D vitest
```

Add to `package.json` scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

Create `__tests__/slides.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { splitIntoSlides } from "../src/lib/slides";

describe("splitIntoSlides", () => {
  it("splits markdown on --- separators", () => {
    const md = "# Slide 1\nHello\n\n---\n\n# Slide 2\nWorld";
    const slides = splitIntoSlides(md);
    expect(slides).toHaveLength(2);
    expect(slides[0]).toBe("# Slide 1\nHello");
    expect(slides[1]).toBe("# Slide 2\nWorld");
  });

  it("returns single slide when no separators", () => {
    const md = "# Just one slide\nNo breaks here";
    const slides = splitIntoSlides(md);
    expect(slides).toHaveLength(1);
  });

  it("filters out empty slides", () => {
    const md = "# Slide 1\n\n---\n\n\n\n---\n\n# Slide 3";
    const slides = splitIntoSlides(md);
    expect(slides).toHaveLength(2);
  });
});
```

- [ ] **Step 5: Run tests**

```bash
npm test
```

Expected: 3 tests pass.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add student metadata, content loader, and slides utility"
```

---

### Task 4: Home Page — Student Selector

**Files:**
- Create: `src/components/StudentCard.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Set up global styles and root layout**

Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-slate-950 text-slate-200;
}

/* Print styles */
@media print {
  body {
    background: white !important;
    color: black !important;
  }

  .no-print {
    display: none !important;
  }

  .print-only {
    display: block !important;
  }

  .lesson-body h1 {
    font-size: 24pt;
    color: black;
    border-bottom: 2px solid #333;
    padding-bottom: 8px;
    margin-bottom: 16px;
  }

  .lesson-body h2 {
    font-size: 16pt;
    color: #222;
    margin-top: 20px;
  }

  .lesson-body h3 {
    font-size: 13pt;
    color: #333;
  }

  .lesson-body pre {
    background: #f5f5f5 !important;
    border: 1px solid #ddd;
    padding: 12px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .lesson-body code {
    background: #f0f0f0 !important;
    color: black !important;
  }

  .lesson-body blockquote {
    border-left: 3px solid #666;
    padding: 8px 16px;
    background: #f9f9f9;
  }

  .lesson-body table {
    border-collapse: collapse;
    width: 100%;
  }

  .lesson-body th,
  .lesson-body td {
    border: 1px solid #ccc;
    padding: 6px 10px;
    text-align: left;
  }

  .lesson-body th {
    background: #eee;
  }

  .lesson-body a {
    color: black;
    text-decoration: underline;
  }
}

@media screen {
  .print-only {
    display: none;
  }
}
```

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Lessons",
  description: "AI Teaching Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Create StudentCard component**

Create `src/components/StudentCard.tsx`:

```tsx
import Link from "next/link";
import { Student } from "@/lib/students";

export default function StudentCard({ student }: { student: Student }) {
  return (
    <Link
      href={`/${student.id}`}
      className="block bg-slate-800 border border-slate-700 rounded-xl p-7 hover:border-blue-500 hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-black/30"
    >
      <div
        className={`w-14 h-14 rounded-full ${student.color} flex items-center justify-center text-white font-bold text-xl mb-4`}
      >
        {student.name[0]}
      </div>
      <h3 className="text-xl font-semibold text-slate-100 mb-1">{student.name}</h3>
      <p className="text-slate-400 text-sm mb-3">{student.age} years old</p>
      <p className="text-slate-300 text-sm leading-relaxed">{student.description}</p>
    </Link>
  );
}
```

- [ ] **Step 3: Create home page**

Replace `src/app/page.tsx` with:

```tsx
import { students } from "@/lib/students";
import StudentCard from "@/components/StudentCard";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-100 mb-2">AI Lessons</h1>
      <p className="text-slate-400 mb-10">Select a student to begin teaching.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```

Visit `http://localhost:3000`. Expected: 3 student cards (Omar, Fares, Ali) with colors, names, ages, descriptions. Clicking a card navigates to `/omar`, `/fares`, or `/ali` (404 for now — that's fine).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add home page with student selector cards"
```

---

### Task 5: Student Dashboard Page with Sidebar

**Files:**
- Create: `src/app/[student]/layout.tsx`, `src/app/[student]/page.tsx`
- Create: `src/components/Sidebar.tsx`

- [ ] **Step 1: Create Sidebar component**

Create `src/components/Sidebar.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Student } from "@/lib/students";
import { LessonMeta, formatModuleName } from "@/lib/content";

interface SidebarProps {
  student: Student;
  modules: { slug: string; lessons: LessonMeta[] }[];
}

export default function Sidebar({ student, modules }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-w-72 bg-slate-800 border-r border-slate-700 flex flex-col h-screen overflow-y-auto no-print">
      <div className="p-5 border-b border-slate-700">
        <Link href="/" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
          &larr; All Students
        </Link>
        <div className="flex items-center gap-3 mt-3">
          <div
            className={`w-9 h-9 rounded-full ${student.color} flex items-center justify-center text-white font-bold text-sm`}
          >
            {student.name[0]}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-100">{student.name}</h2>
            <p className="text-slate-400 text-xs">{student.age} years old</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <Link
          href={`/${student.id}`}
          className={`block px-3 py-2 rounded text-sm mb-3 transition-colors ${
            pathname === `/${student.id}`
              ? "text-blue-400 bg-blue-500/10"
              : "text-slate-300 hover:text-slate-100 hover:bg-slate-700"
          }`}
        >
          Curriculum Overview
        </Link>

        {modules.map((mod) => (
          <div key={mod.slug} className="mb-4">
            <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold px-3 mb-2">
              {formatModuleName(mod.slug)}
            </h3>
            {mod.lessons.map((lesson) => {
              const href = `/${student.id}/${mod.slug}/${lesson.slug}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={lesson.slug}
                  href={href}
                  className={`block px-3 py-1.5 text-sm rounded transition-colors ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10 border-l-2 border-blue-400"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-700"
                  }`}
                >
                  {lesson.title}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
```

- [ ] **Step 2: Create student layout**

Create `src/app/[student]/layout.tsx`:

```tsx
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
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
```

- [ ] **Step 3: Create student dashboard page**

Create `src/app/[student]/page.tsx`:

```tsx
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
```

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```

Visit `http://localhost:3000/omar`. Expected: sidebar with "AI for Websites" module and 5 lessons listed. Main area shows Omar's curriculum with "Start First Lesson" button.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add student dashboard with sidebar navigation"
```

---

### Task 6: Lesson Viewer with Slide Mode

**Files:**
- Create: `src/app/[student]/[module]/[lesson]/page.tsx`
- Create: `src/components/LessonViewer.tsx`
- Create: `src/components/SlideControls.tsx`

- [ ] **Step 1: Create SlideControls component**

Create `src/components/SlideControls.tsx`:

```tsx
"use client";

interface SlideControlsProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideControls({ current, total, onPrev, onNext }: SlideControlsProps) {
  return (
    <div className="flex items-center justify-between border-t border-slate-700 px-6 py-3 bg-slate-800/80 no-print">
      <button
        onClick={onPrev}
        disabled={current <= 1}
        className="px-4 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-slate-200 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        &larr; Previous
      </button>
      <span className="text-slate-400 text-sm">
        {current} / {total}
      </span>
      <button
        onClick={onNext}
        disabled={current >= total}
        className="px-4 py-2 bg-slate-700 border border-slate-600 rounded text-sm text-slate-200 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Next &rarr;
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Create LessonViewer component**

Create `src/components/LessonViewer.tsx`:

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { marked } from "marked";
import { splitIntoSlides } from "@/lib/slides";
import SlideControls from "./SlideControls";

interface LessonViewerProps {
  content: string;
  title: string;
  studentName: string;
}

export default function LessonViewer({ content, title, studentName }: LessonViewerProps) {
  const [isSlideMode, setIsSlideMode] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = splitIntoSlides(content);
  const totalSlides = slides.length;

  const goNext = useCallback(() => {
    setCurrentSlide((s) => Math.min(s + 1, totalSlides));
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => Math.max(s - 1, 1));
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" && isSlideMode) goNext();
      if (e.key === "ArrowLeft" && isSlideMode) goPrev();
      if (e.key === "f" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsFullscreen((f) => !f);
      }
      if (e.key === "p" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        handlePrint();
      }
      if (e.key === "Escape") setIsFullscreen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSlideMode, goNext, goPrev, handlePrint]);

  const currentHtml = isSlideMode
    ? marked(slides[currentSlide - 1] || "")
    : marked(content);

  const progressPercent = isSlideMode ? (currentSlide / totalSlides) * 100 : 100;

  return (
    <div className={isFullscreen ? "fixed inset-0 z-50 bg-slate-950 flex flex-col" : "flex flex-col h-full"}>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-700 no-print">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setIsSlideMode(true); setCurrentSlide(1); }}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              isSlideMode ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            Slides
          </button>
          <button
            onClick={() => setIsSlideMode(false)}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              !isSlideMode ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            Full Page
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen((f) => !f)}
            className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-sm text-slate-300 hover:bg-slate-600 transition-colors"
            title="Toggle fullscreen (F)"
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 bg-blue-700 border border-blue-600 rounded text-sm text-white hover:bg-blue-600 transition-colors"
            title="Print / Save as PDF (P)"
          >
            Print PDF
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {isSlideMode && (
        <div className="h-1 bg-slate-800 no-print">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        {/* Print header (hidden on screen) */}
        <div className="print-only mb-6 pb-4 border-b-2 border-gray-300">
          <p className="text-gray-500 text-sm">
            Student: {studentName} &mdash; {title}
          </p>
        </div>

        <div
          className="lesson-body max-w-3xl prose prose-invert prose-slate prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-blue-400 prose-strong:text-slate-100 prose-code:text-amber-400 prose-code:bg-slate-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-th:bg-slate-700 prose-td:border-slate-700 prose-th:border-slate-600"
          dangerouslySetInnerHTML={{ __html: currentHtml as string }}
        />
      </div>

      {/* Slide controls */}
      {isSlideMode && (
        <SlideControls
          current={currentSlide}
          total={totalSlides}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}
```

- [ ] **Step 3: Create lesson page**

Create directories and file `src/app/[student]/[module]/[lesson]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import { getStudent } from "@/lib/students";
import { getLesson } from "@/lib/content";
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
    <LessonViewer
      content={lesson.content}
      title={lesson.title}
      studentName={student.name}
    />
  );
}
```

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```

Visit `http://localhost:3000/omar/ai-for-websites/01-intro-to-claude`. Expected:
- Lesson renders in slide mode
- Toolbar shows Slides/Full Page toggle, Fullscreen, Print PDF buttons
- Progress bar at top
- Slide controls at bottom (1/N, previous/next)
- Arrow keys navigate slides
- Full Page mode shows entire lesson scrollable
- F toggles fullscreen, P opens print dialog

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add lesson viewer with slide mode, full mode, and print"
```

---

### Task 7: Interactive Elements — Checkboxes and Progress

**Files:**
- Create: `src/components/ProgressCheckbox.tsx`
- Modify: `src/components/LessonViewer.tsx`

- [ ] **Step 1: Create ProgressCheckbox component**

Create `src/components/ProgressCheckbox.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";

interface ProgressCheckboxProps {
  storageKey: string;
}

export default function ProgressCheckbox({ storageKey }: ProgressCheckboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "true") setChecked(true);
  }, [storageKey]);

  function toggle() {
    const next = !checked;
    setChecked(next);
    localStorage.setItem(storageKey, String(next));
  }

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={toggle}
      className="w-4 h-4 accent-blue-500 cursor-pointer"
    />
  );
}
```

- [ ] **Step 2: Add lesson completion tracking to LessonViewer**

Add a "Mark as Complete" button at the bottom of `src/components/LessonViewer.tsx`. Add this inside the component, after the existing state declarations:

```tsx
const [completed, setCompleted] = useState(false);
const completionKey = `lesson-complete:${studentName}:${title}`;

useEffect(() => {
  const stored = localStorage.getItem(completionKey);
  if (stored === "true") setCompleted(true);
}, [completionKey]);

function toggleComplete() {
  const next = !completed;
  setCompleted(next);
  localStorage.setItem(completionKey, String(next));
}
```

Add this button right before the closing `</div>` of the content area (after the `dangerouslySetInnerHTML` div), inside the `flex-1 overflow-y-auto` div:

```tsx
<div className="max-w-3xl mt-8 pt-6 border-t border-slate-700 no-print">
  <button
    onClick={toggleComplete}
    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      completed
        ? "bg-green-600 text-white"
        : "bg-slate-700 border border-slate-600 text-slate-300 hover:bg-slate-600"
    }`}
  >
    {completed ? "Completed" : "Mark as Complete"}
  </button>
</div>
```

- [ ] **Step 3: Verify in browser**

Visit a lesson page. Expected:
- "Mark as Complete" button at the bottom of the lesson content
- Clicking it turns green and says "Completed"
- Refreshing the page preserves the state
- Checking/unchecking works

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add lesson completion tracking with localStorage"
```

---

### Task 8: Breadcrumb Navigation

**Files:**
- Modify: `src/app/[student]/[module]/[lesson]/page.tsx`

- [ ] **Step 1: Add breadcrumb to lesson page**

Update `src/app/[student]/[module]/[lesson]/page.tsx` — add breadcrumb above `LessonViewer`. Import `formatModuleName` and `Link`:

```tsx
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
```

- [ ] **Step 2: Verify in browser**

Visit a lesson. Expected: breadcrumb at top showing Home / Omar / AI for Websites / Introduction to Claude. Home and Omar links are clickable.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add breadcrumb navigation to lesson pages"
```

---

### Task 9: Tailwind Typography Plugin and Styling Polish

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `package.json`

- [ ] **Step 1: Install typography plugin**

```bash
npm install -D @tailwindcss/typography
```

- [ ] **Step 2: Add plugin to Tailwind config**

In `tailwind.config.ts`, add to the plugins array:

```typescript
plugins: [require("@tailwindcss/typography")],
```

- [ ] **Step 3: Verify styling**

```bash
npm run dev
```

Visit a lesson. Expected: markdown content renders with proper typography — headings, lists, code blocks, tables, blockquotes all styled nicely with the `prose` classes already applied in LessonViewer.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Tailwind typography plugin for lesson styling"
```

---

### Task 10: Build Verification and Deploy Prep

**Files:**
- Modify: `next.config.js` (if needed)
- Modify: `.gitignore`

- [ ] **Step 1: Verify build succeeds**

```bash
npm run build
```

Expected: Build completes with no errors. Static pages are generated for the home page. Dynamic routes are generated at request time.

- [ ] **Step 2: Fix any build errors**

If there are TypeScript or build errors, fix them. Common issues:
- Missing type imports
- `params` needing `Promise` wrapper in Next.js 15
- Missing `"use client"` directives

- [ ] **Step 3: Ensure .gitignore includes Next.js entries**

The create-next-app should have set this up, but verify `.gitignore` includes:

```
.next/
node_modules/
out/
```

- [ ] **Step 4: Run the production build locally**

```bash
npm run start
```

Visit `http://localhost:3000`. Test the full flow: home → student → lesson → slides → print.

- [ ] **Step 5: Commit everything**

```bash
git add -A
git commit -m "feat: verify build and prepare for Vercel deployment"
```

- [ ] **Step 6: Push to GitHub**

```bash
git push -u origin main
```

After pushing, connect the repo to Vercel:
1. Go to vercel.com
2. Import the `Abdalkaderdev/lessons` repository
3. Framework preset: Next.js (auto-detected)
4. Deploy

---

## Summary

| Task | What It Builds |
|------|---------------|
| 1 | Next.js project scaffold |
| 2 | Content directory with frontmatter |
| 3 | Content loader + slides splitter + tests |
| 4 | Home page with student cards |
| 5 | Student dashboard + sidebar |
| 6 | Lesson viewer (slide + full + print) |
| 7 | Interactive checkboxes + completion tracking |
| 8 | Breadcrumb navigation |
| 9 | Typography polish |
| 10 | Build verification + deploy |
