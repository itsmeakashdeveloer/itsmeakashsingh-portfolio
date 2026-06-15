# Akash Singh — Portfolio

A modern, colorful, and fully responsive portfolio website built with **React + Vite**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Build for Production

```bash
npm run build
npm run preview
```

## ✏️ Customisation Guide

### 1. Personal Info
- **`src/components/Hero.jsx`** — Name, bio, social links, and stats
- **`src/components/About.jsx`** — About text, facts (location, education, availability)
- **`src/components/Contact.jsx`** — Email, phone, location

### 2. Projects
Edit the `PROJECTS` array in **`src/components/Projects.jsx`**. Each project has:
- `title`, `description`, `tags`
- `github` and `live` URLs
- `color` — accent color
- `featured` — shows "Featured" badge

### 3. Skills
Edit the `SKILL_CATEGORIES` array in **`src/components/Skills.jsx`**. Adjust skill names and levels (0–100).

### 4. Experience & Education
Edit the `EXPERIENCES` and `EDUCATION` arrays in **`src/components/Experience.jsx``.

### 5. Resume
Replace `/public/Akash_Singh_Resume.pdf` with your actual PDF.

### 6. Colors & Fonts
All design tokens live in **`src/index.css`** under `:root { ... }`.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Experience.jsx / .css
│   ├── Contact.jsx / .css
│   └── Footer.jsx / .css
├── App.jsx / .css
├── index.css
└── main.jsx
```

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--violet` | `#7C3AED` | Primary brand |
| `--pink` | `#EC4899` | Accents |
| `--cyan` | `#06B6D4` | Highlights |
| `--dark` | `#0A0A0F` | Background |
| `--font-display` | Syne | Headings |
| `--font-body` | Space Grotesk | Body text |
