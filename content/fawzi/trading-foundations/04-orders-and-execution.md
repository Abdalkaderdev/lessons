---
title: "Orders and Execution"
module: "Trading Foundations"
order: 4
---

# Orders and Execution

An **order** is the instruction you give your broker: what to buy or sell, how much, and at what price. **Execution** is what actually happens when that order hits the market. The gap between "what you wanted" and "what you got" is where beginners lose money they didn't expect to lose.

---

## The Five Order Types You Need to Know

Almost every trade you'll ever place uses one of these five. Pick the right tool for the job.

| Order Type | What it does | When to use it |
|---|---|---|
| **Market** | Buy/sell **right now** at whatever price is available | You need to get in or out immediately |
| **Limit** | Buy/sell only at **your price or better** | You want a specific price and can wait |
| **Stop** | Triggers a **market order** when price hits a level | Cutting losses or breaking out into a move |
| **Stop-limit** | Triggers a **limit order** when price hits a level | You want stop protection but won't accept any price |
| **Trailing stop** | A stop that **follows the price** as it moves in your favor | Locking in profit while letting winners run |

---

## Market Orders — Speed Over Price

You click "buy market." You get filled instantly at the best available ask.

- **Pro:** You're guaranteed to enter or exit.
- **Con:** You have no control over price. In a fast or thin market, you might pay much more than you expected.

**Example:** Stock shows $50.00 bid / $50.02 ask. You hit market buy for 1,000 shares. The first 300 shares fill at $50.02. The next 800 fill at $50.05. Your average price is **$50.038** — not the $50.02 you saw.

---

## Limit Orders — Price Over Speed

You set a maximum you'll pay (to buy) or a minimum you'll accept (to sell). The order sits in the order book until matched, or it expires.

- **Pro:** You control the price exactly.
- **Con:** You might never get filled. The market may move away without you.

**Example:** Stock is at $50.02. You place a limit buy at $49.80. If the price drops to $49.80 or lower, you get filled. If it never does, you miss the trade.

---

## Stop Orders — The Safety Net

A stop order is a **dormant order** that activates when the price crosses a level you set. Most commonly used as a **stop loss**: you hold a stock at $50, set a stop at $48, and if price hits $48 it auto-sells. You sleep at night.

A **stop-limit** is the same idea but turns into a limit order instead of a market order. Safer in normal conditions, but it might **not fill at all** if the price gaps through your limit.

**Trailing stop:** instead of a fixed level, it follows price at a set distance (e.g., $1 below the high). As price climbs, the stop climbs with it. If price falls back $1, you're out — with whatever profit was locked in.

---

## Slippage and Fills

- **Fill** — when your order is matched and the trade is completed. A "partial fill" means only some of your size got matched.
- **Slippage** — the difference between the price you expected and the price you actually got. Always against you when it matters most.

Slippage gets worse when:
- The market is **moving fast** (news, earnings)
- The asset is **illiquid** (thin order book)
- Your order is **large** relative to volume

**Rule of thumb:** use market orders for liquid assets in calm conditions. Use limit orders for everything else.

---

## Use AI to...

Pre-flight every trade idea before clicking buy:

```text
I'm about to place a trade. Walk me through which order type I should use and why. Then ask me 3 questions to stress-test my plan (entry, stop, target). Be skeptical.

Setup: I want to [buy/sell] [ticker] around [price] because [reason]. My stop loss would be [price]. My target would be [price].
```

Or have AI explain why a fill was worse than expected:

```text
Explain slippage to me using this exact scenario: I placed a market buy for 500 shares of a stock with bid $20.00 and ask $20.05. My fill came back at an average of $20.11. Walk me through what likely happened in the order book and how I could have avoided it.
```

---

## Homework

1. Open your broker (or a paper-trading account on **TradingView** or a crypto exchange's demo mode) and look at the order entry panel. Find each of the 5 order types in the dropdown.
2. Place a **limit order** far below the current market price on any asset. Watch it sit there unfilled. Cancel it after 10 minutes. You just learned why limits don't always execute.
3. Write down, in your own words, **one scenario** where you'd use a trailing stop instead of a regular stop. If you can't think of one, ask Claude using the AI prompt above.
