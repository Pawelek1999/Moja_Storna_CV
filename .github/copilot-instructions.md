# CV Website - AI Coding Guidelines

## Project Overview
This is a static personal CV website for Jakub Pawełek, built with vanilla HTML, CSS, and JavaScript. The site consists of multiple pages (index.html, about_me.html, Literatura.html, etc.) sharing common navigation, styles, and scripts.

## Architecture
- **Pages**: Each HTML file represents a separate page with identical navigation structure
- **Navigation**: Sticky navbar with submenu under "O mnie" (About Me) linking to Literatura.html, sport.html, New_tech.html
- **Key Components**:
  - Books carousel in Literatura.html with auto-scrolling and manual controls
  - Contact form in contact.html using Formspree (https://formspree.io/f/mwpzeewy)
  - Scroll-triggered animations via Intersection Observer

## Coding Patterns
- **JavaScript** (`scripts.js`):
  - Carousel logic: Calculate visible items responsively, auto-scroll every 3s, loop back to start/end
  - Navigation toggle: Click button to show/hide submenu
  - Animations: Add `section--visible` class on scroll intersection
- **CSS** (`style.css`):
  - Use CSS variables for colors (e.g., `--primary-color: #4CAF50`)
  - Responsive design with media queries for carousel items
  - Gradient animation on navbar background
- **HTML Structure**:
  - Consistent nav in each page
  - Class naming: `Books_viewport`, `Book_item`, `nav_item_with_submenu`
  - Images in `image/` folder with descriptive alt text

## Development Workflow
- Edit HTML/CSS/JS files directly - no build process required
- Test locally: Use `python -m http.server` or similar to serve static files
- Language: Primarily Polish content with some English sections
- External dependencies: Formspree for contact form submission

## Conventions
- File names: CamelCase for HTML (Literatura.html), lowercase for others
- Content: Mix of Polish and English; maintain consistency
- Accessibility: Include aria-labels on form inputs, alt text on images
- Responsive: Ensure carousel adapts to screen size (1-3 books visible)

## Key Files
- `index.html`: Main CV page with experience/education sections
- `scripts.js`: All interactive functionality
- `style.css`: Complete styling with variables and animations
- `Literatura.html`: Books showcase with carousel</content>
<parameter name="filePath">d:\CV_Jakub_Pawelek\.github\copilot-instructions.md