# Lesson 04: Deploying with Vercel

## What You'll Learn
- What deployment means
- What Vercel is and why developers use it
- How to deploy your site in minutes
- Automatic deployments from GitHub

---

## 1. What is Deployment?

Right now your website only works on your computer. **Deployment** means putting it on the internet so anyone with a link can see it.

You need two things:
- A **server** to host your files (Vercel provides this free)
- A **URL** so people can find your site

---

## 2. What is Vercel?

Vercel is a platform that:
- Hosts your website for free (for personal projects)
- Connects directly to GitHub
- Auto-deploys every time you push code
- Gives you a free `.vercel.app` URL
- Is super fast (CDN around the world)

---

## 3. Deploying Your Site

### Step 1: Create a Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub** (easiest option)
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Project
1. Click **"Add New..."** → **"Project"**
2. Find your `my-first-site` repository
3. Click **Import**
4. Leave all settings as default
5. Click **Deploy**

### Step 3: Wait ~30 Seconds
Vercel will:
- Pull your code from GitHub
- Build your site
- Deploy it to their servers
- Give you a live URL like `my-first-site.vercel.app`

### Step 4: Visit Your Site
Click the URL — your website is now live on the internet!

---

## 4. Automatic Deployments

The best part: Vercel watches your GitHub repo. Every time you push changes:

```bash
# Edit your code
git add .
git commit -m "Update homepage"
git push
```

Vercel automatically redeploys within seconds. No extra steps needed.

---

## 5. Preview Deployments

If you create a new branch and push it:
```bash
git checkout -b new-design
# make changes
git add .
git commit -m "Try new design"
git push -u origin new-design
```

Vercel creates a **preview URL** just for that branch. This lets you test changes before merging to main.

---

## 6. Key Takeaways
- Deployment = putting your site on the internet
- Vercel makes it free and automatic
- Connect once, then every `git push` updates your live site
- Preview deployments let you test before going live

---

## Homework
1. Create a Vercel account (sign up with GitHub)
2. Import your `my-first-site` repository
3. Deploy it and share the URL
4. Make a change locally, push it, and watch Vercel auto-deploy
5. Share your live website link with a friend
