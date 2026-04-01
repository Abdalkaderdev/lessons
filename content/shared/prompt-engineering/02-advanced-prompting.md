---
title: "Advanced Prompting Tricks"
module: "Prompt Engineering"
order: 2
---

# Advanced Prompting Tricks
### Level up from "AI user" to "AI power user"

You've learned how to write a solid prompt. Now let's go deeper.

These techniques are used by researchers, developers, and professionals to get dramatically better results. By the end of this lesson, you'll have 15+ prompts you can copy-paste immediately.

---

## Trick #1 — Chain-of-Thought: "Think Step by Step"

**What it is:** Asking the AI to work through its reasoning out loud before giving you the answer.

**Why it works:** AI models make fewer mistakes when they show their work. It forces a logical sequence instead of jumping to a conclusion.

**When to use it:** Math problems, logical reasoning, complex decisions, anything where you want to see the thinking, not just the answer.

> Prompt: "A store sells apples for $0.75 each and oranges for $1.25 each. I bought 4 apples and 3 oranges. I paid with a $10 bill. Think step by step to calculate my change."

> Prompt: "I need to decide between taking an AP class or a free period next semester. Think step by step through the pros and cons before giving me a recommendation. My priorities are: GPA, stress level, college apps."

> Prompt: "My Python function is returning None instead of a value. Think step by step through the most common reasons why this happens and which is most likely given this code: [paste code]"

**The magic phrase:** Just add *"think step by step"* or *"walk me through your reasoning"* to almost any prompt and watch the quality improve.

---

## Trick #2 — Role Assignment: "You Are a..."

**What it is:** Telling the AI to take on a specific persona, expertise, or role before answering.

**Why it works:** The role acts like a filter — it tells the AI which knowledge domain to draw from, what tone to use, and how to frame the answer. An AI "acting as" an experienced editor will push back harder than a generic assistant.

**When to use it:** When you need expert-level framing, a specific communication style, or a particular perspective.

> Prompt: "You are a professional college admissions counselor with 15 years of experience at selective universities. Review my Common App essay and give me brutally honest feedback on what will help and what will hurt my chances. Here's my essay: [paste essay]"

> Prompt: "You are a Socratic philosophy teacher. Instead of giving me answers, ask me probing questions that help me figure out the answer to this ethical dilemma myself: Is it ever okay to lie to protect someone's feelings?"

> Prompt: "You are a hostile interviewer preparing me for a tough job interview. Ask me 5 hard questions about gaps in my resume and challenge my answers. Don't go easy on me."

> Prompt: "You are a 10-year-old child who has never heard of the internet. I'm going to explain it to you, and you should ask confused questions until you actually understand it. Ready? Let's start."

> Prompt: "You are a no-nonsense financial advisor who speaks plainly and hates corporate jargon. Explain compound interest using a real example with numbers, and tell me exactly why a 17-year-old should care about it right now."

**Pro tip:** Stack roles with the CLEAR framework. "You are a [role]. I'm a [context]. Help me [result]."

---

## Trick #3 — Few-Shot Examples: Show, Don't Just Tell

**What it is:** Providing 2-3 examples of what you want *before* asking the AI to do the task.

**Why it works:** Seeing examples is clearer than describing them. The AI reverse-engineers your pattern and continues it.

**When to use it:** Whenever you have a specific style, format, or tone that's hard to describe in words.

> Prompt:
> "Write product descriptions in this style. Here are two examples:
>
> Example 1: 'The kind of hoodie you reach for on every cold morning. Thick cotton, deep pockets, and a hood that actually stays up.'
>
> Example 2: 'Not your average backpack. Built for people who hate backpacks — slim profile, zero wasted space, opens completely flat.'
>
> Now write one for: a pair of wireless earbuds with 40-hour battery life and a carrying case."

