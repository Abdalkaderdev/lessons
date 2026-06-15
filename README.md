# AI Lessons

Teaching AI and technology to three students with personalized curricula. Web app deployed at [lessons.abdalkader.dev](https://lessons.abdalkader.dev).

## Students

| Name        | Focus                                                              |
|-------------|--------------------------------------------------------------------|
| Omar        | Builder — Websites, School, Social Media, Design, Coding, Career   |
| Fares       | Explorer — Studying, Fun, Creativity, Languages, Health            |
| Fawzi       | Trader — Trading from zero: charts, risk, strategy, AI-assisted    |
| The Circle  | Friends learning together — AI for everyday work (group sessions)  |

All students share four foundation modules: Prompt Engineering, AI Safety, Future of AI, AI Tools Reference, and AI Glossary.

## Structure

- `content/<student>/<module>/<lesson>.md` — student-specific lessons
- `content/shared/<module>/<lesson>.md` — modules available to all students
- Each lesson is markdown with YAML frontmatter (`title`, `module`, `order`)
- Slide breaks are `---` between sections

## Development

```bash
npm install
npm run dev
```

Built with Next.js 16 App Router, Tailwind v4, Plus Jakarta Sans + Instrument Serif.
