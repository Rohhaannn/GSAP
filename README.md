# 🍸 Velvet Pour — GSAP Cocktail Landing Page

A dark, moody cocktail bar landing page built to practice advanced **GSAP** animations with **React** and **Vite**. Smooth scroll-triggered reveals, a hero video/text sequence, and an animated menu bring the "Velvet Pour" brand to life.

**🔗 Live Demo:** [gsap-blue-six.vercel.app](https://gsap-blue-six.vercel.app/)

---

## ✨ Features

- **Animated Hero Section** — large kinetic typography (e.g. "MOJITO") paired with a cocktail visual and scroll-driven motion
- **Smooth Scroll Animations** powered by GSAP + ScrollTrigger
- **Cocktail Menu** section showcasing drinks with name, origin, and price
- **About / The Art / Contact** sections with staggered entrance animations
- **Responsive Navbar** (Cocktails, About Us, The Art, Contact)
- Fully responsive layout, optimized for desktop and mobile

## 🛠️ Tech Stack

- **React** — UI components
- **Vite** — build tool & dev server
- **GSAP** (GreenSock Animation Platform) + **ScrollTrigger** — animations
- **Tailwind CSS** — utility-first styling
- **pnpm** — package management
- Deployed on **Vercel**

## 📁 Project Structure

```
gsap-cocktails/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Cocktails.jsx
│   │   ├── Menu.jsx
│   │   ├── Art.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── constants/
│   │   └── index.js       # nav links, cocktail list data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/installation) installed globally

### Installation

```bash
# Clone the repository
git clone https://github.com/Rohhaannn/GSAP.git

# Move into the project folder
cd GSAP/gsap-cocktails

# Install dependencies
pnpm install
```

### Run Locally

```bash
pnpm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## 📸 Preview

![Velvet Pour Hero](./public/screenshots/preview.png)

## 🧠 What I Practiced

This project was built as part of learning **GSAP** — specifically:
- Timeline sequencing
- ScrollTrigger-based reveals
- Text/character split animations
- Coordinating animations across multiple sections

## 📄 License

This project is for personal learning/practice purposes.

---

Built with 🍹 and GSAP by [Rohan](https://github.com/Rohhaannn)
