---
title: "Data Analysis & Insights"
module: "AI for Data"
order: 2
---

# Data Analysis & Insights

## What You'll Learn

- How to upload data to Claude and ask it to analyze it for you
- How to find patterns, trends, and outliers in business data
- How to use AI to describe and recommend charts and visualizations
- How to turn raw data into actionable business decisions

> You don't need to be a data analyst to make data-driven decisions. You need to know the right questions to ask — AI does the rest.

---

## Why Data Analysis Matters

Every business generates data. Customer purchases. Website visits. Marketing campaign results. Inventory levels. Employee performance. Financial transactions.

Most of this data sits unused. People collect it, store it, and never look at it deeply enough to find the insights that could change their business.

Data analysis isn't about being a statistician. It's about asking good questions and understanding what the answers mean. AI makes this accessible to everyone.

---

## Part 1: Uploading Data to Claude

### What You Can Upload

Claude (and similar AI tools) can analyze:
- CSV files (.csv) — the most universal format
- Excel files (.xlsx)
- Tables pasted directly into the chat
- Raw data copied from a spreadsheet

### How to Prepare Your Data for AI Analysis

Before uploading or pasting data:
1. Make sure there are column headers (the first row should name each column)
2. Remove any personally identifiable information if privacy is a concern (replace real customer names with IDs)
3. Make sure the data is in a table format (rows and columns)
4. Note any context AI will need (what the data represents, the time period, any important caveats)

### The Basic Analysis Prompt

> Prompt: "I'm going to paste in some business data. Please analyze it and tell me: (1) the main patterns you notice, (2) any outliers or unusual data points, (3) the top 3 actionable insights for the business, and (4) any questions I should investigate further. [Paste your data]"

This one prompt gives you more insight than most people get from spending hours in Excel.

---

## Part 2: Finding Patterns and Trends

### What Is a Pattern?

A pattern is a consistent relationship in your data — something that happens repeatedly or correlates with something else.

**Examples:**
- Sales are always higher on Thursdays and Fridays
- Customers from Dubai have a higher average order value than other regions
- Churn rate increases after month 3 of a subscription

### What Is a Trend?

A trend is directional change over time — something getting better, worse, or staying flat.

**Examples:**
- Monthly revenue has grown 8% month-over-month for 6 months
- Customer acquisition cost has doubled in the past year
- Average response time on support tickets is improving

### Asking AI to Find Patterns

> Prompt: "Here is 6 months of sales data: [paste data]. What patterns do you see? Are there specific days, times, products, or customer types that consistently perform better or worse? What might explain these patterns?"

> Prompt: "Based on this customer data [paste], are there any segments of customers who behave differently from the average? Look for patterns in purchase frequency, average order value, or product preferences."

### Asking AI to Identify Trends

> Prompt: "Here is monthly revenue data for the past 12 months: [paste data]. Is the business growing, flat, or declining? Calculate the month-over-month growth rate for each month. What is the overall trend? If the current trend continues, what might revenue look like in 3 months?"

> Prompt: "Plot the trend in my data and describe it. Is the growth linear (steady), exponential (accelerating), or decelerating? What could explain the acceleration or slowdown?"

### Exercise 1
- [ ] Collect or generate 3 months of data for any business metric (sales, website visits, social media engagement, expenses).
- [ ] Paste it into Claude with the patterns and trends prompt.
- [ ] Write down 3 insights you didn't know before the analysis.

---

## Part 3: Identifying Outliers

### What Is an Outlier?

An outlier is a data point that is significantly different from the rest. It might be:
- Unusually high (a big sale, a spike in traffic)
- Unusually low (a dead day, a sudden drop in engagement)
- An error in the data (someone entered 10,000 when they meant 100)

Outliers matter because:
- Positive outliers tell you what worked exceptionally — you might want to replicate it
- Negative outliers tell you what failed — you might want to avoid it
- Data errors will skew your averages and mislead your analysis

### Asking AI to Find Outliers

> Prompt: "Here is my sales data for the past 3 months: [paste]. Are there any outlier days, transactions, or customers that are significantly higher or lower than average? For each outlier, suggest a possible reason and whether I should investigate further."

> Prompt: "This dataset contains expense records. Are there any transactions that look unusual — either much larger or smaller than typical, or in categories where we don't usually spend? Flag them for review."

### The Outlier Investigation Framework

When AI finds an outlier, ask:
1. Is this a data error, or did this really happen?
2. If it really happened — what caused it?
3. Can we replicate the positive ones or prevent the negative ones?

> Prompt: "You identified [date/transaction] as an outlier. Here's some additional context: [provide context]. Given this, what's your most likely explanation for the outlier? And what would you recommend I do?"

### Exercise 2
- [ ] Generate or find a dataset with at least 30 data points.
- [ ] Add 2–3 intentional outliers to the dataset.
- [ ] Ask AI to identify all outliers.
- [ ] Check: did it catch the ones you added? Did it flag anything else?

---

## Part 4: Charts and Visualizations

### Why Visualizations Matter

Numbers in a table tell you what happened. A chart helps you see it — and see it faster. The right visualization makes a pattern obvious that might take minutes to spot in raw data.

