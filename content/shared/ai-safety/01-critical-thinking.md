---
title: "AI Lies Sometimes — How to Catch It"
module: "AI Safety"
order: 1
---

# AI Lies Sometimes — How to Catch It
### The skill that separates smart AI users from everyone else

AI can write an essay, explain quantum physics, summarize a legal document, and solve a math problem — sometimes flawlessly.

It can also make things up. Completely. Confidently. Without any sign that something is wrong.

This lesson teaches you how to tell the difference.

---

## What Are AI Hallucinations?

A **hallucination** is when an AI generates something that sounds true but isn't. The term comes from the AI research community — it means the model is producing plausible-sounding text that has no basis in reality.

This isn't a bug that will be fixed next year. It's a fundamental property of how large language models work.

**Why does it happen?**

AI models like ChatGPT, Claude, and Gemini were trained on enormous amounts of text. They learned to predict: *given this sequence of words, what word should come next?*

They became extremely good at producing fluent, coherent, authoritative-sounding text. But "sounding right" and "being right" are two different things.

The model doesn't "know" facts the way you know that water is wet. It predicts what text looks like. When it doesn't have information, it doesn't always say "I don't know." Sometimes it fills the gap with confident-sounding made-up content.

---

## The Four Types of AI Mistakes

**Type 1: Fabricated facts**
The AI invents statistics, quotes, dates, names, or events.

*Example:* "According to a 2021 Stanford study, 78% of students who used AI for homework reported higher grades." — This study may not exist.

**Type 2: Wrong but plausible answers**
The AI gives an answer that sounds right but is subtly incorrect.

*Example:* Getting a math answer that's close but off by one step. Or misidentifying a historical cause-and-effect.

**Type 3: Outdated information**
AI models have a training cutoff date. Anything that happened after that date is unknown to the model (unless it has real-time search).

*Example:* Asking about a law, a drug, a company's policy, or a world record — the AI might give you the old answer.

**Type 4: Fake citations**
This is especially dangerous. AI will sometimes generate realistic-looking citations, complete with journal names, volume numbers, page numbers, and DOIs — for papers that do not exist.

*Real example that has happened:* Lawyers have submitted briefs to courts containing AI-hallucinated case citations. The cases didn't exist. The lawyers faced serious consequences.

---

## Real Examples of AI Getting It Wrong

**Example 1: The Invented Professor**
A student asked ChatGPT for recommended books by a professor at a major university. The AI listed five books with realistic titles and descriptions. Three of the books didn't exist.

**Example 2: The Wrong Medication Dose**
A user asked about medication dosing. The AI gave an answer that sounded authoritative but had an incorrect maximum dose. For most situations this would have been caught — but it illustrates why medical questions are high-stakes.

**Example 3: The Historical Mix-Up**
Claude confidently stated a famous speech was delivered in a specific city. It was delivered 200 miles away. The speech was real, the city was wrong — and without knowing the speech to begin with, there was no obvious tell.

**Example 4: The "Recent Research" That Wasn't**
An AI claimed recent research showed a popular technology was dangerous. The research it cited was fabricated. The journal it named was real, but the paper wasn't in it.

**What these have in common:** The AI was confident. It used specific details. Nothing about the response *looked* wrong. That's what makes hallucinations dangerous.

---

## How to Fact-Check AI Responses

### Step 1: Identify the Checkable Claims

Read the AI response and mentally flag:
- Specific statistics or percentages
- Named studies, reports, or surveys
- Quotes attributed to real people
- Specific dates and events
- Scientific or medical claims
- Legal statements
- Anything the AI says is "recent" or "new"

These are your targets. Vague statements ("many experts believe") are harder to check — focus on specific claims first.

### Step 2: Search for the Source

For any cited source, search for it directly.

