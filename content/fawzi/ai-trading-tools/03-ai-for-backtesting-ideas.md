---
title: "AI for Backtesting Ideas"
module: "AI Trading Tools"
order: 3
---

# AI for Backtesting Ideas

Claude can help you think through a trading idea before you ever risk real money. It can sketch the logic, list edge cases, and point out flaws. What it CANNOT do is actually backtest with real historical data. This lesson teaches you to use AI as a brainstorming partner, not a backtesting engine.

> AI backtesting is thought experiment, not statistics. Real backtests need real data and real code.

---

## The Critical Distinction

| Real Backtesting | AI Brainstorming |
|---|---|
| Uses actual price data | Uses AI's general knowledge |
| Tested in code (Python, TradingView Pine) | Tested in a conversation |
| Produces real win rate, drawdown, Sharpe | Produces plausible-sounding stories |
| Reproducible | Different every time you ask |
| Trustworthy with discipline | Useful for sanity-checking ideas |

If Claude tells you "this strategy returned 47% historically," that is a hallucination. Real backtests live in TradingView, QuantConnect, or Python with yfinance.

---

## What AI IS Useful For

- Stress-testing your strategy logic
- Listing edge cases you forgot
- Translating strategy ideas to clear rules
- Explaining why a strategy might fail
- Suggesting variables you didn't consider

---

## Brainstorming a Strategy Idea

Here is the prompt structure that works.

```text
I'm thinking about a trading strategy. Help me pressure-test it
BEFORE I code a real backtest. Do NOT make up performance numbers.

Strategy idea:
- Buy SPY every time the daily RSI(14) drops below 30
- Sell when RSI crosses back above 70
- Position size: 100% of account
- Timeframe: daily

Please:
1. Restate the rules so we agree on them
2. List 10 edge cases I haven't specified (what if RSI never crosses 70?)
3. Identify likely failure modes (sideways markets? regime shifts?)
4. Suggest 3 variants worth testing
5. Tell me what data I'd need to actually backtest this
6. Suggest the right tool (TradingView Pine, Python, Excel)

Do not give me a backtest result. Tell me how to think about it.
```

---

## Stress-Testing With Specific Questions

After the first response, drill deeper.

```text
For the RSI < 30 strategy, what would have happened in:
- 2008 (sustained bear market)
- March 2020 (V-shaped crash)
- 2022 (long grinding decline)

Don't give me numbers. Describe what the strategy would have done
conceptually in each environment and where it would have hurt most.
```

```text
What's the survivorship bias in testing this strategy on SPY only?
What if I'd run it on a stock that went to zero like Lehman?
What does that tell me about position sizing and stop losses?
```

---

## Translating Vague Ideas Into Rules

Most beginner strategies are too vague to test. AI can force clarity.

```text
I want to "buy strong stocks on pullbacks." Help me turn this
into mechanical rules I could actually code. Ask me clarifying
questions one at a time until we have:
- A definition of "strong" (relative strength? 52-week high?)
- A definition of "pullback" (% drop? MA touch? specific candle?)
- An entry trigger
- An exit rule for winners
- An exit rule for losers
- A position sizing rule

Don't proceed until each is specific and testable.
```

This conversation is the most valuable thing AI can do for a developing trader.

---

## How to Think About Edge Cases AI Suggests

When Claude lists 10 things that could go wrong with your strategy, don't dismiss them. Score each one.

| Edge Case | Likely? | Costly if it happens? | Action |
|---|---|---|---|
| Gap down through stop | Yes | Yes | Hard stop won't save you. Size smaller. |
| RSI stays oversold for weeks | Sometimes | Medium | Add time-based exit |
| Earnings during open position | Yes | Yes | Filter out earnings weeks |
| Flash crash | Rare | Catastrophic | Position sizing matters more than entries |

This table is what AI is genuinely great for: forcing you to think.

---

## From Brainstorm to Real Backtest

Once Claude has helped you sharpen the rules:

1. Code it in TradingView Pine Script (easiest for beginners)
2. Or use Python with yfinance and pandas
3. Run it on 10+ years of data
4. Look at: win rate, average win/loss, max drawdown, Sharpe ratio
5. Test on a different ticker to check robustness
6. Forward test on paper for 1-3 months before real money

AI helped you avoid testing a half-baked idea. Real backtest tells you if the idea has any edge.

---

## Red Flags in AI Responses

- Specific performance numbers ("returned 23%")
- Confident claims about what "always works"
- No mention of survivorship bias, look-ahead bias, or fees
- Cherry-picked time periods
- Suggesting leverage without discussing ruin risk

If you see these, push back: "Don't give me made-up numbers. Tell me only what you can reason about logically."

---

## Homework

1. Take one strategy idea you have heard about (golden cross, moving average crossover, breakout, whatever). Run the brainstorming prompt in Claude. Write down the 5 edge cases that surprised you most.
2. Use the "translating vague ideas" prompt to turn one fuzzy idea you have into mechanical rules. Save the rules in Notion. Do not trade them. Just write them down.
3. Pick the sharpened ruleset from #2 and code a minimal version in TradingView Pine Script (or paper-test it manually on 20 charts). Compare what really happens vs what Claude predicted conceptually.

---
