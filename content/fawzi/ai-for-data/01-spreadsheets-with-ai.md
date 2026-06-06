---
title: "Spreadsheets with AI"
module: "AI for Data"
order: 1
---

# Spreadsheets with AI

## What You'll Learn

- How to use AI to write Excel and Google Sheets formulas — even complex ones
- How to use AI to clean messy data quickly
- How pivot tables work and how to build them with AI guidance
- How to solve real spreadsheet problems using AI as your formula expert

> You don't need to memorize formulas. You need to know what you want to calculate — AI writes the formula for you.

---

## Why Spreadsheets Are Still Essential

Despite all the new tools, spreadsheets remain the universal language of business data. Budgets, sales tracking, inventory management, financial analysis, project timelines — all of these live in spreadsheets.

Most people use spreadsheets at 10% of their capability. They type numbers, do basic addition, and manually update things that could be automated.

With AI, you can use the other 90%.

---

## Part 1: The Basics of Talking to AI About Spreadsheets

### How to Describe Your Spreadsheet Problem

AI can't see your spreadsheet. You need to describe it clearly. Include:
1. What columns you have and in what order (e.g., Column A = Date, Column B = Client Name, Column C = Amount)
2. What you're trying to calculate or achieve
3. Which row your data starts on (usually row 2 if row 1 has headers)

**Weak prompt:** "How do I calculate totals?"
**Strong prompt:** "I have a Google Sheets spreadsheet. Column A has dates, Column B has client names, Column C has invoice amounts. Data starts at row 2 and goes to row 100. How do I calculate the total revenue for a specific client?"

### Getting Formulas from AI

> Prompt: "I have a spreadsheet in Google Sheets. Column A = Date (in format DD/MM/YYYY), Column B = Product Name, Column C = Quantity Sold, Column D = Unit Price. Data starts at row 2. Write a formula to calculate total revenue (quantity × price) for each row in Column E. Then write a formula in a summary cell to show total revenue across all rows."

AI will give you the exact formula to copy and paste. You don't need to understand how it works — you need to know what you want.

---

## Part 2: Essential Formula Categories

### Category 1: Lookup Formulas (VLOOKUP / XLOOKUP)

Used to pull data from one table into another.

**Example scenario:** You have a list of sales by client ID. In another sheet, you have client names matched to IDs. You want to add the client name to the sales table automatically.

> Prompt: "In Google Sheets, I have Sheet1 with Column A = Client ID and Column B = Sale Amount. In Sheet2, I have Column A = Client ID and Column B = Client Name. Write a formula to put the client name in Column C of Sheet1, looking it up from Sheet2. Use XLOOKUP."

### Category 2: Conditional Formulas (IF / IFS / SUMIF / COUNTIF)

Used to calculate based on conditions.

**Example scenarios:**
- "Calculate commission only on sales above AED 5,000"
- "Count how many orders were from Dubai"
- "Show 'Overdue' if the payment date has passed"

> Prompt: "I have a spreadsheet with Column A = Invoice Date, Column B = Due Date, Column C = Payment Status (blank if not paid). Write a formula for Column D that shows 'Overdue' if today's date is past the Due Date and the payment status is blank, 'Paid' if there's a date in Column C, and 'Due Soon' if the due date is within the next 7 days."

### Category 3: Date and Time Formulas

> Prompt: "I have a project tracker in Google Sheets. Column A = Project Start Date, Column B = Project End Date. Write formulas to: (1) calculate the number of working days between start and end dates, (2) show how many days until the deadline from today, and (3) highlight the row red if the deadline is within 3 days."

### Category 4: Text Formulas

Used to clean, combine, or extract text.

> Prompt: "I have a spreadsheet where Column A contains full names in the format 'First Last' (e.g., 'Ahmed Ali'). Write formulas to: (1) extract just the first name into Column B, (2) extract just the last name into Column C, (3) create an email address in Column D in the format firstname.lastname@company.com."

