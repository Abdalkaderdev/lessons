---
title: "Summarizing Long Documents and PDFs"
module: "AI for Reading & Research"
order: 1
---

# Summarizing Long Documents and PDFs

There's a stack of PDFs on every desk in this room. A 60-page curriculum guide. A 40-page grant report. A 30-page contract. Nobody reads them end to end — we skim, miss things, and hope the important bit wasn't on page 24.

AI is genuinely good at this. Not perfect. Good. The trick is knowing what to ask for and how to check it didn't lie to you.

---

## The tools we'll use

- [https://claude.ai](https://claude.ai) — handles big PDFs well, good with long context, careful with quotes
- [https://chatgpt.com](https://chatgpt.com) — also takes PDFs, faster for shorter docs, has a built-in file reader
- [https://notebooklm.google.com](https://notebooklm.google.com) — Google's tool, built specifically for "upload a pile of documents and ask questions"

For anything over 20 pages, start with Claude or NotebookLM. ChatGPT is fine for short PDFs but sometimes "skims" big ones and misses pages.

---

## Step 1: Upload the document properly

Drag the PDF into the chat window. That's it. If the PDF is a scan (a picture of text, not real text), say so — the AI will treat it differently.

Quick test: open the PDF, try to select a sentence with your mouse. If you can highlight the words, it's real text. If your mouse selects a whole rectangle, it's a scan, and you should mention that.

---

## Step 2: Ask for the right kind of summary

"Summarize this" is a weak prompt. You get back a vague paragraph that could describe almost anything. Be specific about what kind of summary you want.

```
I've uploaded a document. Before you summarize, tell me:
1. What type of document is this? (report, contract, curriculum, etc.)
2. How many pages? How is it structured?
3. Who seems to be the intended reader?

Then give me a one-page executive summary with:
- The 3 most important points
- Any deadlines, numbers, or names I must not miss
- One sentence on what action this document is asking me to take

Use bullet points. Do not pad.
```

Use this when you've been handed any long document you need to act on — a report, a contract, a policy update, a draft someone wrote — and you need the gist plus the things you can't afford to miss.

---

## Step 3: Extract specific information without reading the whole thing

This is the move that saves the most time. Instead of reading, you interrogate.

```
I have not read this document. I need to find specific information only.

Answer these questions using only what's in the document. If something is not in there, say "not in the document" — do not guess.

Questions:
1. [your question]
2. [your question]
3. [your question]

For each answer, tell me which page or section you got it from.
```

The "tell me which page" line is critical. It forces the AI to point at evidence instead of inventing.

Good questions are concrete and answerable from the text. Examples: *"What's the payment term? Is there an auto-renewal clause? What's the penalty for late delivery?"* — or for a report — *"How much was spent on staff salaries? What's the timeline for the next cycle? Is there a clause about data sharing?"* Ask about deadlines, numbers, names, clauses, and policies — the things you'd otherwise have to hunt for page by page.

---

## Step 4: When the document is an image

Sometimes you have a photo of a page — a printed handout, a notice on the wall, a page from a book you can't scan. Both Claude and ChatGPT can read images. Drop the photo straight in.

```
This is a photo of a page. Please:
1. Transcribe the text as accurately as you can.
2. Flag anything that is unclear, blurry, or handwritten.
3. Then summarize what the page is about.

Do not invent words for the unclear parts. Mark them [unclear].
```

The `[unclear]` rule matters. Without it, the AI will guess at blurry handwriting and present the guess as fact.

---

## What AI gets wrong with PDFs

Be honest about this. Real failures we've all seen:

- **It "hallucinates" page numbers.** Asks for a citation, gives you "page 14" — the answer is actually on page 19, or not in the document at all. Always spot-check one or two citations before trusting the rest.
- **It silently skips pages on huge files.** Anything over 100 pages, the model may sample rather than read. Ask: *"Did you read every page, or did you sample? Be honest."*
- **It merges similar sections.** Two different tables become one wrong table. Especially common with financial reports.
- **It softens hard language.** A contract that says "the supplier shall be liable for all damages" gets summarized as "the supplier is responsible for problems." That's not the same sentence in court.
- **Scanned PDFs lose numbers.** A "3" becomes an "8," a column shifts. For anything money-related on a scan, verify against the original.

The defense is simple: for any fact you'll actually act on — a deadline, a number, a name, a clause — open the PDF and confirm with your own eyes. AI gives you the map. You still walk the ground.

---

## A small habit that helps

After every summary, ask one more question:

```
What did you leave out of the summary that might still matter? List 3 things you decided were less important — I want to decide for myself.
```

This catches the thing the AI thought was minor but is actually the whole point for you.

---

## Homework

1. Pick a real PDF from your work that's over 15 pages and that you've been avoiding. Upload it to [claude.ai](https://claude.ai) and run the Step 2 executive-summary prompt. Save the output.
2. Using the same PDF, run the Step 3 extraction prompt with three specific questions you actually need answers to. Open the PDF and verify one of the page references is correct.
3. Take a photo of one printed page (a notice, a handout, a page from a book) and run the Step 4 prompt. Note whether the AI correctly flagged anything as unclear.
4. Optional: upload the same PDF to [notebooklm.google.com](https://notebooklm.google.com) and ask the same questions. Decide which tool gave you better answers for this kind of document.
