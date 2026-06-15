---
title: "Translation and Multilingual Work"
module: "AI for Meetings & Communication"
order: 3
---

# Translation and Multilingual Work

Machines now translate faster than any human. They also still get things wrong in ways that can embarrass you, offend someone, or quietly change the meaning of a contract.

The goal of this lesson is not to make you trust translation tools more. It is to teach you when to trust them, when to double-check, and when to call a human.

---

## The two kinds of translation tools

There are basically two families.

**Pure translators** — Google Translate (https://translate.google.com), DeepL (https://www.deepl.com).
These are fast. You paste a sentence, you get a sentence. They are excellent for short, factual text. They are bad at jokes, idioms, and tone.

**General AI models** — Claude (https://claude.ai), ChatGPT (https://chat.openai.com).
These are slower but they understand context. You can tell them who the message is for, what tone to use, what register of language. They are much better for anything where tone matters.

Rule of thumb:

- A bus schedule, a menu, an address — Google Translate.
- A condolence message, a marketing post, a polite refusal — Claude or ChatGPT.
- A legal document — a human translator. Do not skip this.

---

## Preserving tone

Tone is the thing machines miss most often. A direct sentence in English can sound rude in Arabic. A warm sentence in Arabic can sound overdone in English. The same words mean different things to different people.

When you use Claude or ChatGPT, you tell it the tone you want:

```
Translate the following from English to Arabic.

Audience: [who the message is for]
Tone: [warm / formal / professional / casual]
Register: [colloquial / Modern Standard Arabic / business]
Preserve: the politeness level of the original. Do not make it more direct or more flowery than the source.

Text:
[paste text here]
```

The "register" line matters for Arabic specifically. Modern Standard Arabic (fusha) is what you use for official documents and serious business. Colloquial (ammiya) is what you use for friends and informal messages. Sending an MSA message to a friend feels cold. Sending an ammiya message to a government office feels disrespectful.

---

## Three flavors

Teacher — translating a school notice for Arabic-speaking parents:

```
Translate this school notice from English to Arabic. Audience: 
parents in our school community, most of whom speak Levantine 
Arabic at home but read MSA. Use simple MSA, warm tone, avoid 
complicated grammar. Keep it under the same length as the English.
```

NGO assistant — translating a field interview from Arabic to English for a donor report:

```
Translate this interview transcript from Arabic to English. The 
speaker is a Syrian mother describing her family's situation. 
Preserve her voice — do not make her sound more eloquent or more 
broken than she is. Where a phrase has no clean English equivalent, 
translate literally and add a short bracketed note explaining the 
cultural meaning.
```

Business — translating a sales email from English to Arabic for a Gulf client:

```
Translate this sales email from English to Arabic for a business 
contact in the UAE. Use formal business Arabic. The original is 
friendly-direct American style; make it polite-direct Gulf business 
style. Open with appropriate greetings and close with appropriate 
respect formulas.
```

---

## Live conversation translation

You are in a meeting with someone who speaks a different language. Two options:

- Google Translate app — has a live conversation mode. Tap the language, speak, the phone speaks back in the other language. Good enough for simple exchanges.
- Otter (https://otter.ai) or Fireflies (https://fireflies.ai) — transcribe in one language, then run the transcript through Claude for translation afterward. Better for accuracy, worse for speed.

Honest warning: live translation breaks down quickly when people get emotional, talk fast, or use slang. For serious conversations — a parent worried about their child, a beneficiary describing a hard situation, a client negotiating a contract — bring a human interpreter if you can. AI is a backup, not a replacement.

---

## Arabic-English specifically

Some patterns to know:

- Arabic uses more honorifics and blessings than English. "Allah ybarek feek" is normal in a casual Arabic message. Translated literally as "God bless you" in an English business email, it sounds odd. Adapt, do not translate word-for-word.
- English uses contractions ("don't," "can't"). Arabic does not work that way. Direct translations of contractions sometimes sound clipped or unfinished.
- Arabic often puts the verb first. Machine translation occasionally produces awkward English word order when translating in that direction. Read the output aloud.
- Names of people and places get mangled. Always check names by hand.
- Right-to-left rendering breaks formatting in some apps. If you paste Arabic into a document and the punctuation jumps to the wrong end of the sentence, that is the RTL bug, not the translation.

---

## Cultural nuance the machine misses

A few examples we have hit in real life:

- A condolence message translated literally from English into Arabic loses all the standard mourning phrases that an Arabic speaker expects. The message reads as cold even though the words are correct.
- An Arabic business email opens with two paragraphs of warm greetings before the actual point. Translated word-for-word into English, that opening makes the writer sound long-winded. A Western reader expects the point in the first sentence.
- Religious phrases — "inshallah," "alhamdulillah," "mashallah" — carry real meaning to the speaker. Translating them as "hopefully," "thanks," or "wow" strips that meaning. Sometimes you leave them in transliterated form and let the reader figure it out.

When in doubt, ask the AI to explain rather than translate:

```
Here is a phrase in Arabic: [phrase]. 
Do not translate it directly. Instead, explain:
1. What it literally means
2. What it usually communicates emotionally or socially  
3. What an English speaker would say in the same situation
```

Use the explanation to write the English version yourself.

---

## When to call a human

- Legal documents, contracts, anything signed
- Medical information
- Anything going on official letterhead
- Anything where a mistranslation could hurt someone's safety, immigration status, or job
- Poetry, religious texts, anything where the words themselves are the point

For everything else, AI is fine — as long as you read the output before you send it.

---

## Homework

1. Take one message you actually need to send this week in a second language. Translate it two ways: once with Google Translate, once with Claude using the tone prompt above. Compare them. Note which you would actually send.
2. Find a phrase in your second language that does not translate cleanly into English (or vice versa). Ask Claude to explain it using the "explain rather than translate" prompt.
3. Pick one document at your work that contains sensitive information — student records, beneficiary stories, client contracts. Write a short rule for yourself about whether you will ever run it through an online translation tool.
