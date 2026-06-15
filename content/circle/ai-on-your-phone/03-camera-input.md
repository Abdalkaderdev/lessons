---
title: "Camera Input — Snap a Photo and Ask"
module: "AI on Your Phone"
order: 3
---

# Camera Input — Snap a Photo and Ask

The microphone made AI faster. The camera makes it useful in physical places. Once you've used it three or four times, it's hard to go back to typing descriptions of things that you can just show.

A phone with a camera and a connection turns into a translator, a reader, a tutor, an identification book, and a notetaker. This lesson is about what works, what doesn't, and when not to point the camera at all.

---

## How to actually do it

All three apps accept photos. The button is slightly different in each one:

- **Claude** — tap the paperclip or plus icon in the message bar, choose Camera or Photo Library.
- **ChatGPT** — tap the plus icon, choose Camera. There's also a dedicated camera button on the right of the message field in recent versions.
- **Gemini** — tap the gallery or camera icon next to the text field. On Android, you can also say "Hey Google, what's this?" while pointing the camera.

You take the picture, type or speak your question, and send. The model reads the image alongside your text.

The mental model: pretend you're showing a smart friend a photo over their shoulder. You wouldn't just send the image with no caption. Always add a question.

---

## Useful things to point a camera at

A single concrete example threads through the rest of this lesson: a handwritten shopping list on a scrap of paper. We'll keep coming back to it because it shows up in almost every category below.

### Reading handwritten notes

Snap your own handwriting and have it turned into clean text.

```
Read this handwritten note and write it out as plain text. Keep the order. If anything is unreadable, mark it with [?] instead of guessing.
```

For our shopping list, you get a typed list you can paste into Notes, share to a partner, or use as the start of a meal plan.

### Solving a problem on a whiteboard

Take a photo of any whiteboard, notebook, or napkin with a problem on it.

```
Here's a problem written on a whiteboard. Walk me through how to solve it step by step. Don't skip steps. If I made a mistake in what I wrote, point it out.
```

Works for math, logic puzzles, system diagrams, flowcharts, anything visual.

### Identifying things

Plants, birds, parts, screws, mystery kitchen tools, weird buttons on a rental car dashboard.

```
What is this, and what is it used for? Be honest if you're not sure — give me your top two guesses and what would help you tell them apart.
```

The "top two guesses" line matters. It stops the model from confidently picking one wrong answer.

### Translating signs and menus

Point at a foreign-language sign, menu, or label.

```
Translate everything in this image to English. Keep the layout. If anything is ambiguous, give me both possible meanings.
```

Useful on holiday, but also useful for any product label in a language you don't read.

### Extracting text from a receipt

Snap a receipt and turn it into something you can use.

```
This is a photo of a receipt. Pull out the merchant name, date, every line item with its price, the tax, and the total. Format as a clean table. If a line is unclear, mark it [?].
```

The shopping-list example again: after a trip to the store, snap the receipt and compare it line-by-line against your original list to see what you bought that wasn't on the list.

### Reading a document you didn't print

A page in a book, a printed letter you got in the mail, a contract on someone else's desk that they showed you.

```
Read this page and give me:
1. A two-sentence summary of what it's about
2. Any dates, names, amounts, or deadlines mentioned
3. Anything that looks like an action I'd need to take
```

---

## Building a habit: photo plus question

The mistake people make at first is sending a photo with no text. The model will do something — usually describe the image — but rarely the right thing. Always pair the photo with a question.

A general-purpose prompt that works on almost any photo:

```
I'm sending you a photo. Before answering anything else, tell me in one sentence what you see. Then answer this: [your question here].
```

That first sentence is a sanity check. If it misread what was in the image, you'll know immediately and can correct it.

---

## Where the camera fails

It is not magic. The honest list of things that break it:

- **Small text.** Tiny print on a medicine label or the back of a tax form is often misread. Crop in tight, increase brightness, take two or three shots from slightly different angles, and ask the model to reconcile them.
- **Glare.** Glossy receipts, laminated menus, and screens reflect light. Tilt the surface, or your phone, until the glare moves off the text.
- **Handwriting.** Neat block letters are read well. Cursive, messy doctor handwriting, or notes with arrows and crossings-out fail more often than they succeed. Always check the output against the original.
- **Multi-page documents.** Cameras read one page at a time. For long things, take separate photos and tell the model the order.
- **Diagrams with overlapping lines.** Complex flowcharts get misread. Crop to the part you care about.
- **Confident wrong answers.** This is the dangerous failure. The model will sometimes invent a plausible-looking number that isn't there. For anything that matters — prices, dates, dosages, contract terms — read the original yourself and treat the AI output as a draft, not a source of truth.

A useful sanity-check line to add to any "read this" prompt:

```
If you are not at least 90% sure of a number or a name, mark it [?] instead of writing it down.
```

---

## Privacy — what not to point at

The photo goes to the company's servers. That's how it gets read. So:

- Don't snap things with other people's faces, IDs, passports, bank cards, or medical records and send them off casually. If you must, crop tightly so only the part you actually need is visible.
- Don't photograph confidential work documents that you wouldn't email externally. Pretend the AI provider is a stranger you handed the photo to.
- Be careful with what's in the background. A photo of your handwritten shopping list might also catch a credit card on the table next to it.
- Check the app's data settings the same as for voice — turn off "use my data for training" if you'd rather it not be kept.

The shopping-list example is harmless. A photo of a piece of mail with your full address and account number is not. Same camera, very different stakes.

---

## A small tip that changes everything

Use the camera live, not after the fact. Standing in the supermarket holding a jar of something with a label you can't read, snap it then, ask then, get the answer then. Most of the value of camera input shows up at the moment you're physically in front of the thing. Waiting until you're home defeats the point.

---

## Homework

1. Take a photo of any handwritten note you wrote in the last week and have an AI app convert it to clean typed text. Note where it failed.
2. Find any object in your home that you don't know the name of — a screw, a plant, a kitchen tool, a button on an appliance — and identify it with the camera. Use the "top two guesses" wording.
3. Snap a receipt from your last shop or meal out and ask the AI to pull it into a clean table. Check every line against the original.
4. Open the data and privacy settings of whichever app you use for photos and decide, deliberately, whether to allow training on your images.
