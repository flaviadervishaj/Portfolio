# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and professional experience.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (works on all devices)
- ⚡ Smooth scrolling and animations
- 🎯 Easy to customize
- 🚀 Fast and lightweight
- ♿ Accessible

## Sections

1. **Hero Section** - Introduction with your name, title, and call-to-action buttons
2. **About** - Personal information and background
3. **Skills** - Your technical skills with animated progress bars
4. **Projects** - Portfolio of your work with project cards
5. **Contact** - Contact form and information

## Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Customization

#### 1. Personal Information

Edit `index.html` and update:

- **Hero Section** (around line 38-48):
  - Change "Your Name" to your actual name
  - Update the subtitle and description
  - Update social media links

- **About Section** (around line 75-95):
  - Update the about text
  - Change location, email, and availability info

- **Skills Section** (around line 103-160):
  - Update skill names
  - Adjust progress percentages (data-progress attribute)

- **Projects Section** (around line 168-240):
  - Replace project cards with your actual projects
  - Update project titles, descriptions, and tags
  - Add your project links (live demo and GitHub)

- **Contact Section** (around line 248-290):
  - Update contact information
  - Update social media links
  - Note: The contact form currently shows an alert. You'll need to integrate it with a backend service (like Formspree, EmailJS, or your own server) to actually send emails.

#### 2. Colors and Styling

Edit `styles.css` and modify the CSS variables in the `:root` selector (around line 11-19):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --secondary-color: #10b981;    /* Accent color */
    /* ... other colors ... */
}
```

#### 3. Add Your Photo

Replace the placeholder icons with your actual images:

- In the Hero section: Replace the `.image-placeholder` div with an `<img>` tag
- In the About section: Replace the `.about-img` placeholder with your photo

Example:
```html
<!-- Instead of: -->
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- Use: -->
<img src="path-to-your-image.jpg" alt="Your Name" class="hero-photo">
```

Then update the CSS to style your image appropriately.

#### 4. Contact Form Integration

The contact form currently shows an alert when submitted. To make it functional, you can:

**Option 1: Use EmailJS (Easy)**
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add the EmailJS script to your HTML
3. Update the form submission in `script.js`

**Option 2: Use Formspree (Easy)**
1. Sign up at [Formspree](https://formspree.io/)
2. Add `action` and `method` attributes to the form
3. Add a hidden input for the endpoint

**Option 3: Use your own backend**
1. Create an API endpoint
2. Update the form submission handler in `script.js` to send a POST request

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Font Awesome (for icons)
- Google Fonts (Poppins)

## Deployment

You can deploy this portfolio to:

- **GitHub Pages** (Free)
  - Push your code to a GitHub repository
  - Go to Settings → Pages
  - Select your branch and folder

- **Netlify** (Free)
  - Drag and drop your folder
  - Or connect your GitHub repository

- **Vercel** (Free)
  - Connect your GitHub repository
  - Deploy automatically

- **Any web hosting service**
  - Upload all files via FTP

## License

Feel free to use this portfolio template for your personal use.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Good luck with your job applications! 🚀**

