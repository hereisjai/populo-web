# React UI Library - Build & Usage Guide

## Overview
This React-based UI library offers a lean and modular set of components, designed for optimal performance and ease of use. It supports independent imports, ensuring that only the required components are bundled in consumer applications, regardless of tree-shaking capabilities.

## Notes
- The library is optimized for React-based applications.
- No additional CSS library is required in the consumer app.

## Key Features
- **Independent Imports**: Consumers can import only the needed components without bundling unnecessary code.
- **Tree-Shaking Support**: The library is optimized to remove unused code automatically.
- **TypeScript Support**: Type definitions are included for seamless development.
- **Styled Components for Styling**: No additional setup required for styles.
- **Theme Customization**: Consumers can override default themes using `ThemeProvider`.

## Installation
```sh
npm install populo-web
```

## Usage
Import components individually in your React application:
```tsx
import Button from "populo-web/button";

const App = () => (
  <Button>Click Me</Button>
);

export default App;
```

## Theming Support
You can override the default theme by wrapping your application with `ThemeProvider`:
```tsx
import { ThemeProvider } from "populo-web/theme-provider";
import Button from "populo-web/button";

const customTheme = {
  colors: {
    primary: "#ff5733", 
    secondary: "#333333",
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
  </ThemeProvider>
);

export default App;
```

## Build Process
To build the library, run:
```sh
npm run build
```
This generates the output in the `dist/` directory, including:
- ES modules (`.mjs` files)
- TypeScript declaration files (`.d.ts` files)

## Development
To start a local development server:
```sh
npm run dev
```