- Google the title of the study
- Look it up on Google Scholar ([scholar.google.com](https://scholar.google.com))
- Search the journal's website directly
- For news events: search multiple news sites

**If a citation can't be found after 2 minutes of searching, treat it as fabricated until proven otherwise.**

### Step 3: Cross-Reference with Trusted Sources

Don't just Google and accept the first result. Check multiple sources.

The **3-Source Rule:**
Before trusting any factual claim from AI, find it confirmed by at least 3 independent, credible sources.

**Credible sources include:**
- Government websites (.gov)
- Established academic journals
- Major news organizations (AP, Reuters, BBC, NYT)
- Official organizational websites (.org for major orgs)
- Published books with identifiable authors

**Less reliable:**
- Anonymous blog posts
- Social media posts
- AI-generated content on other sites
- Sites you've never heard of with no clear authorship

### Step 4: Use Perplexity for Cited Research

[Perplexity.ai](https://perplexity.ai) is an AI search tool that shows you its sources. Unlike regular AI chat, it links to the actual websites it's drawing from.

When you need to research a factual topic, Perplexity is often better than ChatGPT or Claude for this reason — you can click through and verify.

> Prompt for Perplexity: "What is [CLAIM I WANT TO VERIFY]? Show me primary sources and note if any parts of this are disputed or uncertain."

---

## The 3-Source Rule in Practice

Let's say the AI told you: *"Studies show that teenagers who sleep less than 7 hours per night are 3x more likely to develop depression."*

**How to verify:**

1. Search: "teenagers sleep hours depression risk study" on Google
2. Check: Does this specific statistic appear on credible health sites (NIH, CDC, Mayo Clinic, major university research sites)?
3. Look for: A specific study you can find the original publication of
4. Ask yourself: Do 3 independent credible sources confirm a similar finding?

If yes to all — the claim is probably sound.
If you can only find it on one site, or the AI's specific statistic isn't matched by any real source — be skeptical.

---

## When NOT to Trust AI

These are the domains where AI errors can cause real harm. In these areas, AI can be a useful starting point for understanding, but **never a final answer.**

### Medical Decisions
AI cannot diagnose you. It doesn't know your medical history, current medications, allergies, or test results. Dosing information changes. Medical guidelines are updated. AI training data has a cutoff.

**Do:** Use AI to understand what a medical term means, prepare questions for a doctor, or learn about a condition in general terms.
**Don't:** Use AI to diagnose yourself, decide whether to take or stop medication, or evaluate symptoms that worry you.

### Legal Advice
Laws vary by state, country, and jurisdiction. They change. They're interpreted differently by different courts. The difference between "generally true" and "true in your specific situation" can mean winning or losing a case.

**Do:** Use AI to understand legal concepts, get a general sense of how a law works, or prepare to talk to a lawyer.
**Don't:** Rely on AI for specific legal advice about your situation, contracts, or rights.

### Financial Decisions
Market conditions, tax laws, investment risks, and personal financial situations are all variables AI doesn't fully know. AI cannot account for your income, debts, goals, or risk tolerance.

**Do:** Use AI to understand concepts like compound interest, index funds, or how taxes work.
**Don't:** Use AI to make specific investment decisions, file taxes, or evaluate financial contracts.

### Breaking News
AI models don't have real-time data (unless they explicitly have web access). Events from the last few months may be unknown, incomplete, or entirely absent from their training.

**Do:** Use AI to understand background context on a news topic.
**Don't:** Ask AI what "just happened" without verifying with actual news sources.

---

## Exercises: Find the Errors

Try these with your classmates. Each has at least one factual problem — your job is to find it.

- [ ] **Exercise 1:** Ask Claude or ChatGPT: "Who invented the telephone and when?" Then fact-check the full answer including any secondary claims. (Hint: the "simple" answer ignores a major legal dispute.)

- [ ] **Exercise 2:** Ask any AI to recommend 3 academic papers on a topic you're studying. Then try to find each paper on Google Scholar. Report back: which ones actually exist?

- [ ] **Exercise 3:** Ask an AI: "What are the current symptoms listed by the CDC for [any illness]?" Then go to [cdc.gov](https://cdc.gov) and compare. Are there differences?

- [ ] **Exercise 4:** Copy this passage and identify which claims you'd need to verify: *"The average American produces 4.4 pounds of trash per day, according to the EPA. In 2019, a Harvard study found that this number had increased 15% since 2010 due to online shopping. Several European countries have reduced this by mandating composting programs."*

- [ ] **Exercise 5 (Advanced):** Ask an AI to describe a scientific study that supports a controversial health claim (e.g., "coffee is good for you" or "social media causes depression"). Then try to find the actual study. Evaluate: does the study say what the AI claimed?

---

## Building a Personal Fact-Checking Habit

You don't need to fact-check everything. You need to know *when* to fact-check.

**Always verify when:**
- You're going to share the information publicly
- You're making an important decision based on it
- The claim is specific (a number, a name, a date)
- The stakes are high (health, money, legal)
- The claim surprises you

**You can usually trust AI for:**
- Explaining general concepts
- Creative tasks (writing, brainstorming)
- Rephrasing or editing your own work
- Math you can double-check
- Questions where you can verify the answer quickly

---

## Key Takeaways

1. AI hallucinations are a feature, not a bug — they come from how language models work.
2. Confident, detailed responses are not evidence of accuracy.
3. The 3-Source Rule: verify specific claims with at least 3 independent credible sources.
4. Use [Perplexity.ai](https://perplexity.ai) for research that needs citations.
5. Never make medical, legal, or financial decisions based solely on AI output.
6. Fake citations are a real risk — always search for sources directly.

> Prompt you should use regularly: "Before I share this: fact-check your previous response. Which specific claims are you most confident about? Which claims should I independently verify? Are there any statistics or citations I should look up directly?"

---

*Next lesson: Using AI Responsibly — privacy, deepfakes, bias, and why your own skills still matter.*

---

## Homework

1. **Hallucination Hunt** — Ask Claude or ChatGPT to tell you 5 interesting facts about a topic you know well (a hobby, your favorite sport, a subject you study). Read the response carefully and fact-check every specific claim using the 3-Source Rule. Write down which facts checked out, which were wrong or exaggerated, and which you could not verify. Include the sources you used.

2. **Fake Citation Detective** — Ask any AI: "Recommend 3 academic papers about [a topic you are studying]." Copy the titles and authors it gives you and search for each one on [Google Scholar](https://scholar.google.com). Report back: how many actually exist? For any that do not exist, describe what made them look convincing.

3. **Fact-Check a Friend's AI Output** — Ask a classmate or family member to share something they recently got from an AI tool (a summary, a set of facts, advice). Apply the 4-step fact-checking process from this lesson. Present your findings to them: what was accurate, what was questionable, and what was outright wrong.
