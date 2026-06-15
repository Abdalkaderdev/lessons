---
title: "Getting Honest Critique on Your Work"
module: "AI for Learning & Growth"
order: 2
---

# Getting Honest Critique on Your Work

This is the hardest lesson in the module. Not because the prompts are complicated — they're not — but because most people, when they finally get honest feedback, don't actually want it.

If you can get past that, AI becomes one of the most useful critics you'll ever have. Available at 2am. No ego. No politics. No worry about hurting your feelings.

But only if you fight against its default.

---

## The Problem: AI Is Trained to Be Agreeable

Default AI is a flatterer. Paste in a half-baked plan and it'll say "Great structure! Here are some suggestions to make it even stronger." Paste in a paragraph of mediocre writing and it'll find three things to praise before cautiously offering "one small thought."

This isn't a bug. The models were trained on human feedback, and humans rated polite, encouraging responses higher than blunt ones. So that's what you get by default.

If you want real critique, you have to break that default explicitly.

Tools we'll use:

- [claude.ai](https://claude.ai) — generally the most willing to push back when prompted
- [chatgpt.com](https://chatgpt.com) — needs more aggressive prompting to drop the flattery
- [gemini.google.com](https://gemini.google.com) — good for fact-checking specific claims

---

## Demo: A Project Proposal You're About to Send

Use one example through this whole lesson: a one-page project proposal you're about to send to a decision-maker. Could be a budget request, a new initiative, a job change pitch — anything where you want it tight.

### The bad way

```
Can you review this proposal and give me feedback?
[paste proposal]
```

You'll get five compliments and two soft suggestions. Useless.

---

### The good way: force the posture

```
You are a tough, experienced reviewer who has seen 500 proposals like this.
You don't soften feedback. You don't lead with compliments.
Default to "this is not ready" unless I've clearly proven otherwise.

Read this proposal. Tell me:
1. The single weakest point a skeptic will attack
2. Three claims I make that I haven't actually backed up
3. What I'm leaving out that a decision-maker will immediately ask
4. The one sentence that would get this rejected on first read

Be specific. Quote my own text back at me. No general advice.

[paste proposal]
```

Notice the tricks:

- **"Default to not ready"** — this flips the bias. Now it has to find reasons to approve, not reasons to praise.
- **"Quote my own text back at me"** — forces it off generic advice and into your actual document.
- **"No general advice"** — kills lines like "consider making it more concise."

---

### The follow-up prompt

After the first critique, do this:

```
What did you go easy on? What's another problem you noticed but
didn't mention because it felt harsh?
```

You will be surprised what comes out. AI knows it pulled punches. Asking directly often unlocks the real feedback.

---

## Reviewing Different Kinds of Work

The same posture works for almost anything you make. The prompts shift slightly:

**A piece of writing:**

```
Read this paragraph. Where does the reader get confused?
Where do I lose the thread? Mark the exact sentence where you
started skimming. Don't comment on grammar.
```

**A plan or strategy:**

```
What's the assumption I'm making that, if wrong, kills this entire plan?
What would happen in month 3 that I haven't accounted for?
```

**Code:**

```
Review this function. Don't comment on style. Tell me:
- What input would break this?
- What's the worst bug a tired engineer might miss here?
- What did the author probably not test?
```

**A pitch or message:**

```
You're the recipient. You read this in 8 seconds before
deleting it or replying. What do you do, and why?
```

Notice the pattern: in every case, you're forcing AI to take a specific adversarial perspective. Not "give feedback" — *be the person who will reject this*.

---

## One Critique Is Almost Never Enough

The first round of feedback usually catches surface-level stuff. The deeper problems show up when you push.

A working flow:

1. Get the critique with the tough-reviewer prompt.
2. Fix what's clearly right. Note what you disagree with.
3. Start a fresh conversation (so it doesn't remember being nice last time).
4. Paste the revised version. Ask: "What's still weak?"
5. Repeat once more.

If by round three the feedback gets thin and contradictory, you're probably done. Or you've hit the limit of what AI can see without your real context.

---

## When to Trust the Pushback and When to Ignore It

Trust the critique when:

- It points at something you already vaguely knew was weak
- It catches a logical gap or unsupported claim
- It surfaces a question your audience will obviously ask
- Multiple fresh conversations land on the same problem

Ignore the critique when:

- It contradicts something only you know about your audience or context
- It pushes you toward generic safe phrasing
- It's "fixing" something that's intentionally sharp
- It's clearly hallucinating about facts (it does this, especially with numbers and citations)

The hard rule: AI doesn't know your specific person, your specific room, your specific history. It knows patterns. Use the pattern recognition, override it when you have ground truth it doesn't.

---

## What AI Will Not Do

It won't notice when you stop showing it your real work and start showing it polished drafts to fish for compliments. It won't tell you the whole project is a bad idea — it'll help you make a bad project better. It can't read the political room your proposal is going into. And it will sometimes hallucinate confidently wrong critiques. Verify anything specific.

A real mentor still beats AI critique. But you can ask AI 20 times a week. You can ask your mentor maybe once a month. Use them differently.

---

## Homework

1. Take something you wrote in the last two weeks that you were proud of. Run the tough-reviewer prompt on it. Note your emotional reaction to the feedback — that reaction tells you something.

2. Pick one decision you've already made that you're confident about. Ask AI: "Argue the strongest case that this decision is wrong." Sit with the answer for a day before responding to it.

3. Take a draft of something — a message, a plan, a proposal — and run two rounds of critique in fresh chats. Bring the original and the final version to the next session.

4. Ask one human you trust to critique the same piece of work. Compare what AI caught vs what the human caught. Notice the gap. That gap is why mentors still matter.
