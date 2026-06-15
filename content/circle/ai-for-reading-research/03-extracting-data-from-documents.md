---
title: "Extracting Data from Forms, Receipts, and Tables"
module: "AI for Reading & Research"
order: 3
---

# Extracting Data from Forms, Receipts, and Tables

The most boring part of everyone's job is the same: taking information out of a messy document and putting it into a tidy list. A drawer full of receipts. A stack of application forms. A scanned table somebody emailed you as a PDF. An invoice in a format that doesn't match your spreadsheet.

This used to be hours of typing. AI does it in minutes — if you set it up right. And it sometimes fails in ways you have to watch for.

---

## The tools we'll use

- [https://claude.ai](https://claude.ai) — handles images and PDFs together, good at structured output
- [https://chatgpt.com](https://chatgpt.com) — also reads images, can output to a downloadable file
- [https://gemini.google.com](https://gemini.google.com) — strong with images, integrates with Google Sheets if you live there

For one-off extractions, any of them work. For repeated tasks (same kind of receipt every week), pick one and reuse the same prompt.

---

## Step 1: Tell the AI what shape you want the data in

The single biggest mistake is asking "extract the data." You'll get back a paragraph. What you actually want is rows and columns.

Decide your columns *before* you upload anything. Write them down.

```
I will upload [a receipt / a form / a scanned table]. Extract the data into a table with exactly these columns:

[column 1]
[column 2]
[column 3]

Rules:
- One row per [receipt / line item / person].
- If a field is missing or unreadable, put [missing] — do not guess.
- Format dates as YYYY-MM-DD.
- Format currency as a number with no symbol, e.g. 24.50 not "€24.50".
- Output as a markdown table I can copy into a spreadsheet.
```

That last block — the rules — is what separates a useful extraction from a mess.

**Three examples — same idea, different work:**

- **Teacher:** drawer of 30 receipts from a class trip. Columns: `date, vendor, item, amount, paid_by`. You need this for reimbursement.
- **NGO assistant:** 25 paper application forms from a workshop. Columns: `name, age, village, phone, role_at_event`. You need this for the donor report.
- **Business:** 40 supplier invoices from last quarter. Columns: `invoice_number, supplier, date, amount_net, vat, total`. You need this for accounting.

---

## Step 2: Upload in batches that the AI can actually handle

Don't dump 200 photos at once. Sweet spot is 10–20 documents per chat. More than that, the AI starts cutting corners.

For receipts and forms, **a clear phone photo beats a bad scan.** Daylight, flat surface, full document in frame, no shadow across the text. Spend the extra 10 seconds — the AI gets noticeably more accurate.

If you have a single multi-page PDF (like 30 forms scanned together), upload the PDF as one file and say:

```
This PDF contains [N] separate [forms / receipts / pages]. Treat each one as its own row. Tell me how many you found before you start — if your count doesn't match mine, we'll know something is missing.
```

---

## Step 3: Clean up extracted data

The first pass is never perfect. The cleanup pass turns it into something usable.

```
Look at the table you just produced. Now clean it:

1. Standardize all names: "Ahmad", "ahmad", "AHMAD" should all become "Ahmad".
2. Standardize all phone numbers to the format +XX XXX XXX XXXX.
3. Flag any duplicate rows — same person or same receipt appearing twice.
4. Flag any value that looks suspicious — an amount that's an order of magnitude bigger than the others, a date that's wildly out of range, a name that looks like a scan error (e.g. "Ahrn4d").
5. List every row where you used [missing] and tell me which field.

Show me the cleaned table and a short list of things I should review manually.
```

The "flag suspicious values" step is gold. It's the AI doing the quality-check pass you wouldn't have the patience to do yourself.

- **Teacher:** catches the "120 EUR" receipt that should have been "12.00 EUR" — a misread decimal point.
- **NGO:** catches the participant entered twice under slightly different name spellings.
- **Business:** catches the invoice where the VAT and the total got swapped.

---

## Step 4: Building a list from a long PDF

Sometimes the data isn't in a form — it's buried in prose. A 50-page report mentions 20 partner organizations across the text. You want them in a list.

```
Read the entire document. Find every [organization / person / date / dollar amount] mentioned. Put each one in a table with:

- The thing itself
- The page it appears on
- The surrounding sentence (so I can verify)

If the same thing appears more than once, list it once but note all the pages.
```

The "surrounding sentence" column is what makes this trustworthy. You can spot-check 3 rows in 30 seconds and know whether the rest is reliable.

---

## Step 5: When OCR fails

OCR (optical character recognition) is what turns a photo of text into actual text. It mostly works. When it fails, it fails in predictable ways:

- **Handwriting** — anything handwritten is a coin flip. Names get butchered. Numbers especially: a handwritten 1 vs 7, 3 vs 8, 0 vs 6.
- **Bad lighting / glare** — a white blob across a receipt = lost amount. Reshoot.
- **Crumpled receipts** — the fold line eats a character. The AI will quietly invent one.
- **Faded thermal paper** — older receipts where the print has faded. Often unreadable even to humans.
- **Tables with merged cells or unusual layouts** — the AI may collapse columns or misalign rows. Always spot-check the first and last row visually against the original.
- **Non-Latin scripts mixed with Latin** — Arabic numerals mixed with Eastern Arabic numerals, names in two scripts. Tell the AI explicitly what languages are present.

When OCR fails, use this prompt to *contain* the damage:

```
For each row, give me a confidence rating (high / medium / low) based on how clear the source was. I will manually review every "low" row.

For any field you could not read at all, write [unreadable] and tell me what the document looks like in that spot (handwritten, smudged, cut off, etc.).
```

That gives you a focused review list instead of having to re-check every single row.

---

## What AI gets wrong with data extraction

- **It quietly fixes "errors" that weren't errors.** A vendor name spelled oddly gets "corrected" to a normal spelling — and now it doesn't match the real receipt.
- **It rounds numbers without telling you.** 24.99 becomes 25. Tell it: *"Do not round any numbers."*
- **It assumes a date format.** 03/04/2025 is March 4 or April 3 depending on country. Always specify.
- **It loses data on long lists.** Past row 50 or so, quality drops. Process in batches and check the counts.
- **It cannot tell you what's missing from the original.** If the receipt didn't list a vendor, the AI leaves it blank — but it won't shout "hey, this receipt has no vendor!" unless you told it to flag missing fields.

Golden rule for data work: **always know how many rows you should have, before you start.** Count the receipts. Count the forms. Then check the AI's count matches. That one number catches most disasters.

---

## Homework

1. Find a small batch (5–10 items) of real receipts, forms, or invoices from your work or home. Photograph them properly. Run the Step 1 prompt with your own column list in [claude.ai](https://claude.ai). Copy the result into a spreadsheet.
2. Run the Step 3 cleanup prompt on that same data. Note one suspicious value the AI flagged that you would have missed.
3. Pick a longer PDF (a report, a meeting minutes document, a contract) and use the Step 4 prompt to extract every name or every amount mentioned. Verify three of the page references.
4. Optional: try the same batch in [chatgpt.com](https://chatgpt.com) or [gemini.google.com](https://gemini.google.com) and compare accuracy. Decide which tool you'll use for this kind of task going forward.
