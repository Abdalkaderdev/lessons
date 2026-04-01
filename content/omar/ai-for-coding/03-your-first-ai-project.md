---
title: "Your First AI Project"
module: "AI for Coding"
order: 3
---

# Your First AI Project

This is it — the complete workflow. Idea to live website, end-to-end, using AI at every step.

By the end of this lesson, you will have a real project on a real URL that anyone in the world
can visit. You will also know how to debug with AI when things break.

---

## The Full Workflow

```
Idea → Plan (Claude) → Build (v0.dev) → Store (GitHub) → Deploy (Vercel) → Live URL
```

Each tool has one job:
- **Claude** — thinks through the project with you, writes specific code on request
- **v0.dev** — generates the initial UI quickly
- **GitHub** — stores your code safely, tracks changes
- **Vercel** — takes your GitHub code and puts it on the internet

---

## Choose Your Project

Pick one of the two options below. Both are achievable today.

### Option A: Personal Link-in-Bio Page

A single page with your name, photo, bio, and links to your socials, projects, and portfolio.
Like Linktree, but yours, custom, and free.

Good if: You want something personal to share on Instagram or WhatsApp.

### Option B: Quiz App

A multiple-choice quiz on any topic you choose — football, music, history, geography.
5–10 questions, score at the end, shareable link.

Good if: You want to build something interactive that others can play.

---

## Phase 1: Plan With Claude

Before building anything, think it through with Claude.