> Prompt:
> "I want you to rewrite boring sentences into vivid ones. Here are examples:
>
> Boring: 'The city was busy.'
> Vivid: 'Taxis honked in gridlock while food cart steam clouded the sidewalk.'
>
> Boring: 'She was nervous.'
> Vivid: 'She kept smoothing her jacket even though there were no wrinkles.'
>
> Now rewrite this boring sentence: 'The classroom was quiet before the test.'"

**The more examples you give, the more precisely the AI matches your pattern.** Two examples is usually enough. Five is almost always overkill.

---

## Trick #4 — System Prompts: Set the Rules of the Game

**What it is:** A set of persistent instructions that frames how the AI should behave for the entire conversation.

**Why it works:** Instead of repeating context in every message, you set it once at the beginning.

**Where to use it:** In Claude's "System prompt" field, ChatGPT's "Custom Instructions," or just at the top of any conversation.

> System Prompt Example 1 — Study Tutor:
> "You are my personal study tutor. Rules: (1) Never just give me the answer — always ask me what I think first. (2) If I'm wrong, explain why without making me feel dumb. (3) Use analogies from everyday life. (4) End every explanation with a quick quiz question to check I understood."

> System Prompt Example 2 — Writing Coach:
> "You are a tough but fair writing coach. When I share writing: first say what's working (1-2 things), then identify the single biggest weakness, then suggest a specific fix. Never say 'great job' unless it actually is. My writing goal is to be clearer and more direct."

> System Prompt Example 3 — Business Assistant:
> "You are helping me run a small online business. You know that: I sell custom phone cases, my target customer is 16-25 year olds, my brand voice is fun and a little edgy but never offensive. Whenever I ask for content or copy, keep this in mind without me having to repeat it."

---

## Trick #5 — Temperature and Creativity Settings

**What it is:** Controlling how "creative" vs. "precise" the AI's responses are.

**Why it works:** Some tasks need accuracy. Others need imagination. You can dial this up or down through your phrasing even if the app doesn't show a setting.

**Lower creativity (precise, factual):**
> Prompt: "Answer only with verified facts. Be precise and conservative. If you're unsure, say so rather than guessing. Explain how vaccines work."

**Higher creativity (imaginative, experimental):**
> Prompt: "Go wild and unconventional. Give me the most unexpected, surprising, and creative ideas you can think of. No boring answers allowed. What are 10 ways a teenager could make money that no one has thought of yet?"

**On Claude:** You can adjust temperature in the API. In the app, your phrasing controls this.
**On ChatGPT:** Custom GPTs allow temperature settings. In regular chat, phrasing works.

---

## Trick #6 — Iterating on Outputs

**What it is:** Treating the first response as a draft, not a final product. Asking the AI to revise, expand, or change direction.

**Why it works:** Almost nothing is perfect on the first try. AI is extremely good at revision — and it never gets annoyed when you ask for changes.

**Iteration commands that work:**

> "Make this 50% shorter without losing the key points."

> "Rewrite this but make it sound more casual and conversational — less like a textbook, more like a text message from a smart friend."

> "The third paragraph is too weak. Replace it with a stronger argument."

> "Give me 3 alternative versions of this opening line."

> "This is good but too formal for my audience of 13-year-olds. Simplify the vocabulary."

> "Keep the structure but change all the examples to be about music instead of sports."

**The iteration loop:**
1. Write your CLEAR prompt
2. Read the output critically
3. Identify the ONE biggest problem
4. Ask for that specific fix
5. Repeat until it's right

Most good work takes 3-5 iterations. That's normal.

---

## Trick #7 — Ask AI to Critique Its Own Work

**What it is:** After the AI gives you an answer, ask it to evaluate and improve that same answer.

**Why it works:** AI models can often spot weaknesses in their own output when prompted to look. It's like asking a writer to edit their own draft.

> Prompt (after getting any response): "Now read what you just wrote and give it a score out of 10. What are the two weakest parts? Rewrite those parts to make them stronger."

