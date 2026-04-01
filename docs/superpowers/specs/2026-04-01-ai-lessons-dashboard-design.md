# AI Lessons Teaching Dashboard — Design Spec

**Date:** 2026-04-01
**Status:** Approved

## Overview

A Next.js teaching dashboard for delivering personalized AI literacy lessons to 3 students. The teacher selects a student, opens a lesson, and presents it in slide mode or full-page mode. Lessons are markdown files — adding content requires no code changes. Deployed on Vercel via GitHub.

## Students

| Name  | Age | Track Focus |
|-------|-----|-------------|
| Fares | 10  | AI for Studying, Fun, Creativity |
| Omar  | 17  | AI for Websites, School, Social Media/Design, Images |
| Ali   | 20  | AI for Business, Writing, Data, Websites/Apps, Productivity |

All students start from zero AI knowledge (only familiar with ChatGPT). The course teaches how to use AI as a tool — not how to code.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with frontmatter
- **Markdown rendering:** next-mdx-remote or marked
- **State:** localStorage (progress tracking, no database)
- **Deployment:** Vercel, connected to GitHub repo `Abdalkaderdev/lessons.git`

## Folder Structure

```
lessons/
├── app/                         ← Next.js app
│   ├── page.tsx                 ← Home: student selector
│   ├── [student]/
│   │   ├── page.tsx             ← Student dashboard
│   │   └── [lesson]/
│   │       └── page.tsx         ← Lesson viewer
│   ├── layout.tsx
│   └── globals.css
├── content/                     ← Markdown lesson files
│   ├── omar/
│   │   ├── curriculum.md
│   │   ├── ai-for-websites/
│   │   │   ├── 01-intro-to-claude.md
│   │   │   ├── 02-github-basics.md
│   │   │   ├── 03-build-a-website.md
│   │   │   ├── 04-vercel-deployment.md
│   │   │   └── 05-domains.md
│   │   ├── ai-for-school/
│   │   ├── ai-for-social-media/
│   │   └── ai-for-images/
│   ├── fares/
│   │   ├── curriculum.md
│   │   ├── ai-for-studying/
│   │   ├── ai-for-fun/
│   │   └── ai-for-creativity/
│   └── ali/
│       ├── curriculum.md
│       ├── ai-for-business/
│       ├── ai-for-writing/
│       ├── ai-for-data/
│       ├── ai-for-websites/
│       └── ai-for-productivity/
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Pages & Routes

### Home (`/`)
- 3 student cards with name, age, color, topic summary
- Click a card → navigates to student dashboard

### Student Dashboard (`/[student]`)
- Sidebar: modules grouped by topic, lessons listed under each module
- Main area: curriculum overview
- Progress indicators per lesson (done/not done, stored in localStorage)
- "Start next lesson" quick action button

### Lesson Viewer (`/[student]/[lesson]`)
Two modes, togglable with one click:

**Slide Mode (presenting):**
- Lesson split into slides at `---` horizontal rules in markdown
- Large readable text optimized for screen sharing
- Bottom bar: slide counter (3/12), previous/next buttons
- Progress bar across top
- Fullscreen button to hide sidebar

**Full Mode (reading):**
- Entire lesson rendered as one scrollable page
- For student self-study on their own device

### Navigation
- Breadcrumb: Home → Omar → AI for Websites → Lesson 02
- Sidebar always visible (except fullscreen)
- Back button always available

## Lesson Markdown Format

```markdown
---
title: "Intro to Claude"
module: "AI for Websites"
order: 1
---

## What You'll Learn
- bullet points of objectives

---

## Section Title
Explanation text

---

## Try It
> Prompt: "Ask Claude to..."

- [ ] Exercise: Do this thing

<details>
<summary>Hint</summary>
Answer here
</details>

---

## Homework
- Take-home tasks
```

- `---` separators become slide breaks
- Frontmatter (`title`, `module`, `order`) controls organization and sorting
- New lessons added by dropping a `.md` file in the correct folder

## Interactive Elements

- **Checkboxes** next to exercises — students tick them off (saved in localStorage)
- **"Open in Claude" buttons** next to prompt examples — link directly to claude.ai
- **Collapsible hint/answer sections** — click to reveal
- **Completion tracking** — per-lesson done/not done in localStorage

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` `→` | Previous / next slide |
| `F` | Toggle fullscreen |
| `P` | Print current lesson |
| `Esc` | Exit fullscreen |

## PDF / Print

- "Print PDF" button on every lesson
- Uses browser print dialog (save as PDF or send to printer)
- Clean `@media print` stylesheet: white background, black text, no UI chrome
- Header on printed pages: student name, lesson title, date
- Code blocks: light gray background
- Exercises: empty checkboxes for hand-filling

**Print scopes:**
- Single lesson
- Full module (all lessons in a topic)
- Curriculum overview for a student

No external PDF library — CSS `@media print` only.

## Content Tracks

### Fares (10 years old)
1. **AI for Studying** — homework help, explaining hard topics, quiz generation
2. **AI for Fun** — stories, games, riddles, AI-generated art
3. **AI for Creativity** — design ideas, drawing prompts, simple presentations

### Omar (17 years old)
1. **AI for Websites** — using Claude to build sites, GitHub, Vercel, domains
2. **AI for School** — research, summarizing, study plans
3. **AI for Social Media & Design** — content creation, image generation, logos
4. **AI for Images** — generating graphics, editing prompts, tools like DALL-E

### Ali (20 years old)
1. **AI for Business** — market analysis, competitor research, business plans
2. **AI for Writing** — reports, proposals, emails, professional communication
3. **AI for Data** — spreadsheets, charts, Excel formulas with AI
4. **AI for Websites/Apps** — same as Omar's but deeper, more professional
5. **AI for Productivity** — task management, planning, decision frameworks

## Design Constraints

- No database — all state in localStorage
- No user accounts — teacher-only tool, student selector on home page
- Content as markdown — no CMS, no admin panel
- Mobile-responsive but optimized for laptop screen (primary teaching device)
- Dark theme (matches current design), clean print theme (white)

## Future Considerations (Not in Scope)

- LMS upgrade with accounts and database when student count grows
- Live code playground / embedded AI chat
- Quiz/assessment system
- Multi-language support
