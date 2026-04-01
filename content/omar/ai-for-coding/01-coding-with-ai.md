---
title: "Building Things with AI (No Coding Knowledge Needed)"
module: "AI for Coding"
order: 1
---

# Building Things with AI (No Coding Knowledge Needed)

You do not need to know how to code to build real software in 2025.
AI handles the writing. You handle the thinking.

Your job is to know *what* to build and *why*. The AI's job is the *how*.

---

## What We'll Cover Today

- Why AI changed who can build software
- The best tools to use (with links)
- How to describe what you want so AI understands
- Build a working calculator app — step by step
- What "being the architect" actually means

---

## The Shift: From Coder to Architect

Before AI tools, building an app required:
- Months of learning a programming language
- Understanding databases, servers, and security
- Debugging errors that take hours to find

Now:
- You describe what you want in plain English
- AI writes the code
- You review, test, and direct changes

You are the architect. The AI is your builder.

A good architect does not lay bricks. They know what they want the building to do,
they communicate it clearly, and they check that the work is correct.

---

## Tool #1: Claude — Your AI Thinking Partner

**URL:** [claude.ai](https://claude.ai)

Claude is made by Anthropic. It is one of the best AI models for writing and understanding code.
Use it to:
- Plan your project
- Write code you can paste directly into files
- Explain what code does
- Debug problems

**Free plan available. Sign up with email — no credit card needed.**

> Prompt: "I want to build a simple calculator app. It should work in a web browser. I don't know how to code. Write me the full HTML, CSS, and JavaScript for a calculator that can add, subtract, multiply, and divide. Make it look clean and modern with a dark background."

Paste that prompt into [claude.ai](https://claude.ai) right now. You will get a complete, working app.

---

## Tool #2: Cursor — An AI Code Editor

**URL:** [cursor.com](https://cursor.com)

Cursor is a code editor with AI built in. Think of it like Microsoft Word, but for code —
and the AI can write, edit, and explain everything inside it.

Key features:
- Press `Ctrl+K` to ask AI to write or edit any code
- Press `Ctrl+L` to open a chat with your code as context
- The AI sees your whole project and gives smarter suggestions

**Free plan available. Download the app — works on Windows, Mac, and Linux.**

---

## Tool #3: Replit — Build and Run in Your Browser

**URL:** [replit.com](https://replit.com)

Replit lets you write, run, and share code entirely in your browser — no installation needed.
It also has an AI assistant (Replit AI) that can generate code from a description.

Perfect for beginners because:
- Nothing to install
- Code runs instantly
- You can share a link to your project with anyone

> Prompt (in Replit AI): "Create a tip calculator web app. The user enters the bill total and selects a tip percentage (10%, 15%, 20%, 25%). Show the tip amount and total bill. Make the design mobile-friendly."

---

## Tool #4: GitHub Copilot — Free for Students

**URL:** [github.com/education](https://github.com/education)

GitHub Copilot is an AI that suggests code as you type. It is normally paid, but
**students get it free** through the GitHub Student Developer Pack.

To get access:
1. Go to [github.com/education](https://github.com/education)
2. Click "Get the Student Developer Pack"
3. Verify your student status (school email or student ID photo)
4. Once approved, Copilot is free — plus dozens of other tools

Copilot works inside Cursor, VS Code, and other editors. It predicts what you are trying
to write and completes it automatically.

---

## How to Describe What You Want (Prompt Engineering for Builders)

The quality of what AI builds depends on how clearly you describe it.

**Bad prompt:**
> "Make a calculator"

**Good prompt:**
> "Build a calculator web app using HTML, CSS, and JavaScript. It should have buttons for digits 0–9, plus, minus, multiply, divide, a decimal point, equals, and a clear button. Display the current input and result at the top. Use a dark gray background, white text, and orange buttons for operators. Make it responsive for mobile screens."

The difference:
- Bad prompt: no details, AI guesses what you want
- Good prompt: specifies purpose, features, design, and technology

**Template for describing any project:**

> "Build a [type of app]. It should [list the main things it does]. The user can [describe user actions]. It should look [describe the design/style]. Use [technology if you know it, otherwise say 'HTML, CSS, and JavaScript' for web apps]."

---

## Hands-On: Build a Calculator App with Claude

Follow these steps exactly.

### Step 1 — Open Claude

Go to [claude.ai](https://claude.ai) and sign in or create a free account.

### Step 2 — Paste this prompt

> Prompt: "Build me a calculator web app using only HTML, CSS, and JavaScript in a single file. Features: add, subtract, multiply, divide, a decimal point, clear (AC), and a backspace button. Design: dark background (#1a1a2e), blue accent color (#4361ee), rounded buttons, large display area at the top showing the current calculation. Make it look like a real phone calculator. Give me the complete code in one block."

### Step 3 — Copy the code

Claude will give you a full block of code. Copy all of it.

### Step 4 — Create the file

1. Open Notepad (Windows) or any text editor
2. Paste the code
3. Save the file as `calculator.html` (make sure the extension is `.html`, not `.txt`)

### Step 5 — Open in your browser

Double-click `calculator.html`. Your browser opens it. Try clicking buttons.

**You just built a working app without writing a single line of code yourself.**

### Step 6 — Customise it

If something looks wrong or you want to change it, go back to Claude and say:

> Prompt: "The calculator works but I want to change the button color to purple (#7209b7) and make the font size larger. Here is the current code: [paste your code]"

---

## Understanding the Code (Without Needing to Learn It)

You do not need to understand every line. But knowing what each section does helps you
direct changes more accurately.

Ask Claude to explain it:

> Prompt: "Explain this code to me like I'm 17 and have never coded before. Tell me what each section does in plain English, not technical terms. Here is the code: [paste your code]"

Claude will give you a plain-English breakdown. Read it once. Now you know
what to change when you want something different.

---

## The Architect Mindset

Good architects ask:
- What problem does this solve?
- Who will use it?
- What should it do on day one vs. later?
- What does success look like?

When you start a new project, answer these four questions before you write a single prompt.
This forces you to think clearly — and clear thinking produces better prompts.

**Example for the calculator:**
- Problem: I need to calculate things quickly in my browser
- Users: Me, and anyone I share the link with
- Day one: Basic math operations, clean design
- Success: Works on mobile, looks professional, no bugs

---

## What Real Builders Do

Real developers who use AI tools spend their time:
- Breaking down problems into smaller steps
- Testing what the AI built
- Spotting mistakes and asking AI to fix them
- Improving and iterating

They do not spend time memorising syntax or looking up how to write a for-loop.
That is now the AI's job.

---

## Exercises

- [ ] Sign up for [claude.ai](https://claude.ai) if you have not already
- [ ] Build the calculator app using the Step 1–6 instructions above
- [ ] Ask Claude to explain the code in plain English
- [ ] Change at least two things about the design (colours, font, button layout)
- [ ] Sign up at [replit.com](https://replit.com) and paste your calculator code there — share the live link
- [ ] Apply for GitHub Student Developer Pack at [github.com/education](https://github.com/education)
- [ ] Download Cursor from [cursor.com](https://cursor.com) and open your calculator file in it

---

## What You Built Today

By the end of this lesson you have:
- A working calculator app saved as an `.html` file
- A live version on Replit you can share with a link
- Accounts on Claude, Replit, and GitHub

That is a real project. You built it in one session. No coding course required.

---

## Next Lesson

Lesson 2: AI Development Tools — v0.dev, Bolt.new, Lovable, and Replit Agent.
We build a personal portfolio page using v0.dev and a full app using Bolt.new.

---

## Homework

1. **Build a Unit Converter** — Open Claude and prompt it to build a unit converter web app (temperature, weight, distance) as a single HTML file. Save it, open it in your browser, and test every conversion. If something is wrong, paste the code back into Claude with a description of the problem and ask it to fix it.
2. **Practise the Architect Mindset** — Pick an app idea you wish existed (e.g. a countdown timer for exam dates, a recipe scaler, a workout logger). Before writing any prompt, answer the four architect questions from this lesson (problem, users, day-one features, success criteria) in a notes file. Then write one detailed prompt based on your answers and paste it into Claude — save the result as an `.html` file.
3. **Prompt Comparison** — Take the "bad prompt" example from this lesson ("Make a calculator") and paste it into Claude. Then paste the "good prompt" version. Compare the two results side by side in your browser. Write 3 sentences about what was different and why the detailed prompt produced a better result.