### Category 5: Summary and Aggregation (SUMIFS, AVERAGEIFS, PIVOT logic)

> Prompt: "I have a sales spreadsheet with Column A = Date, Column B = Salesperson Name, Column C = Region, Column D = Sale Amount. Write SUMIFS formulas to: (1) total all sales by a specific salesperson, (2) total all sales from the Dubai region, (3) total all sales made in a specific month."

### Exercise 1
- [ ] Create a simple spreadsheet with at least 3 columns and 10 rows of data (any data — sales, expenses, contacts, anything).
- [ ] Ask AI to write a SUMIF or COUNTIF formula for your data.
- [ ] Paste the formula into your spreadsheet and verify it works.
- [ ] Describe in words what the formula does.

---

## Part 3: Data Cleaning with AI

### What Is Dirty Data?

"Dirty data" means data that's inconsistent, incorrectly formatted, or contains errors that prevent you from analyzing it correctly.

**Common dirty data problems:**
- Names in inconsistent formats ("AHMED ALI", "ahmed ali", "Ali, Ahmed")
- Phone numbers with different formats ("+971-50-123-4567", "0501234567", "50 123 4567")
- Extra spaces before or after text
- Dates in multiple formats ("01/04/2025", "April 1, 2025", "2025-04-01")
- Duplicate rows
- Numbers stored as text (looks like a number but formulas don't work)

### Cleaning with Formulas

> Prompt: "I have a column of phone numbers in inconsistent formats (some start with +971, some with 0, some with just 5). Write a Google Sheets formula that standardizes all of them to the format +971XXXXXXXXX."

> Prompt: "I have a column with people's names. Some are ALL CAPS, some are all lowercase, some are mixed. Write a formula that converts all of them to Proper Case (First Letter Capitalized)."

> Prompt: "I have a column of numbers but they're formatted as text — my SUM formula returns 0. What formula can I use to convert them to actual numbers? And how can I fix this quickly for 200 rows?"

### Finding and Removing Duplicates

> Prompt: "In Google Sheets, how do I find and highlight duplicate rows? And how do I remove duplicates automatically while keeping only the first instance of each?"

### Exercise 2
- [ ] Take any list of data (you can make it up: 20 names, phone numbers, or addresses with inconsistencies).
- [ ] Create at least 2 types of "dirty data" (inconsistent formatting, duplicates, etc.).
- [ ] Ask AI to write the cleaning formulas for each issue.
- [ ] Apply the formulas and confirm the data is clean.

---

## Part 4: Pivot Tables

### What Is a Pivot Table?

A pivot table is a tool that summarizes large amounts of data into a compact, readable summary — without writing a single formula.

**Example:** You have 500 rows of sales data. With a pivot table, you can see:
- Total sales by region (in 10 seconds)
- Total sales by salesperson, broken down by product
- Average order size by month
- Which product category has the highest revenue

If you've never used pivot tables, they will change how you think about data.

### Understanding Pivot Tables with AI

> Prompt: "Explain pivot tables to me like I'm a complete beginner. I have a spreadsheet with monthly sales data — columns for Date, Salesperson, Product, Region, and Revenue. Walk me through exactly how to create a pivot table that shows total revenue by salesperson for each month. Use Google Sheets."

> Prompt: "I've created a pivot table but I'm not sure how to set up the rows, columns, and values. My data has: Column A = Date, Column B = Client Name, Column C = Service Type, Column D = Amount. I want to see: total amount per client, broken down by service type. Tell me exactly which fields to drag where in the pivot table setup."

### Common Pivot Table Questions

> Prompt: "How do I add a calculated field to my pivot table to show profit margin (where I have both revenue and cost columns in my raw data)?"

> Prompt: "My pivot table is showing grand totals at the bottom. How do I also show it as a percentage of total? And how do I sort the rows from highest to lowest revenue?"

### Exercise 3
- [ ] Create a spreadsheet with at least 30 rows of data and 4+ columns (you can generate fake data with AI: "Generate 30 rows of realistic sales data with columns: Date, Salesperson, Region, Product, and Amount").
- [ ] Build a pivot table that shows total sales by salesperson.
- [ ] Add a second row field to break it down further (by region or product).
- [ ] Sort the results from highest to lowest total.

---

## Part 5: Real Spreadsheet Problem-Solving

### The Problem-Solving Approach

When you hit a spreadsheet problem you don't know how to solve:

1. Describe exactly what you have (your data structure)
2. Describe exactly what you want to achieve
3. Ask AI for the solution
4. If the formula doesn't work, paste the error message back into AI and ask for help

> Prompt: "This formula isn't working: [paste formula]. I'm getting the error: [paste error message]. My data structure is: [describe columns and a sample row]. What's wrong and how do I fix it?"

### Real-World Problem 1: Sales Commission Calculator

Scenario: You need to calculate commissions for your sales team. Commission rates:
- 0–10,000 AED: 5% commission
- 10,001–25,000 AED: 8% commission
- 25,001+ AED: 12% commission

> Prompt: "I need a Google Sheets formula for Column E that calculates a sales commission based on the sale amount in Column D. The commission tiers are: 5% for sales up to 10,000, 8% for sales from 10,001 to 25,000, and 12% for sales above 25,000. Write the formula using IFS or nested IF."

### Real-World Problem 2: Invoice Aging Report

Scenario: You want to see which invoices are overdue and by how many days.

> Prompt: "I have an accounts receivable spreadsheet. Column A = Invoice Number, Column B = Client, Column C = Invoice Date, Column D = Due Date, Column E = Amount, Column F = Date Paid (blank if unpaid). Write formulas to: (1) calculate days overdue for unpaid invoices, (2) categorize them as 'Current', '1–30 days overdue', '31–60 days overdue', or '60+ days overdue', and (3) sum the total outstanding in each aging category."

### Real-World Problem 3: Inventory Reorder Alert

> Prompt: "I have an inventory tracker. Column A = Product Name, Column B = Current Stock, Column C = Reorder Level (minimum before reordering). Write a formula for Column D that shows 'REORDER NOW' in red text if current stock is at or below the reorder level, and 'OK' in green if stock is sufficient. Also, how do I apply conditional formatting to highlight the entire row red when stock is low?"

### Exercise 4
- [ ] Choose one of the three real-world problems above.
- [ ] Build the spreadsheet from scratch (you can use AI to generate sample data).
- [ ] Implement the solution using AI-generated formulas.
- [ ] Verify it works correctly with at least 10 rows of test data.

---

## Putting It All Together

You no longer need to fear spreadsheets. With AI:
- Any formula can be written on demand
- Any cleaning task can be described and solved
- Pivot tables become straightforward
- Real business problems get solved in minutes

The skill is knowing what you want to achieve and describing it clearly. AI handles the technical syntax.

---

## Homework

- [ ] Build a sales tracker for a hypothetical business: columns for Date, Client, Product, Quantity, Unit Price. Use AI to add formulas for: total revenue per row, monthly totals, top client by revenue, and an overdue invoice alert.
- [ ] Create a pivot table from your sales tracker showing revenue by client and by month.
- [ ] Find one messy dataset online (or create one) and clean it using AI-generated formulas.
- [ ] Write a "Spreadsheet FAQ" for yourself: 5 formula questions you've had in the past or will likely face. Ask AI all 5 and save the answers.

> Prompt to generate a practice dataset: "Generate a realistic 50-row sales dataset for a small electronics accessories business. Include columns: Date (spread across 6 months), Client Name, Product, Region (Abu Dhabi, Dubai, Sharjah), Quantity, and Unit Price. Format it as a table I can paste into Google Sheets."

---

*Next lesson: Data analysis — uploading real data to AI and extracting insights.*
