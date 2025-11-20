# Pablo Guzman Lizardo - Personal Website

A minimalist, professional personal website built for GitHub Pages.

## 🌐 Live Site
Visit: [https://pguzmanlizardo.github.io/](https://pguzmanlizardo.github.io/)

## 📋 Features

- **Bilingual Support**: Complete English/Spanish language toggle with persistent preference
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Five Main Sections**:
  - Home: Personal introduction and contact information
  - Research: Publications and academic papers
  - CV: Embedded PDF viewer with download option
  - Photos from the Field: Gallery of fieldwork images with lightbox viewer
  - Op-Eds: Commentary and opinion pieces
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Photo Lightbox**: Click-to-enlarge functionality for field photos
- **Professional Design**: Clean, minimalist aesthetic with professional typography

## 🚀 Quick Start

### Viewing Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/pguzmanlizardo/pguzmanlizardo.github.io.git
   cd pguzmanlizardo.github.io
   ```

2. Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

### Deploying to GitHub Pages

1. Push your changes to the `main` branch
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select the `main` branch
5. Click "Save"
6. Your site will be live at `https://pguzmanlizardo.github.io/`

## ✏️ Customization Guide

### 0. Language Support

The website includes full bilingual support (English/Spanish). When adding content:
- Each translatable element has `data-lang-en` and `data-lang-es` attributes
- Update both language versions when adding new content
- The language preference is saved in the browser's localStorage
- Example:
```html
<h1 class="translatable" 
    data-lang-en="Your English Text" 
    data-lang-es="Tu Texto en Español">
    Your English Text
</h1>
```

### 1. Personal Information (Home Section)

Edit the home section in `index.html`:
- Replace the introduction text in both English and Spanish
- Update contact information (email, institution, location, social media)
- Add your professional bio in both languages

### 2. Adding Publications (Research Section)

Duplicate the publication template in `index.html`:

```html
<article class="publication-item">
    <h3 class="publication-title translatable"
        data-lang-en="Your Paper Title in English"
        data-lang-es="Tu Título del Artículo en Español">
        <a href="link-to-paper" target="_blank">Your Paper Title in English</a>
    </h3>
    <p class="publication-authors">Author Names</p>
    <p class="publication-venue"><em>Journal Name</em>, Year</p>
    <p class="publication-abstract translatable"
       data-lang-en="Brief description in English..."
       data-lang-es="Breve descripción en español...">
        Brief description in English...
    </p>
    <div class="publication-links">
        <a href="pdf-link" class="btn-link" target="_blank">PDF</a>
        <a href="doi-link" class="btn-link" target="_blank">DOI</a>
    </div>
</article>
```

### 3. Adding Your CV

1. Place your CV PDF in the `/assets/` directory
2. Name it `cv.pdf` (or update the path in `index.html`)
3. The CV will automatically display in the embedded viewer

### 4. Adding Field Photos

1. Add photos to `/assets/photos/`
2. Update the photo items in `index.html`:

```html
<div class="photo-item">
    <img src="assets/photos/your-photo.jpg" alt="Description" loading="lazy">
    <p class="photo-caption">Your caption here</p>
</div>
```

### 5. Adding Op-Eds

Similar to publications, duplicate the op-ed template:

```html
<article class="oped-item">
    <h3 class="oped-title">
        <a href="article-link" target="_blank">Op-Ed Title</a>
    </h3>
    <p class="oped-publication"><em>Publication</em>, Date</p>
    <p class="oped-excerpt">Brief excerpt...</p>
    <a href="article-link" class="btn-link" target="_blank">Read More →</a>
</article>
```

### 6. Styling Customization

Edit `styles.css` to customize colors, fonts, and spacing. Key variables are defined at the top:

```css
:root {
    --primary-color: #2c3e50;
    --accent-color: #3498db;
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...;
    /* etc. */
}
```

## 📁 Project Structure

```
pguzmanlizardo.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/
    ├── README.md       # Instructions for adding assets
    ├── cv.pdf          # Your CV (add this file)
    └── photos/         # Field work photos (add your photos here)
```

## 🎨 Design Philosophy

This website follows minimalist design principles:
- **Clean Typography**: Professional serif headings with sans-serif body text
- **Ample White Space**: Breathing room for content
- **Subtle Interactions**: Hover effects and smooth transitions
- **Mobile-First**: Responsive design that works on all devices
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🔧 Technologies Used

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript (ES6+)
- No frameworks or dependencies for maximum performance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 License

This project is open source and available for personal use. Feel free to fork and customize for your own website.

## 🤝 Contributing

This is a personal website template. Feel free to use it as inspiration for your own site!

## 📧 Contact

For questions about this website, please reach out via the contact information provided on the site.

---

**Built with ❤️ and minimalist design principles**
