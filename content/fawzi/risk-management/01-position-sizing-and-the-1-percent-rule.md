---
title: "Position Sizing and the 1% Rule"
module: "Risk Management"
order: 1
---

# Position Sizing and the 1% Rule

Position sizing decides how much money you put into a single trade. It is the single most important variable in your entire trading career — more important than your entry, your indicator, or your "gut feeling." **The size of your bet matters more than the direction of your bet.**

Most beginners do not blow up their accounts because their strategy is bad. They blow up because they bet too big. A trader with a mediocre strategy and great position sizing will outlast a genius with reckless sizing every single time.

---

## The 1% Rule

**Never risk more than 1% of your total account on a single trade.**

This is not the size of the position — it is the maximum you are willing to *lose* if your stop loss is hit.

| Account Size | 1% Risk Per Trade | Max Loss Allowed |
|---|---|---|
| $500 | $5 | $5 |
| $1,000 | $10 | $10 |
| $5,000 | $50 | $50 |
| $10,000 | $100 | $100 |

If you have a $1,000 account and lose 1% on a trade, you lose $10. To wipe out your account, you would need **100 consecutive losing trades**. Almost mathematically impossible.

Compare that to risking 20% per trade. Just 5 losses in a row and you are done.

---

## The Formula

```
Position Size = (Account x Risk %) / (Entry Price - Stop Loss Price)
```

The distance between your entry and your stop determines how many shares or units you can buy. A tight stop lets you buy more. A wide stop forces you to buy less. **The stop comes first, the size comes second.**

---

## Worked Example 1: Stock Trade

- Account: $1,000
- Risk per trade: 1% = $10
- Entry price: $50
- Stop loss: $48 (distance = $2)

Position size = $10 / $2 = **5 shares**

You buy 5 shares for $250 of capital. If the stock hits your stop at $48, you lose 5 x $2 = $10. Exactly 1%.

---

## Worked Example 2: Crypto Trade

- Account: $2,000
- Risk per trade: 1% = $20
- Entry price: $30,000 (BTC)
- Stop loss: $29,400 (distance = $600)

Position size = $20 / $600 = **0.033 BTC** (~$990 of exposure)

Even though you are buying nearly half your account in BTC, your actual *risk* is only $20 because the stop is close.

---

## Use AI to...

Calculate position size instantly without doing the math by hand:

```text
Act as a position size calculator. I will give you my account size, risk percentage, entry price, and stop loss price. Calculate the exact position size (number of units/shares) and the dollar risk. Warn me if the position is larger than 50% of my account or if my stop is more than 10% away from entry. My inputs: Account = $___, Risk = ___%, Entry = $___, Stop = $___.
```

```text
I am about to take a trade. Before I click buy, ask me three questions: (1) Where is my stop loss? (2) What dollar amount am I risking? (3) Is that dollar amount 1% or less of my total account? If I cannot answer all three clearly, tell me NOT to take the trade.
```

---

## The Brutal Truth

The traders who survive year one are not the smartest. They are the ones who refused to risk more than 1% even when they were "really sure." **Certainty is the most expensive emotion in trading.**

---

## Homework

1. Calculate the dollar amount that equals 1% of your current account. Write it on a sticky note next to your screen. That is your maximum loss per trade — forever.
2. Take 3 hypothetical trade setups from a chart (any asset). For each, write down: entry, stop, and the exact position size using the formula above.
3. Use the AI prompt above to double-check your math. If your manual answer and the AI answer differ, find out why before placing real money.
