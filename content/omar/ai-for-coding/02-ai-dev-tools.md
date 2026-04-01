---
title: "AI Development Tools"
module: "AI for Coding"
order: 2
---

# AI Development Tools

Last lesson you built a calculator with Claude. Today you meet four tools that take
it further — from generating polished UIs in seconds to spinning up full-stack apps
from a single sentence.

---

## Today's Tools at a Glance

| Tool | Best For | URL |
|------|----------|-----|
| v0.dev | UI components and page layouts | [v0.dev](https://v0.dev) |
| Bolt.new | Full apps from one prompt | [bolt.new](https://bolt.new) |
| Lovable | Full-stack MVPs with a database | [lovable.dev](https://lovable.dev) |
| Replit Agent | Describe an app, it builds and runs it | [replit.com](https://replit.com) |

---

## Tool #1: v0.dev — UI From a Description

**URL:** [v0.dev](https://v0.dev) — made by Vercel

v0 takes a text description and produces a React UI component or full page layout.
You do not need to know React. You describe what you want, click "Deploy", and it is live.

Why v0 is different:
- Produces real, production-quality code (not toy examples)
- Designs look professional out of the box
- You can ask it to iterate — "make the header sticky", "add a dark mode toggle"
- Generated components copy into any project instantly

**Free tier: 200 generations per month. Sign up with GitHub or Google.**

### How v0 Works

1. Type a description of what you want to build
2. v0 generates a live preview + code
3. Click the preview to test it
4. Say "change X to Y" to iterate
5. Click "Open in v0" then deploy with one click to Vercel

---

## Hands-On #1: Build Your Portfolio Page with v0.dev

A portfolio page shows who you are, what you can build, and how to contact you.
Every person applying for jobs, internships, or freelance work needs one.

### Step 1 — Go to v0.dev

Visit [v0.dev](https://v0.dev). Sign in with GitHub (create a free GitHub account at [github.com](https://github.com) first if you do not have one).

### Step 2 — Paste this prompt

> Prompt: "Build a personal portfolio website for a 17-year-old named Omar. Sections: Hero (name, tagline, and two buttons: 'See My Projects' and 'Contact Me'), About (short bio, a list of skills with icons), Projects (3 card grid with project name, description, and a link button), and Contact (email form with name, email, and message fields). Design: clean modern look, dark navy and electric blue color scheme, smooth hover effects on cards. Make it a single page with smooth scroll navigation."

### Step 3 — Review the preview

v0 generates a live preview. Click around and test it. Look at it on mobile too
(press F12 in Chrome and click the phone icon to switch to mobile view).

### Step 4 — Iterate

Ask v0 to make changes:

> Prompt: "Change the hero section background to a gradient from dark navy to deep purple. Add a profile photo placeholder (a circle with initials 'O.A.' in the center). Make the skills section show icons for: HTML, Python, Figma, Photography."

Keep iterating until it matches what you want. This is the real workflow — not one perfect prompt,
but a conversation with the tool.

### Step 5 — Copy the code

Click "Code" to see the generated React code. You can paste this into Replit or Cursor to continue working on it.

---

## Tool #2: Bolt.new — Full Apps From One Prompt

**URL:** [bolt.new](https://bolt.new)

Bolt is built by StackBlitz. It creates a full working application — including the file structure,
back-end logic, and a running dev server — directly in your browser.

The difference from v0:
- v0 = UI components and pages
- Bolt = full working applications with multiple pages, logic, and interactivity

Bolt supports React, Vue, Astro, Next.js, and plain HTML. It runs the code live so you
can test it immediately.

**Free tier available. Sign in with GitHub.**

---

## Hands-On #2: Build a Quiz App with Bolt.new

### Step 1 — Go to bolt.new

Visit [bolt.new](https://bolt.new). Sign in with GitHub.

### Step 2 — Paste this prompt

> Prompt: "Build a quiz app using HTML, CSS, and JavaScript. The quiz has 5 multiple-choice questions about general knowledge. Each question has 4 answer options. Show one question at a time. After the user selects an answer, highlight correct in green and wrong in red, then automatically advance to the next question after 1.5 seconds. At the end, show the score (e.g. '4 out of 5') and a 'Try Again' button. Design: clean card layout, white background, blue accent, smooth animations between questions."

### Step 3 — Test it live

Bolt runs the app instantly in a preview pane. Click through all five questions. Try getting some wrong.
Check the score screen.

### Step 4 — Edit with AI

Click the chat icon and ask:

> Prompt: "Add a timer — the user has 15 seconds per question. If time runs out, move to the next question and count it as wrong. Show the timer as a countdown bar that shrinks from full to empty."

Bolt updates the code and re-runs immediately.

### Step 5 — Download or deploy

Click "Download" to get the files, or use the "Deploy" button to put it live on a URL.

---

## Tool #3: Lovable — Full-Stack MVPs

**URL:** [lovable.dev](https://lovable.dev)

Lovable is aimed at building full MVPs (Minimum Viable Products) — apps with:
- A proper front end (what users see)
- A back end (logic and data handling)
- A database (storing information)
- Authentication (login/signup)

All from one prompt. No server setup, no database configuration.

Lovable uses Supabase under the hood for the database, so your data actually persists.
This is what separates it from Bolt or v0 — those generate front-end code. Lovable builds real apps.

**Free plan: 5 projects. Sign in with Google or GitHub.**

### Example Prompt for Lovable

> Prompt: "Build a habit tracker app. Users can sign up and log in. After logging in, they see a dashboard with their habits listed. They can add a new habit (name + daily goal), check off a habit as done for today, and see a streak count. Store all data per user. Design: minimal, clean, motivating — green checkmarks, progress bars, white background."

Paste this into [lovable.dev](https://lovable.dev) and watch it build a full working app with login.

---

## Tool #4: Replit Agent — Describe, Build, Run

**URL:** [replit.com](https://replit.com) — click "Agent" tab

Replit Agent takes a description and builds a runnable project directly in Replit's
cloud environment. The app runs on Replit's servers, so you get a live URL immediately.

Best for:
- Python scripts and web apps
- Discord bots
- APIs
- Anything that needs to run 24/7 in the cloud

> Prompt (in Replit Agent): "Build a Python Flask web app that is a simple to-do list. Users can add tasks, check them off as done, and delete them. Store tasks in a simple SQLite database so they persist between visits. Give it a clean HTML front end with a modern look."

---

## Comparing the Tools Side by Side

| | v0.dev | Bolt.new | Lovable | Replit Agent |
|---|---|---|---|---|
| **Speed** | Instant | Very fast | Fast | Moderate |
| **Best output** | UI/design | Front-end apps | Full-stack MVPs | Back-end + scripts |
| **Has a database** | No | No | Yes (Supabase) | Yes (SQLite, Postgres) |
| **Has login/auth** | No | No | Yes | With setup |
| **Free tier** | 200/month | Yes | 5 projects | Yes |
| **No install needed** | Yes | Yes | Yes | Yes |
| **Best for beginners** | Yes | Yes | Yes | Yes |

### Which one should you use?

- Building a page or portfolio → **v0.dev**
- Building a front-end app with logic → **Bolt.new**
- Building an app users can log into → **Lovable**
- Building something that runs in the cloud → **Replit Agent**

---

## Pro Tips for Using These Tools

**1. Start simple, then add features.**
Do not describe 20 features in one prompt. Start with the core (5 prompts, 5 features).
Add more once the basics work.

**2. Test after every change.**
Each time you ask for a change, test the whole app — not just the new bit.
AI sometimes breaks things when fixing other things.

**3. Save your prompts.**
Keep a notes file with prompts that worked well. You will reuse them.

**4. If something breaks, paste the error back into the chat.**
Every tool has a chat. If the app shows an error, copy the error message and say:

> Prompt: "The app is showing this error: [paste error]. Fix it."

That is how real developers debug. You are already doing it.

---

## Exercises

- [ ] Build your portfolio page using [v0.dev](https://v0.dev) with the prompt in Step 2 above
- [ ] Iterate at least 3 times — change the colors, add a section, adjust the layout
- [ ] Build the quiz app using [bolt.new](https://bolt.new)
- [ ] Add the 15-second timer to the quiz app
- [ ] Sign up for [lovable.dev](https://lovable.dev) and try the habit tracker prompt
- [ ] Compare the portfolio from v0 to what you could build manually — note the difference
- [ ] Pick one project and download the code to your computer

---

## What You Built Today

By the end of this lesson you have:
- A personal portfolio page (from v0.dev)
- A working quiz app with a timer (from Bolt.new)
- A habit tracker with login (from Lovable)

Three real, working projects. Built today. Zero lines of code written by hand.

---

## Next Lesson

Lesson 3: Your First AI Project — end-to-end from idea to a live URL.
We use Claude to plan, v0 to build, GitHub to store, and Vercel to deploy.
