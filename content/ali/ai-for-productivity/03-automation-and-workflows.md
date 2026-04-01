---
title: "Automation & AI Workflows"
module: "AI for Productivity"
order: 3
---

# Automation & AI Workflows

## What You'll Learn

- What automation is and which business tasks are worth automating
- How to use Zapier and Make.com to connect apps without coding
- How to set up AI-powered automations (email, messages, notifications)
- How to build a simple AI workflow for your business
- How to audit your work for automation opportunities

> Every hour you spend on a task a machine could do is an hour taken away from work only you can do.

---

## The Automation Mindset

Automation means: a task that used to require your attention now happens automatically.

Most people think automation is for tech companies. It's not. A one-person business can automate:
- Client onboarding emails
- Invoice reminders
- Social media scheduling
- Lead capture and follow-up
- Data entry between tools
- File organization

Every automation you set up is a permanent productivity gain. You set it up once and it saves you time forever.

The goal isn't to replace your judgment — it's to eliminate the tasks that don't need your judgment.

---

## Part 1: What Is Worth Automating?

### The Automation Candidate Test

A task is a good automation candidate if it is:
1. **Repetitive** — You do it the same way every time
2. **Rule-based** — There's no subjective judgment needed
3. **Time-consuming relative to its value** — The task is trivial but takes real time
4. **Triggered by an event** — Something happens, and then this task needs to be done

**Good automation candidates:**
- "When someone fills out my contact form, send them a welcome email and add them to my CRM"
- "When an invoice is overdue, send a reminder every 3 days"
- "When I get a new follower on Instagram, send them a DM"
- "When a Google Form is submitted, create a task in Notion"

**Bad automation candidates:**
- Writing a custom proposal for a new client (requires judgment)
- Deciding which leads to prioritize (requires context)
- Handling a customer complaint (requires empathy and situational response)

### Finding Your Automation Opportunities

> Prompt: "I run a [type of business]. Here is a description of how I spend my work time: [describe your recurring tasks and workflows]. Identify which of these tasks are good candidates for automation. For each candidate, explain: what the trigger is, what the automated action would be, and which tool could handle it (Zapier, Make.com, or native AI features)."

### Exercise 1
- [ ] List all recurring tasks you do at least once per week.
- [ ] Mark each one with A (good automation candidate), M (maybe), or N (needs human judgment).
- [ ] Choose your top 3 automation opportunities.

---

## Part 2: Introduction to Zapier

### What Is Zapier?

Zapier is a tool that connects different apps together. You create "Zaps" — automations that work like this:

> "When [Trigger happens in App A], do [Action in App B]."

**Examples:**
- When a new row is added to Google Sheets → Create a task in Trello
- When I receive an email with "invoice" in the subject → Save the attachment to Google Drive
- When someone submits my Typeform → Add them to Mailchimp and send a Slack notification
- When I post on Instagram → Automatically post to Facebook

Zapier supports 6,000+ apps. If you use a tool, there's almost certainly a Zapier integration.

**Cost:** Free tier available (limited Zaps per month); paid plans start at ~$20/month

### Building Your First Zap

1. Go to zapier.com and create an account
2. Click "Create Zap"
3. Choose your **Trigger app** (e.g., Gmail, Google Forms, Instagram)
4. Choose the **Trigger event** (e.g., "New Email", "New Form Submission")
5. Connect your account and test the trigger
6. Choose your **Action app** (e.g., Google Sheets, Slack, WhatsApp via Twilio)
7. Configure the action (what should happen?)
8. Test and turn on the Zap

### Getting AI Help with Zapier Setup

> Prompt: "I want to create a Zapier automation for the following workflow: [describe what should happen — trigger and action]. Walk me through the exact steps to set this up in Zapier, including which apps to connect, which trigger event to select, and how to configure the action step."

### Common Beginner Zaps to Start With

**Zap 1: Capture leads automatically**
Trigger: New Google Form submission
Action: Add row to Google Sheets + Send a "Thanks for reaching out" email via Gmail

**Zap 2: Auto-file important emails**
Trigger: New email in Gmail matching a filter (e.g., from a specific domain)
Action: Create a task in Todoist or save to Notion

**Zap 3: Social media notification**
Trigger: New mention of your business on Twitter/X
Action: Send you a Slack message or SMS

### Exercise 2
- [ ] Create a Zapier account
- [ ] Build your first Zap using one of the beginner Zaps above (or one specific to your business)
- [ ] Test it end-to-end (trigger the event manually to confirm the action fires)
- [ ] Document: what time per week does this save you?

---

## Part 3: Introduction to Make.com

