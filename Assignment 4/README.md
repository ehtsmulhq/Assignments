# Food Recipe Search Application

## Assignment 4

### Name: Ehatasamul Haque Adib

### Email: wizard.adib@gmail.com

---

## Project Overview

This is a responsive Food Recipe Search Application that allows users to search and explore recipes from a comprehensive meal database. The application uses the TheMealDB API to fetch recipe information and display it in an interactive, user-friendly interface.

## Features

- **Search Functionality**: Search for recipes by meal name
- **Recipe Cards**: Display recipes with images and descriptions in a grid layout
- **Recipe Details Modal**: View detailed information about selected recipes
- **Responsive Design**: Optimized for mobile, tablets, desktops, and large desktop screens
- **Scroll to Top Button**: Smooth scrolling to the top of the page
- **Beautiful UI**: Built with Tailwind CSS and DaisyUI components
- **Loading Spinner**: Visual feedback while fetching data from the API

## Project Structure

```
foodRecipe-main/
│
├── index.html          # Main HTML file with page structure
├── style.css           # Custom CSS with responsive design
├── js/
│   └── app.js          # JavaScript functionality and API integration
└── images/             # Image assets (logo, banners, etc.)
```

## Technologies Used

- **HTML5**: Page structure and semantic markup
- **CSS3**: Styling and responsive design with media queries
- **JavaScript**: DOM manipulation and API integration
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library built on Tailwind
- **TheMealDB API**: External API for meal/recipe data
- **Font Awesome**: Icon library

## Responsive Breakpoints

- **Mobile**: < 640px (1-column grid)
- **Tablet**: 640px - 1023px (2-column grid)
- **Desktop**: 1024px - 1279px (3-column grid)
- **Large Desktop**: ≥ 1280px (4-column grid)

## How to Use

1. Open `index.html` in a web browser
2. The application loads with initial recipes on page load
3. Use the search bar to find recipes by meal name
4. Click "View Details" on any recipe card to see full information in a modal
5. Use the scroll-to-top button (bottom right) to navigate back to the top

## API Integration

The application uses the free TheMealDB API:

- **Base URL**: `https://www.themealdb.com/api/json/v1/1/`
- **Endpoints Used**:
  - `/search.php?s=` - Search meals by name
  - `/lookup.php?i=` - Get meal details by ID

## Color Scheme

- **Primary Color**: #fbbd23 (Warm Yellow)
- **Background**: #ffffff (White)
- **Text**: #000000 (Black)
- **Neutral Dark**: Used for footer and headers

## Features Implementation

### JavaScript Functions

- `initialLoad()`: Loads initial recipes on page load
- `showFood()`: Displays recipes in grid format
- `getData()`: Fetches data from API
- `searchFood()`: Handles search functionality
- `modal()`: Displays recipe details in modal
- `scrollingToTop()`: Smooth scroll to top
- `scrolling()`: Shows/hides scroll-to-top button based on scroll position

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- Add recipe favorites/bookmarks feature
- Implement recipe filtering by cuisine or category
- Add ingredient list display
- Include cooking video links
- Add nutritional information

---

**Created**: December 25, 2025
