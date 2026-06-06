---
title: "AI for Market Research"
module: "AI Trading Tools"
order: 1
---

# AI for Market Research

Claude and ChatGPT are powerful research assistants that can help you understand companies, sectors, and market history faster than ever before. They are NOT crystal balls. Use them to build context and understanding before you trade, never to get buy/sell signals.

> Rule #1: AI helps you THINK. It does not trade for you.

---

## What AI Is Good At (and What It Isn't)

| Good For | Bad For |
|---|---|
| Explaining what a company does | Predicting tomorrow's price |
| Summarizing a sector | "Should I buy NVDA right now?" |
| Historical context on crashes | Live market data (use Finviz, Yahoo Finance) |
| Defining jargon | Real-time news (use Perplexity) |
| Comparing business models | Specific entry/exit prices |

Claude's training data has a cutoff. For anything fresh, pair it with Perplexity, Finviz, or Investing.com.

---

## Researching a Ticker Before You Trade It

Never enter a trade on a company you cannot explain in one sentence. Before you risk money on a ticker, run this prompt in Claude.

```text
You are my equity research assistant. I am considering trading [TICKER].

Please give me a structured brief covering:
1. What the company actually does (products, customers, revenue mix)
2. The sector and its 3 main competitors
3. The bull case in 3 bullets
4. The bear case in 3 bullets
5. Major historical events that moved this stock (last 5 years)
6. Key terms and metrics I should know to evaluate this company
7. What I should look up on Yahoo Finance or Finviz before trading it

Keep it factual. Do not give me a trade recommendation.
```

This produces a one-page brief in 30 seconds. Read it, then verify the numbers on Yahoo Finance.

---

## Asking AI to Explain Market Events

When something weird happens in the market, AI is great for context.

```text
Explain the 2008 financial crisis like I am a new trader.
Cover: what caused it, how the market reacted month by month,
which sectors got hit hardest, which sectors recovered fastest,
and what lessons a retail trader should take from it.
```

```text
Walk me through the March 2020 COVID crash and recovery.
What was the VIX doing? What worked? What didn't?
What patterns repeated in the 2022 drawdown?
```

```text
I keep hearing about "yield curve inversion." Explain it
in plain English, why traders care, and the historical
track record of inversions predicting recessions.
```

---

## Sector Deep Dives

Before trading a sector ETF or rotating capital, get oriented.

```text
Give me a beginner-friendly map of the semiconductor sector.
Cover: foundries vs fabless vs IP, the main players, who depends
on whom, the cyclical nature of the industry, and the top 5 ETFs
that track this sector. End with 5 questions I should be able to
answer before trading any semi stock.
```

```text
Compare the business models of Visa, Mastercard, and PayPal.
How do they make money? What are the risks to each?
Which one is most sensitive to interest rates?
```

---

## Combining AI With Real Data Sources

AI gives you the framework. Real tools give you the numbers.

| Question | Ask AI | Then Check |
|---|---|---|
| "What is a good P/E for this sector?" | Claude | Finviz screener |
| "What's NVDA's earnings date?" | Perplexity | Yahoo Finance |
| "How volatile is this stock?" | Claude (explain ATR) | Investing.com chart |
| "What's the float?" | Don't trust AI for this | Finviz |

---

## The Golden Rule

If Claude tells you a specific number (price, market cap, earnings figure), verify it on Yahoo Finance before acting. AI hallucinates numbers confidently. Treat every number from AI as "probably wrong until verified."

---

## Homework

1. Pick a stock you are curious about. Run the "ticker brief" prompt above in Claude. Then open Yahoo Finance and verify 3 of the numbers Claude gave you. Note any that were wrong.
2. Ask Claude to explain one historical market event you do not understand (Black Monday, dot-com bust, 2010 Flash Crash). Write a 5-bullet summary in your own words.
3. Pick a sector (energy, biotech, banks). Use the sector deep-dive prompt, then list 3 ETFs that track it on Finviz and compare their top holdings.

---
