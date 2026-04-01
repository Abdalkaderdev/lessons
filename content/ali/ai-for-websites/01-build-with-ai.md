---
title: "Building Websites with AI"
module: "AI for Websites"
order: 1
---

# Building Websites with AI

## What You'll Learn

- How to use AI tools to build a complete website without writing code
- How to go from a business idea to a working landing page using prompts
- How to use v0.dev and Claude to generate real website code
- How to iterate and refine your site using natural language instructions

> No coding required. If you can describe what you want, AI can build it.

---

## The Old Way vs. The New Way

**The Old Way:**
- Hire a web developer for AED 10,000–50,000
- Wait 4–8 weeks
- Go back and forth on revisions
- Pay again every time you want a change

**The New Way:**
- Describe what you want in plain English
- Get a working website in hours (or minutes)
- Revise by typing a new instruction
- Deploy it yourself for free or near-free

This is not a future possibility. It's available right now, and you're going to use it in this lesson.

---

## Part 1: The Tools You'll Use

### v0.dev (by Vercel)

v0.dev is an AI tool built specifically for generating web interfaces from text descriptions. You describe a page, and it generates the full code — which you can preview, copy, and deploy.

**Best for:** Landing pages, dashboards, UI components, full website sections

**How to access:** v0.dev (free tier available)

### Claude (claude.ai)

Claude can also generate full website code — HTML, CSS, and basic JavaScript. You can then copy the code and open it in a browser, or paste it into a code editor.

**Best for:** Simple landing pages, email templates, static pages, quick prototypes

### Other Tools Worth Knowing
- **Cursor** — AI-powered code editor (if you ever want to go deeper)
- **Framer AI** — website builder with AI generation built in
- **Wix ADI / Squarespace AI** — website builders with AI assistance

For this lesson, we'll focus primarily on v0.dev and Claude since they're the most powerful for zero-coding users.

---

## Part 2: Understanding What a Landing Page Is

### What Is a Landing Page?

A landing page is a single web page designed to achieve one goal — get the visitor to take one specific action:
- Sign up for a newsletter
- Book a consultation call
- Buy a product
- Contact you

It is not a full website. It's a focused page with no distractions.

### Anatomy of a Business Landing Page

| Section | Purpose |
|---------|---------|
| Hero Section | First thing seen — headline, subheadline, and CTA button |
| Problem/Pain Points | Remind the visitor of what they're struggling with |
| Solution/Features | How your business solves the problem |
| Social Proof | Testimonials, client logos, review counts |
| How It Works | Simple 3-step process overview |
| Pricing | Optional — if you want to show it upfront |
| FAQ | Address common objections |
| Final CTA | Last call to action before they leave |
| Footer | Contact info, links, copyright |

### Why Start with a Landing Page

A landing page is the fastest way to get an online presence. It can be built in one day, it communicates your value clearly, and it can start generating leads or sales immediately.

---

## Part 3: Building with v0.dev

### Step 1: Go to v0.dev

Open v0.dev in your browser. Create a free account.

### Step 2: Write Your First Prompt

The more specific your prompt, the better the result. Include:
- What kind of page (landing page, about page, pricing page)
- Your business name and what you do
- Your target customer
- The color scheme or style you want
- The main CTA (call to action)
- Any specific sections you want

> Prompt: "Build a professional landing page for a social media management agency called 'Reach Digital'. Target audience: small business owners in Dubai. Color scheme: dark navy and gold. Sections needed: Hero (headline: 'Stop Guessing. Start Growing.' with a 'Book Free Consultation' button), Services (Social Media Management, Content Creation, Paid Ads), Why Choose Us (3 reasons with icons), Client Results (metrics showcase), Testimonials (3 fake testimonials), and a Contact form. Make it modern, clean, and conversion-focused."

### Step 3: Review and Iterate

When v0.dev generates your page, look at the preview. If something isn't right, give it a follow-up instruction:

> Prompt: "Change the hero section background to a gradient from dark navy to black. Make the headline font bigger. Add a subheadline below the main headline that says 'We manage your social media so you can focus on running your business.'"

> Prompt: "The testimonial section looks too plain. Add profile photo placeholders, star ratings (5 stars each), and make the cards have a subtle shadow and rounded corners."

### Step 4: Export the Code

Once you're happy with the result, copy the generated code. v0.dev shows you the code — you can copy it in full and use it in the next lesson when you deploy.

### Exercise 1
- [ ] Go to v0.dev and create an account.
- [ ] Write a detailed prompt for a landing page for your business idea.
- [ ] Generate the page and review it.
- [ ] Make at least 3 follow-up refinement requests.
- [ ] Take a screenshot of the final result.

---

## Part 4: Building with Claude

### When to Use Claude Instead of v0.dev

Use Claude when:
- You want a very simple single-page site
- You want to understand what the code does
- v0.dev's output is too complex for your needs
- You want to generate an email template or a small widget

