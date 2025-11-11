# 🎸 Rock Portfolio - Nguyen Ha

An epic rock-themed portfolio built with React, Tailwind CSS, and pure heavy metal energy! ⚡

## 🤘 Features

- **Epic Intro Animation**: "ROCK IN!" splash screen with fire effects
- **Lightning Strikes**: Random lightning effects throughout the site
- **Music Player**: Background music control with Highway to Hell vibes
- **Responsive Design**: Looks great on all devices
- **Smooth Animations**: Glitch effects, guitar strings, vinyl records, and more
- **Rock Aesthetics**: Concert stage design, amplifier knobs, backstage passes

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
rock-portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── IntroOverlay.jsx
│   │   ├── Lightning.jsx
│   │   ├── MusicControl.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Spotlights.jsx
│   ├── styles/
│   │   └── animations.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── audio.mp3 (add your music file here)
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎵 Adding Background Music

1. Add your audio file to the `public` folder as `audio.mp3`
2. Supported formats: MP3, OGG, WAV
3. Recommended: Use royalty-free rock music

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` or modify color classes in components:
- Primary color: `red-600`
- Background: `black`, `zinc-900`
- Accent: `red-500`

### Modify Content
- **Personal Info**: Update in respective components
- **Projects**: Edit `projectsData` array in `Projects.jsx`
- **Skills**: Modify skill arrays in `Skills.jsx`
- **Social Links**: Update in `Contact.jsx`

### Fonts
Using Google Fonts:
- Bebas Neue (Headers)
- Oswald (Subheaders)
- Inter (Body text)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to your gh-pages branch
```

## 🎸 Tech Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 🔥 Performance Features

- Lightning-fast HMR with Vite
- Optimized animations with CSS
- Lazy-loaded components
- Minimal bundle size

## 📝 License

© 2024 Nguyen Ha. All Rights Reserved.

## 🤘 Rock On!

For Those About to Code... We Salute You!

---

Made with ⚡ and 🎸 by Nguyen Ha
