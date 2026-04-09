# 🕷️ Premium Cinematic Portfolio - Spider-Man Inspired

A stunning, dark-themed portfolio website built with React.js, featuring smooth animations, a red & black color scheme, and a cinematic user experience inspired by superhero aesthetics.

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop)

## ✨ Features

### 🎨 Design
- **Cinematic Dark Theme** - Black background with red accents and glowing effects
- **Glassmorphism** - Modern frosted glass effects and subtle shadows
- **Smooth Animations** - Page transitions and scroll-triggered animations using Motion
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Custom Cursor** - Interactive cursor effect (desktop only)
- **Premium Typography** - Clean, modern font hierarchy

### 📱 Sections
1. **Hero Section** - Animated introduction with floating orbs and gradient text
2. **About Section** - Personal bio, stats, and core values
3. **Skills Section** - Tabbed interface with animated progress bars
4. **Projects Section** - Filterable project cards with live demos
5. **Experience Section** - Timeline layout for work history and education
6. **Achievements Section** - Certifications and awards showcase
7. **Contact Section** - Functional form with validation
8. **Footer** - Quick links and social media integration

### 🚀 Technical Features
- **React 18.3.1** - Latest React with hooks
- **Motion (Framer Motion)** - Smooth, professional animations
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript-ready** - Type-safe data structures
- **Smooth Scrolling** - Native smooth scroll behavior
- **Sticky Navigation** - Auto-hiding navbar on scroll
- **Form Validation** - Client-side validation with error messages
- **Responsive Images** - Optimized images from Unsplash
- **SEO-Friendly** - Semantic HTML structure

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx          # Sticky navigation with auto-hide
│   │   │   ├── Footer.tsx          # Footer with links and social
│   │   │   └── figma/              # System components
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero section with animations
│   │   │   ├── About.tsx           # About me section
│   │   │   ├── Skills.tsx          # Skills with progress bars
│   │   │   ├── Projects.tsx        # Project showcase
│   │   │   ├── Experience.tsx      # Work & education timeline
│   │   │   ├── Achievements.tsx    # Awards & certifications
│   │   │   └── Contact.tsx         # Contact form
│   │   ├── data/
│   │   │   └── portfolio-data.ts   # All portfolio content
│   │   └── App.tsx                 # Main application component
│   └── styles/
│       ├── theme.css               # Custom theme variables
│       ├── index.css               # Global styles
│       └── tailwind.css            # Tailwind imports
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite configuration
└── README.md                       # This file
```

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI library
- **Motion** - Animation library (Framer Motion alternative)
- **Tailwind CSS v4** - Styling framework
- **Vite** - Build tool
- **Lucide React** - Icon library

### Animations
- Scroll-triggered animations
- Page entrance animations
- Hover effects and micro-interactions
- Smooth transitions
- Gradient animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
# or
pnpm build
```

The optimized files will be in the `dist/` folder.

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `/src/app/data/portfolio-data.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    role: "Your Role",
    email: "your.email@example.com",
    // ... update all fields
  },
  // ... update other sections
};
```

### 2. Modify Theme Colors

Edit `/src/styles/theme.css`:

```css
.dark {
  --hero-red: #dc2626;        /* Main accent color */
  --accent-red: #ef4444;      /* Secondary accent */
  --dark-bg: #0a0a0a;         /* Background color */
  --card-dark: #111111;       /* Card background */
}
```

### 3. Update Projects

Add your projects in `portfolio-data.ts`:

```typescript
projects: [
  {
    id: 1,
    title: "Your Project",
    category: "Web Development",
    description: "Project description",
    image: "project-image-url",
    technologies: ["React", "Node.js"],
    liveLink: "https://your-project.com",
    githubLink: "https://github.com/your-repo",
    featured: true,
  },
]
```

### 4. Update Skills

Modify skills in `portfolio-data.ts`:

```typescript
skills: {
  frontend: [
    { name: "React.js", level: 95, icon: "⚛️" },
    // Add more skills
  ],
}
```

### 5. Add Your Images

Replace placeholder images with your own:
- Use Unsplash URLs or local images
- Recommended image sizes:
  - Hero: 1920x1080
  - Projects: 800x600
  - Avatar: 400x400

## 🎯 Features Breakdown

### Hero Section
- Animated gradient text
- Floating background orbs
- Smooth scroll indicator
- Social media links
- CTA buttons

### About Section
- Animated statistics
- Interest tags
- Value propositions with icons
- Responsive grid layout

### Skills Section
- Tabbed interface (Frontend/Backend/Tools)
- Animated progress bars
- Icon integration
- Smooth transitions

### Projects Section
- Category filtering
- Featured project badges
- Live demo links
- GitHub integration
- Technology tags
- Hover effects

### Experience Section
- Timeline layout
- Work/Education distinction
- Achievement bullets
- Responsive design

### Contact Section
- Form validation
- Error handling
- Success/Error states
- Contact information cards
- Social media links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Backend Integration (Optional)

While this is a frontend-only application, you can easily integrate a backend:

### Example Node.js + Express Setup

1. Create a backend folder:
```bash
mkdir server
cd server
npm init -y
npm install express cors dotenv nodemailer
```

2. Create `server/index.js`:
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Add your email sending logic here
  // Using nodemailer or another email service
  
  res.json({ success: true, message: 'Email sent!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

3. Update Contact.tsx to use the API:
```typescript
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📊 Performance Optimization

- **Code Splitting** - React lazy loading for sections
- **Image Optimization** - WebP format with fallbacks
- **Lazy Loading** - Images load as they enter viewport
- **Minification** - Production build is minified
- **Caching** - Browser caching enabled

## 🎨 Design Philosophy

This portfolio follows these design principles:
- **Visual Hierarchy** - Clear content structure
- **Consistency** - Uniform spacing and styling
- **Accessibility** - Semantic HTML and ARIA labels
- **Performance** - Optimized animations and images
- **Responsiveness** - Mobile-first approach

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Digvijay Vaghela**
- GitHub: [@digvijayvaghelaa04](https://github.com/digvijayvaghelaa04)
- LinkedIn: [Digvijay Vaghela](https://www.linkedin.com/in/digvijay-vaghelaa/)
- Email: digvijayvahelaa04@gmail.com

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Animations powered by Motion (Framer Motion)
- Icons from Lucide React
- Images from Unsplash

## 📞 Support

For support, email digvijayvahelaa04@gmail.com or open an issue in the repository.

---

**Made with ❤️ and React** | © 2026 Digvijay Vaghela

## 🎯 Final Checklist

Before deploying, ensure:

- [ ] All personal information is updated in `portfolio-data.ts`
- [ ] Project images are replaced with your own
- [ ] Social media links are correct
- [ ] Contact form is tested
- [ ] All sections are filled with real content
- [ ] Responsive design is tested on all devices
- [ ] Performance is optimized (run Lighthouse audit)
- [ ] SEO meta tags are added (if needed)
- [ ] Custom domain is configured (if applicable)
- [ ] Analytics is set up (Google Analytics, etc.)

## 🚀 Live Demo

Visit the live demo: [Your Portfolio URL]

## 📸 Screenshots

### Desktop View
![Desktop](https://via.placeholder.com/1200x800?text=Desktop+View)

### Mobile View
![Mobile](https://via.placeholder.com/400x800?text=Mobile+View)

---

**Tip**: Press `Ctrl/Cmd + K` to search within the codebase!
