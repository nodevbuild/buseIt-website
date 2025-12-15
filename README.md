# 🚀 BUSEit Landing Page

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.7-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**BUSEit** - The trusted marketplace for verified pre-owned goods. Buy safely, sell effortlessly, all inside one app.

A modern, fully responsive landing page built with React, Vite, and cutting-edge web technologies.

---

## ✨ Features

### 🎨 **Beautiful Design**
- **Glassmorphism Effects** - Modern, premium UI with frosted glass aesthetics
- **Gradient Text** - Eye-catching orange gradient branding
- **Smooth Animations** - Micro-interactions and hover effects throughout
- **Dark Mode Ready** - Professional color palette with #FFF5F0 background

### 📱 **Fully Responsive**
- **Mobile-First Approach** - Optimized for all screen sizes (≤768px, ≤360px)
- **Touch-Friendly** - Large buttons and proper spacing for mobile devices
- **Adaptive Layouts** - Content reorganizes beautifully on smaller screens
- **Hidden Illustrations** - Smart image handling for optimal mobile performance

### 🔥 **Key Sections**

#### 1. **Hero Section**
- Compelling headline with gradient text
- Animated waiting list counter
- Premium glassmorphic navbar with smooth scroll

#### 2. **How It Works**
- Interactive card carousel with navigation arrows
- 3 beautifully designed cards explaining the process
- Tracking cards with realistic offset animations

#### 3. **For Busy Users**
- Feature highlights with custom illustrations
- Responsive card layout
- Strategic CTA placement

#### 4. **Features Grid**
- 6 feature cards showcasing advantages
- "The BUSEit Advantage" section
- Icon-based visual communication

#### 5. **FAQ Section**
- Interactive accordion with smooth animations
- Buyer/Seller toggle switch
- "Still need help?" CTA with React Router navigation

#### 6. **Footer**
- Social media links (Instagram, Facebook, LinkedIn)
- Navigation links and contact information
- Stylish "BUY•USE•SELL" watermark

#### 7. **Additional Pages**
- **Join Waiting List** - Form with avatar group and validation
- **Waitlist Confirmation** - Success screen with queue position
- **404 Error Page** - User-friendly error handling

---

## 🛠️ Tech Stack

### **Core**
- **React 18.3.1** - UI library
- **Vite 7.2.7** - Build tool and dev server
- **React Router DOM 7.1.1** - Client-side routing

### **Styling**
- **Vanilla CSS** - Custom, modular stylesheets
- **CSS Variables** - Centralized design system
- **Media Queries** - Responsive breakpoints

### **Development**
- **ESLint** - Code quality and consistency
- **React Hooks** - Modern state management

---

## 📦 Installation

### Prerequisites
- **Node.js** (v16.x or higher)
- **npm** or **yarn**
- **Git**

### Clone the Repository

```bash
# HTTPS
git clone https://github.com/Mohith32/BUSEit-LandingPage.git

# SSH
git clone git@github.com:Mohith32/BUSEit-LandingPage.git

# Navigate to project directory
cd BUSEit-LandingPage
```

### Install Dependencies

```bash
npm install
```

---

## 🚀 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

This will start the server at `http://localhost:5173/`

**Access from other devices on the same network:**

```bash
npm run dev -- --host 0.0.0.0
```

Then visit `http://YOUR_IP:5173/` from any device on your network.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and fix issues:

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

---

## 📁 Project Structure

