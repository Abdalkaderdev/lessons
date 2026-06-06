---
title: "Indicators Worth Knowing"
module: "Reading Charts"
order: 4
---

# Indicators Worth Knowing

There are hundreds of indicators on TradingView. **Most are noise.** They lag price, repeat the same information, and clutter your chart. Four indicators do real work: **moving averages, RSI, MACD, and volume**. Learn these and ignore the rest.

---

## Why Most Indicators Are Useless

Every indicator is just **math on past price**. It cannot see the future. The more indicators you stack, the more you are looking at the same data four ways and calling it "confirmation."

The four below survive because each one tells you something **different**:

- Moving averages → **trend direction**
- RSI → **momentum extremes**
- MACD → **trend + momentum together**
- Volume → **conviction behind the move**

---

## Moving Averages

A moving average is just the average closing price over the last N candles, drawn as a line.

| Indicator | What it shows | When traders use it |
|-----------|---------------|---------------------|
| **SMA 200** | Average of last 200 days | Long-term trend filter. Above = bull market. Below = bear market. |
| **SMA 50** | Average of last 50 days | Medium-term trend. Often acts as support in uptrends. |
| **EMA 9** | Fast-reacting 9-period avg | Short-term momentum on intraday charts |
| **EMA 20** | Slightly slower | Common dynamic support on the daily |

**SMA** = simple, weights everything equally.
**EMA** = exponential, weights recent prices more — reacts faster.

The famous **"golden cross"** (SMA 50 crosses above SMA 200) and **"death cross"** (50 crosses below 200) are real signals, but slow.

---

## RSI — Relative Strength Index

RSI is one number between 0 and 100 that measures whether price has moved up or down too fast.

| RSI Reading | Meaning |
|-------------|---------|
| Above 70 | **Overbought** — price ran hot, pullback likely |
| Below 30 | **Oversold** — price dumped hard, bounce likely |
| 40-60 | Neutral |

**Important:** overbought does **not** mean "sell now." In strong trends, RSI can stay above 70 for weeks. Use it for **warning, not timing**.

Most useful trick: **divergence**. If price makes a higher high but RSI makes a lower high, momentum is weakening even though price is still rising.

---

## MACD — Moving Average Convergence Divergence

MACD combines two EMAs into one indicator that shows both trend and momentum.

What to watch:

- **MACD line crosses above signal line** → bullish momentum starting
- **MACD line crosses below signal line** → bearish momentum starting
- **Histogram growing** → momentum accelerating
- **Histogram shrinking** → momentum fading even if price keeps going

MACD is **lagging** — it tells you a move is underway, not that one is about to start. Use it to confirm, not predict.

---

## Volume

Volume = how many shares or coins traded in that candle. It is the only "indicator" that is **not derived from price** — it is real data about real activity.

- **Big move + big volume** = real, trust it
- **Big move + low volume** = suspect, often a fake breakout
- **Rising trend on falling volume** = the trend is tired

Always glance at the volume bars before believing a breakout.

---

## How to Add Them in TradingView

1. Open any chart on **tradingview.com**.
2. Click **Indicators** (top toolbar) or press `/`.
3. Search and add: **Moving Average**, **RSI**, **MACD**. Volume is usually on by default.
4. For moving averages, click the settings gear and set the length (200, 50, 20, 9).
5. Save your layout so you do not redo this every time.

**Keep it clean:** 2 moving averages, RSI, MACD, volume. That is enough.

---

## Use AI to...

```text
Look at [ticker] on the daily chart. Tell me where price is relative to its SMA 50 and SMA 200, what the current RSI roughly is, and whether MACD is showing bullish or bearish momentum. Then give me a one-paragraph plain-language summary of the setup.
```

```text
I'm a beginner. Explain RSI divergence with one bullish example and one bearish example. Describe what price is doing, what RSI is doing, and what a trader would conclude.
```

---

## Homework

1. Open **TradingView**, pick a chart, and add **SMA 50, SMA 200, RSI, and MACD**. Save it as your default layout.
2. Find **one current chart** where price is above the SMA 200 (bull market) and **one** where it is below (bear market). Notice how the SMAs feel different.
3. Find **one real example** of **RSI divergence** in the last 6 months on any chart. Screenshot it and write one sentence explaining what happened to price after.