### Zapier vs. Make.com

| Feature | Zapier | Make.com |
|---------|--------|----------|
| Ease of use | Simpler, faster setup | More complex but more powerful |
| Pricing | Higher for heavy usage | More generous free tier |
| Complexity | 2-step and simple multi-step | Complex multi-branch workflows |
| Visual builder | Basic | Excellent visual flow builder |

For simple automations: start with Zapier.
For complex, multi-step workflows with conditions and loops: Make.com is more powerful.

### The Make.com Approach

Make.com uses a visual "scenario builder" — you drag and connect modules (apps) to build a visual flow.

> Prompt: "I want to build the following automation in Make.com: [describe your multi-step workflow]. Walk me through: (1) which modules I need, (2) how to connect them, (3) where I need to use filters or conditions, and (4) how to test the scenario."

### A Business-Relevant Make.com Workflow

**Scenario:** Client project update automation
1. Trigger: New row added to Google Sheets (when a task is marked "Complete")
2. Action 1: Find the client's email in another sheet
3. Action 2: Generate a personalized update email using AI (via OpenAI or Claude integration)
4. Action 3: Send the email via Gmail
5. Action 4: Log the sent email in a CRM (like HubSpot or Notion)

This scenario would take 10+ minutes manually, every time. Automated, it takes 0 minutes — it just happens.

> Prompt: "Design a Make.com scenario for my business. My workflow is: [describe step-by-step what happens from start to finish in this process]. Include: triggers, actions, any conditional logic (if X then Y), and which apps would be used at each step."

### Exercise 3
- [ ] Create a Make.com account and explore the visual builder
- [ ] Build one 3-step scenario (trigger + 2 actions)
- [ ] Test it with real data
- [ ] Describe the scenario to someone else — could they understand it and maintain it?

---

## Part 4: Email Automation Templates

### Why Email Automation Is Powerful

Email is still the highest-ROI marketing channel. But most people send emails manually — which means they forget, they're inconsistent, or they don't follow up enough.

Email automation means: you write an email once, and it goes out automatically at the right time to the right person.

### The Welcome Email Sequence

When someone joins your email list or makes first contact, send them a sequence:
- **Email 1 (Immediate):** Welcome, who you are, what to expect
- **Email 2 (Day 2):** Most valuable piece of content or insight
- **Email 3 (Day 5):** Social proof — case study, testimonial, or result
- **Email 4 (Day 10):** Soft offer or invitation to work together

> Prompt: "Write a 4-email welcome sequence for new contacts who sign up for my [type of business] list. My business: [describe]. The sequence should: introduce me and my approach in Email 1, provide genuine value in Email 2, build trust with evidence in Email 3, and make a low-pressure offer in Email 4. Tone: professional but warm. Each email: under 200 words."

### The Follow-Up Automation

After someone makes an inquiry but hasn't bought:
- Email 1 (Day 1): Respond to their inquiry
- Email 2 (Day 3): Add more value (a relevant article, resource, or case study)
- Email 3 (Day 7): Check in — are they still interested?
- Email 4 (Day 14): Final close or "closing the loop"

> Prompt: "Write a 4-step follow-up email sequence for leads who inquired about my [service] but haven't responded or committed. Each email should be different in approach: first adds value, second builds urgency, third offers a low-risk next step, fourth closes the loop. Keep each under 150 words."

### The Invoice Reminder Automation

> Prompt: "Write 3 versions of an invoice reminder email: (1) sent 3 days before the due date (friendly reminder), (2) sent on the due date (professional nudge), (3) sent 7 days after the due date (firm but professional, mentions late fee policy). Each should be short, professional, and include a placeholder for the invoice number and amount."

