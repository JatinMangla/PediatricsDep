# Pediatrics Department Screen UI

This project is a React.js-based UI for a Pediatrics Department Screen. It is designed to showcase a responsive table layout with dynamic data, modals for patient details, and basic interactivity. The project uses **Vite**, **Tailwind CSS**, and **TypeScript**.

---

## Features

- Responsive UI using Tailwind CSS.
- Table layout with dynamic data rendering.
- Modals for viewing patient details and action-specific information.
- Organized React components.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Installation

Follow these steps to install and set up the project:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd pediatrics-ui
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Tailwind CSS**:
   Tailwind CSS is already configured in this project. Ensure the following files are correctly set up:

   - `tailwind.config.js`
   - `index.css` with `@tailwind` directives:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Open your browser and navigate to the URL provided by the Vite development server (e.g., `http://localhost:5173`).

---

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Header component
│   ├── Table.tsx        # Table component
│   ├── Modal.tsx        # Modal component
├── data/
│   └── sampleData.ts    # Sample data for the table
├── App.tsx              # Main application file
├── main.tsx             # Application entry point
├── output.css            # Global styles with Tailwind directives
```

---

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run preview`**: Preview the production build.

---

## Troubleshooting

If you encounter issues:

1. **Tailwind Classes Not Applying**:
   - Ensure `tailwind.config.js` lists the correct file paths in the `content` array:
     ```js
     module.exports = {
       content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

2. **Reinstall Dependencies**:
   - Delete `node_modules` and `package-lock.json`:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```

3. **Restart the Development Server**:
   ```bash
   npm run dev
   ```

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

Developed by [Your Name].
