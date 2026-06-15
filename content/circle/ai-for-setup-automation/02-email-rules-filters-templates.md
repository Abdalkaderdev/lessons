---
title: "Email Rules, Filters, and Templates"
module: "AI for Setup & Automation"
order: 2
---

# Email Rules, Filters, and Templates

Your inbox is a mess because every email goes to the same place. The fix is filters — rules that sort, label, archive, or forward mail automatically the moment it arrives. Most people never set them up because the Gmail filter UI is fiddly and the syntax is hidden. AI fixes that part. You describe what you want in plain words, AI gives you the exact filter conditions.

This lesson is about setting up a useful filter system once, plus canned reply templates, in one sitting.

---

## What filters can actually do

In Gmail, when a new email arrives, a filter can:

- Apply a label (Gmail's version of folders)
- Skip the inbox (archive immediately — still searchable)
- Mark as read
- Star it
- Forward to another address
- Delete it
- Never send to spam
- Always mark as important

You can combine these. A common useful combo is "apply label + skip inbox" — the email is filed but not screaming at you.

---

## Tools we'll use

- [mail.google.com](https://mail.google.com) — Gmail
- [claude.ai](https://claude.ai) or [chatgpt.com](https://chatgpt.com) — to translate plain English into filter syntax
- Optional: [outlook.live.com](https://outlook.live.com) if you use Outlook

---

## Gmail's search operators — the language filters use

Filters are just saved searches. So anything you can search for, you can filter on. The operators are:

- `from:` — sender, e.g. `from:newsletters@substack.com`
- `to:` — recipient
- `subject:` — words in the subject
- `has:attachment` — has any file attached
- `filename:pdf` — has a file with that extension
- `larger:5M` — over 5MB
- `older_than:6m` — older than 6 months
- `is:unread`, `is:starred`
- `-` in front of anything to exclude, e.g. `-from:boss@company.com`
- `OR` and parentheses for combining, e.g. `(from:a OR from:b)`

You don't need to memorize these. You ask AI.

---

## The demo — cleaning up a noisy inbox

Imagine you signed up for a bunch of things over the past year — newsletters, receipts, a community group, GitHub notifications — and now your inbox is unusable. You want:

1. Newsletters auto-archived under a "Newsletters" label so you can binge-read them on Sunday
2. Receipts labeled "Receipts" but kept in the inbox so you don't lose track of refunds
3. GitHub notifications archived under "GitHub" and marked read
4. Anything from your accountant starred and never sent to spam

Open Claude or ChatGPT and paste this:

```
I want to set up Gmail filters. For each rule below, give me:
- The Gmail search query I'd paste into the "From / Has the words" box
- Which checkboxes to tick on the action page
- One-sentence explanation

Rules:
1. Newsletters from any substack.com, beehiiv.com, or mailchimp address: label "Newsletters", skip inbox
2. Receipts (subject or body contains "receipt", "order confirmation", "invoice"): label "Receipts", keep in inbox
3. GitHub notifications (from notifications@github.com): label "GitHub", skip inbox, mark as read
4. Anything from sara.accountant@taxoffice.com: star it, never send to spam

Output as a numbered list.
```

You'll get back something like:

```
1. Filter query: from:(substack.com OR beehiiv.com OR mailchimp.com)
   Actions: Skip the Inbox, Apply label "Newsletters"
2. Filter query: subject:(receipt OR "order confirmation" OR invoice)
   Actions: Apply label "Receipts"
...
```

---

## Actually creating the filter in Gmail

For each rule:

1. In Gmail, click the search box. On the right side of the search box, click the filter icon (sliders).
2. Paste the query into the appropriate field. The simplest move is to paste the whole thing into the "Has the words" field — Gmail parses the operators correctly.
3. Click **Search** to preview which emails match. If nothing matches, your query is too narrow. If everything matches, too broad.
4. Click **Create filter** (link at the bottom of the filter box).
5. Tick the action checkboxes the AI gave you.
6. If you also want existing emails affected, tick **Also apply filter to matching conversations**.
7. **Create filter**.

Labels need to exist first. Create them by clicking **More → Create new label** in the left sidebar, or just type a new name when the filter dialog asks.

---

## Templates (canned responses)

You write the same five emails over and over. "Here are my office hours." "Sorry I missed you, can we reschedule." "Here's the invoice." Templates fix this.

Turn it on once:

1. Gmail → gear → **See all settings** → **Advanced** tab.
2. **Templates: Enable**. Save.

Then to create one: open Compose, write the email body, click the three-dot menu in the bottom-right of the compose window → **Templates → Save draft as template → Save as new template**. Name it.

To use it: in Compose, three-dot menu → **Templates → [your template name]**. The body fills in. Edit anything that needs changing, send.

AI is useful here too. Paste a real email you've sent five times and ask:

```
Turn this into a Gmail template. Replace specifics with [BRACKETED PLACEHOLDERS] I can fill in each time. Keep the tone the same.
```

---

## Out-of-office auto-replies

Gmail calls this "Vacation responder." Settings → **General** tab → scroll to **Vacation responder**. Set start and end dates, subject, message, and whether it only replies to people in your contacts.

A good vacation message is short, gives a return date, names a fallback contact, and doesn't promise to read everything when you're back (you won't). Ask AI for a draft if you're stuck:

```
Write a 4-sentence vacation auto-reply. I'm away June 20 to July 5. For urgent matters, people should contact my colleague at jordan@example.com. Friendly but not gushing.
```

---

## Outlook — the same idea, different menus

Outlook calls them **Rules**. Settings → **View all Outlook settings** → **Mail → Rules → Add new rule**. The condition/action structure is the same, the wording differs. Templates in Outlook are called **My Templates** (a sidebar add-in). The exact menus shift every six months — search "Outlook rules" and you'll find the current path.

---

## Honest warnings

- **Filters silently eat email.** "Skip the inbox" means you won't see it. If a filter is too broad, you can miss something important for weeks. Always preview matches before saving.
- **Don't auto-delete.** Tempting, never worth it. Archive instead — everything stays searchable in "All Mail."
- **Sender addresses change.** Newsletter providers rotate from-addresses. A filter that matches `substack.com` will still work; one that matches `noreply-aug2025@beehiiv.com` will silently break.
- **Filters don't sync to mobile clients perfectly.** If you use the iOS or Android Gmail app, filters still run server-side, so they work. But third-party apps (Spark, Outlook on phone) sometimes show pre-filtered states.

---

## Homework

1. Set up at least three Gmail filters in one sitting — newsletters, receipts, and one of your own choice. Use AI to write the filter queries.
2. Create two Gmail templates from emails you've actually sent more than three times. Use them at least once this week.
3. Write and schedule a vacation responder for your next time away, even if it's months out. You won't remember to do it the day before.
