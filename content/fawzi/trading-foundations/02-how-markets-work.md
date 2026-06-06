---
title: "How Markets Work"
module: "Trading Foundations"
order: 2
---

# How Markets Work

A market is just **a place where buyers and sellers meet to agree on a price**. The "place" used to be a physical trading floor with people shouting. Today it's servers in New Jersey matching orders in microseconds. The idea is the same.

---

## The Four Main Markets You'll Hear About

Each market trades a different kind of thing. The mechanics rhyme, but the hours, rules, and risk levels differ.

| Market | What's traded | Example | Where it trades |
|---|---|---|---|
| **Stocks** | Pieces of companies | Apple (AAPL), Tesla (TSLA) | NYSE, NASDAQ |
| **Forex** | One currency vs. another | EUR/USD, USD/JPY | Decentralized banks worldwide |
| **Crypto** | Digital assets | Bitcoin (BTC), Ethereum (ETH) | Binance, Coinbase, Kraken |
| **Commodities** | Physical goods | Gold, oil, wheat | CME, ICE futures exchanges |

Most beginners start with **stocks or crypto** because they're easy to access. Forex and commodities involve more leverage and are riskier to learn on.

---

## What Is an Exchange?

An **exchange** is the venue that hosts the market. It does three jobs:

- **Lists** the assets you can trade
- **Matches** buyers with sellers (this is called the matching engine)
- **Reports** the resulting price to the world

When you buy AAPL on Robinhood, your order is routed to an exchange like NASDAQ where the actual match happens. Robinhood is your **broker** (the middleman). NASDAQ is the **exchange** (the venue).

---

## How a Price Actually Forms

Price is just **the last point where a buyer and seller agreed**. It's not set by Apple, by news, or by a referee. It comes out of the **order book**.

The order book is a live list of:
- **Bids** — people wanting to buy, with the price they'll pay
- **Asks** — people wanting to sell, with the price they want

Example for a stock trading around $100:

| Bids (buyers) | | Asks (sellers) |
|---|---|---|
| $99.98 — 500 shares | | $100.02 — 300 shares |
| $99.97 — 1,200 shares | | $100.03 — 800 shares |
| $99.95 — 2,000 shares | | $100.05 — 1,500 shares |

- The highest bid is **$99.98**. The lowest ask is **$100.02**.
- The **spread** (the gap between them) is **$0.04**.
- When someone hits "buy at market," they pay $100.02. When someone hits "sell at market," they get $99.98.

**More demand pushes price up. More supply pushes it down.** That's the whole engine.

---

## Trading Hours (this matters more than you think)

| Market | Hours (your local time will vary) |
|---|---|
| US stocks | Mon-Fri, 9:30 AM - 4:00 PM Eastern |
| Forex | Sun 5pm - Fri 5pm Eastern (24/5) |
| Crypto | 24/7, 365 |
| Commodities futures | Roughly 23 hours/day, Sun-Fri |

Stocks have **pre-market** and **after-hours** sessions too, but liquidity is thin and spreads are wide. Stick to regular hours when starting out.

---

## Use AI to...

Get a live snapshot of any market in beginner-friendly language:

```text
Pretend you're a friendly trading mentor. In under 200 words, give me a beginner-level summary of what's happening in [the stock market / Bitcoin / EUR/USD] today. Mention the current price, whether it's up or down, and what's driving the move. Define any jargon in parentheses.
```

Or simulate an order book so you can practice reading one:

```text
Create a fake order book for a stock trading around $50. Show 5 bids and 5 asks. Then ask me: what is the spread, what price would a market buy order fill at, and which side has more pressure. Wait for my answers, then grade me.
```

---

## Homework

1. Go to **TradingView**, open any stock chart, and find the bid/ask quote. Write down the current spread.
2. Visit **Finviz** (finviz.com) and explore the map view of the S&P 500. Note which sectors are green and which are red today.
3. Pick a market (stocks, forex, crypto, or commodities) and explain to a family member, out loud, what's being traded and when it's open. If you can teach it, you understand it.
