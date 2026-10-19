# Spk Frontend Workshop: React + TypeScript

Small React exercises. They run in the browser with [Vite](https://vite.dev) as the dev server.

## Getting started

1. Install Node.js 20.19 or newer (`node -v`).
2. Run `npm install` once.
3. Run `npm run dev`. The page opens at http://localhost:5173. Keep the terminal running.
4. Open `src/App.tsx` and follow the `TODO` comments. Every time you save, the browser updates by itself.

You only edit files in `src/`. `npm run check` runs the TypeScript checker on all files.

## Demos

| Branch | File | Topic |
| --- | --- | --- |
| `102-0-react-hello-start` | `src/App.tsx` | Your first component, JSX, `{ }` |
| `102-1-react-lists-start` | `src/App.tsx` | Show a list with `.map()` and `key` |
| `102-2-react-props-start` | `src/App.tsx` | Props: give data to a component |
| `102-3-react-state-start` | `src/App.tsx` | `useState` and `onClick` |
| `102-4-react-callbacks-start` | `src/App.tsx` | Pass a function as a prop |
| `102-5-react-effect-start` | `src/App.tsx` | `useEffect` |

Each `-end` branch has the solution. In every demo, `src/data.ts` (the dishes) and all types are ready:
you only write React code.