### Exercise 4
- [ ] Write a 4-email welcome sequence for your business
- [ ] Write 3 invoice reminder templates
- [ ] Set up at least one of these email sequences in an email tool (Mailchimp, ConvertKit, or even Gmail's scheduled send)

---

## Part 5: Building a Simple AI Workflow

### What Is an AI Workflow?

An AI workflow combines automation tools (Zapier, Make) with AI (Claude, ChatGPT, OpenAI) to create a pipeline where:
1. Something triggers the workflow (a form submission, an email, a spreadsheet update)
2. AI processes or generates content (writes a response, summarizes, categorizes)
3. The output is sent somewhere automatically (email, Slack, database, document)

### Example AI Workflow: Automated Lead Response

**The Problem:** Every time someone fills out a contact form, you need to review it and write a personalized response. This takes 5–10 minutes per lead.

**The AI Workflow:**
1. **Trigger (Zapier):** New Google Form submission
2. **Step 1 (Zapier + Claude/OpenAI):** Send the form data to AI with a prompt: "Write a personalized first-response email to this inquiry: [paste form data]. Acknowledge their specific problem, describe how we help, and suggest a 15-minute call."
3. **Step 2 (Zapier):** Send the AI-generated email via Gmail
4. **Step 3 (Zapier):** Add the lead to Google Sheets with their info + a copy of the email sent

The entire process takes 0 minutes of your time — and the response is sent within seconds of the inquiry.

### Setting Up an AI Workflow in Zapier

> Prompt: "I want to build a Zapier workflow that uses AI. The workflow is: [describe]. Which Zapier modules would I need? Is there a built-in AI module in Zapier, or should I use the 'Webhooks' module to call the Claude or OpenAI API? Walk me through the technical setup step-by-step."

Note: Zapier has a built-in "AI by Zapier" module that can generate text. For more advanced prompting, you can connect to OpenAI or Anthropic (Claude) via their APIs.

### Example AI Workflow: Proposal Generator

**The Problem:** Every new client requires a custom proposal. It takes 1–2 hours.

**The AI Workflow:**
1. Fill in a simple Google Form with client details (name, business type, what they need, budget)
2. Make.com sends the data to Claude API with a proposal-writing prompt
3. Claude generates a customized proposal draft
4. The draft is saved to Google Docs and shared with you for review
5. You review, tweak, and send — saving 90% of the time

> Prompt: "Design an AI-powered proposal generation workflow for my [type of business]. The inputs will be collected via Google Form: [list the fields]. The output should be a professional proposal document. Walk me through how to set this up using Make.com and the Claude API (or ChatGPT API). Include the prompt I should use to generate the proposal."

### Exercise 5
- [ ] Design one AI workflow for your business (doesn't need to be fully built yet — diagram it first)
- [ ] Use the prompt above to get step-by-step setup instructions
- [ ] If you have a free Make.com or Zapier account, build the first version
- [ ] Estimate: how much time per week would this save if it works as planned?

---

## Part 6: Building Your Automation System

### The Business Automation Audit

Once you understand what's possible, audit your entire business for automation opportunities:

> Prompt: "I want to audit my entire business for automation opportunities. Here are all the recurring tasks I do: [list them with rough time estimates]. For each task: (1) is it automatable? (2) what would the automation look like? (3) which tool would I use? (4) how much time would it save per week? Organize the results by priority (biggest time saving first)."

### Building Your Automation Stack

A typical small business automation stack:
- **Zapier or Make.com** — Connect apps
- **Mailchimp or ConvertKit** — Email automation
- **Calendly** — Automated meeting scheduling (no more back-and-forth)
- **Notion or Airtable** — Automated databases and project tracking
- **Stripe** — Automated payment processing and receipts

> Prompt: "Based on a [type of business] with these tools: [list tools you use], suggest an automation stack. What 5 automations should I set up first, in priority order? For each, tell me which tools to use, the rough setup time, and the ongoing time savings."

### The 10x Productivity Mindset

Before doing any recurring task, ask:
1. Does this need to be done at all?
2. Can it be done less frequently?
3. Can it be automated?
4. Can it be delegated?
5. Only if all 4 answers are no — do it yourself

> Prompt: "Help me apply the 10x productivity audit to my current workflow. I'll describe my top 10 time-consuming tasks. For each, run through the 5 questions: Does it need to be done? Can it be done less frequently? Can it be automated? Can it be delegated? Or must I do it myself? [List your tasks]"

---

## Putting It All Together

You now understand:
- Which tasks are worth automating
- How to use Zapier and Make.com for no-code automation
- How to write email automation sequences
- How to build AI-powered workflows that save hours per week
- How to audit your business and build a priority automation stack

Each automation you build is a permanent upgrade to your business infrastructure.

---

## Homework

- [ ] Build at least 2 working automations in Zapier or Make.com
- [ ] Write and set up a 4-email welcome sequence for your business
- [ ] Design one AI workflow (even if not yet built)
- [ ] Run the full automation audit on your business
- [ ] Track your time saved after 1 week of your new automations and calculate the annual equivalent

> Prompt for an automation plan: "Based on everything I've told you about my business, create a 90-day automation roadmap. Month 1: the 3 most impactful automations to set up first. Month 2: the next layer of workflow improvements. Month 3: AI workflow integration. For each automation, give me: what it does, the tools needed, estimated setup time, and projected weekly time saving."

---

*Module complete. You now have a complete productivity system powered by AI. Congratulations on completing the AI for Productivity module — and the full curriculum.*
