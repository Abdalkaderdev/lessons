---
title: "Editing and Improving What You Already Wrote"
module: "AI for Writing at Work"
order: 3
---

# Editing and Improving What You Already Wrote

This is the most underrated use of AI. Everyone wants it to write *for* them. The bigger win is using it to edit *with* you — so the words on the page stay yours, just better.

The trap in the other direction: you paste your paragraph in, ask for "improvement," and AI hands back something smoother, blander, and not in your voice. You accept it because it sounds professional. Three months later all your writing sounds identical to everyone else's. We're going to avoid that.

---

## Tools for this lesson

- [https://claude.ai](https://claude.ai) — best for keeping your voice while editing.
- [https://chatgpt.com](https://chatgpt.com) — good for grammar and quick clarity passes.
- [https://www.grammarly.com](https://www.grammarly.com) — narrower than the chatbots, but excellent for grammar and punctuation specifically. The free version is enough for most work.
- [https://www.deepl.com/translator](https://www.deepl.com/translator) — for translation between languages, usually better than ChatGPT.

---

## The editor mindset

Tell the AI what role to play. This single line changes everything:

```
You are my editor, not my ghostwriter. Do not rewrite my sentences in your style. Suggest the smallest possible change that fixes a real problem. If a sentence is fine, leave it. Explain each change in 5 words or fewer.
```

Paste that at the top of every editing session. It pulls the AI away from its default "let me show you how I'd write this" mode.

---

## Grammar without losing meaning

```
You are my editor. Fix grammar, punctuation, and clear spelling mistakes only. Do not change word choice. Do not rearrange sentences. Do not "improve" anything. Show me the corrected version, then list each change in one line.

[paste your text]
```

Use this when you need clean grammar but the voice has to stay intact — a batch of reports you don't want sounding identical, a draft from a colleague whose English is a second language (fix the grammar, don't fix the voice — the voice is part of the document), or a clause you wrote at midnight that needs its commas checked before someone else reads it.

---

## Tightening verbose writing

Most of us over-write when we're nervous about a topic. AI is excellent at trimming this — *if you stop it from rewriting*.

```
This paragraph is too long. Mark with [CUT] every word or phrase that could be removed without losing meaning. Do not rewrite. Just mark.

[paste paragraph]
```

You then make the cuts yourself. This keeps your voice. Compare to the lazy version — *"make this shorter"* — which gives you back a paragraph that's no longer yours.

---

## Translating between languages

DeepL is usually better than the chatbots for straight translation. But chatbots are better when you want *contextual* translation — adapting tone, not just words.

```
Translate this from [language] to [language]. Match the tone of the original: [formal / warm / direct / etc.]. If a phrase doesn't translate cleanly, give me two options and explain the difference.

[paste text]
```

A few rules that apply to almost any translation job:

- **Use both tools.** Translate with DeepL for accuracy, then paste the result into Claude and ask *"does this read naturally to a native speaker, or is it textbook-stiff?"*
- **When the original voice matters — a quote, a testimony, anything personal — ask for *literal first, then polished,* and choose between them.** Over-polishing erases the speaker.
- **For anything legally binding, a human native speaker still has to check it.** AI translation is good, not perfect.

---

## Checking for tone and clarity

This prompt is the one to memorise:

```
Read this as if you were the intended reader. Answer three questions:
1. What is the main message you take away?
2. Is there any sentence that is unclear, ambiguous, or could be misread?
3. How does the tone come across in one word?

Do not rewrite. Just answer.

Intended reader: [describe]
Text:
[paste]
```

If the "main message" the AI reports back is *not* what you intended, your writing has a clarity problem — not a grammar problem. Fix the structure, not the words.

---

## The "keep my voice" guardrail

After any editing pass, run this check:

```
Compare these two versions of the same paragraph. The first is mine, the second is your edit. Tell me honestly: does the edited version still sound like the same person wrote it? Point to any sentence where the voice has shifted toward something more generic or AI-flavoured.

Mine:
[paste]

Edited:
[paste]
```

If it admits voice drift, throw the edit out and try again with a smaller scope. You'd be surprised how often this happens.

---

## What AI gets wrong in editing

- **It "improves" things that didn't need improving.** Short, punchy sentences get smoothed out. Don't let it.
- **It standardises voice.** Two paragraphs with very different rhythms come back sounding the same.
- **It misses meaning errors.** Grammar perfect, fact wrong. Always re-read for meaning, not just clean-up.
- **It cannot judge cultural register.** What's polite in one language is cold in another. Native speakers still beat AI here.
- **Grammarly disagrees with itself across documents.** Treat its suggestions as suggestions, not commands. Reject the ones that flatten your style.

The honest summary: AI is a fast editor with no taste. You bring the taste.

---

## Homework

1. Take a piece of writing you finished last week. Run the grammar-only prompt. Accept only the changes that are true errors. Notice how often AI tried to "improve" something that was fine.
2. Pick a long paragraph from your work and run the `[CUT]` tightening prompt. Make the cuts yourself. Read it aloud. Better or worse?
3. Pick one document and run the "main message" check. If the AI's summary doesn't match what you meant — rewrite the structure, not the words.
4. Optional, for anyone working across languages: take one paragraph, translate it with [deepl.com](https://www.deepl.com/translator), then ask [claude.ai](https://claude.ai) whether the translation sounds natural to a native speaker. Note where they disagree.
