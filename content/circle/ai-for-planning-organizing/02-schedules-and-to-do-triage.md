---
title: "Schedules and To-Do Triage"
module: "AI for Planning & Organizing"
order: 2
---

# Schedules and To-Do Triage

You wake up. There are 23 things on your list. Six feel urgent. Four are overdue. Two you've been carrying for a month. By 10am you've answered some emails and now it's lunchtime and you've done none of the important work.

This is the situation AI can actually help with. Not by doing the tasks — by helping you look at the pile honestly and decide what to do first.

---

## Why your list feels broken

Most to-do lists fail because they mix three different things:

- Tasks (15 minutes, clear, doable)
- Projects (multiple steps, multiple days)
- Vague hopes ("get healthier", "fix the website")

When you stare at this mix, your brain freezes. AI is useful here because it has no emotional attachment to your list. It can sort it without flinching.

---

## Tools we'll use

- [claude.ai](https://claude.ai) or [chatgpt.com](https://chatgpt.com) for the triage conversation
- [Google Calendar](https://calendar.google.com) or your existing calendar for time-blocking
- A plain text file or [Google Keep](https://keep.google.com) to dump your list

You don't need a fancy productivity app. The thinking happens in the chat, the doing happens in your calendar.

---

## Step 1 — Brain dump, then paste

Open a chat. Dump your entire to-do list, even the embarrassing items. Then use this prompt:

```
Here is everything on my plate right now. Some of it is urgent,
some of it has been sitting there for weeks, some I'm not sure why I wrote down.

[paste your full list]

Please:
1. Sort these into: Do this week, Do this month, Drop or defer, Needs more info.
2. Flag anything that looks like a project disguised as a task.
3. Ask me 3 questions that would help you sort better.

Be honest. If something sounds like avoidance or perfectionism, say so.
```

That last line changes the output a lot. Without it, AI plays it safe. With it, you get useful pushback.

---

## Three flavors

### Teacher — a Sunday evening pile

```
Here is my list before the school week:
- Grade 9th grade essays (28 of them)
- Plan Monday lesson
- Email parent about Mateo's behavior
- Update gradebook
- Prep materials for Friday lab
- Order new whiteboard markers
- Write recommendation letter for Sara
- Reorganize classroom library (been on list 3 months)
- Read that pedagogy book everyone's talking about
- Find a substitute for Wednesday's dentist appointment

[use the prompt above]
```

### NGO assistant — a Monday morning pile

```
Here is what's on my plate at the office:
- Donor report due Friday
- Follow up with 3 community partners
- Volunteer schedule for next month
- Submit receipts from last event
- Translate parent newsletter into Arabic
- Order supplies for workshop
- Update the program logframe
- Schedule one-on-ones with my 4 program staff
- Respond to journalist asking about our impact numbers
- Set up new printer

[use the prompt above]
```

### Business — an end-of-quarter pile

```
Here is my work list:
- Send invoices to 4 clients
- Q3 financial review with accountant
- Renew business insurance
- Reply to RFP from new prospect (deadline Wednesday)
- Update services page on website
- Onboard the new contractor
- Plan Q4 marketing
- Fix broken Stripe webhook
- LinkedIn post (haven't posted in 6 weeks)
- Read competitor's new offer

[use the prompt above]
```

---

## Step 2 — Time-block the realistic version

After you sort the list, the next problem is that your week has only so many hours. Ask:

```
Based on the "do this week" list, build me a realistic time-blocked schedule
for the next 5 working days. I have roughly [X] hours of focused work per day,
and these fixed commitments: [list meetings, school hours, family pickups].

Important: build the REALISTIC version, not the aspirational one.
Assume one task per day will take twice as long as expected.
Assume one unplanned thing will eat 90 minutes.
Build in those buffers.
```

That second paragraph is the whole trick. AI will gladly build you a schedule where 8 hours of work fits into 8 hours. Real life doesn't work like that.

---

## When everything feels urgent

Sometimes the answer to "what's urgent" is "everything." That's almost never true, but it feels true. Try this prompt:

```
I told you these 6 things are all urgent. Push back on me.
For each one, ask: what actually happens if this is done a week late?
Then tell me which 2 are genuinely urgent and which 4 just feel that way.
```

You will get clarity in 30 seconds. The point isn't that AI knows your life. The point is it asks the question you're avoiding.

---

## Aspirational vs realistic schedules

There are two kinds of schedules.

Aspirational — assumes you wake up energized, no interruptions, ideal focus. Looks great on paper. Collapses by Wednesday.

Realistic — assumes interruptions happen, energy dips after lunch, kids get sick, one meeting will run long. Less pretty. Actually survives the week.

When you ask AI for a schedule, default to the realistic version. Always. You can always do MORE than the plan. You can rarely do more than you scheduled when you scheduled too much.

---

## A note on honesty

If you give AI a sanitized list, you get a sanitized plan. If you tell it "honestly I've been avoiding the donor report because I'm worried the numbers look bad" — you'll get advice that addresses the real problem, not the surface problem.

The chat is private. Nobody else reads it. You can be honest.

---

## Homework

1. Do a full brain dump of your to-do list tonight. Everything. Run the triage prompt and screenshot the result.
2. Build a realistic time-blocked schedule for the next 3 working days using the prompt above. Actually put the blocks in your calendar.
3. At the end of those 3 days, compare what you planned vs what happened. Bring both to next session.
4. Identify ONE recurring item on your list that has been there more than a month. Decide — do it this week, schedule it for a specific date, or drop it. No fourth option.
