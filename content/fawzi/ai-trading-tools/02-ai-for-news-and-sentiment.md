---
title: "AI for News and Sentiment"
module: "AI Trading Tools"
order: 2
---

# AI for News and Sentiment

There is too much market news to read every morning. Claude and ChatGPT can compress hours of news into a 5-minute briefing, summarize earnings calls, and gauge sentiment in headlines. The skill is knowing which prompts produce useful output and which produce noise.

> News tells you what happened. Sentiment tells you how people feel about it. Price tells you what they did about it.

---

## The Three Layers of News Work

| Layer | What You Want | Best Tool |
|---|---|---|
| Raw news | Headlines, fast | Perplexity, Finviz news feed |
| Summary | What matters today | Claude or ChatGPT |
| Sentiment | Bullish, bearish, neutral | Claude on pasted headlines |

Claude cannot pull live news on its own. You paste, it summarizes. Perplexity can search the web for fresh stuff.

---

## Summarizing Daily News With AI

Copy 10-20 headlines from Finviz, Yahoo Finance, or Investing.com. Paste them into Claude with this prompt.

```text
Below are today's market headlines. Please:
1. Group them by theme (Fed, earnings, geopolitics, sector-specific)
2. Flag the 3 most market-moving stories and explain why
3. List any tickers mentioned and what the news implies for each
4. Note anything that contradicts other headlines
5. End with: "What I would watch today" in 3 bullets

Do not give me trade recommendations. Just synthesis.

HEADLINES:
[paste 10-20 headlines here]
```

This turns 20 minutes of skimming into 3 minutes of reading.

---

## Sentiment Analysis on Headlines

```text
Score the sentiment of each headline below on a scale of
-3 (very bearish) to +3 (very bullish). For each headline:
- The score
- One sentence explaining the score
- Which ticker or sector it affects

At the end, give me an overall market tone in one word
and a 2-sentence summary of the day's mood.

HEADLINES:
[paste headlines]
```

Run this every morning for a week. You will start to feel the rhythm of market sentiment.

---

## Understanding Earnings Call Transcripts

Earnings calls are gold but long. Get the transcript from Seeking Alpha or the company's investor relations page, paste it into Claude.

```text
This is an earnings call transcript. Please give me:
1. The headline numbers (revenue, EPS, beat/miss vs expectations)
2. Forward guidance and how it compares to prior guidance
3. The 3 most important things management emphasized
4. Any concerning language, hedging, or dodged analyst questions
5. The tone of management (confident, defensive, cautious?)
6. What an analyst would likely focus on for the next quarter

End with a one-paragraph "so what" for a retail trader.

TRANSCRIPT:
[paste transcript]
```

---

## Building Your Morning Briefing Prompt

This is the workflow many pro traders mimic. Run it every weekday at the same time.

```text
You are my pre-market briefing assistant. I am going to paste:
- Overnight futures levels
- The top 15 headlines from Finviz
- My watchlist tickers: [list yours]

Build me a briefing with:
1. Market tone in one sentence
2. Key levels to watch on SPY and QQQ
3. News affecting each watchlist ticker (or "no relevant news")
4. Calendar items today (Fed speakers, earnings, data releases)
5. Three questions I should be asking myself before the open

Do not give entry prices. Do not predict direction.
```

Save this as a Claude Project or a saved ChatGPT prompt so you can rerun it daily.

---

## Real Workflow Example

| Time | Action | Tool |
|---|---|---|
| 8:30 AM | Open Finviz news, copy top 15 headlines | Finviz |
| 8:35 AM | Paste into morning briefing prompt | Claude |
| 8:40 AM | Read the synthesis, flag tickers to watch | Notion |
| 8:45 AM | Check Investing.com economic calendar | Investing.com |
| 8:50 AM | Ask Perplexity for any breaking news on flagged tickers | Perplexity |
| 9:00 AM | Open charts on flagged tickers | TradingView |

That is a 30-minute, repeatable, AI-augmented research routine.

---

## What to Never Do

- Do not ask AI "what will the market do today?" It will guess.
- Do not paste headlines and ask "should I buy?" Same problem.
- Do not trust AI's recall of specific earnings numbers. Verify on the source.
- Do not let AI pick your watchlist. You pick. AI summarizes.

---

## Homework

1. Tomorrow morning, copy 15 headlines from Finviz and run the daily news prompt in Claude. Compare the AI's "what I would watch today" against what actually moved by 11 AM.
2. Find the most recent earnings call transcript for a stock on your watchlist (Seeking Alpha has free ones). Run the earnings prompt. Write down 3 things you learned that you would have missed by only reading headlines.
3. Build your personal morning briefing prompt and save it. Run it 3 days in a row and refine the questions until the output actually helps you.

---
