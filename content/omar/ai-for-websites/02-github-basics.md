---
title: "GitHub Basics"
module: "AI for Websites"
order: 2
---

# Lesson 02: GitHub Basics

## What You'll Learn
- What Git and GitHub are
- How to create a GitHub account and repository
- Basic Git commands
- Pushing your first project to GitHub

---

## 1. What is Git?

Git is a **version control system**. It tracks changes to your files so you can:
- Go back to any previous version
- Work on features without breaking your main code
- Collaborate with others

Think of it like "undo history" for your entire project — but way more powerful.

---

## 2. What is GitHub?

GitHub is a website that hosts your Git projects online. It's where developers:
- Store their code
- Share projects
- Collaborate with teams
- Showcase their work (like a coding portfolio)

---

## 3. Setting Up

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up with your email
3. Choose a username (this will be public — pick something professional)

### Step 2: Install Git
- **Windows:** Download from [git-scm.com](https://git-scm.com)
- **Mac:** Open Terminal and type `git --version` (it may already be installed)

### Step 3: Configure Git
Open your terminal and run:
```bash
git config --global user.name "Omar"
git config --global user.email "your-email@example.com"
```

---

## 4. Essential Git Commands

| Command | What It Does |
|---------|-------------|
| `git init` | Start tracking a folder with Git |
| `git add .` | Stage all changes for commit |
| `git commit -m "message"` | Save a snapshot with a description |
| `git push` | Upload your commits to GitHub |
| `git pull` | Download latest changes from GitHub |
| `git status` | See what's changed |
| `git log` | See commit history |

---

## 5. Hands-On: Push Your First Project

### Step 1: Create a Repository on GitHub
1. Go to GitHub → click **"New"** (green button)
2. Name it `my-first-site`
3. Keep it public
4. **Don't** check "Add a README" (we'll create our own)
5. Click **Create Repository**

### Step 2: Connect Your Local Project
In your terminal, navigate to the folder with your `index.html` from Lesson 01:
```bash
cd path/to/your/project
git init
git add .
git commit -m "Add my first website"
git remote add origin https://github.com/YOUR-USERNAME/my-first-site.git
git branch -M main
git push -u origin main
```

### Step 3: Verify
Go to your repository on GitHub — you should see your files there!

---

## 6. Making Changes

After editing files:
```bash
git add .
git commit -m "Update homepage design"
git push
```

**Tip:** Write clear commit messages that describe what you changed and why.

---

## 7. Key Takeaways
- Git tracks your project history locally
- GitHub stores it online and lets you share it
- The basic workflow is: **edit → add → commit → push**
- Good commit messages help you (and others) understand changes later

---

## Homework
1. Create a GitHub account
2. Create a repository called `my-first-site`
3. Push the HTML file from Lesson 01 to it
4. Make a change to the file, commit it, and push again
5. Check the commit history on GitHub
