---
title: "Excel Formulas Without the Pain"
module: "AI for Spreadsheets & Data"
order: 1
---

# Excel Formulas Without the Pain

Formulas are where spreadsheets stop being typing and start being thinking. They are also where most people give up. The good news: you no longer need to memorise syntax. You describe what you want in plain language, AI writes the formula, and you paste it in.

This lesson is about asking better questions, not about becoming a formula expert.

---

## The tools we will use

- [chatgpt.com](https://chatgpt.com) - good general-purpose helper, free tier is fine
- [claude.ai](https://claude.ai) - very good at explaining what a formula does, step by step
- [sheets.google.com](https://sheets.google.com) - free, has a built-in "Help me organise" feature
- Excel (desktop or [office.com](https://office.com)) - Copilot is built into newer versions

Pick one AI tool and one spreadsheet tool. Do not switch mid-lesson.

---

## The golden rule: describe the columns

AI cannot see your spreadsheet. If you say "write me a VLOOKUP", you will get a generic answer that does not fit your file. You must describe what is in each column and what you want to happen.

A good prompt has three parts:
1. What is in the sheet (column letters and what they contain)
2. What you want the formula to do
3. Where the answer should go

---

## Example 1: VLOOKUP across two sheets

You have two sheets. One has names, one has extra info. You want to pull the info next to the names.

**Teacher version** - looking up parent phone numbers next to student names:

```
I have a Google Sheet with two tabs.
Tab "Students" has column A = student name, column B = class.
Tab "Contacts" has column A = student name, column C = parent phone.
In tab "Students" column D, I want the parent phone for each student.
Give me the formula and explain what each part does.
```

**NGO version** - looking up village names next to beneficiary IDs:

```
Tab "Beneficiaries" has column A = beneficiary ID, column B = name.
Tab "Locations" has column A = beneficiary ID, column D = village name.
In "Beneficiaries" column C, I want the village for each ID.
```

**Business version** - looking up product prices next to order rows:

```
Sheet "Orders" has column A = order ID, column B = product code.
Sheet "Pricing" has column A = product code, column B = unit price.
In "Orders" column C, I want the unit price for each order.
```

Notice the pattern. Same shape, different content. The AI gives you VLOOKUP, INDEX/MATCH, or XLOOKUP depending on what you said.

---

## Example 2: IF statements that nest

IF statements are the most common formula and the most commonly broken one.

Try this prompt (swap the example for your case):

```
I need an IF formula for column E.
Column D contains a number from 0 to 100.
If D is 90 or above, return "Excellent".
If 70 to 89, return "Good".
If 50 to 69, return "Pass".
Below 50, return "Fail".
Give me the formula and tell me what to watch out for.
```

- Teacher: this is literally grade banding.
- NGO: same shape for "donation tier" - Gold, Silver, Bronze, none.
- Business: same shape for "discount band" - high-volume, medium, none.

Ask the AI to use IFS or SWITCH instead of nested IFs if the tool supports it. It is cleaner.

---

## Example 3: Conditional formatting

Conditional formatting is not a formula in a cell. It is a rule applied to a range. AI is good at writing the rule.

```
In Google Sheets, I want to highlight rows in red where column F
contains the word "overdue" - case insensitive. The range is F2:F500.
Give me the steps: where to click and what to type.
```

Ask for the click path, not just the formula. The menu wording matters.

---

## Explaining a formula you inherited

You open a file. There is a cell that reads:

`=IFERROR(INDEX(Sheet2!$B:$B,MATCH(1,(Sheet2!$A:$A=A2)*(Sheet2!$C:$C=B2),0)),"")`

Do not panic. Paste it into Claude or ChatGPT with this prompt:

```
Explain this formula in plain English. Tell me what it does,
what could break it, and what the IFERROR is hiding.
Formula: [paste here]
```

The last sentence is important. IFERROR often hides real problems by replacing them with a blank.

---

## Debugging a broken formula

When a formula returns `#N/A`, `#REF!`, `#VALUE!`, or `#NAME?`, copy the error and the formula and ask:

```
This formula returns #N/A. Here is the formula: [paste].
Here is a sample of the data in the columns it references:
Column A: [paste 3 rows]
Column B: [paste 3 rows]
What is the likely cause? Give me 3 things to check, in order.
```

Common causes the AI will likely find:
- Extra spaces in the lookup value (use TRIM)
- Numbers stored as text (look for a green triangle in the cell corner)
- The lookup range moved when you copied the formula down (missing `$` signs)
- Mismatched data types - "001" vs 1

---

## Pitfalls to know before you trust the formula

- AI sometimes invents functions that do not exist. If Sheets says "unknown function", that is what happened. Tell the AI and ask for a real one.
- Excel and Google Sheets have different function names. Tell the AI which one you are using.
- AI does not know your regional settings. In some countries the formula separator is `;` not `,`. If the formula errors, try swapping.
- Always test on three rows before pasting down 5000.

---

## Homework

1. Pick a real spreadsheet you already have. Write down what is in columns A through F in plain language. Then ask AI to write you one VLOOKUP or XLOOKUP that pulls something useful into a new column. Test on five rows before applying to the whole sheet.
2. Find a formula in one of your files that you did not write (or do not remember writing). Paste it into Claude and ask for a plain-English explanation. Note one thing you learned.
3. Cause a formula to break on purpose - delete a referenced column or rename a sheet. Take a screenshot of the error. Ask AI what the error means and how to fix it.
4. Bonus: write the same IF-banding formula for Excel and for Google Sheets, and notice which symbols differ.
