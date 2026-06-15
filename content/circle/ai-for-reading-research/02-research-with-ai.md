---
title: "Researching a Topic from Zero"
module: "AI for Reading & Research"
order: 2
---

# Researching a Topic from Zero

Every week somebody has to learn something new fast — a regulation that just changed, a field you've never worked in, a market you're being asked to evaluate, a topic that landed on your desk this morning.

The old way was three hours of Googling, ten open tabs, and a vague sense that you understand it. The new way is faster — but only if you don't fall for the AI's confident-sounding nonsense.

---

## The three tools, and what each is for

- [https://perplexity.ai](https://perplexity.ai) — built for research. Every answer comes with linked sources. Start here.
- [https://claude.ai](https://claude.ai) — best for *thinking* about a topic, structuring it, comparing ideas. Weaker at fresh facts.
- [https://chatgpt.com](https://chatgpt.com) — good middle ground; with web search enabled it's closer to Perplexity.

Rule of thumb: **Perplexity for facts, Claude for understanding, ChatGPT for both at lower quality.**

---

## Step 1: Get oriented before you ask anything sharp

When you know nothing about a topic, you don't even know what to ask. Start with this:

```
I know almost nothing about [topic]. Before I ask anything specific, give me a map of the field:

1. What are the 5 most important concepts I need to understand?
2. Who are the main players, organizations, or schools of thought?
3. What's the current state of debate — what do experts actually disagree about?
4. What are 3 questions a beginner thinks are important but actually aren't?
5. What are 3 questions a beginner doesn't know to ask but should?

Use plain language. No jargon without a definition.
```

Run this in Perplexity first so you get sources. Then re-run it in Claude to see if you get a different angle.

Drop in any topic where you're starting from zero — *"I know almost nothing about EU funding rules for cross-border projects,"* or *"I know almost nothing about lithium battery shipping regulations,"* or *"I know almost nothing about dyslexia screening."* That single prompt replaces about an hour of unfocused reading.

---

## Step 2: Ask the right kind of question

Once you have the map, ask sharper questions. The shape that works best:

```
Help me understand [specific question]. Please:
1. Give the short answer first (2-3 sentences).
2. Then explain the nuance — what makes this complicated or contested.
3. Cite specific sources I can verify. Real ones, with links.
4. Tell me what you are uncertain about.
```

The "tell me what you are uncertain about" line is the most underused trick in AI research. It pulls confidence levels out of the model. Use it on every research question.

The sharper the question, the better the answer. Compare *"tell me about contracts"* to *"What's the legal difference between a beneficiary and a participant in EU project paperwork?"* The second one forces a real answer; the first invites a Wikipedia paragraph.

---

## Step 3: Verify the sources

This is the step everyone skips. Don't skip it.

Open the actual sources Perplexity links. Two minutes per source. You're checking:

1. Does the source exist? (AI sometimes invents URLs.)
2. Does the source actually say what the AI claimed it says? (Often it says something similar but weaker, or older, or about a different country.)
3. Is the source credible? (A random blog vs. a peer-reviewed paper vs. a government document are different things.)

```
For the answer you just gave, I want to verify your sources. For each citation:
1. Quote the exact sentence from the source that backs your claim.
2. Note the date of the source.
3. Note any obvious bias or limitation (is this a study, an opinion piece, a sponsored post?).
```

If the AI can't quote the source back, treat the claim as unverified.

---

## Step 4: The hallucination problem — how to defend against it

A hallucination is when AI confidently states something that is wrong. Not "kind of wrong" — completely invented. A fake study. A fake author. A real person quoted saying something they never said. A law that doesn't exist.

This is not rare. It happens every day to people who don't know to check.

**Defenses that actually work:**

- **Use Perplexity for anything factual.** The linked sources let you check immediately.
- **Cross-check between two AIs.** Ask Claude the same question you asked Perplexity. If they agree, your confidence goes up. If they disagree, dig in.
- **Triangulate with a non-AI source.** A government website, a known book, an expert you trust. If the AI's claim doesn't show up anywhere else on the internet, it's probably invented.
- **Treat names, dates, numbers, and quotes as guilty until proven innocent.** These are the four categories AI hallucinates most often.
- **Watch for "according to a 2023 study by..."** The AI loves this phrase. Half the time the study doesn't exist. Ask: *"Give me the exact title, authors, and a working link to that study."* If it can't, the study is probably fake.

```
I want to fact-check what you just told me. For each specific claim — every name, date, number, and quote — tell me:
1. Are you 100% sure this is accurate, or did you generalize?
2. Could you have confused this with a related fact?
3. Where exactly did you get this?

Be honest. I'd rather you say "I'm not sure" than guess.
```

---

## Step 5: From research to your own understanding

Research isn't done when AI gives you an answer. It's done when you can explain it to someone else in your own words. End every research session with this:

```
I'm going to try to explain what I just learned in my own words. Read what I write and tell me:
1. What did I get right?
2. What did I get wrong or oversimplify?
3. What important point did I miss?

My explanation:
[write 5-6 sentences in your own words]
```

This is the moment the knowledge actually sticks. Skip it and you'll forget everything by next week.

---

## What AI gets wrong in research

- **It's overconfident about recent events.** Anything in the last few months may be incomplete or wrong, even with web search on.
- **It defaults to US and UK sources** even when your context is elsewhere. Ask explicitly for local sources.
- **It blends opinion and fact.** A controversial position gets stated as if it's settled.
- **It can be lazy.** If you ask a complex question, it may give you the easy answer to a simpler version. Push back: *"That's the surface answer. Go deeper."*

---

## Homework

1. Pick a real topic you need to understand for work this month but feel behind on. Run the Step 1 "get oriented" prompt in [perplexity.ai](https://perplexity.ai). Save the answer.
2. From that map, pick the one question that matters most to you. Run the Step 2 prompt. Then open at least two of the cited sources and verify they say what Perplexity claims.
3. Run the same question in [claude.ai](https://claude.ai) without web search. Compare the two answers. Note one thing each tool got that the other missed.
4. Finish with the Step 5 self-explanation prompt. Save your own 5-sentence explanation — that's what you actually learned this week.
