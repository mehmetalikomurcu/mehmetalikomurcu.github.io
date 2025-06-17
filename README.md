# Apple-Style Personal Portfolio

A stunning personal portfolio website inspired by Apple's design language, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400/0EA5E9/FFFFFF?text=Portfolio+Preview)

## ✨ Features

- **Apple-Inspired Design**: Clean, minimal, and visually stunning interface
- **Smooth Animations**: Scroll-triggered animations and micro-interactions using Framer Motion
- **Dark/Light Mode**: Full theme switching with system preference detection
- **Responsive Design**: Perfect on all devices from mobile to desktop
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Modern Tech Stack**: TypeScript, Tailwind CSS, and latest web standards
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🛠️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── Footer.tsx
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **src/components/sections/HeroSection.tsx**
   - Name and title
   - Profile description
   - Social media links

2. **src/components/sections/AboutSection.tsx**
   - Bio and experience
   - Skills and technologies
   - Statistics

3. **src/components/sections/ProjectsSection.tsx**
   - Project data
   - Screenshots
   - Technology stacks

4. **src/components/sections/ContactSection.tsx**
   - Contact information
   - Social media profiles

### Theme Colors
Modify colors in `tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
  },
  // Add your custom colors
}
```

### Fonts
Update fonts in `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting

## 🔍 SEO Features

- Meta tags optimization
- Open Graph protocol
- Twitter Cards
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast ratios
- Focus indicators
- Alternative text for images

## 🛡️ Security

- Content Security Policy (CSP)
- XSS protection
- HTTPS enforcement
- Secure headers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:

- Open an issue on GitHub
- Contact me at [hello@yourname.com](mailto:hello@yourname.com)
- Connect with me on [LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Inspired by Apple's design philosophy
- Icons from [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!

**Live Demo**: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app) 