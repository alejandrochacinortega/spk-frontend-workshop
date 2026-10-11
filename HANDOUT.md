# Demo 102-0: Hello, React (Student Handout)

## Goal

See React run in the browser and make your first component. You will:

- start a React project with `npm run dev`
- learn that a **component** is a function that returns what to show on the page
- use a component many times, and show JavaScript values with `{ }`
- read your first React errors

The code is TypeScript, but in this demo you do not need to write any types.

## Setup

1. Install Node.js (version 20.19 or newer) if you don't have it: `node -v` in a terminal.
2. Make sure you are on the branch `102-0-react-hello-start`.
3. In the project folder, run `npm install` (once).
4. Run `npm run dev`. The page opens in the browser at http://localhost:5173. Keep it running.
5. Open `src/App.tsx`.

## How the files fit together

```
index.html          <div id="root"></div>      an empty box
src/main.tsx        draws <App /> inside the box  (you do not change this file)
src/App.tsx         the App component            (you work here)
```

The file ends in `.tsx`: TypeScript + JSX. JSX is the HTML-looking code inside the `return`.

## Tasks

Follow the `TODO` comments in `src/App.tsx`.

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Change the `<h1>` text and save | | |
| 2 | Write a `Welcome` component and show it with `<Welcome />` | | |
| 2 | Hover over `Welcome`. What does it return? | | |
| 3 | Use `<Welcome />` three times | | |
| 4 | Show `{restaurant}`, `{2 + 3}` and the time | | |
| 5a | `<welcome />` with a small w | Error / OK | |
| 5b | `class` instead of `className` | Error / OK | |
| 5c | Two elements next to each other in `return` | Error / OK | |
| 5d | `<br>` without `/` | Error / OK | |

## Checklist

- [ ] The page shows my name in the heading
- [ ] The page shows three "Welcome to SPK Bistro!" cards
- [ ] I can say what a component is in one sentence
- [ ] All the "break it" changes are undone, and `npm run check` shows no errors

## Questions to answer

1. What is the difference between `Welcome` (the function) and `<Welcome />` (in the JSX)?
2. Why must a component name start with a capital letter?
3. What can you put inside `{ }` in JSX? Can you put an `if` statement there?
4. JSX looks like HTML. Name two things that are different.

## Challenges

- Make a second component, `Footer`, that shows `© 2026 SPK Bistro`, and use it at the bottom of `App`.
- Move `Welcome` to its own file `src/Welcome.tsx`. Use `export default Welcome;` there and
  `import Welcome from './Welcome';` in `App.tsx`.
- Change the time each time you save. Why does it not update by itself every second?

## Links

- [Quick start (react.dev)](https://react.dev/learn)
- [Your first component](https://react.dev/learn/your-first-component)
- [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with curly braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