Go to [claude.ai](https://claude.ai).

### For Option A (Link-in-Bio), paste this:

> Prompt: "I want to build a personal link-in-bio webpage. My name is Omar. I'm 17 and into football, music, and tech. Help me plan this page. What sections should it have? What information should I include? What makes a good link-in-bio page? Give me a clear plan I can hand to a designer."

Read the response. Adjust the plan based on your real information.

Then ask:

> Prompt: "Based on that plan, write me a detailed description of the page I can paste into v0.dev to generate the design. Include layout, colors, font style, and every section with its content."

Copy that description. You will use it in Phase 2.

### For Option B (Quiz App), paste this:

> Prompt: "I want to build a quiz app about [your chosen topic — e.g. Premier League football]. Help me plan it. What features should it have? How should the questions be structured? What makes a quiz app fun and replayable? Give me a clear plan."

Then ask:

> Prompt: "Write me 10 multiple-choice questions about [your topic] with 4 options each and the correct answer marked. Format them as a JavaScript array I can paste directly into my code."

Copy the questions array. You will paste it in Phase 2.

---

## Phase 2: Build With v0.dev

Go to [v0.dev](https://v0.dev). Sign in.

### Option A — Link-in-Bio

Paste the description Claude wrote for you in Phase 1. Let v0 generate the page.

If v0's first output is not quite right, keep prompting:

> Prompt: "Move the social links section above the bio. Make the profile photo circular. Use a gradient background from dark purple to dark blue."

Iterate until you are happy with it. Aim for 3–5 rounds of changes.

### Option B — Quiz App

> Prompt: "Build a quiz app using HTML, CSS, and JavaScript. Here are my questions as a JavaScript array: [paste the array Claude wrote]. Show one question at a time with 4 answer buttons. After clicking an answer, highlight correct in green and wrong in red. Wait 1.5 seconds, then show the next question. At the end, show the score and a 'Play Again' button. Design: bold, energetic style with a dark background and bright accent color."

---

## Phase 3: Get the Code

Once you are happy with the v0 result:

1. Click the **Code** tab in v0.dev
2. You will see React/JSX code — but we want a plain HTML file for simplicity

Ask Claude to convert it:

> Prompt: "Convert this React component into a single plain HTML file with embedded CSS and JavaScript. No npm, no build steps — just one file I can open in a browser or upload to GitHub. Here is the code: [paste the v0 code]"

Claude will give you a single `index.html` file. Copy it.

---

## Phase 4: Store on GitHub

GitHub is where developers store code. Think of it like Google Drive for code — but with version history,
collaboration tools, and direct deployment to Vercel.

**URL:** [github.com](https://github.com)

### Create a new repository

1. Sign in to [github.com](https://github.com)
2. Click the green **"New"** button (top left)
3. Repository name: `link-in-bio` or `quiz-app`
4. Set it to **Public**
5. Check **"Add a README file"**
6. Click **"Create repository"**

### Upload your file

1. Inside your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop your `index.html` file
3. Scroll down, type a commit message: `Add initial index.html`
4. Click **"Commit changes"**

Your code is now saved on GitHub. It will never be lost.

---

## Phase 5: Deploy With Vercel

Vercel takes your GitHub repository and puts it live on the internet — for free.

**URL:** [vercel.com](https://vercel.com)

### Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com) and click **"Sign Up"**
2. Choose **"Continue with GitHub"**
3. Authorise Vercel to access your GitHub

### Deploy your project

1. On the Vercel dashboard, click **"Add New"** → **"Project"**
2. Find your repository (`link-in-bio` or `quiz-app`) and click **"Import"**
3. Leave all settings as defaults
4. Click **"Deploy"**

Vercel builds and deploys in about 30 seconds.

You get a URL like: `https://link-in-bio-omar.vercel.app`

**Share that URL. Anyone in the world can now visit your project.**

---

## Phase 6: Debug With AI When Things Break

Things will break. That is normal. Here is how to fix anything with AI.

### Problem Type 1: The page looks wrong

Take a screenshot of the issue. Go to Claude and say:

> Prompt: "My webpage has a layout problem. The navigation links are overlapping the hero section on mobile screens. Here is my current code: [paste code]. Fix the CSS so the navigation and hero section do not overlap on screens under 768px wide."

### Problem Type 2: JavaScript error in the browser

1. Press **F12** in Chrome to open Developer Tools
2. Click the **Console** tab
3. Look for red error messages
4. Copy the error text, go to Claude, and say:

> Prompt: "My quiz app is showing this error in the browser console: [paste error]. Here is the relevant JavaScript code: [paste code]. Explain what the error means and fix it."

### Problem Type 3: Vercel deployment failed

Vercel shows a red error with a log. Click "View Build Logs" and copy the error. Then:

> Prompt: "My Vercel deployment failed with this error: [paste error]. My project is a plain HTML file with no build steps. How do I fix this?"

### Problem Type 4: Something just does not work

Describe the expected behaviour and what is actually happening:

> Prompt: "In my quiz app, when I click an answer, nothing happens — no color change, no score update. Expected: clicking a button should highlight it green or red and advance the question after 1.5 seconds. Here is the JavaScript for the click handler: [paste code]. Fix it."

**Golden rule: always paste the specific code that is broken, not the whole file.**
Claude can fix problems much faster when you give it context.

---

## The Complete Workflow in One Chart

```
1. IDEA
   └─ What will you build? Who is it for?

2. PLAN (Claude — claude.ai)
   └─ Describe the project → Claude gives you a build brief

3. BUILD (v0.dev — v0.dev)
   └─ Paste the build brief → v0 generates the UI
   └─ Iterate with follow-up prompts

4. CONVERT (Claude — claude.ai)
   └─ Ask Claude to convert React code → single HTML file

5. STORE (GitHub — github.com)
   └─ Create repo → Upload index.html → Commit

6. DEPLOY (Vercel — vercel.com)
   └─ Import repo → Deploy → Get live URL

7. SHARE
   └─ Send the URL to anyone
```

---

## Going Further: Iterate After Launch

Your project is not done when it deploys. Real products improve continuously.

After you have a live URL, try these improvements:

**For Link-in-Bio:**
- Add a real photo (replace the placeholder)
- Update the links to your actual socials
- Add a "Projects" section with the calculator and quiz apps you built

**For Quiz App:**
- Add more question categories
- Add a leaderboard (use Lovable to add a database)
- Share it with friends and time how long they take

For every improvement, the workflow is:
1. Make the change in your code (or ask Claude to make it)
2. Upload the new file to GitHub (overwrite the old one)
3. Vercel automatically redeploys — your live URL updates in 30 seconds

---

## Exercises

- [ ] Complete the Plan phase using Claude for your chosen project
- [ ] Build the initial version using v0.dev
- [ ] Iterate at least 3 times on the design
- [ ] Convert to a single HTML file using Claude
- [ ] Create a GitHub repository and upload your file
- [ ] Deploy to Vercel and get a live URL
- [ ] Share your URL with at least one person
- [ ] Deliberately break something and use AI to debug and fix it
- [ ] Make one improvement after the initial launch and redeploy

---

## What You Built Today

You have:
- A live website on a real URL
- Code stored on GitHub
- Experience with the full professional development workflow
- A debugging skill you will use on every future project

This is the same workflow used by professional developers at real companies.
You are not learning a toy version of this — you are doing the real thing.

---

## Module Complete

You have finished the AI for Coding module. You now know:
- How to build any app using Claude, Bolt.new, and v0.dev
- How to use the best AI dev tools and when to choose each one
- How to go from idea to live URL end-to-end
- How to debug with AI when things go wrong

Your next modules:
- **AI for Jobs** — use AI to build a CV, prepare for interviews, and land opportunities
- **AI for Money** — use AI to manage your finances and start earning
