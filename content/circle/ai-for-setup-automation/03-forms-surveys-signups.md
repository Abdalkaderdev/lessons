---
title: "Forms, Surveys, and Signups in Minutes"
module: "AI for Setup & Automation"
order: 3
---

# Forms, Surveys, and Signups in Minutes

You need to collect something from people. RSVPs. Dietary preferences. A signup list. Feedback after an event. The work isn't filling in the form — it's deciding what to ask and building it without overthinking. AI handles the first part. The tools handle the second.

This lesson is about going from "I need to collect X" to a working, sharable form in fifteen minutes.

---

## The three tools worth knowing

You can build a decent form in any of these:

- [forms.google.com](https://forms.google.com) — Google Forms. Free, integrates with Sheets, ugly but bulletproof.
- [tally.so](https://tally.so) — Tally. Free with generous limits, nicer-looking, conditional logic that actually works.
- [typeform.com](https://www.typeform.com) — Typeform. Beautiful, one-question-at-a-time. Free tier is tight (10 responses/month at the time of writing).

Quick rule of thumb: Google Forms if you live in Google Workspace and want responses straight in Sheets. Tally if you care about how the form looks and want logic. Typeform if you're sending it to clients and want polish, and you're under 10 responses or paying.

---

## The demo — RSVPs for a community dinner

You're organizing a community dinner for around forty people. You need:

- Name and email
- Number of seats (1 to 4)
- Dietary preferences (vegetarian, vegan, gluten-free, no restrictions, other)
- Whether they want to bring a dish, and if so, what kind
- A free-text note for allergies

Before opening any form tool, open Claude or ChatGPT and paste this:

```
I'm building a Google Form for RSVPs to a community dinner on May 18. Around 40 people invited.

I need to collect:
- Name
- Email
- Number of seats (1 to 4)
- Dietary preferences (multi-select: vegetarian, vegan, gluten-free, no restrictions, other)
- Whether they want to bring a dish (yes/no), and if yes what kind
- Free-text note for allergies

For each question, give me:
- The exact question wording (friendly tone)
- The question type (short answer, multiple choice, checkboxes, dropdown, linear scale, etc.)
- Whether it should be required
- A one-line note on anything tricky

Output as a numbered list I can copy into Google Forms.
```

The AI gives you a clean spec — question text, type, required or not. You stop second-guessing and start building.

---

## Question types — when to use which

Forms tools all offer similar question types. Picking the right one matters more than the wording.

- **Short answer** — names, emails, single numbers, anything that's one line.
- **Paragraph / long answer** — notes, feedback, "anything else?"
- **Multiple choice (radio)** — pick exactly one from a small list (under 7 options).
- **Checkboxes** — pick any number from a list. Dietary preferences fits here.
- **Dropdown** — pick one from a longer list (countries, time slots). Less visual clutter.
- **Linear scale** — 1 to 5 satisfaction.
- **Date / time** — booking-style picks.
- **File upload** — Google Forms only allows this if you require a Google login. Tally doesn't.

The most common mistake is using radio buttons where checkboxes belong. If someone could honestly answer "vegetarian AND gluten-free," you need checkboxes.

---

## Building it in Google Forms

1. Go to [forms.google.com](https://forms.google.com), click the blank template.
2. Title at the top. Description below it — one sentence about the event.
3. Click the **+** on the right to add each question. Set the type from the dropdown.
4. Toggle **Required** at the bottom of each question where it matters.
5. Top right: **Send** button — pick the link icon, **Copy** the short URL, share it.

To pipe responses into a spreadsheet, click the **Responses** tab → green Sheets icon → **Create new spreadsheet**. Every submission appends a row in real time.

---

## Building it in Tally

[tally.so](https://tally.so) works a bit differently:

1. Sign in, click **Create new form** → **Start from scratch**.
2. Tally uses a slash-command interface — press `/` to insert a question.
3. Each question has a clean panel for type, required, and validation.
4. The **Logic** tab lets you skip or show questions based on previous answers. Example: only show "what kind of dish?" if they said yes to bringing a dish. Google Forms supports this too via "Go to section based on answer," but it's clunkier.
5. **Share** button → copy link.

Tally's free tier covers unlimited forms and unlimited responses — unusual. The catch is some advanced features (custom domain, removing Tally branding) need a paid plan.

---

## Connecting form responses to a Google Sheet

Google Forms does this in one click as above.

For Tally, go to **Integrations** in the form → **Google Sheets** → connect your Google account → pick a sheet or create a new one. Each response adds a row.

For Typeform, same idea, under **Connect → Google Sheets**.

Once the data is in a Sheet, you can sort, filter, count dietary preferences with `COUNTIF`, and so on. That's covered in the spreadsheets module.

---

## Sharing the link

A few small choices matter:

- **Short URL.** Google Forms gives you a long URL by default. In the Send dialog, tick "Shorten URL" for a `forms.gle/xxxx` link that fits in a WhatsApp message.
- **Anonymous vs login.** Google Forms can be set to require a Google login (collects email automatically, prevents duplicate submissions). For a community dinner with mixed audiences, leave it open and ask for email as a question.
- **Closing the form.** When you're done collecting, go to Responses → toggle **Accepting responses** off. Saves you fielding late submissions.

---

## Embedding briefly

You can embed any of these forms in a website. Each tool has a `<iframe>` snippet in its Share menu. Paste it into a Notion page, a Squarespace block, a WordPress HTML widget. Tally's embed is the cleanest because it auto-resizes; Google Forms's is functional but boxy.

For most one-off uses, just share the link. Embedding matters only if the form lives on a permanent landing page.

---

## A quick comparison

| | Google Forms | Tally | Typeform |
|---|---|---|---|
| Free response limit | Unlimited | Unlimited | 10/month |
| Looks like | A form from 2014 | A modern doc | A glossy app |
| Conditional logic | Section jumps only | Full logic | Full logic |
| Best for | Internal, Workspace users | Public-facing, free | Polished client-facing |

---

## Honest warnings

- **Don't over-question.** Every extra field cuts your response rate. Five questions get answered. Fifteen get abandoned.
- **Test it yourself first.** Open the live link on your phone, fill it in, submit. You'll catch the typo and the broken logic before forty people do.
- **Required fields can backfire.** If you require phone number and someone doesn't want to share it, they bail entirely. Only require what you genuinely can't do without.
- **Data lives somewhere.** Responses to Google Forms sit in your Google account. Tally responses sit on Tally's servers. For sensitive data (health info, finances), check the privacy policy before using a free tool.

---

## Homework

1. Build one real form this week — RSVP, signup, feedback, anything you actually need — using AI to draft the question list first.
2. Connect its responses to a Google Sheet and confirm a test submission shows up as a row.
3. Try the same form spec in Google Forms and in Tally side by side. Decide which one you'd use by default and why.