### The Claude Approach

Ask Claude to generate a complete HTML file with embedded CSS:

> Prompt: "Write a complete single-page HTML landing page for [business name]. It should be a single file with all CSS embedded in a `<style>` tag. Sections: Hero (with headline '[your headline]' and a CTA button), About, Services (3 services), Testimonials (2 testimonials), and Contact. Use a color palette of [your colors]. Make it mobile-responsive. The code should work when I open the file in a browser without needing any external files or internet connection."

### Opening the Result

1. Copy Claude's full HTML code response
2. Open a text editor (Notepad on Windows or TextEdit on Mac)
3. Paste the code
4. Save the file as `index.html`
5. Double-click the saved file — it will open in your browser

You now have a working website on your computer.

### Iterating with Claude

> Prompt: "Here is my current HTML file: [paste the code]. Change the hero section background color to #1a1a2e. Add a sticky navigation bar at the top with links to: Home, Services, About, Contact. Make the fonts use Google Fonts — specifically 'Inter' for body text and 'Playfair Display' for headings."

### Exercise 2
- [ ] Ask Claude to generate a complete HTML landing page for your business.
- [ ] Save it as `index.html` and open it in your browser.
- [ ] Make 3 changes using follow-up prompts.
- [ ] Describe one thing you want that AI couldn't do perfectly — this is useful information for the next lesson.

---

## Part 5: Writing Good Website Copy with AI

### The Most Neglected Part of Website Building

Most people focus on design and forget that words sell. Great design with weak copy underperforms. Strong copy with decent design often wins.

### Writing a Compelling Headline

The headline is the most important text on your page. It should communicate:
- What you do (or what problem you solve)
- For whom
- Why it matters

> Prompt: "Write 10 alternative headlines for a landing page for [your business]. Each headline should be under 10 words and communicate the main value proposition. Avoid generic claims like 'We are the best'. Make each one specific and compelling."

### Writing Service Descriptions

> Prompt: "Write descriptions for each of my 3 core services. For each service: (1) a 1-line headline, (2) a 2–3 sentence description of what it includes, (3) a sentence about the result or outcome the client gets. My services are: [list them]. Target reader: [describe your client persona]."

### Writing Testimonials (If You Don't Have Real Ones Yet)

> Prompt: "Write 3 realistic fictional client testimonials for my [type of business]. Each should: sound like a real person (not marketing language), mention a specific result, be 2–3 sentences, and include a name, title, and company. Make them believable and varied in style."

Note: Once you have real clients, replace these with real quotes. Use fictional ones only as placeholders.

### Exercise 3
- [ ] Write the copy for your homepage: headline, 3 service descriptions, and 2 testimonials.
- [ ] Ask AI to critique your headline: "Does this headline communicate a clear value proposition? Is it specific enough? How would you improve it?"
- [ ] Revise the headline based on the feedback.

---

## Part 6: Common Requests and How to Phrase Them

Here are specific prompt patterns for common website changes:

### Adding Sections
> "Add a 'How It Works' section with 3 numbered steps after the Services section. Each step has an icon placeholder, a title, and a 1-sentence description."

### Changing Colors
> "Change the primary color from blue to #2c3e50 (dark teal). Update all buttons, links, and accents to use this new color."

### Making It Mobile-Friendly
> "Review this code and ensure it is fully mobile-responsive. The navigation menu should collapse into a hamburger menu on mobile. Images should resize properly. Text should remain readable at small screen sizes."

### Adding a Contact Form
> "Add a contact form with fields for: Name, Email, Phone, and Message. Add a submit button that says 'Send Message'. The form doesn't need to actually send emails — just make it look complete."

### Adding Animations
> "Add subtle scroll animations: each section should fade in as the user scrolls down to it. Use CSS animations only, no JavaScript libraries."

---

## Putting It All Together

You now have the skills to:
- Use v0.dev to generate a complete, professional landing page from a description
- Use Claude to generate and iterate on HTML websites
- Write compelling website copy for every section
- Make specific design and content changes using natural language

This is genuinely powerful. A business that could have taken AED 30,000 and 2 months to launch online can now launch in a day.

---

## Homework

- [ ] Build a complete landing page for your business using v0.dev
- [ ] Write all the copy for the page (headline, services, about, testimonials) using AI
- [ ] Make at least 5 specific refinements based on your own feedback
- [ ] Save the final code (you'll use it in the next lesson to deploy it live)
- [ ] Take screenshots of your before and after for the refinements

> Prompt for a comprehensive build: "I want to build a complete, professional landing page for [your business]. Let's do it step by step. First, ask me 5 questions that will help you understand my business, my audience, and my goals — before generating anything. Based on my answers, build the best possible landing page."

---

*Next lesson: Deploying your site live with Vercel, setting up a custom domain, and updating your site with AI.*
