# DevLearn – React Multi-Page Application

DevLearn is a responsive React application built with React and Vite. It includes multiple pages, navigation, a registration form, form validation, and accessibility improvements.

## Features

- Multi-page navigation using React Router.
- Active navigation links using NavLink.
- Dynamic item details page using useParams.
- Custom 404 Not Found page.
- Shared state between sibling components.
- Form state management using useReducer.
- Form validation and error messages.
- Lazy loading of route components.
- Keyboard-accessible navigation and form controls.
- Skip-to-main-content link.

## Technologies Used

- React
- JavaScript
- Vite
- React Router DOM
- CSS
- HTML

## Application Routes

| Route            | Description          |
| ---------------- | -------------------- |
| `/`              | Home page            |
| `/form`          | Registration form    |
| `/thank-you`     | Thank You page       |
| `/items/:itemId` | Dynamic item details |
| `*`              | 404 Not Found page   |

## Performance Optimization

Lazy loading was implemented using React `lazy()` and `Suspense` to load page components when needed.

Production build was created using:

```bash
npm run build
```

## Accessibility Improvements

- Added a skip link to each page through the shared application layout.
- Added visible keyboard focus styles.
- Used semantic HTML landmarks.
- Made the main content focusable.
- Added keyboard-accessible navigation and form controls.

## Lighthouse Audit Results

Audits were performed on the Home and Form pages using Chrome Lighthouse in Desktop mode.

| Page | Category       | Before | After |
| ---- | -------------- | -----: | ----: |
| Home | Performance    |     62 |   100 |
| Home | Accessibility  |    100 |   100 |
| Home | Best Practices |    100 |   100 |
| Home | SEO            |     82 |   100 |
| Form | Performance    |     62 |   100 |
| Form | Accessibility  |    100 |   100 |
| Form | Best Practices |    100 |   100 |
| Form | SEO            |     82 |   100 |

**Note:** The initial scores were measured on the Vite development server, while the final scores were measured on the production preview server. These results are not a like-for-like performance comparison.

## Issues Found and Fixes

| Issue                           | Fix                                               |
| ------------------------------- | ------------------------------------------------- |
| Large JavaScript in development | Used lazy loading and tested the production build |
| Invalid or missing robots.txt   | Created `public/robots.txt`                       |
| Missing meta description        | Added a description in `index.html`               |

## Accessibility and Audit Details

| Improvement             | WCAG Rule  | Fix                             |
| ----------------------- | ---------- | ------------------------------- |
| Skip navigation         | WCAG 2.4.1 | Added skip-to-main-content link |
| Visible keyboard focus  | WCAG 2.4.7 | Added focus styles              |
| Semantic page structure | WCAG 1.3.1 | Used semantic HTML landmarks    |

Lighthouse Accessibility score remained 100 before and after. The accessibility improvements were additional preventive improvements.

## SEO Improvements

Created `public/robots.txt`:

```text
User-agent: *
Allow: /
```

Added a meta description to `index.html`.

## Running the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Author

Software Engineering Student

## Screenshots

- Home before audit: `screenshots/home-before.png`
- Home after audit: `screenshots/home-final.png`
- Form after audit: `screenshots/form-final.png`

**Note:** The Form before-audit screenshot was not saved.