> Prompt: "Play devil's advocate against the argument you just made. What are the strongest counterarguments? Then update your original answer to address them."

> Prompt: "Rate the clarity of your last response for a 12-year-old audience. Give it a score and then rewrite any part that would confuse a kid."

> Prompt: "Fact-check your own previous response. Which claims are you most confident about? Which ones should I verify independently?"

**This is one of the most powerful tricks in this entire course.** It turns a single response into a self-improving loop.

---

## 15 Copy-Paste Ready Prompts

These are real prompts you can use immediately. Just fill in the brackets.

**For school:**

> 1. "You are a strict but helpful tutor. I have a test on [subject] covering [topics]. Quiz me with 10 questions, wait for my answers one at a time, then explain what I got wrong."

> 2. "Explain [concept] to me using 3 different analogies. After each one, ask me if it clicked or if I need another angle."

> 3. "I have to write a [length] essay arguing [position] for my [class] class. I'm stuck. Ask me 5 questions to help me figure out my argument before I start writing."

**For work and projects:**

> 4. "You are a project manager. I'm working on [project]. Think step by step to identify the 3 biggest risks and create a simple action plan to reduce each one."

> 5. "Rewrite this email so it's professional, warm, and gets to the point within the first sentence: [paste email]"

> 6. "Create a simple weekly schedule for someone trying to [goal] with only [hours per week] available. Format it as a table."

**For creative work:**

> 7. "Give me 10 unusual opening lines for a story about [theme]. Range from serious to absurd. I'll pick my favorite and then you help me develop it."

> 8. "You are a harsh but honest creative writing critic. Read this and tell me what's not working and why: [paste work]"

> 9. "Brainstorm 20 names for [thing] — some professional, some quirky, some punny. Just list them, no explanations needed."

**For thinking and decisions:**

> 10. "I'm trying to decide between [option A] and [option B]. Play both sides — argue strongly for A first, then argue strongly for B. Then give me your actual recommendation."

> 11. "Give me the steelman version of this position I disagree with: [position]. Make it as convincing as possible."

> 12. "I want to learn [skill/topic] from scratch. Build me a 30-day learning plan with specific daily tasks. Assume I have 20 minutes per day."

**Meta-prompts (prompts about prompting):**

> 13. "The prompt I'm about to give you isn't great. Before answering it, rewrite it as a better prompt using specific, clear instructions. Then answer the improved version. My original prompt: [your prompt]"

> 14. "Generate 5 different versions of this prompt, ranging from simple to expert-level: [your prompt idea]"

> 15. "I want to get really good at prompting AI. What are the 5 mistakes beginners most commonly make, and what should they do instead?"

---

## Exercises

- [ ] Use the "think step by step" trick on a real homework problem. Compare it to your normal approach.
- [ ] Assign Claude or ChatGPT a role before asking for feedback on something you wrote. Notice how the tone changes.
- [ ] Take any output you've gotten from AI and run the self-critique prompt on it. See what changes.
- [ ] Try Prompt #13 (the meta-prompt). Let the AI improve your own prompt before it answers.
- [ ] Build your own system prompt for a use case you'll come back to (study tutor, writing coach, etc.).

---

## Key Takeaways

1. Chain-of-thought ("think step by step") reduces errors and shows reasoning.
2. Role assignment focuses the AI's knowledge and tone.
3. Few-shot examples are clearer than long descriptions.
4. System prompts set persistent rules so you don't repeat yourself.
5. Iteration is normal — first drafts are starting points, not final products.
6. Asking AI to critique its own work activates a self-improvement loop.

> Prompt to bookmark: "You are an expert prompt engineer. I'm going to share a task I need to accomplish. Before writing any content, ask me clarifying questions until you have enough information to write a truly excellent prompt. Then write the prompt, explain your choices, and finally execute it. My task: [describe task]"

---

*Next lesson: Prompt Templates You'll Use Forever — copy-paste ready templates for every situation.*
