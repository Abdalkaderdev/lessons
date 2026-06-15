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

## Picking the Right Specialized Tool — A Worked Example

You have a recorded conversation (a meeting, an interview, a class) and you want a clean written summary. This is the perfect example of why a single chatbot is the wrong starting point.

Wrong: Upload the audio to ChatGPT. Free tiers may refuse or transcribe poorly with no speaker labels.

Right: Transcribe first with Otter.ai or Whisper, then paste the transcript into Claude or ChatGPT:

```
Below is a transcript of a meeting. Write a 250-word summary for someone who wasn't there. Include:
- The main topic discussed
- Three key points or decisions
- Any open questions still on the table
- One clear next action

Keep the tone neutral and direct, not over-formal.

Transcript:
[paste here]
```

The same two-step pattern applies elsewhere:

- **Need to cite real sources?** Use Perplexity, then click each link before quoting it. A general chatbot may invent citations.
- **Need to clean up a photo you already have?** Upload it to Nano Banana (in Gemini) or ChatGPT's image edit and ask for one specific change (e.g. "replace the background with a light grey studio backdrop, keep everything else identical"). Check the result — AI editors sometimes drift shapes or blur labels.

The pattern: match the input (audio, photo, citation-grounded research) to the tool built for it, then bring the output back to a general assistant for the writing step.

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
