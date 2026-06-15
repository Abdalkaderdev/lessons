---
title: "Meeting Notes and Action Items"
module: "AI for Meetings & Communication"
order: 1
---

# Meeting Notes and Action Items

You sit in a meeting. You try to listen, talk, and write notes at the same time. You do none of them well. By the end you have half a page of scribbles and no idea what you agreed to do.

AI can take that job off your hands — if you set it up right and respect the people in the room.

---

## What we are actually doing

Three steps:

1. Record the meeting (with consent)
2. Turn the recording into a transcript
3. Turn the transcript into a clean summary with action items

The third step is where AI saves you the most time.

---

## Step 1 — Recording, the honest way

Before you press record, you ask. Out loud. Every time.

"I'd like to record this so I can review the notes later. Is that okay with everyone?"

If one person says no, you do not record. You take notes the old way. That rule is not negotiable.

Some context matters more than others. Routine internal team check-ins are usually fine to record. Anything involving children, patients, vulnerable people, or anyone sharing a personal story — default to no recording unless they specifically ask for one. In many countries, the law requires you to tell the other person you are recording, especially on phone or video calls. Say it in the first 30 seconds.

---

## Step 2 — Transcription tools

A transcript is the meeting as text. Pick one tool:

- Otter — https://otter.ai — joins Zoom/Google Meet automatically, free tier is enough to start
- Fireflies — https://fireflies.ai — similar to Otter, stronger summary features, popular in business
- Whisper — https://github.com/openai/whisper — free, you run it on your computer, works on audio files you already have, handles many languages including Arabic

Rule of thumb: if the meeting is live and online, use Otter or Fireflies. If you have an audio file already (a voice memo, a recorded phone call), use Whisper.

Honest warning: transcription is not perfect. Expect 5 to 15 percent of words to be wrong. Names get mangled. Accents get mangled worse. Anything important — a date, a number, a name — you verify by hand.

---

## Step 3 — Turning a transcript into something useful

A raw transcript is unreadable. 4,000 words of "um" and "yeah" and people talking over each other. You feed it to Claude (https://claude.ai) or ChatGPT (https://chat.openai.com) and ask for a summary.

Copy this prompt:

```
Below is a transcript of a meeting. Please give me:

1. A 5-sentence summary of what was discussed
2. Key decisions made
3. Action items in this format: [Person] will [do what] by [when]
4. Open questions that were not answered
5. Anything that needs follow-up but was not assigned to anyone

Transcript:
[paste transcript here]
```

---

## A sharper example

The generic prompt above is a starting point. The more you tell the model about what you actually care about, the more useful the summary becomes. Here is a tailored version you can adapt to any meeting:

```
Summarize this meeting. Pull out: tasks assigned to each person 
with deadlines, decisions made, anything that needs approval from 
someone not in the room, open questions that were not resolved, 
and risks that were raised. Flag anything sensitive I should be 
careful about repeating in writing.
```

Notice the pattern: name the categories you want, ask for owners and deadlines, ask the model to flag sensitive content. Swap in the specifics for your meeting — budget decisions, support plans, client pain points, whatever matters in your context.

---

## Privacy and consent — read this twice

Some rules that keep you out of trouble:

- Tell people you are recording before you record. Not after.
- If the meeting involves a child, a patient, a beneficiary, or anyone vulnerable, the default is no recording.
- Do not upload sensitive transcripts to free AI tools without thinking. Otter, Fireflies, Claude, and ChatGPT all store data on their servers. Check the privacy settings.
- For really sensitive content, use Whisper locally — the audio never leaves your computer.
- Delete recordings you do not need. A folder of 200 meeting recordings is a liability, not an asset.

A useful test: would the person on the other end be embarrassed or angry if they knew you uploaded this conversation to an AI? If yes, do not do it.

---

## What AI cannot do

It cannot tell you that the quiet person in the corner was upset. It cannot read the room. It cannot tell you that the client's "yes" was a polite "no." That is still your job.

Use AI for the mechanical work — transcribing, summarizing, listing tasks. Use your own judgment for everything else.

---

## Homework

1. Pick one tool (Otter, Fireflies, or Whisper) and set up a free account this week.
2. Record one real meeting from your work, with consent. Generate a transcript.
3. Feed the transcript to Claude using the prompt above. Compare the AI summary to what you remember from the meeting. Note where it got things wrong.
4. Write a 3-line personal rule for yourself: when you will record, when you will not, and where you will store the files.
