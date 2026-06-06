---
title: "Deploy & Manage Your Site"
module: "AI for Websites"
order: 2
---

# Deploy & Manage Your Site

## What You'll Learn

- How to put your website live on the internet for free
- The basics of GitHub for non-coders (you only need to know 3 things)
- How to deploy using Vercel in under 10 minutes
- How to connect a custom domain (e.g., yourname.com)
- How to update your site by giving AI new instructions

> By the end of this lesson, your website will be live on the internet with a real URL.

---

## The Big Picture

Here's how the process works:

```
1. Build your site with AI (done in last lesson)
     ↓
2. Put the code on GitHub (free code storage)
     ↓
3. Connect GitHub to Vercel (free hosting)
     ↓
4. Vercel gives you a live URL
     ↓
5. Optional: point a custom domain to that URL
```

Each step takes 5–10 minutes. The total process — from code to live site — takes about 30 minutes on your first try.

---

## Part 1: GitHub for Non-Coders

### What Is GitHub?

GitHub is a platform where developers store their code. Think of it like Google Drive — but for code files. Your website's code lives there, and Vercel reads from it to build your live site.

You don't need to understand "version control" or anything complex. You need to know:
1. How to create a repository (a folder for your project)
2. How to upload files
3. How to save changes (called a "commit")

### Setting Up GitHub

1. Go to github.com
2. Create a free account
3. Click "New Repository" (the green button)
4. Name your repository (e.g., `my-business-website`)
5. Set it to Public
6. Click "Create Repository"

### Uploading Your Website Files

**Option A — Drag and Drop (Easiest):**
1. Open your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag your `index.html` file (and any other files) into the upload area
4. Click "Commit changes"

That's it. Your code is now on GitHub.

**Option B — Using GitHub Desktop (Recommended for regular updates):**
1. Download GitHub Desktop from desktop.github.com
2. Sign in with your GitHub account
3. Clone (download) your repository to your computer
4. Copy your website files into the cloned folder
5. In GitHub Desktop, click "Commit to main" → "Push origin"

> Ask AI: "Walk me through uploading my website to GitHub using GitHub Desktop. I'm on [Mac/Windows], I have my repository already created, and my website is a single `index.html` file."

