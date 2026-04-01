---
title: "Build a Website"
module: "AI for Websites"
order: 3
---

# Lesson 03: Build a Website

## What You'll Learn
- HTML structure and common tags
- CSS styling basics
- Using Claude to help you build a real page
- Creating a personal page from scratch

---

## 1. HTML Basics

HTML (HyperText Markup Language) is the skeleton of every website.

### Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

### Common Tags
| Tag | Purpose | Example |
|-----|---------|---------|
| `<h1>` to `<h6>` | Headings | `<h1>Welcome</h1>` |
| `<p>` | Paragraph | `<p>Hello world</p>` |
| `<a>` | Link | `<a href="https://...">Click</a>` |
| `<img>` | Image | `<img src="photo.jpg" alt="My photo">` |
| `<div>` | Container | Groups elements together |
| `<ul>`, `<li>` | List | Bullet point lists |

---

## 2. CSS Basics

CSS (Cascading Style Sheets) controls how your page looks.

### Adding CSS
Put a `<style>` tag inside `<head>`, or link an external file:
```html
<link rel="stylesheet" href="style.css">
```

### Key Properties
```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #1a1a2e;
    color: #ffffff;
    margin: 0;
    padding: 0;
}

h1 {
    font-size: 2.5rem;
    text-align: center;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
```

---

## 3. Using Claude to Build

Here's how to use Claude effectively for web development:

### Asking for a Full Page
> "Build me a personal portfolio page with HTML and CSS. Include: my name 'Omar', a short bio, a skills section with HTML/CSS/JavaScript listed, and a contact section with email. Use a dark theme with blue accents. Make it responsive."

### Asking for a Specific Section
> "Add a project showcase section with 3 cards. Each card should have a title, description, and a link. Use CSS grid for the layout."

### Asking Claude to Explain
> "Explain what `display: flex` and `justify-content: center` do in CSS"

---

## 4. Hands-On: Build Your Personal Page

### Step 1: Create the Files
Create a folder called `my-portfolio` with two files:
- `index.html`
- `style.css`

### Step 2: Start with Structure
Use Claude to help you build section by section:
1. First ask for the HTML structure with a header, about, skills, and contact sections
2. Then ask for CSS styling
3. Review the code — make sure you understand each part

### Step 3: Customize
- Change the text to be about you
- Pick your own colors (try [coolors.co](https://coolors.co) for color palettes)
- Add your own content

### Step 4: Test
- Open `index.html` in your browser
- Resize the window to check if it's responsive
- Fix any issues with Claude's help

---

## 5. Key Takeaways
- HTML = structure, CSS = style
- Always understand the code before using it
- Claude is great for generating starting points — then you customize
- Test your page at different screen sizes

---

## Homework
1. Build a personal portfolio page with at least 4 sections
2. Use CSS to make it look clean and professional
3. Push it to your GitHub repository
4. Show it to someone and ask for feedback
