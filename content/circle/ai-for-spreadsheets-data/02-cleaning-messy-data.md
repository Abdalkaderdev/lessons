---
title: "Cleaning Messy Data"
module: "AI for Spreadsheets & Data"
order: 2
---

# Cleaning Messy Data

Every spreadsheet you inherit is a small archaeological site. Names are spelt three ways. Dates are half text, half numbers. Phone numbers have plus signs, brackets, dashes, or nothing at all. One column secretly contains three things.

This lesson is about getting that file into a shape you can actually use, with AI as the assistant who does the boring part.

---

## The tools

- [chatgpt.com](https://chatgpt.com) or [claude.ai](https://claude.ai) for instructions and formulas
- [sheets.google.com](https://sheets.google.com) - has built-in "Clean up suggestions" and split functions
- Excel with Power Query if you have it - powerful, but optional
- [openrefine.org](https://openrefine.org) - free, very strong for serious cleanup, has a learning curve

For most cleanup, a regular spreadsheet plus an AI chat is enough.

---

## Step 1: describe the mess before you touch it

Before fixing anything, paste a small sample (10 to 20 rows) into the AI and ask:

```
This is a sample of a spreadsheet I inherited.
Tell me everything that is inconsistent or messy in it.
Group your findings by column. Do not fix anything yet.
Just list the problems.
[paste rows here]
```

This gives you a checklist. Now you can fix one thing at a time instead of trying to fix everything at once and breaking things.

---

## Step 2: standardising names

Names are the worst. "John Smith", "JOHN SMITH ", "Smith, John", "j.smith", and "John  Smith" are five different rows to a spreadsheet.

Ask the AI:

```
Column A has people's names in mixed formats:
"john smith", "Smith, John", "JOHN SMITH", "John  Smith".
I want every name in column B as "First Last", proper case,
one space between words, no leading or trailing spaces.
Give me a formula and explain it.
```

You will get something using `PROPER`, `TRIM`, and possibly `SUBSTITUTE`.

- **Teacher**: cleaning a class roster where parents wrote names differently on different forms.
- **NGO**: cleaning a donor list merged from a website export and a paper sign-up sheet.
- **Business**: cleaning a customer list pulled from two systems that never agreed.

Watch out: PROPER does not know that "McDonald" is not "Mcdonald". Spot check the result before deleting the original column.

---

## Step 3: dates that are not really dates

A date is only a date if the spreadsheet sees it as a number under the hood. "15/06/2026" might be text, in which case sorting and filtering will lie to you.

Test: select the column. If the dates align to the right, they are real dates. Aligned left = text.

Prompt:

```
Column C contains dates as text in different formats:
"15/06/2026", "6-15-2026", "June 15 2026", "2026.06.15".
I am in Google Sheets, my locale is [your country].
Give me a formula in column D that converts each to a real date,
or returns blank if it cannot be parsed. Explain edge cases.
```

For really mixed data, ask for two columns - the parsed date and a flag for "could not parse". Then you can filter the failures and fix them by hand.

---

## Step 4: phone numbers

Phone numbers come as `+1 (555) 123-4567`, `5551234567`, `555.123.4567`, `001-555-123-4567`, and sometimes with stray letters.

```
Column E has phone numbers in many formats.
I want column F to contain just the digits, no spaces or symbols.
I want column G to be the same number formatted as "+1 555 123 4567"
if it has 10 or 11 digits, otherwise the word "CHECK".
```

- Teacher: parent contact numbers from sign-up forms.
- NGO: beneficiary numbers for an SMS campaign - the SMS service rejects badly formatted ones.
- Business: customer phone numbers that need to match a CRM format.

---

## Step 5: splitting one column into many

Sometimes one column holds "Surname, First - Class - Phone". You need three columns.

In Google Sheets, the menu path is **Data > Split text to columns**. In Excel, it is **Data > Text to Columns** or **Data > From Table/Range** for Power Query.

But what if the delimiter is inconsistent? Ask AI:

```
Column A contains entries like:
"Smith, John - Year 5 - 555-1234"
"Doe,Jane- Year 6- 555-9999"
"Brown , Bob -Year 5  -  555-0000"
I want columns B, C, D with surname, first name, class, phone.
Give me formulas that survive the inconsistent spacing.
```

`SPLIT` plus `TRIM` is your friend in Sheets. `TEXTSPLIT` in newer Excel.

---

## Step 6: finding and merging duplicates

Duplicates are rarely identical. "Maria Garcia" and "maria garcia " are duplicates to a human and two different rows to a spreadsheet.

Clean first, deduplicate second. Order matters.

```
I have a sheet of [donors / students / customers].
I have already standardised the name column to proper case and trimmed spaces.
The email column is in column C.
1. Find rows where the email is identical.
2. Among those, tell me which other columns disagree.
3. Suggest a strategy to merge them - keep newest date, longest address, etc.
```

Do not let AI delete the duplicates for you in one click. Make a "duplicate of row X" flag column, sort by it, review with your eyes, then delete.

---

## Step 7: removing junk

Junk includes: rows that say "TOTAL", merged title rows, blank rows between sections, rows where someone wrote a note in column A, and stray characters like non-breaking spaces.

```
Here is a sample of my sheet. Identify rows that are not real data records
- summary rows, header repetitions, notes - and tell me how to filter them out.
[paste 30 rows]
```

A common trick: add a column that asks `=ISNUMBER(B2)` where B should always be a number. Filter to FALSE and inspect.

---

## A safety habit

Before any cleanup: duplicate the file. Name it `original-DO-NOT-TOUCH`. Work on the copy. You will undo a step too many at least once.

---

## Homework

1. Take a real messy file you actually own. Paste 20 rows into Claude or ChatGPT and ask for the "list of problems by column" prompt above. Save that list - it is your work plan.
2. Standardise the name column on that file using a formula AI gives you. Compare 10 rows of before-and-after by eye.
3. Pick one column that mixes dates or phone numbers in different formats. Get them into a single consistent format and flag the rows AI could not parse. Fix those by hand.
4. Bonus: find duplicates in your file using the email or phone column. Do not delete anything. Just create a "possible duplicate" flag column and count how many you would have lost if you had clicked "remove duplicates" blindly.
