# Chugz Landing Page

A modern landing page for the Chugz app built with Vite, React, TypeScript, and Material-UI.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library with TypeScript
- **Material-UI (MUI)** - Component library and design system
- **React Router** - Client-side routing
- **Firebase Hosting** - Production deployment

## 📋 Requirements

- **Node.js** version 20.19.0 or higher
- **npm** or **yarn** package manager
- **Firebase CLI** for deployment

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This will start the development server at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with production-ready files.

4. **Preview production build:**
   ```bash
   npm run preview
   ```
   This serves the built files locally for testing.

## 🎨 Theming & Brand Customization

The Chugz brand theme is configured in `src/theme/index.ts` with the following color palette:

- **Background**: `#1B1523` (very dark plum)
- **Primary**: `#6F3CC3` (Chugz purple)  
- **Primary Deep**: `#4C1D95` (hover states)
- **Accent Lavender**: `#A78BFA` (highlights)
- **Foam**: `#FFF7E6` (light text/cards)
- **Beer**: `#FFC857` (micro-accent, badges)

### Customizing Colors

1. Open `src/theme/index.ts`
2. Update the palette colors in the `createTheme()` configuration
3. The theme automatically applies to all MUI components

### Adding Brand Assets

Place your brand assets in `src/assets/`:
- Logo files (SVG recommended)
- App icons (192x192, 512x512 PNG)
- Social media images (Open Graph, Twitter cards)
- App store badges

## 🧭 Routes & Navigation

The app uses React Router with two main routes:

- **`/`** - Landing page with hero, features, and download sections
- **`/privacy`** - Privacy Policy page

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Add the route to `src/AppRouter.tsx`
3. Update navigation in `src/components/Nav.tsx`

## 📝 Content Editing

### Landing Page Content

Edit content in `src/pages/Landing.tsx`:

- **Hero Section**: Main headline, subtitle, and CTA buttons
- **Feature Cards**: Three key app features with icons and descriptions  
- **Download Section**: App store buttons and coming soon messaging

### Privacy Policy Content

Edit policy content in `src/pages/Privacy.tsx`:

- Replace placeholder sections with your legal privacy policy
- Update contact email and support information
- Ensure compliance with applicable privacy laws

### Navigation & Branding

Edit navigation in `src/components/Nav.tsx`:

- Update brand name/logo
- Add or remove navigation links
- Customize mobile menu behavior

## 🚀 Firebase Deployment

### Initial Setup

1. **Install Firebase CLI globally:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase hosting:**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project (or create a new one)
   - Set public directory to `dist`
   - Configure as single-page app: **Yes**
   - Don't overwrite `index.html`

4. **Update project ID:**
   - Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID

### Deploying

**Quick deploy (recommended):**
```bash
npm run deploy
```

**Manual steps:**
```bash
npm run build
firebase deploy --only hosting
```

### Custom Domain

1. In Firebase Console, go to Hosting
2. Add your custom domain (e.g., `chugz.app`)
3. Follow DNS configuration instructions
4. SSL certificates are automatically provisioned

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to Firebase |
| `npm run firebase:login` | Login to Firebase CLI |
| `npm run firebase:init` | Initialize Firebase hosting |

## 📁 Project Structure

```
chugz-landing/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── Nav.tsx       # Navigation component
│   ├── pages/            # Route pages
│   │   ├── Landing.tsx   # Home/landing page
│   │   └── Privacy.tsx   # Privacy policy page
│   ├── theme/            # MUI theme configuration
│   │   └── index.ts      # Custom theme with Chugz colors
│   ├── assets/           # Brand assets and media
│   ├── AppRouter.tsx     # React Router configuration
│   └── main.tsx         # App entry point
├── public/              # Static assets
├── firebase.json        # Firebase hosting config
├── .firebaserc         # Firebase project settings
└── package.json        # Dependencies and scripts
```

## 🛡️ Environment Variables

Copy `env.example` to `.env` and configure:

```bash
cp env.example .env
```

Available variables (prefix with `VITE_` for client access):
- `VITE_FIREBASE_PROJECT_ID` - Firebase project ID
- `VITE_API_BASE_URL` - API endpoint
- `VITE_APP_STORE_URL` - iOS App Store link
- `VITE_GOOGLE_PLAY_URL` - Google Play Store link

## 🔍 SEO & Performance

### SEO Features

- Semantic HTML structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Proper heading hierarchy
- Alt text for images
- Structured data ready

### Performance Features

- Vite's optimized build process
- Tree shaking for smaller bundles
- Static asset caching via Firebase
- Responsive images and lazy loading

## 🎯 Accessibility

The app includes accessibility features:

- High contrast color ratios (WCAG AA compliant)
- Keyboard navigation support
- Screen reader friendly markup
- Focus management
- Responsive design for all devices

## 📞 Support

For questions about this codebase:

1. Check the TODO comments in the code for implementation guidance
2. Review MUI documentation for component customization
3. See Firebase Hosting docs for deployment issues

---

Built with ❤️ for the Chugz community