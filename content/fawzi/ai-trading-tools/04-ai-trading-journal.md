---
title: "AI-Assisted Trading Journal"
module: "AI Trading Tools"
order: 4
---

# AI-Assisted Trading Journal

A trading journal is the single highest-leverage habit you can build. Every winning trader keeps one. Pair it with Claude or ChatGPT for weekly reviews and you have a feedback loop most traders never develop. This lesson shows you how to build the journal and how to use AI to spot patterns you cannot see yourself.

> You cannot improve what you do not measure. You cannot fix what you do not see.

---

## What a Journal Must Capture

Every trade. Every time. No exceptions.

| Field | Why It Matters |
|---|---|
| Date and time | Time-of-day patterns |
| Ticker | Are you overweight a few names? |
| Entry price | Compare to your plan |
| Exit price | Did you exit per plan or panic? |
| Position size | Are you sizing consistently? |
| Direction (long/short) | Bias detection |
| Reason for entry | Setup name in one phrase |
| Planned stop | Did you set one before entering? |
| Planned target | Same question |
| Result (P&L) | Outcome |
| Emotion before trade | Anxious, confident, FOMO, bored? |
| Emotion during trade | Hopeful, scared, frustrated? |
| Lesson (one line) | What this trade taught you |

---

## Where to Build It

Two solid choices for Fawzi.

| Tool | Pros | Cons |
|---|---|---|
| Google Sheets | Free, easy filters, charts, pivot tables | Less visual |
| Notion | Beautiful, tags, links to charts, mobile | Slower for heavy data |

Pick one. Start today. A boring journal you actually fill out beats a perfect journal you abandon.

---

## A Minimum Viable Sheet

Columns in row 1:

```text
Date | Ticker | Long/Short | Entry | Stop | Target | Size | Exit | P&L | Setup | Emotion Pre | Emotion During | Lesson
```

Fill it in within 1 hour of closing each trade, while the emotion is fresh. This is non-negotiable.

---

## The Weekly Review Prompt

Once a week (Sunday is good), copy your trades into Claude.

```text
You are my trading coach. Below are my last week of trades from
my journal. Please:

1. Calculate basic stats: win rate, average win, average loss,
   biggest win, biggest loss, total P&L, profit factor
2. Identify patterns:
   - Which setups worked? Which didn't?
   - Any time-of-day patterns?
   - Any ticker concentration?
   - Long vs short performance?
3. Read the emotion columns. Flag any emotional patterns
   (e.g. did I lose more when I was bored? FOMO trades?)
4. Read the lesson columns. Are the same lessons repeating?
   That means I'm not actually learning them.
5. Give me 3 specific behaviors to change next week
6. Give me 1 thing I'm clearly doing right

Be honest, not encouraging. Coaches don't flatter.

TRADES:
[paste your week's trades]
```

---

## Monthly Deeper Review

```text
Here are my last 4 weeks of trades. Compare them to the previous
4 weeks (also pasted). What changed? Am I improving on the things
my weekly reviews flagged? What new patterns are emerging now
that the sample is bigger?

PREVIOUS MONTH:
[paste]

CURRENT MONTH:
[paste]
```

---

## Catching Patterns You Can't See

These are real patterns AI has caught for traders:

- "You lose 80% of trades entered between 9:30 and 9:45 AM."
- "Every time your 'emotion pre' says FOMO, the trade loses."
- "You hit your profit target on 60% of trades but exit early on 90% of them."
- "Your average loser is 2.3x your average winner. Reversed risk/reward."
- "You over-trade on Mondays after a losing Friday."

You cannot see these from inside your own head. AI sees them in 30 seconds.

---

## Honest Emotion Logging

The emotion columns are where the magic is. Don't write "fine." Be specific.

| Bad | Good |
|---|---|
| "OK" | "Bored, hadn't traded in 2 hours, forced this one" |
| "Confident" | "Confident from previous winner, sized 2x normal" |
| "Worried" | "Worried because I was already down on the day" |
| "Excited" | "FOMO, saw the move already started, chased" |

Be embarrassingly honest. The journal is for you only.

---

## A Sample Self-Coaching Prompt

```text
I had a really bad trading day. Here are the 4 trades I took:

[paste trades with full detail]

Don't tell me it's OK or that everyone has bad days. I want you
to read this like a coach who is paid to make me better.
Identify exactly what I did wrong, what I should have done,
and what rule I need to add to prevent this tomorrow.
```

---

## The Compound Effect

If AI helps you spot one bad habit per month and you actually fix it, you will be a transformed trader in a year. Most traders never journal. Of those who do, most never review. Of those who review, almost none use AI to find blind spots. Be the one who does all three.

---

## Homework

1. Build your trading journal today in Google Sheets or Notion using the columns above. If you have past trades, backfill at least 10. If not, start with your next trade.
2. At the end of this week, run the weekly review prompt in Claude with whatever trades you have. Even 3 trades is enough to practice the routine.
3. Pick one specific behavior the AI flags and write it as a rule in your journal header (e.g. "No trades in the first 15 minutes of market open"). Follow it for one full week and report back.

---
