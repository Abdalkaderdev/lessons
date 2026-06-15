---
title: "Reports, Proposals, and Long Documents"
module: "AI for Writing at Work"
order: 2
---

# Reports, Proposals, and Long Documents

The long document is where AI either saves you a whole weekend or wastes one. The difference is method. Most people open ChatGPT, type *"write a grant proposal for clean water in rural Kenya,"* get back four pages of confident nonsense, and then spend three hours fixing it.

Don't do that. We're going to work in pieces.

---

## Tools for this lesson

- [https://claude.ai](https://claude.ai) — best for long documents. It holds context well and writes more naturally over many pages.
- [https://chatgpt.com](https://chatgpt.com) — good for restructuring and bullet expansion.
- [https://docs.google.com](https://docs.google.com) — paste finished sections here. Has its own Gemini AI side panel if you want it.

---

## The golden rule: bullets first, prose second

Never ask AI to write a long document from a one-line prompt. You give it the skeleton, it adds the muscle.

```
I need a [type of document]. Here is the structure and the key points for each section. Expand each bullet into 2-3 paragraphs. Match the tone of the example I'm pasting at the end. Do not invent statistics or facts. If a section needs information I haven't provided, mark it [NEED INPUT] instead of guessing.

Document:
1. [Section name]
   - bullet
   - bullet
2. [Section name]
   - bullet

Tone example:
[paste 1-2 paragraphs of your real writing]
```

The `[NEED INPUT]` instruction is the secret. Without it, AI will invent specifics — a number, a date, a quote — and you won't notice until someone calls you out.

---

## Three flavours of the same method

**Teacher — lesson plan / curriculum doc:**
Bullets: learning objective, prior knowledge needed, 5-minute warmer, 20-minute main activity, 10-minute assessment, materials list, differentiation for slower learners. Feed those in. You get a usable plan in 90 seconds instead of 90 minutes.

**NGO — grant proposal:**
Bullets per section the funder asks for: problem statement, target population, intervention model, expected outcomes, monitoring plan, budget narrative, organisational capacity. Critical: paste the funder's own guidelines into the prompt. Grant reviewers reject proposals that ignore the rubric — AI is great at hitting a rubric if you give it one.

**Business — client proposal:**
Bullets: client's stated problem, your understanding of it (this matters more than the solution), proposed approach, deliverables, timeline, pricing, why us. Always write the "why us" section yourself. AI generic-pitches it.

---

## Expanding, tightening, restructuring

These are three different jobs. Don't ask for them at the same time.

**Expand** (you have a bullet, you need a paragraph):

```
Expand this bullet into a single paragraph (4-5 sentences). Keep it concrete. No filler. No hedging.

Bullet: [your bullet]
Context: [who is this for]
```

**Tighten** (you have a paragraph, it's flabby):

```
Cut this by 40%. Keep every fact. Remove qualifiers, soft openers, and any sentence that doesn't add information. Return only the tightened version.

[paste paragraph]
```

**Restructure** (the order is wrong):

```
Here is a draft section. The information is right but the order is wrong — the most important point is buried at the bottom. Reorder it so the strongest claim comes first, then evidence, then implication.

[paste section]
```

---

## Grant proposals — the special case

Grant proposals deserve their own warning. Funders read hundreds. They spot AI writing instantly because it has a specific smell:

- Tricolons everywhere ("through innovation, collaboration, and sustained impact")
- "Robust," "comprehensive," "holistic," "leverage," "synergies"
- Em-dashes used like commas — like this — over and over
- Vague verbs: "engage," "empower," "transform," "drive"
- The closing line: "Together, we can build a brighter future."

After the AI drafts your proposal, run this:

```
Read this grant proposal section. Flag every sentence that sounds like generic NGO writing. Specifically look for: tricolons, the words robust/comprehensive/holistic/leverage/synergies/empower/transform, vague verbs without an object, and any sentence that could appear in any proposal from any organisation. List the problems. Do not rewrite.

[paste section]
```

Then fix those sentences by hand. This is the step that separates a funded proposal from a polite rejection.

---

## What AI gets wrong in long documents

- **Numbers.** It will quietly change "32 schools" to "30 schools" between drafts. Lock your numbers in a separate notes file and re-check every draft.
- **Names.** It misspells partner organisations and gets job titles wrong. Always check.
- **Tone drift.** Over 5+ pages it slowly shifts from your voice to its voice. Read the final page out loud — that's usually where the drift is worst.
- **False consistency.** It will rephrase the same point three different ways in three sections, making it sound like three different points. Search for your key terms and standardise.
- **It cannot read PDFs of funder guidelines as well as it pretends.** If a PDF is scanned or oddly formatted, paste the text manually.

---

## Homework

1. Pick one long document you actually need to write this month — lesson plan, grant section, client proposal. Write the bullet skeleton yourself (this is 80% of the thinking). Then use the expansion prompt to draft it.
2. Take any long document you've already written. Run the "tighten" prompt on one paragraph. Compare. Decide if the cuts were good.
3. NGO members specifically: run the "generic NGO writing" check on the last proposal you sent out. Note three phrases you'll never use again.
4. Open a fresh doc in [docs.google.com](https://docs.google.com) and save your finished draft there. Long documents need a real editor, not a chat window.
