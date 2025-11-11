# 🎸 Complete Setup Guide - Rock Portfolio

## Step-by-Step Installation

### Option 1: Fresh Vite + React Setup (Recommended)

#### 1. Create New Vite Project
```bash
npm create vite@latest rock-portfolio -- --template react
cd rock-portfolio
```

#### 2. Install Dependencies
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### 3. Replace Files
- Delete the default `src` folder
- Copy all files from the provided `rock-portfolio` folder into your project
- Ensure the structure matches:
  ```
  rock-portfolio/
  ├── src/
  ├── public/
  ├── index.html
  ├── package.json
  ├── tailwind.config.js
  ├── vite.config.js
  └── postcss.config.js
  ```

#### 4. Add Background Music (Optional)
- Place your audio file in `public/audio.mp3`
- Or update the audio path in `App.jsx`:
  ```javascript
  const audio = new Audio('/your-audio-file.mp3');
  ```

#### 5. Start Development Server
```bash
npm run dev
```

Visit: `http://localhost:5173`

---

### Option 2: Direct Setup (Using Provided Files)

#### 1. Navigate to Project Folder
```bash
cd rock-portfolio
```

#### 2. Install All Dependencies
```bash
npm install
```

#### 3. Start Development
```bash
npm run dev
```

---

## 🔧 Configuration Files Explained

### `tailwind.config.js`
Configures Tailwind CSS with custom fonts and extensions.

### `vite.config.js`
Vite configuration with React plugin.

### `postcss.config.js`
PostCSS configuration for Tailwind.

### `package.json`
All project dependencies and scripts.

---

## 📦 Project Dependencies

### Main Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer

### Dev Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS transformation tool
- `vite` - Build tool

---

## 🎨 Customization Guide

### 1. Personal Information

**Navigation (Navigation.jsx)**
```javascript
<span className="text-red-500">YOUR_FIRST_NAME</span>
<span className="text-white">YOUR_LAST_NAME</span>
```

**Footer (Footer.jsx)**
```javascript
YOUR_NAME - WORLD TOUR {currentYear}
```

### 2. Projects

Edit `projectsData` array in `Projects.jsx`:
```javascript
const projectsData = [
  {
    icon: 'fa-brain',
    title: 'YOUR PROJECT NAME',
    description: 'Your project description...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more projects...
];
```

### 3. Skills

Edit skill arrays in `Skills.jsx`:
```javascript
const openingAct = [
  { name: 'Your Skill', level: 5 },
  // Add more...
];
```

### 4. Social Links

Update in `Contact.jsx`:
```javascript
const socialLinks = [
  {
    name: 'GitHub',
    icon: 'fa-github',
    url: 'https://github.com/YOUR_USERNAME',
    brand: true,
  },
  // Add more...
];
```

### 5. Colors

**Primary Red**: `red-600`, `red-500`, `red-700`
**Backgrounds**: `black`, `zinc-900`, `zinc-800`

Change in Tailwind classes throughout components.

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

Generates optimized files in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel login
vercel
```

### Deploy to Netlify
1. Build: `npm run build`
2. Upload `dist` folder to Netlify
3. Or connect GitHub repo for auto-deploy

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run build
npm run deploy
```

---

## 🎵 Audio Setup

### Supported Formats
- MP3 (recommended)
- OGG
- WAV

### Add Your Audio
1. Place file in `public/audio.mp3`
2. Or update path in `App.jsx`:
```javascript
const audio = new Audio('/path/to/your/audio.mp3');
```

### Disable Audio
In `App.jsx`, comment out audio initialization:
```javascript
// const audio = new Audio('/audio.mp3');
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Tailwind Styles Not Loading
```bash
# Rebuild
rm -rf node_modules
npm install
npm run dev
```

### Audio Not Playing
- Check browser console for errors
- Ensure audio file exists in `public/`
- Some browsers block autoplay (click music button)

### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop: Full experience with all animations
- Tablet: Optimized layout
- Mobile: Touch-friendly, reduced animations

Test using browser dev tools (F12 → Device Toolbar).

---

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Load**: Components load as needed
3. **Minify Audio**: Compress audio files
4. **CDN**: Host assets on CDN for faster load

---

## 🔒 Environment Variables

Create `.env` file for sensitive data:
```
VITE_API_KEY=your_key_here
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

## 🤘 Support

Having issues? Check:
1. Node version: `node --version` (should be v18+)
2. npm version: `npm --version`
3. Clear cache: `npm cache clean --force`

---

## 🎸 Rock On!

Your portfolio is ready to unleash the thunder! ⚡

For Those About to Code... We Salute You! 🤘
