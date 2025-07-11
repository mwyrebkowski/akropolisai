# AkropolisAI Hero Section

A responsive React hero section component featuring robots in a historic courtyard setting for the "Being human in the age of AI" conference in Kraków.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and mobile devices
- **Modern React**: Built with React 18 and CSS Modules for scoped styling
- **Accessibility**: Proper alt text, semantic HTML, and keyboard navigation support
- **Performance**: Optimized images and CSS for fast loading
- **Test Coverage**: Comprehensive Jest + React Testing Library tests (100% coverage)

## 🎨 Design Elements

- **Background**: Historic courtyard with AI robots (`final_hero_being.png`)
- **Top Left**: University of Kraków crest (`logo_uj.png`)
- **Top Right**: "This is IT" speech bubble (`logo_thisisit.png`)
- **Bottom Bar**: Conference details with blue accent line

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx          # Main hero component
│   ├── HeroSection.module.css   # Scoped styles
│   └── __tests__/
│       └── HeroSection.test.jsx # Comprehensive tests
├── App.jsx                      # Demo application
├── App.css                      # Demo styles
├── index.js                     # React entry point
└── setupTests.js                # Jest configuration

public/
├── final_hero_being.png         # Background image
├── logo_uj.png                  # University crest
├── logo_thisisit.png           # Speech bubble
└── index.html                   # HTML template
```

## 🛠️ Installation & Usage

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm start

# Build for production
npm run build
```

## 🧪 Testing

The component includes comprehensive tests covering:

- ✅ Component rendering
- ✅ Image loading and alt text
- ✅ CSS class application
- ✅ DOM structure and order
- ✅ Responsive behavior
- ✅ Accessibility features

Run tests with: `npm test`

## 📱 Responsive Breakpoints

- **Desktop**: Full size logos and layout
- **Tablet** (≤768px): Reduced logo sizes, stacked bottom text
- **Mobile** (≤480px): Compact layout, smaller elements

## 🎯 CSS Features

- CSS Modules for scoped styling
- CSS Grid and Flexbox for layout
- CSS Custom Properties for theming
- Smooth hover animations
- Print-friendly styles
- High contrast text shadows for readability

## 🔧 Customization

To customize the hero section:

1. Replace images in `public/` directory
2. Update text content in `HeroSection.jsx`
3. Modify styles in `HeroSection.module.css`
4. Adjust responsive breakpoints as needed

## 🌐 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 📄 License

MIT License - feel free to use in your projects!

---

**Conference**: Being human in the age of AI  
**Location**: Kraków  
**Date**: 31.07.2025 