---
title: "Image Prompt Engineering"
module: "AI for Images"
order: 1
---

# Image Prompt Engineering

## What You'll Learn

- How AI image generation works (the real explanation, not the boring one)
- How to break down a great image prompt into its building blocks
- How to use styles, moods, and compositions to get what you want
- How to use negative prompts to avoid bad outputs
- How to iterate on your results like a pro

---

## How AI Image Generation Actually Works

Let's skip the textbook explanation. Here's the real version:

Imagine you had millions of labeled photos. "Dog running in a park." "Woman in red dress under neon lights." "Minimalist white office." The AI studied all of these — not just the pictures, but the relationship between the words and the visuals.

Now when you type a prompt, the AI reverse-engineers it: "What would an image described this way look like?" It builds the image from noise — literally starting with static and gradually shaping it into something that matches your description.

That's why:
- It can make things that don't exist
- It can hallucinate weird details (extra fingers, floating eyes)
- Small word changes = big visual changes
- Specific descriptions = better results

The model doesn't understand your prompt the way a human would. It's matching patterns. The better your prompt matches patterns it learned, the better the output.

---

## The Tools You'll Use

Quick recap from the last lesson, with more depth this time:

### DALL-E 3 (inside ChatGPT)
The easiest to start with. You can have a conversation with it — it asks clarifying questions, adjusts based on feedback, and understands fairly natural language.

Best for: realistic images, illustrations, concept art, when you want to iterate through conversation.

### Midjourney
The gold standard for artistic quality. Runs through Discord. Uses slightly different syntax.

Best for: stunning visuals, cinematic shots, branded aesthetics, art direction.
The catch: you have to learn its specific commands.

### Adobe Firefly
Best for design work. Safe to use commercially. Integrates with Photoshop and Canva.

Best for: backgrounds, textures, product mockups, professional graphics.

### Bing Image Creator
Free, no account needed, powered by DALL-E. Great for quick experiments.

Best for: learning and experimenting without spending money.

---

## The Core Anatomy of a Prompt

Every great image prompt has these layers:

```
SUBJECT → CONTEXT → STYLE → MOOD → LIGHTING → CAMERA/TECH
```

You don't always need all of them. But the more layers you include, the more control you have.

### Let's build one from scratch:

**Subject only (bad):**
> "a woman"

**Subject + context:**
> "a young woman sitting at a cafe"

**+ Style:**
> "a young woman sitting at a cafe, digital illustration style"

**+ Mood:**
> "a young woman sitting at a cafe, digital illustration style, peaceful and contemplative mood"

**+ Lighting:**
> "a young woman sitting at a cafe, digital illustration style, peaceful and contemplative mood, soft afternoon light coming through the window"

**+ Camera/Tech:**
> "a young woman sitting at a cafe, digital illustration style, peaceful and contemplative mood, soft afternoon light coming through the window, shallow depth of field, warm color palette, highly detailed"

The last version will produce something dramatically better than the first.

---

## Style: The Most Powerful Variable

Style is the single biggest lever you have. The exact same subject in different styles looks like completely different images.

### Art styles to experiment with:
- `photorealistic` — looks like a real photograph
- `digital art` — clean, crisp, modern illustration
- `oil painting` — thick brushstrokes, classical feel
- `watercolor` — soft, translucent, dreamy
- `anime / manga` — Japanese animation style
- `pixel art` — retro game aesthetic
- `sketch / pencil drawing` — rough, hand-drawn look
- `flat design` — minimal, graphic, vector-like
- `3D render / CGI` — like a video game cutscene or Pixar movie
- `cyberpunk` — neon lights, dark city, futuristic
- `vintage / retro` — faded colors, old film look
- `brutalist` — raw, harsh, concrete aesthetic

### Referencing specific artists or styles:
- `in the style of Studio Ghibli` — magical realism, soft hand-drawn
- `in the style of Banksy` — street art, stencil, politically charged
- `shot on film, like a 1970s photograph` — grain, color shift, nostalgia
- `cinematic, like a Christopher Nolan film` — dramatic lighting, epic scale
- `editorial, like a Vogue spread` — fashion photography, high-end feel

> Prompt: "A futuristic city at night, cyberpunk style, neon reflections on wet streets, cinematic like Blade Runner, ultra detailed, 4K"

---

## Mood and Atmosphere

Mood tells the AI how the image should *feel*, not just what it contains.

### Mood keywords that work:
- **Emotions:** melancholy, joyful, tense, peaceful, mysterious, playful
- **Atmosphere:** ethereal, gritty, dreamy, dark, vibrant, serene, chaotic
- **Energy:** explosive, still, intense, whimsical, haunting

> Prompt: "A lone figure standing at the edge of a cliff at sunset. Mood: contemplative and melancholy. Cinematic wide shot. Warm but fading light. Sense of solitude."

The word "melancholy" alone will shift the color grading, composition, and feel of the image toward something darker and more emotional.

---

## Composition and Camera Angles

Where the "camera" is positioned changes everything.

### Angles and distances:
- `close-up / extreme close-up` — face, hands, detail
- `medium shot` — person from waist up
- `wide shot / establishing shot` — person in environment
- `bird's eye view / top-down` — looking straight down
- `low angle` — looking up at the subject (makes things feel powerful)
- `eye level` — neutral, natural
- `Dutch angle` — slightly tilted (creates unease or drama)
- `over-the-shoulder shot` — classic cinematic framing

