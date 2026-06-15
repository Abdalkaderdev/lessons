---
title: "Specialized Tools Worth Knowing"
module: "Choosing the Right AI Tool"
order: 3
---

# Specialized Tools Worth Knowing

A general assistant is a Swiss Army knife. Specialized tools are the right knife for the job. This lesson covers the categories you'll actually reach for: transcription, images, research, and writing aids. We'll be honest about which ones earn their price and which don't.

---

## Transcription — Turning Audio into Text

You record a meeting, an interview, a class. You need the words written down. A chatbot can't do this well. A transcription tool can.

**Otter.ai** — https://otter.ai. Joins your Zoom/Google Meet/Teams call live and transcribes in real time. Free tier gives you about 300 minutes per month. Paid is about $17/month.

**Whisper** — by OpenAI. Free, open-source. You upload an audio file and get text back. No live meetings, but excellent accuracy. Use it through https://platform.openai.com or apps like MacWhisper.

**Fireflies.ai** — similar to Otter, slightly better at speaker labels and meeting summaries.

Honest warning: All transcription tools struggle with strong accents, overlapping speakers, and bad microphones. Read the transcript before you trust it.

---

## Image Generation — Turning Words into Pictures

**Midjourney** — https://midjourney.com. The artistic one. Best at illustrations, painterly styles, dramatic compositions. About $10/month minimum. Requires Discord or their web app to use. Learning curve is real.

**DALL-E** — built into ChatGPT Plus. Easiest to use because you just type into the chat. Best for quick concepts, not final art.

**Nano Banana** (Google's image model) — built into Gemini. Strong at edits to existing photos (change the background, swap an object). Fast and free.

**Stable Diffusion** — open source, runs on your own computer if you have a good GPU. Free, but technical.

Honest warning: AI-generated images of real people, logos, or copyrighted characters can get you in legal trouble. Stick to original concepts.

---

## Research — Getting Actual Sources

**Perplexity** — https://perplexity.ai. The single most useful free tool on this list. Ask a question, get an answer with numbered citation links to real web pages. Free tier is generous. Paid is about $20/month with deeper research mode.

Use Perplexity instead of a regular chatbot whenever:
- You need recent information (anything from the last 6 months).
- You need to cite a source.
- The answer must be verifiably true, not just plausible.

---

## Writing Aids — Live Inside Your Document

**Grammarly** — https://grammarly.com. Catches grammar, tone, clarity issues as you type. Works in Gmail, Word, Google Docs. Free tier covers grammar; paid (~$12/month) adds tone and clarity rewrites.

**Notion AI** — built into Notion (https://notion.so). If you already use Notion for notes or project planning, Notion AI summarizes pages, extracts action items, and rewrites in place. About $10/month per user.

Honest take: if you write in Notion every day, Notion AI is worth it. If you don't, don't sign up for Notion just for the AI.

---

## Three Real Examples — Picking the Right Specialized Tool

**For the teacher** — "I recorded today's class because three students were absent. I want a written summary I can email them, with key questions students asked."

Wrong: Open ChatGPT and try to upload the audio file (free version may refuse or do it poorly).
Right: Use Otter.ai or Whisper to get the transcript, then paste the transcript into Claude with this prompt:

```
Below is a transcript of today's Year 9 history lesson. Write a 250-word summary for students who missed class. Include:
- The main topic covered
- Three key points the students should know
- Any questions other students asked during the lesson
- One reflection question for the absent students to think about

Keep the tone friendly, not lecturing.

Transcript:
[paste here]
```

---

**For the NGO worker** — "I'm writing a grant proposal and I need to cite three recent studies on the impact of clean cooking stoves on women's health in sub-Saharan Africa."

Wrong: Ask ChatGPT free and hope the citations are real (they often aren't).
Right: Use Perplexity.

```
Find three peer-reviewed studies published in the last 5 years on the health impacts of clean cooking stoves for women in sub-Saharan Africa. For each, provide:
- Title and authors
- Year and journal
- One sentence on the main finding
- A direct link to the paper or its abstract

Only include studies you can verify with a working link.
```
Then click each link before pasting any of it into your grant.

---

**For the business owner** — "I need a clean product photo for my online store, but the background of my own photo is messy."

Wrong: Try to describe the photo to a chatbot and have it generate a brand-new one — it won't look like your actual product.
Right: Use Nano Banana inside Gemini, or use ChatGPT's image edit. Upload your photo and ask:

```
Here is a photo of my product. Replace the background with a clean, light grey studio backdrop. Keep the product itself, the lighting on it, and the colors exactly as they are. Output a high-resolution image suitable for an e-commerce listing.
```
Verify the product still looks like your actual product. AI editing tools sometimes change the product unintentionally — labels go fuzzy, shapes drift.

---

## When to Reach for a Specialized Tool Instead of a General One

A simple decision rule:

- Is the input audio? → transcription tool first, then chatbot.
- Is the output a picture? → image tool.
- Do you need to cite a real source? → Perplexity.
- Are you editing inside a document anyway? → use whatever's built into that document (Notion AI, Grammarly, Gemini-in-Docs, Copilot-in-Word).
- Everything else → general assistant (Claude, ChatGPT, Gemini).

The mistake to avoid: trying to make ChatGPT do everything. It's good, but it's not a transcription service, and its free version is not a citation engine.

---

## What's Not Worth Paying For (Yet)

Honest opinion, in 2026:

- **AI video generators** (Sora, Runway, Pika) — fun, improving fast, but not yet reliable for professional work unless video is your job.
- **AI avatar tools** (Synthesia, HeyGen) — useful for internal training videos, embarrassing for customer-facing content. Most viewers can still tell.
- **"AI everything" Chrome extensions** — most are wrappers around ChatGPT with a subscription markup. Skip.

You'll know it's time to pay for one of these when you've tried the free version twice and missed it.

---

## Homework

1. Pick one specialized tool from this lesson that fits a problem you actually have. Sign up for the free tier and run one real task through it before next session.
2. Take a 2-minute voice memo on your phone about your day. Run it through Otter.ai or a free Whisper-based tool. Notice what the transcript gets wrong — accents, names, technical words.
3. Open Perplexity and ask it a question where you already know the answer (something from your own field). Check whether the sources it cites are real, current, and accurate. Report back what you found.
