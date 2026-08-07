# Restaurant Page

A restaurant website built with vanilla JavaScript, using Webpack as a bundler for the first time.

## Tech Stack

- **Bundler:** Webpack 5 (`webpack`, `webpack-cli`, `webpack-dev-server`)
- **Loaders/Plugins:** `html-webpack-plugin`, `html-loader`, `css-loader`, `style-loader`
- **Language:** Vanilla JavaScript (ES modules), no framework
- **Styling:** Plain CSS, CSS Grid, CSS transitions

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npx webpack serve

# Build for production
npx webpack
```

## What I Learned

- Webpack configuration and module bundling
- Structure for ES modules
- `IntersectionObserver` for scroll-based animations
- Structuring vanilla JS into ES modules


🔗 [Live Demo](https://zubzkryp.github.io/Restaurant-Page/)

## Project Structure

```
src/
  index.js              # Entry point — imports & calls each section builder
  nav.js                 # Site navigation
  styles.css              # Global styles / reset
  template.html            # HTML template used by html-webpack-plugin
  fonts/                    # Local font files
  Images/                    # Static image assets
  pages/
    home.js                   # Hero section
    story.js / story.css        # "Our Story" section
    menu.js / menu.css           # Tabbed interactive menu
    divider.js / divider.css      # Divider image between sections
    location.js / location.css     # Location section
    contact.js / contact.css        # Contact section
```

## Features

- Scroll-triggered fade-in animations (`IntersectionObserver`)
- Interactive tabbed menu (Starters, Sides, Desserts, Drinks) with dynamically rendered cards
- Responsive CSS Grid layouts
- Fixed navigation bar with smooth scroll