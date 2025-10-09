# Copilot Instructions for React-nich (pos-user-page)

## Project Overview
- This is a multi-day React learning project, with each `dayX` folder representing a separate mini-app or experiment.
- The `day6/pos-user-page` folder is a mobile-first, Vite-powered React app with custom UI components, carousel menus, and service info sections.
- Images are imported directly in JS/JSX (not referenced by string paths) for compatibility with Vite and React's asset pipeline.

## Key Patterns & Architecture
- **Component Structure:**
  - Components are grouped by feature (e.g., `user/`, `admin/`, `navbar-footer/`, `buy-tutor/`).
  - Layouts (e.g., `UserPage.jsx`) wrap pages and handle global elements like Navbar and Footer.
  - Pages (e.g., `MenuDetailPage.jsx`) compose layouts and feature components.
- **Data Flow:**
  - Menu data is defined in `src/data/menu.js` and images are imported at the top of the file.
  - Props are used to pass data into components; avoid global state unless necessary.
- **Styling:**
  - Uses Tailwind CSS and DaisyUI for utility-first and component-based styling.
  - Custom fonts must be defined in `tailwind.config.js` and referenced via Tailwind classes (not raw CSS variables).
  - Mobile-first design: test layouts on small screens, avoid fixed widths that break responsiveness.
- **Routing:**
  - Uses `react-router-dom` for navigation; links are created with `<Link>` components.

## Developer Workflows
- **Start Dev Server:**
  ```bash
  npm install
  npm run dev
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Linting:**
  ESLint is configured via `eslint.config.js` in each app folder.
- **Adding Images:**
  - Import images in JS/JSX, e.g. `import img from '../assets/images/menu/foo.png'`.
  - Do not use string paths for images in React components.
- **Component Keys:**
  - When mapping arrays to JSX, always put the `key` prop on the outermost element returned by `.map()`.

## Project-Specific Conventions
- **Menu Cards:**
  - Use `CardMenu` for displaying menu items; ensure consistent height by setting fixed height on title/body.
- **Spacing & Layout:**
  - Avoid unnecessary padding/margin between stacked sections to maintain seamless gradients.
  - Use `overflow-x-hidden` on the main container to prevent horizontal scroll on mobile.
- **Footer Visibility:**
  - If using fixed-position elements (e.g., buttons), add bottom margin/padding to main content so the footer is always visible.

## Integration Points
- **Remixicon:**
  - Icons are imported from `@remixicon/react` and used in components.
- **DaisyUI:**
  - DaisyUI is used for card, badge, and other UI elements; ensure classes are compatible with Tailwind.

## Example Files
- `src/data/menu.js` — Menu data and image imports
- `src/components/user/CardMenu.jsx` — Menu card component
- `src/components/user/Features.jsx` — Carousel of featured menu items
- `src/layouts/UserPage.jsx` — Main layout with Navbar and Footer

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.