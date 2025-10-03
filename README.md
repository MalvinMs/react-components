# React Components

A collection of reusable React components built with TypeScript and Tailwind CSS.

## Components

### Statbox

A flexible statistical display component with multiple variants and customization options.

**Features:**

- Multiple size variants (sm, md, lg)
- Color theming system
- Optional icons and borders
- Change indicators with trend arrows
- Center layout for value-only display

**Usage:**

```tsx
import { Statbox } from "./components/Statbox/Statbox";

<Statbox
  data={{ title: "Revenue", value: "1.2M" }}
  size="md"
  color="primary"
  boxed
/>;
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Build for production
npm run build
```

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Storybook
