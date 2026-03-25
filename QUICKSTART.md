# 🚀 Quick Start Guide

Get your portfolio running in 3 minutes!

## ⚡ Fast Setup

### 1. Install Dependencies (30 seconds)

```bash
npm install
# or
pnpm install
```

### 2. Start Development Server (10 seconds)

```bash
npm run dev
# or
pnpm dev
```

### 3. Open in Browser

Navigate to: **http://localhost:5173**

That's it! Your portfolio is now running! 🎉

---

## 🎨 Customize Your Portfolio

### Step 1: Update Personal Info (5 minutes)

Open `/src/app/data/portfolio-data.ts` and update:

```typescript
personal: {
  name: "Your Name",              // Change to your name
  role: "Your Role",              // e.g., "Senior Developer"
  email: "your@email.com",        // Your email
  phone: "+1 (555) 123-4567",     // Your phone
  location: "Your City, State",   // Your location
}
```

### Step 2: Update Social Links (2 minutes)

```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
}
```

### Step 3: Add Your Projects (10 minutes)

```typescript
projects: [
  {
    id: 1,
    title: "Your Amazing Project",
    category: "Web Development",
    description: "What your project does...",
    image: "https://your-image-url.com/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://your-project-demo.com",
    githubLink: "https://github.com/you/project",
    featured: true,
  },
  // Add more projects...
]
```

### Step 4: Update Skills (5 minutes)

```typescript
skills: {
  frontend: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "Your Skill", level: 85, icon: "🎯" },
    // Add your skills...
  ],
}
```

### Step 5: Add Experience (10 minutes)

```typescript
experience: [
  {
    id: 1,
    position: "Your Job Title",
    company: "Company Name",
    location: "City, State",
    period: "2022 - Present",
    type: "work", // or "education"
    description: "What you do/did...",
    achievements: [
      "Key achievement 1",
      "Key achievement 2",
    ],
  },
]
```

---

## 🎯 Common Customizations

### Change Theme Colors

Edit `/src/styles/theme.css`:

```css
.dark {
  --hero-red: #your-color;     /* Main accent */
  --accent-red: #your-color;   /* Secondary accent */
}
```

Popular color alternatives:
- **Blue Tech**: `#3b82f6` and `#60a5fa`
- **Purple Creative**: `#8b5cf6` and `#a78bfa`
- **Green Nature**: `#10b981` and `#34d399`
- **Orange Energy**: `#f97316` and `#fb923c`

### Add Your Avatar

Replace the avatar URL in `portfolio-data.ts`:

```typescript
personal: {
  avatar: "https://your-image-url.com/your-photo.jpg",
}
```

### Update Section Titles

Edit individual section files in `/src/app/sections/`:
- `Hero.tsx` - Hero section
- `About.tsx` - About section
- `Skills.tsx` - Skills section
- etc.

---

## 📱 Test Responsiveness

### Test on different devices:

1. **Desktop**: Default view in browser
2. **Tablet**: Resize browser to ~768px width
3. **Mobile**: Resize browser to ~375px width

Or use browser DevTools:
- Chrome: `F12` → Toggle device toolbar
- Firefox: `F12` → Responsive Design Mode

---

## 🚀 Deploy Your Portfolio

### Deploy to Vercel (Easiest - 2 minutes)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio is live! 🎉

### Deploy to Netlify (Alternative)

1. Build your project:
   ```bash
   npm run build
   ```

2. Drag and drop `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

---

## ✅ Pre-Deployment Checklist

Before going live, make sure:

- [ ] Personal information is updated
- [ ] Social links are correct
- [ ] Projects have real data (not placeholder)
- [ ] All images load properly
- [ ] Contact form works
- [ ] Tested on mobile and desktop
- [ ] No console errors
- [ ] All links work
- [ ] Spelling and grammar checked

---

## 🆘 Common Issues

### Issue: Page is blank
**Solution**: Check browser console for errors. Make sure all dependencies are installed.

### Issue: Images not loading
**Solution**: Verify image URLs are correct. Use full URLs (starting with `https://`)

### Issue: Animations not working
**Solution**: Make sure Motion is installed: `npm install motion`

### Issue: Contact form not submitting
**Solution**: This is normal - it's a mock submission. See BACKEND_SETUP.md to add real backend.

---

## 📚 Next Steps

1. **Customize Design**: Tweak colors, spacing, and layout
2. **Add More Sections**: Create custom sections for testimonials, blog, etc.
3. **Integrate Backend**: Follow BACKEND_SETUP.md for real contact form
4. **SEO Optimization**: Add meta tags and descriptions
5. **Analytics**: Set up Google Analytics
6. **Performance**: Optimize images and code

---

## 💡 Tips for Success

1. **Keep it Simple**: Don't overcomplicate - less is more
2. **Real Content**: Use actual projects and achievements
3. **Professional Photos**: Use high-quality, professional images
4. **Proofread**: Check for typos and grammar errors
5. **Test Everything**: Click all links, test all forms
6. **Mobile First**: Ensure it looks great on mobile
7. **Fast Loading**: Optimize images for web
8. **Update Regularly**: Keep your portfolio current

---

## 🎨 Design Inspiration

Your portfolio is inspired by:
- Modern web design trends
- Cinematic UI/UX
- Superhero aesthetics (Spider-Man)
- Premium developer portfolios

Feel free to make it your own!

---

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review BACKEND_SETUP.md for backend integration
- Open an issue on GitHub
- Email: your-support@email.com

---

**Happy Coding! 🚀**

Remember: Your portfolio is your digital resume. Make it count! ✨
