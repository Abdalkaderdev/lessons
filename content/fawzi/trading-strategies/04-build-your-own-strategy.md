---
title: "Build Your Own Strategy"
module: "Trading Strategies"
order: 4
---

# Build Your Own Strategy

A strategy is not a feeling, a guru's tweet, or a chart pattern you saw once. A real strategy is a **written document** that defines exactly when you enter, when you exit, how much you risk, and when you stop trading. **If you cannot write it down in one page, you do not have a strategy — you have hope.**

---

## The 6 Required Components

Every viable strategy must define all six. Missing one means the strategy is incomplete.

| Component | Question it answers |
|---|---|
| **1. Entry** | What exact conditions trigger me to buy/sell? |
| **2. Exit (winner)** | When do I take profit? Fixed target, trailing stop, time-based? |
| **3. Stop loss** | What price proves the trade is wrong? |
| **4. Position size** | How many shares/contracts, based on account risk? |
| **5. Market conditions** | When does this strategy work? When do I sit out? |
| **6. Invalidation** | What evidence makes me stop trading this strategy entirely? |

---

## Example: Written Strategy

Here is what a complete one-page strategy looks like. Yours should be this specific.

```
STRATEGY: SPY Trend Pullback (Long Only)

ENTRY:
- SPY daily close above rising 50-day SMA
- Pullback to within 1% of 20-day SMA
- Bullish reversal candle (engulfing or hammer) on the touch
- Enter at next-day open

EXIT (winner):
- Target = entry + 2x (entry - stop)
- OR trail with 20-day SMA, exit on close below it

STOP LOSS:
- Below the low of the reversal candle, minus 0.2%

POSITION SIZE:
- Risk 1% of account per trade
- Shares = (Account x 0.01) / (Entry - Stop)

MARKET CONDITIONS - TRADE WHEN:
- VIX below 25
- SPY above 200-day SMA

DO NOT TRADE WHEN:
- FOMC week
- VIX above 25
- SPY below 200-day SMA (regime change)

INVALIDATION:
- If 20 consecutive trades produce a net loss, stop trading
  this strategy and re-evaluate
```

That is a strategy. Notice there is **zero room for emotion**.

---

## Why Writing It Down Matters

In the moment, your brain will invent reasons to:

- Move the stop "just a little lower"
- Add to a losing position because "it has to bounce"
- Exit a winner early because "I don't want to give it back"
- Take a trade that doesn't meet the rules because "this one looks really good"

**A written strategy is a contract with your past self.** When live-trading you, present-you who is panicking does not get a vote. You execute what is written. Period.

---

## Paper Test: Minimum 50 Trades

Before risking real money, you must paper-trade your strategy for **at least 50 trades**. Why 50?

- Smaller samples are pure luck (good or bad)
- 50 trades reveals your real win rate and average R-multiple
- You discover edge cases the strategy didn't define
- You find out whether YOU can actually execute it

Track every trade in a spreadsheet with: date, ticker, entry, stop, target, exit, R-multiple, and a one-line note on what happened.

After 50 trades, calculate:

- **Win rate** (% of winners)
- **Average win in R** (average winner / risk)
- **Average loss in R** (average loser / risk)
- **Expectancy** = (Win% x AvgWin) - (Loss% x AvgLoss)

If expectancy is negative, **the strategy does not work** — at least not as you executed it. Don't trade it with real money.

---

## Use AI to...

Pressure-test your written strategy:

```text
Here is my written trading strategy: [paste your one-page strategy]. Act as a skeptical professional trader. List every ambiguity, undefined edge case, and place where my discretion could override the rules. For each, suggest a more precise rule that removes the ambiguity.
```

Analyze your paper-trade results:

```text
I paper-traded my strategy 50 times. Win rate: X%. Average winner: Y R. Average loser: Z R. Calculate my expectancy per trade, my expected return over 100 trades, and my maximum likely drawdown using a simple Monte Carlo assumption. Tell me honestly whether this edge is worth trading.
```

---

## Homework

1. Write your own one-page strategy using the 6-component template above. Save it as a text file you can re-read before every trading session.
2. Open a TradingView paper account (or any broker simulator) and execute your strategy on paper. **Log every trade in a spreadsheet.**
3. Commit to 50 paper trades before risking any real capital. After 50, calculate your expectancy. Only then decide whether to go live — and if you do, start with **the smallest position size your broker allows**, not your full account.
