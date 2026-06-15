---
title: "Bulk Calendar Events from a List"
module: "AI for Setup & Automation"
order: 1
---

# Bulk Calendar Events from a List

You have a list. Twelve workshop dates, or a season of football games, or the school holidays for the whole year. Adding them one by one in Google Calendar takes forty boring minutes. There is a faster way, and AI does the annoying part for you.

This lesson is about turning a messy paragraph or copy-pasted list into real calendar entries in a few minutes — without typing each one.

---

## The two methods that actually work

There are two ways to bulk-create events. You should know both because each fails in different situations.

1. **CSV import** — you generate a spreadsheet, save it as a `.csv` file, and import it through Google Calendar's settings. Best for ten or more events, or when you want full control over descriptions and locations.
2. **Natural-language entry** — Google Calendar's "Create" box can parse text like "Yoga every Tuesday 7pm at the gym." Good for one or two events, painful for ten.

For anything beyond a handful of entries, CSV wins.

---

## Tools we'll use

- [calendar.google.com](https://calendar.google.com) — the calendar
- [claude.ai](https://claude.ai) or [chatgpt.com](https://chatgpt.com) — to generate the CSV
- A text editor or [sheets.google.com](https://sheets.google.com) — to save the CSV

Nothing to install.

---

## The CSV format Google expects

Google Calendar's importer is strict. The column headers must match exactly, in this order, on the first row of the file:

```
Subject,Start Date,Start Time,End Date,End Time,All Day Event,Description,Location,Private
```

The minimum you actually need is `Subject`, `Start Date`, and `Start Time`. The rest are optional but recommended. Dates use the US format `MM/DD/YYYY` — this trips people up constantly. Times use 12-hour with AM/PM, like `7:00 PM`.

---

## The demo — a six-week workshop series

Say you're organizing a six-week pottery workshop. Every Wednesday 7-9pm at the community center, starting January 14, 2026. Each session has a different topic.

Open Claude or ChatGPT and paste this prompt:

```
Generate a Google Calendar CSV for a six-week pottery workshop.

Details:
- Starts Wednesday January 14, 2026
- Every Wednesday for 6 weeks
- 7:00 PM to 9:00 PM
- Location: Riverside Community Center, Room 2
- Topics by week:
  1. Wedging and centering
  2. Pulling walls
  3. Trimming
  4. Handles and spouts
  5. Glazing
  6. Final firing and pickup

Output ONLY the CSV with these exact headers in this order:
Subject,Start Date,Start Time,End Date,End Time,All Day Event,Description,Location,Private

Use MM/DD/YYYY for dates and h:MM AM/PM for times. Put the week topic in the Description. No code fence, just raw CSV.
```

The AI gives you back something like:

```
Subject,Start Date,Start Time,End Date,End Time,All Day Event,Description,Location,Private
Pottery Workshop - Week 1,01/14/2026,7:00 PM,01/14/2026,9:00 PM,False,Wedging and centering,Riverside Community Center Room 2,False
Pottery Workshop - Week 2,01/21/2026,7:00 PM,01/21/2026,9:00 PM,False,Pulling walls,Riverside Community Center Room 2,False
...
```

---

## Importing the CSV

1. Save the text as `workshop.csv`. If you paste into Google Sheets, use `File → Download → Comma-separated values`. Do not save as Excel `.xlsx`.
2. Go to [calendar.google.com](https://calendar.google.com).
3. Top right, click the gear → **Settings**.
4. Left sidebar: **Import & export**.
5. Choose the file, choose which calendar to import into, click **Import**.
6. You'll see "6 events imported." Open your calendar and check.

If it fails, the error message is usually about a malformed date. Open the CSV in a text editor, eyeball the date format, fix, re-import.

---

## ICS files — for sharing across calendars

CSV only works for Google Calendar import. If you want to send the events to someone on Outlook, Apple Calendar, or Proton — or publish a subscribable calendar — you need an `.ics` file.

You can ask AI for this too:

```
Convert that same six-week pottery workshop into a single .ics file with all 6 events. Use Europe/Istanbul timezone. Output raw ICS content only.
```

An ICS file is plain text. Save it as `workshop.ics`, double-click on Mac or Windows, and the OS will offer to import it into the default calendar app. Or attach it to an email — clicking it opens the recipient's calendar.

---

## The natural-language shortcut

For one or two events, skip the CSV. In Google Calendar, click **Create → Event** and just type the title into the title box. Google parses things like:

> Coffee with Sam Friday 3pm at Caffe Nero

It catches the time, day, and location. Good for fast single entries. Bad for repeating series because the recurrence rules don't always parse cleanly — you'll still need to set "Repeats" manually.

---

## Common mistakes

- **Wrong date format.** Google Calendar only accepts `MM/DD/YYYY` on import, even outside the US. If your AI gave you `14/01/2026`, fix it.
- **Timezones.** CSV import uses your calendar's default timezone. If you set up the calendar in one country and the events happen in another, every event will be off by hours. Set the right timezone in Calendar Settings before importing.
- **All Day Event column.** Must be `True` or `False`, not blank, not `Yes`. Blank means it defaults to a timed event with no time, which Google rejects.
- **Encoding.** If you have non-English characters (Arabic, Turkish, accented letters), save the CSV as UTF-8. Sheets does this by default. Notepad on Windows might not — use "Save As" and pick UTF-8 from the dropdown.

---

## When to skip all of this

If you have three events, just type them in. Setup time matters. The CSV trick pays off around five events and is essential by ten. Below that, the AI roundtrip costs more than the typing it saves.

---

## Homework

1. Take a real list of upcoming things from your life — a season of matches, a class schedule, a series of meetings — and generate a CSV with AI. Import it into Google Calendar.
2. Generate an `.ics` file for the same events and send it to one friend. Confirm it imports cleanly into their calendar.
3. Pick a single one-off event and try the natural-language entry in Google Calendar. Note where it gets the parsing wrong.