```
BUSEit-LandingPage/
├── public/                      # Static assets
│   ├── logos/                   # Brand logos
│   ├── Hero/                    # Hero section images
│   ├── HowItWorks/              # How It Works illustrations
│   ├── FeaturesSection/         # Feature card images
│   ├── FAQ's/                   # FAQ icons
│   ├── footer/                  # Footer icons
│   ├── JoinWaitingList/         # Waitlist images
│   ├── WaitListConfirmation/    # Confirmation images
│   └── 404Screen/               # Error page images
├── src/
│   ├── components/              # React components
│   │   ├── Navbar/              # Navigation bar
│   │   ├── Hero/                # Hero section
│   │   ├── HowItWorks/          # How It Works cards
│   │   ├── ForBusyUsers/        # For Busy Users section
│   │   ├── Features/            # Features grid
│   │   ├── FAQs/                # FAQ accordion
│   │   ├── Footer/              # Footer section
│   │   ├── JoinWaitingList/     # Waiting list form
│   │   ├── WaitlistConfirmation/# Success confirmation
│   │   └── Error404/            # 404 error page
│   ├── styles/                  # Global styles
│   │   └── designSystem.css     # Design tokens & variables
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App-level styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global CSS reset
├── .eslintrc.cjs                # ESLint configuration
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # This file
```

---

## 🎨 Design System

### **Colors**

```css
/* Primary Colors */
--primary-orange: #FF5202;
--primary-dark: #D44200;
--vibe-brown: #331000;

/* Background Colors */
--background-cream: #FFF5F0;
--background-light: #F2F2F2;

/* Text Colors */
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-gray: #999999;
```

### **Typography**

- **Primary Font**: SF Pro Display
- **Heading Sizes**: 48px, 32px, 24px
- **Body Sizes**: 20px, 16px, 14px, 12px
- **Line Heights**: 100%, 120%, 140%

### **Breakpoints**

```css
/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 360px) { }
```

---

## 🔧 Configuration

### Vite Config

The project uses Vite for fast development and optimized builds. Key configurations:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
```

### ESLint Config

Code quality rules for React development:

```javascript
{
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ]
}
```

---

## 📱 Responsive Design

The landing page is fully responsive with:

- **Desktop**: Full-featured layout with illustrations
- **Tablet**: Adaptive grid layouts
- **Mobile (≤768px)**: Stacked layouts, hidden illustrations, touch-optimized
- **Small Mobile (≤360px)**: Compact layouts, reduced font sizes

### Mobile Optimizations

- ✅ Hidden illustrations to reduce load time
- ✅ Full-width inputs and buttons (52px height minimum)
- ✅ Centered content with proper padding
- ✅ Reduced font sizes for readability
- ✅ Touch-friendly interactive elements

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
npm run build

# Deploy dist/ folder to Netlify
```

### GitHub Pages

```bash
# Add to package.json
"homepage": "https://yourusername.github.io/BUSEit-LandingPage",

# Add deploy script
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

---

## 📸 Screenshots

### Desktop View
- Hero section with gradient text and glassmorphic navbar
- Interactive "How It Works" carousel
- Feature grid with premium card designs

### Mobile View
- Responsive stacked layouts
- Touch-optimized forms and buttons
- Clean, minimal design without illustrations

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Code Style

- Use **Vanilla CSS** (no Tailwind)
- Follow **modular component structure**
- Write **semantic HTML**
- Add **meaningful comments**
- Ensure **mobile responsiveness**

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**BUSEit** - *The trusted marketplace for verified pre-owned goods*

- **Developer**: [Mohith32](https://github.com/Mohith32)
- **Repository**: [BUSEit-LandingPage](https://github.com/Mohith32/BUSEit-LandingPage)

---

## 🔗 Links

- **Website**: Coming Soon
- **Instagram**: [@buseit.club](https://www.instagram.com/buseit.club/)
- **Facebook**: [buseit.club](https://www.facebook.com/buseit.club)
- **LinkedIn**: [buseit](https://www.linkedin.com/company/buseit)
- **Email**: support@buseit.club

---

## 📞 Support

For support, email **support@buseit.club** or join our waiting list through the landing page.

---

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Vite Team** for the blazing-fast build tool
- **Google Fonts** for SF Pro Display typography
- **Community** for feedback and support

---

<div align="center">

**Made with ❤️ by the BUSEit Team**

[⬆ Back to Top](#-buseit-landing-page)

</div>
"# buseIt-website" 
