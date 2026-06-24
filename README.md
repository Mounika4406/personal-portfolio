# Interactive Personal Portfolio

A fully responsive, modern, and animated personal portfolio website built from scratch. This project showcases my frontend development skills, featuring advanced CSS effects, parallax scrolling, on-scroll viewport animations, and performance optimizations.

## 🚀 Live Demo
The project is deployed and publicly accessible:
- **Live URL**: [https://personal-portfolio-mounika4406.vercel.app/](https://personal-portfolio-mounika4406.vercel.app/)

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (scroll triggers, viewport tracking, responsive variants)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing/Navigation**: [React Scroll](https://github.com/fabiandev/react-scroll) (smooth scrolling)

## ✨ Core Features
1. **Fully Responsive Design**: Fluid layouts optimized for Mobile (375px), Tablet (768px), and Desktop (1280px) viewports.
2. **Mobile Hamburger Menu**: Collapsible navigation overlay for seamless mobile browsing.
3. **Parallax Scrolling**: Background glowing depth particles that move at a different rate than the scroll speed for an immersive 3D effect.
4. **On-Scroll Animations**: Viewport-triggered scroll animations (staggered card reveals, element slide-ups) with hardware-accelerated transforms.
5. **Reduced Motion Support**: Implements `@media (prefers-reduced-motion: reduce)` rules globally to respect user accessibility preferences.
6. **SEO & Performance Best Practices**:
   - WebP image assets compressed to under 25KB.
   - Lazy loading enabled on below-the-fold content.
   - Clean meta descriptions and title elements.
   - Zero unused boilerplate CSS files or dependencies.

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Mounika4406/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server locally:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the site.

4. Build the project for production:
   ```bash
   npm run build
   ```
   This will compile the assets into the `dist/` directory, optimized and minified for deployment.