### Exercise 1
- [ ] Create a GitHub account (if you don't have one)
- [ ] Create a new repository called `my-business-website`
- [ ] Upload your `index.html` from the previous lesson
- [ ] Confirm the file appears in your repository on github.com

---

## Part 2: Deploying with Vercel

### What Is Vercel?

Vercel is a hosting platform that takes your code from GitHub and makes it available as a live website. It's:
- Free for personal/small projects
- Automatic — every time you update your GitHub, your site updates automatically
- Fast — Vercel delivers your site from servers close to your visitors

### Deploying Your Site

1. Go to vercel.com
2. Click "Sign Up" → "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "New Project"
5. Import your `my-business-website` repository
6. Click "Deploy"

That's it. In about 60 seconds, Vercel will give you a URL like `my-business-website-abc123.vercel.app` — and your site is live.

### Your Automatic Update Pipeline

From this point forward:
- You update your website file
- You push the change to GitHub (either drag-and-drop or GitHub Desktop)
- Vercel automatically detects the update and redeploys your site
- The live URL shows the new version within about 30 seconds

This is the same deployment process used by professional developers. You're using real infrastructure.

### Troubleshooting Deployment Issues

If Vercel shows an error:

> Prompt: "My Vercel deployment failed with this error: [paste the error message]. My website is a simple HTML file. What does this error mean and how do I fix it?"

### Exercise 2
- [ ] Sign up for Vercel and connect it to your GitHub
- [ ] Deploy your `my-business-website` repository
- [ ] Copy the live URL and open it in your browser
- [ ] Confirm your website is visible at the Vercel URL
- [ ] Share the URL — you have a live website

---

## Part 3: Custom Domains

### Why Get a Custom Domain?

A Vercel URL like `my-business-abc.vercel.app` works — but it doesn't look professional. A custom domain like `reachdigital.ae` or `yourname.com` signals:
- You're serious about this business
- You're easy to find and remember
- You've invested in your brand

Domain names are inexpensive — typically AED 50–200 per year.

### Buying a Domain

Popular domain registrars:
- **Namecheap** (namecheap.com) — affordable, easy to use
- **GoDaddy** (godaddy.com) — very common, slightly more expensive
- **Google Domains** — clean interface, now migrated to Squarespace
- **ae domains** — if you want a .ae domain (administered through UAE authorities)

Search for your ideal domain name and purchase it. Aim for:
- `.com` if available (most trusted globally)
- `.ae` for UAE-specific businesses
- Short, memorable, and easy to spell

> Prompt: "I want to buy a domain for my [type of business]. My business name is [name]. Suggest 5 domain name options — check for likely availability by suggesting names that are specific enough to not be taken. Include variations using .com, .ae, and .co."

### Connecting Your Domain to Vercel

1. In Vercel, go to your project → "Settings" → "Domains"
2. Click "Add Domain"
3. Type your custom domain (e.g., `reachdigital.ae`)
4. Vercel will give you DNS records to add (two text values)
5. Log into your domain registrar (Namecheap, GoDaddy, etc.)
6. Go to DNS Settings
7. Add the records Vercel gave you
8. Wait 10–30 minutes for the DNS to propagate

> Ask AI if you get stuck: "I bought a domain on [registrar]. Vercel is asking me to add an A record and a CNAME record. Walk me through exactly where to find the DNS settings on [registrar] and how to add these records: [paste Vercel's instructions]."

### Exercise 3
- [ ] Research domain names for your business and find one that's available
- [ ] Buy it (or note the one you would buy — you can complete this step later)
- [ ] If purchased: follow the steps to connect it to your Vercel project
- [ ] Verify: does your custom domain load your website?

---

## Part 4: Updating Your Site with AI

### The Update Workflow

Once your site is live, updating it is simple:

1. Ask AI to make the change (describe what you want)
2. AI gives you updated code
3. Replace the relevant section in your file
4. Upload the updated file to GitHub
5. Vercel automatically redeploys

### How to Ask AI for Specific Updates

The key is to provide the current code and describe exactly what you want changed:

> Prompt: "Here is my current website code: [paste full code]. I want to make the following changes: (1) update the headline to say [new headline], (2) add a new testimonial from 'Sara Ahmed, Owner of Bloom Café, Dubai: "[testimonial text]"', (3) change the main CTA button color to #e63946. Give me only the updated code — full file."

> Prompt: "Here is my website code: [paste]. I need to add a new section between the Services section and the Testimonials section. The new section is called 'Our Process' and has 3 steps: [describe steps]. Match the existing style of the page."

### Making Layout Changes

> Prompt: "Here is my current services section: [paste just that section]. I want to change the layout from a vertical list to a 3-column grid. Each service card should have: an emoji icon at the top, the service title, a 2-sentence description, and a 'Learn More' link. Rewrite just this section."

### Adding New Features

> Prompt: "Add a cookie consent banner to the bottom of my website. It should appear when the page loads, say 'We use cookies to improve your experience. By continuing, you agree to our use of cookies.' with an 'Accept' button. When they click Accept, the banner disappears and doesn't show again (using localStorage). Add this to my existing code: [paste code]."

> Prompt: "Add a WhatsApp chat button to my website — a floating button in the bottom-right corner that, when clicked, opens a WhatsApp chat with my number (+971XXXXXXXXX). The button should use the WhatsApp green color and the WhatsApp logo."

### Exercise 4
- [ ] Make 3 updates to your live website using the AI → GitHub → Vercel workflow
- [ ] Update 1: change a headline or add a new testimonial
- [ ] Update 2: change a color scheme or font
- [ ] Update 3: add a new section or feature
- [ ] Confirm all 3 changes are visible at your live URL after each update

---

## Part 5: Site Maintenance Basics

### What to Do When Something Breaks

When your website displays incorrectly or has an error:

> Prompt: "My website has a bug. Here is the code: [paste full code]. When I open it in a browser, [describe what's wrong — e.g., 'the navigation links don't work', 'the page is unstyled', 'images aren't showing']. Find the bug and fix it."

> Prompt: "I made a change to my website code and now it looks broken. Here is the original code that worked: [paste]. Here is what I changed it to: [paste]. What did I break? Give me the corrected version."

### Keeping Your Site Fast

Slow websites lose visitors. Ask AI to optimize:

> Prompt: "Review my website code and identify anything that might make it load slowly. Suggest optimizations for: image loading, font loading, and CSS. Apply the fixes and give me the updated code."

### Browser Compatibility Checks

> Prompt: "Is there anything in this HTML/CSS code that might not display correctly on older browsers or Safari? Flag any compatibility issues and suggest fixes: [paste code]."

### Exercise 5
- [ ] Ask AI to review your website code for any performance or compatibility issues.
- [ ] Apply at least 1 suggested improvement.
- [ ] Test your website on your phone — does it look correct on mobile?

---

## Part 6: Understanding What You've Built

### The Tech Stack You're Using

Even as a non-coder, it's useful to know what you're working with:

| Layer | What It Is | In Your Project |
|-------|-----------|----------------|
| Frontend | What users see | HTML + CSS |
| Hosting | Where the files live | Vercel |
| Code Storage | Where code is backed up | GitHub |
| Domain | The address | Your custom domain |
| CDN | Fast delivery worldwide | Vercel's built-in |

This is a legitimate, professional tech stack used by real businesses. Many startups run on exactly this for years before needing more complexity.

### When You'll Need More

Your current setup is perfect for:
- Landing pages
- Portfolio sites
- Static informational sites
- Simple business websites

You'll need a more advanced setup when you need:
- User accounts and login
- E-commerce (taking payments)
- A blog with many posts
- A database (storing user data)

The next lesson covers e-commerce basics.

---

## Putting It All Together

You have now done what most people think requires a developer:
- Built a website using AI
- Stored it professionally on GitHub
- Deployed it live using Vercel
- Connected a custom domain
- Updated it using nothing but text descriptions

This is a real skill with real-world value.

---

## Homework

- [ ] Ensure your site is live at a Vercel URL (minimum) or custom domain
- [ ] Make 5 intentional updates to your site — practice the full workflow each time
- [ ] Add at least one interactive element (WhatsApp button, contact form, or cookie banner)
- [ ] Check your site on 3 different devices (phone, tablet, laptop) and fix any mobile display issues
- [ ] Write down the 3 most common types of updates you'll make to your site — create an AI prompt template for each

> Prompt for a site audit: "Review my live website at this URL: [your URL] — I'll paste the code instead since you can't browse URLs. Here is the code: [paste]. Act as a critical web designer. Rate it out of 10 on: visual design, clarity of message, mobile responsiveness, call to action strength, and overall professionalism. Give specific, actionable feedback for each category."

---

*Next lesson: E-commerce basics — setting up an online store, AI-generated product descriptions, and SEO fundamentals.*
