---
title: "Simple Analysis and Charts"
module: "AI for Spreadsheets & Data"
order: 3
---

# Simple Analysis and Charts

A clean spreadsheet is not the end. The point is to understand what it says. This lesson is about asking AI good questions about your data, building pivot tables, picking a chart that does not lie, and knowing when to stop trusting the AI's answer.

---

## The tools

- [chatgpt.com](https://chatgpt.com) - paid tier lets you upload a file directly and ask questions
- [claude.ai](https://claude.ai) - same, and tends to be careful about saying "I am not sure"
- [sheets.google.com](https://sheets.google.com) - "Help me organise" suggests pivot tables and charts
- Excel with Copilot if you have it - built into newer Microsoft 365
- [datawrapper.de](https://www.datawrapper.de) - free, makes honest-looking charts for reports

If you are uploading sensitive data, check the privacy settings of the AI tool first. Anonymise if in doubt.

---

## Step 1: ask AI to describe the data

Before any analysis, get a summary. Upload the file or paste 30 rows plus the column headers and ask:

```
I have attached a spreadsheet. Tell me:
1. What does each column appear to contain?
2. How many rows, how many empty cells per column?
3. What is the date range, if there are dates?
4. What categories exist in any text columns, and how many of each?
5. Anything that looks suspicious or inconsistent.
Do not interpret yet. Just describe.
```

This forces the AI (and you) to slow down. You will catch problems before they hide inside a chart.

---

## Step 2: ask the question you actually care about

Vague questions get vague answers. "Analyse my data" is a vague question.

A better shape:

```
This is a [describe the dataset in one line].
Columns: [list each column and what it contains].
Questions:
1. [a specific comparison - top 5, lowest average, biggest drop]
2. [a specific trend - growth quarter on quarter, change over time]
3. [a specific anomaly check - unusual spread, gaps, outliers]
Use the data, do not guess. Show the numbers behind each answer.
```

Notice "show the numbers behind each answer". This is the single most important sentence. Good questions are specific: a comparison, a trend, an anomaly. "Top 5 products by revenue this quarter" beats "tell me about sales".

---

## Step 3: pivot tables, with AI help

Pivot tables are the most powerful, least-used feature of a spreadsheet. They are also the part where AI is genuinely useful, because you can describe what you want in words.

```
I want a pivot table in Google Sheets from a data range A1:F500.
Rows: campaign.
Columns: quarter.
Values: sum of donation amount, and count of donors.
Show me where to click and what to drag where.
```

Ask for the click path, not just "make a pivot table". Sheets and Excel use different wording.

A useful follow-up:

```
Now I want the same pivot but showing the percentage of yearly total
in each cell instead of the raw amount. How do I change that?
```

---

## Step 4: picking the right chart

The chart type carries half the message. The wrong one quietly misleads.

Simple rules of thumb to give the AI:

- Comparing categories at one point in time -> bar chart (horizontal if names are long)
- Showing change over time -> line chart
- Showing parts of a whole, only when there are 2 to 5 parts -> stacked bar, almost never a pie
- Showing relationship between two numbers -> scatter plot
- Showing distribution of one number -> histogram

Prompt:

```
I want to show [the message in one sentence] to [audience].
My data has these columns: [...].
Suggest two chart types that fit, and explain when each is better.
Then tell me what to put on each axis and what NOT to put on the chart.
```

Tell the AI the message first. "Sales are growing" and "Sales are concentrated in three products" need different charts even from the same data.

---

## Step 5: spotting outliers and patterns

Outliers are rows that do not look like the others. Sometimes they are mistakes (a price entered with an extra zero). Sometimes they are the most important rows (the donor who gave 50 times the average).

```
In this dataset, find rows that are unusual compared to the rest.
For each one, tell me:
- which column made it stand out
- whether it looks like a data entry error or a real exception
- a check I can run to decide which it is
```

Always check outliers by hand before deleting them. The biggest customer in the dataset often looks like an error.

---

## Step 6: when NOT to trust AI's analysis

This is the most important section. AI is confident in ways it should not be.

Things AI gets wrong, often:

- **Arithmetic on long lists.** It will sum 50 numbers and be off by one. Always cross-check totals against `=SUM()` in the actual sheet.
- **Percentages and percentage change.** It mixes up "increased by 30%" with "is 30% of". Recompute by hand.
- **Statistical significance.** If the AI says "this difference is significant" without showing a test, do not trust it. Small samples lie loudly.
- **Correlation vs causation.** AI will happily say "X caused Y" when the data only shows X and Y moved together. Push back.
- **Averages on skewed data.** A mean donation of "$500" hides one donor who gave $40,000. Ask for the median too.
- **Counting unique values.** It guesses. Use `COUNTUNIQUE` in your sheet to verify.
- **Reading totals at the bottom of a column.** If the data has a "TOTAL" row, AI may double-count it.

A good habit: after AI gives you a number, recreate it with a formula in the sheet. If the two disagree, the formula is right.

---

## A pattern to copy

For any real analysis, walk through this in order:

1. Describe the data (Step 1 prompt).
2. Write down the actual question.
3. Get the answer from AI with "show the numbers".
4. Reproduce the key number with a formula in the sheet.
5. Pick the chart based on the message, not the data.
6. Show it to one other person before sending it anywhere.

---

## Homework

1. Take one of your own files and run the "describe the data" prompt. Read the answer carefully. Note any column the AI misunderstood.
2. Write down one real question you have about that data. Get an answer from AI with "show the numbers". Then reproduce the headline number with a `SUM`, `AVERAGE`, `COUNTIF`, or `COUNTUNIQUE` in the actual sheet. Did they match?
3. Build one pivot table for that file with AI guiding the click path. Take a screenshot of the result.
4. Bonus: ask AI to suggest a chart for your finding, then ask a second AI tool the same question. Compare the suggestions and pick the one that best serves the message - not the prettiest one.
