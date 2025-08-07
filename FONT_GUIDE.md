# AIMS Font System Guide

## 🔤 Typography

Our website uses two carefully selected Google Fonts to create a professional and elegant typography system.

### Primary Fonts

| Font | Usage | Weights Available |
|------|-------|-------------------|
| **Montserrat** | Body text, UI elements, navigation | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| **Playfair Display** | Headlines, titles, decorative text | 400, 500, 600, 700, 800, 900 |

## 🎯 Font Usage Guidelines

### **Montserrat (Sans-serif)**
- **Primary Use**: Body text, paragraphs, UI elements
- **Character**: Modern, clean, highly readable
- **Best For**: Navigation, buttons, forms, content blocks

### **Playfair Display (Serif)**
- **Primary Use**: Headlines, titles, hero text
- **Character**: Elegant, sophisticated, attention-grabbing
- **Best For**: H1-H6 tags, hero sections, branding elements

## 🚀 Implementation

### **Tailwind CSS Classes**

```html
<!-- Montserrat (Default body font) -->
<p className="font-montserrat">Regular body text</p>
<span className="font-montserrat font-medium">Medium weight text</span>
<div className="font-montserrat font-bold">Bold text</div>

<!-- Playfair Display -->
<h1 className="font-playfair">Elegant Headline</h1>
<h2 className="font-playfair font-semibold">Subheading</h2>
<p className="font-playfair font-light">Decorative text</p>
```

### **Font Weight Classes**

```html
<!-- Montserrat Weights -->
<p className="font-montserrat font-thin">Thin (100)</p>
<p className="font-montserrat font-extralight">Extra Light (200)</p>
<p className="font-montserrat font-light">Light (300)</p>
<p className="font-montserrat font-normal">Regular (400)</p>
<p className="font-montserrat font-medium">Medium (500)</p>
<p className="font-montserrat font-semibold">Semibold (600)</p>
<p className="font-montserrat font-bold">Bold (700)</p>
<p className="font-montserrat font-extrabold">Extra Bold (800)</p>
<p className="font-montserrat font-black">Black (900)</p>

<!-- Playfair Display Weights -->
<h1 className="font-playfair font-normal">Regular (400)</h1>
<h1 className="font-playfair font-medium">Medium (500)</h1>
<h1 className="font-playfair font-semibold">Semibold (600)</h1>
<h1 className="font-playfair font-bold">Bold (700)</h1>
<h1 className="font-playfair font-extrabold">Extra Bold (800)</h1>
<h1 className="font-playfair font-black">Black (900)</h1>
```

## 📋 Typography Hierarchy

### **Headlines (Playfair Display)**
```html
<h1 className="font-playfair text-4xl font-bold">Main Headline</h1>
<h2 className="font-playfair text-3xl font-semibold">Section Title</h2>
<h3 className="font-playfair text-2xl font-medium">Subsection</h3>
<h4 className="font-playfair text-xl font-medium">Small Heading</h4>
```

### **Body Text (Montserrat)**
```html
<p className="font-montserrat text-lg">Large body text</p>
<p className="font-montserrat text-base">Regular body text</p>
<p className="font-montserrat text-sm">Small text</p>
<span className="font-montserrat text-xs">Caption text</span>
```

### **UI Elements (Montserrat)**
```html
<!-- Navigation -->
<nav className="font-montserrat font-medium">Menu Items</nav>

<!-- Buttons -->
<button className="font-montserrat font-semibold">Call to Action</button>

<!-- Forms -->
<input className="font-montserrat" placeholder="Input field" />
<label className="font-montserrat font-medium">Form Label</label>
```

## 🎨 Brand Applications

### **AIMS Branding**
```html
<!-- Main Logo/Brand -->
<h1 className="font-playfair text-5xl font-bold text-aims-purple">
  AIMS INSTITUTES
</h1>

<!-- Tagline -->
<p className="font-montserrat text-lg font-medium text-aims-purple">
  EMPOWERING MINDS
</p>

<!-- Hero Headlines -->
<h1 className="font-playfair text-6xl font-extrabold">
  SINCE 1994
</h1>
```

### **Content Sections**
```html
<!-- Section Headers -->
<h2 className="font-playfair text-3xl font-bold text-aims-purple mb-4">
  About Our Programs
</h2>

<!-- Body Content -->
<p className="font-montserrat text-base leading-relaxed text-gray-700">
  Our comprehensive curriculum is designed to prepare students for 
  successful careers in their chosen fields.
</p>

<!-- Call-to-Action -->
<button className="font-montserrat font-bold bg-aims-orange text-white px-6 py-3 rounded">
  Learn More
</button>
```

## ⚡ Performance & Loading

- **Font Display**: `swap` - Text remains visible during font load
- **Preload**: Critical fonts are preloaded for better performance
- **Fallbacks**: System fonts as fallbacks ensure content is always readable

### **CSS Variables**
```css
:root {
  --font-montserrat: 'Montserrat', sans-serif;
  --font-playfair: 'Playfair Display', serif;
}

body {
  font-family: var(--font-montserrat);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-playfair);
}
```

## 📱 Responsive Typography

### **Mobile Considerations**
```html
<!-- Responsive Headlines -->
<h1 className="font-playfair text-3xl md:text-5xl font-bold">
  Responsive Headline
</h1>

<!-- Responsive Body Text -->
<p className="font-montserrat text-sm md:text-base">
  Responsive paragraph
</p>
```

### **Reading Optimization**
- **Line Height**: 1.6 for body text (optimal readability)
- **Line Height**: 1.2 for headlines (better visual impact)
- **Letter Spacing**: Default (fonts are optimized)

---

## 🎯 Quick Reference

**Default Setup:**
- Body: Montserrat (400 weight)
- Headlines: Playfair Display (600 weight)
- UI Elements: Montserrat (500-600 weight)

**Color Combinations:**
- Primary text: Montserrat + `text-gray-800`
- Headlines: Playfair Display + `text-aims-purple`
- Accent text: Either font + AIMS color variants

**Last Updated**: $(date)
**Version**: 1.0.0