### The Right Chart for the Right Data

| Data Type | Best Chart Type |
|-----------|----------------|
| Change over time | Line chart |
| Comparing categories | Bar or column chart |
| Part of a whole | Pie or donut chart |
| Correlation between two variables | Scatter plot |
| Distribution of values | Histogram |
| Progress toward a goal | Gauge or progress bar |

### Using AI to Choose and Describe Visualizations

> Prompt: "I have data showing monthly revenue over 12 months. What type of chart should I use to present this? Describe exactly how to set it up in Google Sheets: what goes on the X axis, what goes on the Y axis, and what chart type to select."

> Prompt: "I want to create a chart showing my top 10 clients by revenue, compared to each other. What chart type is best? How should I set it up? What should I title it and what labels should I include?"

### Asking AI to Describe What a Chart Would Show

Even if you can't build the chart right now, AI can tell you what it would look like — which helps you decide whether it's worth building.

> Prompt: "Based on this data [paste], describe what a line chart of monthly revenue would look like. Would the trend be clearly visible? Would there be any notable peaks or valleys? What would a viewer immediately notice?"

### Exercise 3
- [ ] Take the sales dataset from Exercise 1.
- [ ] Ask AI which 3 charts would be most useful for understanding this data.
- [ ] Build one of those charts in Google Sheets using AI's instructions.
- [ ] Add a title and axis labels to make it self-explanatory.

---

## Part 5: Making Data-Driven Decisions

### The Gap Between Data and Decisions

Collecting data is easy. Understanding it takes some skill. But the real value is using it to make better decisions — and most people skip this step.

Data-driven decision-making means:
- Using data to confirm or challenge your assumptions
- Identifying what's working and doing more of it
- Identifying what's failing and changing or stopping it
- Setting measurable goals and tracking progress

### Using AI as a Decision Support Tool

> Prompt: "Here is my business performance data for the last quarter: [paste data]. Based on this, if I had to make one strategic decision to improve performance next quarter, what would it be and why? Show your reasoning with reference to the data."

> Prompt: "I'm deciding between two options: [Option A] or [Option B]. Here is the relevant data I have: [paste data]. Based purely on this data, which option is better supported? What additional data would make this decision clearer?"

### Building a Simple Business Dashboard

A dashboard is a summary of your most important metrics in one view. With AI, you can design one even before you build it.

> Prompt: "I run a [type of business]. The most important metrics I track are: [list 5–8 key numbers]. Design a simple business dashboard layout for me. What should go at the top (highest priority)? How should the metrics be grouped? What comparisons would be most useful (vs. last month, vs. target, vs. last year)?"

Once you know the design:

> Prompt: "Based on this dashboard design, help me build it in Google Sheets. What formulas and layout would I need? Assume I have raw transaction data in Sheet1."

### Exercise 4
- [ ] Choose 5 KPIs (key performance indicators) for your business or a hypothetical business.
- [ ] Ask AI to design a dashboard layout for those 5 KPIs.
- [ ] Describe what "good" looks like for each KPI (what would tell you the business is healthy?).

---

## Part 6: Communicating Data Insights

### Turning Analysis into Action Items

The end goal of any analysis is a decision or action. After analysis, AI should help you turn insights into clear recommendations.

> Prompt: "Based on this analysis, write a brief (1 page) Data Insights Report that: summarizes the key findings in plain language, highlights the top 3 opportunities or risks, and recommends specific actions with measurable outcomes. The audience is a non-technical business owner."

### Explaining Data to Non-Technical Stakeholders

> Prompt: "Here are the key findings from my analysis: [list them]. I need to present these to my business partner who is not comfortable with data. Explain each finding in plain, simple language — avoid jargon. Use everyday analogies where helpful."

### Exercise 5
- [ ] Perform a full analysis on the dataset you've been using throughout this lesson.
- [ ] Write a 1-page Data Insights Report using the prompt above.
- [ ] Include: what you analyzed, what you found, and what you recommend doing.

---

## Putting It All Together

Data analysis used to require a dedicated analyst with specialized software. Now, with AI, you can:
- Analyze any dataset by describing what you want to know
- Find patterns, trends, and outliers without formulas
- Get chart recommendations and build them in seconds
- Translate numbers into business decisions

---

## Homework

- [ ] Find or create a real dataset relevant to your business or interests (minimum 30 rows, 4+ columns)
- [ ] Run a full analysis: patterns, trends, outliers, and 3 visualizations
- [ ] Write a 1-page Data Insights Report
- [ ] Design a business dashboard with 5 KPIs
- [ ] Ask AI: "What data should I be collecting for my business that I'm currently not collecting? Why is each piece of data valuable?"

> Prompt for the homework analysis: "I have [describe your dataset]. Please: (1) identify the top 3 patterns, (2) identify any concerning trends, (3) flag 2–3 outliers, (4) recommend the 3 most useful charts, and (5) suggest the top 2 data-driven actions I should take based on what you've found."

---

*Next lesson: Financial analysis — P&L, budgets, projections, and break-even with AI.*
