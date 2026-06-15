---
title: "Voice Input — Talk Instead of Type"
module: "AI on Your Phone"
order: 2
---

# Voice Input — Talk Instead of Type

The single biggest unlock of the phone apps is also the simplest one: you can stop typing. Most people speak around three times faster than they type on a phone keyboard, and the gap is bigger if you have to think while you write. Voice turns the AI from a thing you sit down to use into a thing you talk to while doing something else.

This lesson is about three levels of voice — quick dictation, real-time voice mode, and recording longer thoughts for later.

---

## Level 1 — Dictation into the chat

Every one of the main apps has a microphone icon next to the message box.

- Claude: tap the mic in the message bar.
- ChatGPT: tap the small mic next to the text field (not the headphones — that's voice mode).
- Gemini: tap the mic, or just say "Hey Google" on Android.

You talk, it transcribes, you read what it heard, then you hit send. The model doesn't reply with voice — it answers in text. This is the version to use when you want a normal chat but your hands are full or your thumbs are slow.

Try this. Open any of the three apps, tap the mic, and dictate:

```
I want to plan a small dinner for six people next Saturday. Suggest a simple three-course menu I can mostly prep the day before, and write me a shopping list grouped by section of the supermarket.
```

Watch what gets mistyped. "Six" sometimes becomes "sex", "Saturday" sometimes becomes "Saturn day", names of foreign dishes get mangled. Fix those before sending. Two seconds of editing beats a wrong answer.

---

## Level 2 — Real-time voice mode

This is the one people remember.

- **ChatGPT Voice Mode** — open ChatGPT, tap the headphones icon (or the small waveform on newer versions). It picks up, you talk, it talks back. You can interrupt, it interrupts itself, and the latency feels close to a phone call.
- **Gemini Live** — open Gemini, tap the waveform icon. Same idea, slightly different voice catalog, tight integration with Google services.
- **Claude** does not have a phone-call style voice mode as of writing. For voice-mode conversations, use ChatGPT or Gemini.

What voice mode is genuinely good at:

- Brainstorming — talking out loud forces you to think faster.
- Rehearsing — "I'm about to call my landlord about the heating, ask me the awkward questions he'll ask".
- Tutoring — "explain compound interest to me like I'm thirteen, then ask me three questions to check I got it".
- Walking and dictating — you ramble, it summarizes back what it heard.

What it's bad at:

- Anything where exact wording matters (legal text, contracts, code).
- Noisy environments. A cafe with music will eat half your sentences.
- Long lists. You'll lose track. Switch to text for those.

A useful warm-up prompt for voice mode:

```
I'm going to talk through a half-formed idea for the next five minutes. Don't interrupt with solutions. When I'm done, repeat back what you heard in five bullet points, then ask me the single question that would sharpen the idea most.
```

---

## Level 3 — Record a voice memo, transcribe it, send to AI

Sometimes you want a long, uninterrupted think. A 20-minute drive, a walk, a shower thought you don't want to lose. Voice mode is not built for that. Recording is.

The flow:

1. Open the voice memo app on your phone (Voice Memos on iOS, Recorder on Pixel, any recorder app on other Android phones).
2. Record yourself talking through whatever it is.
3. Run the recording through a transcription tool.
4. Paste the transcript into Claude, ChatGPT, or Gemini and ask it to do something with it.

Two transcription tools worth knowing:

- **Otter** — https://otter.ai — clean UI, speaker labels, exports to text.
- **OpenAI Whisper** — the model behind a lot of transcription apps. The ChatGPT app actually uses Whisper for its dictation. If you record into ChatGPT directly as a voice message, it already runs Whisper for you.

Once you have the transcript, paste it in and try something like:

```
Below is a raw transcript of me thinking out loud for fifteen minutes. It rambles and contradicts itself. Pull out:
1. The actual idea in two sentences
2. The three strongest points I made for it
3. The two strongest objections I raised against it
4. Any specific commitments or next steps I said out loud
Then end with the single most important question I left unanswered.

---
[paste transcript here]
```

This one prompt is, for many people, the highest-leverage use of AI on a phone. A meandering walk becomes a clean one-page brief.

---

## Editing dictated text

The dictation is never perfect. A few rules that save grief:

- Read the transcript before you hit send. Always.
- Speak punctuation if it matters: "comma", "period", "new paragraph". The apps usually understand.
- Names and acronyms — type those by hand. Voice will guess wrong.
- If a long dictation looks half-broken, ask the AI to clean it up:

```
The following is a rough voice transcript with mishearings and missing punctuation. Rewrite it as clean prose without changing the meaning or adding anything I didn't say. If something is unclear, flag it in square brackets rather than guessing.

---
[paste raw dictation]
```

---

## Privacy — worth a minute of thought

When you use voice in any of these apps, your audio is sent to the company's servers. That is how the transcription works. A few honest points:

- Don't dictate things you wouldn't email to the company. Medical specifics, passwords, other people's personal data — type those, or don't share them at all.
- Check the app's settings for "improve the model" or "use my data for training" and turn it off if you care. All three apps expose this.
- A voice memo recorded locally and then deleted after transcription leaves less of a trail than a live voice mode call.
- If you're in a room with other people, you're recording them too. Tell them.

---

## Honest caveats

- Voice mode disconnects when you switch apps on some phones.
- Accents matter. Strong accents in any language get worse transcription. Speak slightly slower than feels natural.
- Background music wrecks accuracy. So does wind.
- The "live" voice modes sometimes go on tangents. Just say "stop, restart, shorter answer please."

---

## Homework

1. Use ChatGPT Voice Mode or Gemini Live for a five-minute conversation about something you're actually trying to figure out this week. Notice what was better and worse than typing.
2. Record a five-to-ten minute voice memo of yourself thinking out loud about any topic, transcribe it (Otter, or just send it to ChatGPT), and run the "pull out the idea, points, objections, next steps" prompt above.
3. Dictate one message in each of the three apps and compare which one heard you most accurately. Write down which one won for your voice.
4. Open the privacy settings of whichever voice app you use most and decide, on purpose, whether to leave training data sharing on or off.
