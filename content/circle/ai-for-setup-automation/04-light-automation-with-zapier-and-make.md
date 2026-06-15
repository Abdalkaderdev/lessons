---
title: "Light Automation with Zapier and Make"
module: "AI for Setup & Automation"
order: 4
---

# Light Automation with Zapier and Make

The whole idea is simple. When something happens in one app, do something in another app. When a form is submitted, post to Slack. When an email with an invoice arrives, save the PDF to Drive. When a calendar event is created, add it to your to-do list. You wire it up once and never think about it again.

This is genuinely useful for the right kind of work. It's also a swamp you can sink hours into for no reason. This lesson is about doing the useful parts and skipping the swamp.

---

## The two pieces of any automation

Every automation has the same shape:

- **Trigger** — the thing that starts it. "New form response in Google Forms." "New email in Gmail matching a filter." "New row in Sheet."
- **Action** — what happens next. "Add row to Sheet." "Send Slack message." "Create Google Doc."

Some automations have one trigger and one action. Some have one trigger and five actions in a chain. The structure is the same either way.

---

## Tools we'll use

- [zapier.com](https://zapier.com) — easiest to learn, biggest app library, tightest free tier
- [make.com](https://www.make.com) — formerly Integromat, more visual, better free tier, steeper learning curve
- [n8n.io](https://n8n.io) — open-source, free if you self-host, the most powerful, technical to set up
- [claude.ai](https://claude.ai) or [chatgpt.com](https://chatgpt.com) — for planning the automation before you build

We'll mostly demo in Zapier because it's the gentlest entry point.

---

## The demo — RSVPs flowing to a Sheet and a Slack ping

Carry forward the community dinner from the previous lesson. RSVPs come in through a Google Form. You want:

1. Each new response copied into a master Google Sheet (already happens if you connected the form, but let's say you also want a tidier sheet in a different folder)
2. A Slack message in the `#dinner-prep` channel saying "New RSVP: [name] for [seats] seat(s), [diet]"

Before building, ask AI to lay it out:

```
I want to build a Zapier zap.

Trigger: A new response is submitted to my Google Form "Community Dinner RSVP"

Actions:
1. Add a row to my Google Sheet "Dinner Master List" in folder /Dinner 2026/ with columns Name, Email, Seats, Diet, Bringing Dish, Notes
2. Send a Slack message to channel #dinner-prep saying "New RSVP: [Name] for [Seats] seat(s), diet: [Diet]"

For each step, tell me:
- The exact Zapier app and event to pick
- Which fields to map from the trigger to the action
- Anything that commonly goes wrong with this kind of setup

Be specific and concrete.
```

The AI gives you a step-by-step build plan. You follow it inside Zapier. The whole thing takes ten minutes the first time.

---

## Building it in Zapier

1. Go to [zapier.com](https://zapier.com), sign up if needed.
2. Top left: **Create Zap**.
3. **Trigger** — search "Google Forms" → choose **New Response in Spreadsheet** (Zapier reads form responses via the linked Sheet, not the form directly). Connect your Google account, pick the spreadsheet, pick the worksheet. **Test trigger** — it'll pull a sample response. If you have no responses yet, submit a fake one.
4. **Action 1** — search "Google Sheets" → **Create Spreadsheet Row**. Pick the destination sheet. Map each column: drag the Name field from the trigger into the Name column, and so on. Test.
5. **Action 2** — search "Slack" → **Send Channel Message**. Connect Slack, pick `#dinner-prep`, and write the message text with field placeholders dragged in. Test.
6. Toggle the Zap **on** in the top right.

Submit a real form response. Within a minute or two, it should appear in the sheet and a Slack message should land.

---

## A few more real examples

These all follow the same trigger-action pattern.

**New email with attachment → save to Drive**
- Trigger: Gmail, **New Attachment** (you can filter by label, so combine with a Gmail filter that labels "Invoices")
- Action: Google Drive, **Upload File** to a specific folder

**Calendar event created → add to to-do list**
- Trigger: Google Calendar, **New Event**
- Action: Todoist (or Things, or TickTick), **Create Task** with the event title and due date

**New row in a Sheet → send WhatsApp**
- Trigger: Google Sheets, **New Spreadsheet Row**
- Action: WhatsApp Business API via Twilio, or a tool like CallMeBot for personal use. Note: personal WhatsApp messaging is not officially supported in Zapier — you'll be using a workaround. For business numbers, it's official.

---

## Zapier vs Make vs n8n

| | Zapier | Make | n8n |
|---|---|---|---|
| Learning curve | Gentle | Medium | Steep |
| Free tier | 100 tasks/month, 2-step zaps | 1,000 ops/month, multi-step | Unlimited if self-hosted |
| Visual style | Linear list | Node graph with arrows | Node graph |
| Best for | Beginners, simple chains | Branching logic, more volume | Heavy use, technical control |

A "task" in Zapier is roughly one action run. So a zap with 2 actions, run 50 times this month, uses 100 tasks. The free tier disappears fast on anything popular. Make's "operations" count slightly differently and tend to stretch further.

n8n is the dark horse. If anyone in the group is technical and wants to host it on a $5/month VPS, you get effectively unlimited automation forever. Otherwise, start with Zapier.

---

## When NOT to automate

Honestly, most of the time. Automation pays off when:

- The trigger happens often (weekly or more)
- The action is identical every time
- The cost of forgetting to do it manually is real

Skip automation when:

- It's a one-time job. Just do it.
- The format keeps changing. The automation will break and you'll spend more time fixing it than the manual version would take.
- It's emotionally important — like writing thank-you notes. Auto-sent feels auto-sent.
- The free tier won't cover the volume and the use case doesn't justify paying.

There's a real failure mode here: people spend three hours building a zap that saves them four minutes a week. Do the math before building.

---

## What breaks, and what to do about it

Automations are silent. When they fail, no one screams. A zap can sit broken for weeks before you notice form responses aren't reaching Slack.

- **Authentication expires.** Google sometimes invalidates the connection after a password change. Zapier emails you. Reconnect.
- **The trigger app changes its API.** Rare with Google, more common with smaller apps. Zapier usually patches it; your zap might pause until you re-test it.
- **Field mappings drift.** You renamed a form question, and now Zapier doesn't know which field to read. Open the zap, re-map, save.

Check the **Task History** view in Zapier weekly for any zap you care about. Make has a similar **Scenario History** view. If you see errors, fix them before they pile up.

---

## Homework

1. Pick one real trigger-action pair from your own life — not the demo — and build it as a Zap or a Make scenario. Run it end to end with real data.
2. Plan a second, more ambitious automation with AI (multi-step, branching). Don't build it yet. Just see whether the plan looks worth the effort.
3. Audit anything you currently do manually more than once a week. Decide honestly: automate, leave alone, or just stop doing.