### Composition techniques:
- `rule of thirds` — subject slightly off-center
- `symmetrical composition` — perfectly balanced, like Wes Anderson
- `leading lines` — road/hallway/path drawing eye to subject
- `negative space` — lots of empty space around the subject

> Prompt: "Low angle shot of a young man in a suit walking through a busy city street, looking straight ahead with confidence. Dramatic lighting. Rule of thirds composition. Cinematic."

---

## Lighting: The Secret Weapon

Lighting is what separates amateur results from stunning ones. Use these terms:

| Lighting Type | Feel |
|---|---|
| Golden hour | Warm, soft, romantic, cinematic |
| Blue hour | Cool, moody, reflective, dusk/dawn |
| Studio lighting | Clean, professional, high-fashion |
| Neon lighting | Vibrant, cyberpunk, nightlife |
| Candlelight | Intimate, warm, dramatic shadows |
| Overcast / diffused | Soft, even, no harsh shadows |
| Backlight / rim light | Subject outlined by light, dramatic silhouette |
| High contrast / chiaroscuro | Strong dark and light, painterly, intense |

> Prompt: "A close-up portrait of a young man, rim lighting from behind, dramatic shadow on face, moody atmosphere, cinematic, sharp focus on eyes"

---

## Negative Prompts

Negative prompts tell the AI what to avoid. This is especially powerful in Midjourney.

### In Midjourney:
Add `--no [stuff]` at the end:
> "a portrait photo of a teenager, natural light, film photography style --no text, watermark, extra limbs, distorted face, blurry"

### In DALL-E (ChatGPT):
Just include it in your prompt naturally:
> Prompt: "...avoid any text, watermarks, extra fingers, distorted faces, or blurry elements"

### Common things to put in negative prompts:
- `extra fingers / extra limbs` (AI still makes mistakes with hands)
- `distorted face / uncanny` (avoids the creepy AI look)
- `text / watermark / signature` (keeps image clean)
- `blurry / low quality / pixelated`
- Colors you don't want: `no green tones`
- Specific elements you want to exclude from the scene

---

## Iterating on Results

Your first generation is a starting point. Here's how to refine:

### If the composition is off:
> "Same image but reframe it as a wider shot to show more of the environment"

### If the style is slightly off:
> "Same image but push the style further toward [more dramatic / more minimalist / more colorful / darker]"

### If you like parts of it:
> "Keep the lighting and color palette but change the subject to [X]"

### If you want to explore variations:
> "Generate 4 variations of this concept with different moods — one joyful, one melancholy, one mysterious, one energetic"

### In ChatGPT's DALL-E specifically:
You can just say in plain English:
> "I like this but can you make the background more dramatic? And change her outfit to streetwear?"

This conversational approach is one of DALL-E's biggest advantages over Midjourney.

---

## Midjourney-Specific Tips

If you're using Midjourney (the Discord-based one), here are some useful commands:

- `--ar 16:9` — sets aspect ratio (great for YouTube thumbnails or widescreen)
- `--ar 1:1` — square (great for Instagram posts)
- `--ar 9:16` — vertical (great for TikTok/stories)
- `--v 6` — use the latest model version
- `--stylize 100` — how strongly Midjourney applies its artistic style (0-1000)
- `--chaos 20` — how random the variations are (0-100)
- `--no [things]` — negative prompt

> "/imagine prompt: a cyberpunk street food vendor in Tokyo, neon lights, rain-slicked streets, cinematic, photorealistic, --ar 16:9 --v 6 --no text, signs in English"

---

## Building a Prompt Library

The smartest creators save their best prompts. Start a document called "Prompt Library" where you save:

- Your best results with the full prompt that made them
- Style formulas that work for your brand
- Lighting combinations you love
- Mood phrases that reliably produce what you want

This means you don't start from scratch each time — you remix what already works.

---

## Exercises

- [ ] Pick any subject. Write 5 different prompts for it — each with a different style (photorealistic, anime, oil painting, flat design, watercolor). Generate all 5 and compare how dramatically different they are.

- [ ] Take one of your generated images and iterate on it at least 3 times — change the mood, then the composition, then the lighting. Track how each change affects the output.

- [ ] Write a prompt that uses all 6 layers of the anatomy: subject, context, style, mood, lighting, and camera/tech. Generate it and compare to what you'd get with just "subject + style."

- [ ] Generate 5 variations of a portrait: same person, 5 different lighting setups (golden hour, neon, studio, candlelight, backlight). Notice how lighting alone changes the entire feel.

- [ ] Start your Prompt Library. After every generation session, save your 2 best prompts. By next week you should have at least 10 saved.

---

## Homework

1. Generate 10 images this week — experimenting with different tools and styles
2. For each image, write down what worked and what didn't in the prompt
3. Build your Prompt Library with at least 10 entries
4. Pick your single best result and be ready to explain why it worked
5. Next lesson: we'll use your best prompts to create a real design project from start to finish

**The difference between "I can't get what I want" and "I can generate anything I imagine" is entirely in your ability to write prompts. That skill takes practice — so practice every day.**
