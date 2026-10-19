# Demo 102-1: Lists (Student Handout)

## Goal

Show a list of dishes on the page, without writing the same HTML again and again. You will:

- turn an array into a list on the page with `.map()`
- learn why React needs a `key` on every item in a list

The data and types are ready in `src/data.ts`. You only write React code in `src/App.tsx`.

## Setup

1. Make sure you are on the branch `102-1-react-lists-start`.
2. Run `npm install` (once), then `npm run dev`. Keep it running.
3. Open `src/App.tsx` and `src/data.ts`.

## The big idea

```tsx
{dishes.map((dish) => <li key={dish.id}>{dish.name}</li>)}
```

Read it out loud: "for every dish, make an `<li>` with the dish name". React shows all of them.

## Tasks

Follow the `TODO` comments in `src/App.tsx`.

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Hover over `dishes`. What is it? | | |
| 2 | Show `dishes[0].name` and `dishes[1].name` by hand | | |
| 3 | Show all dishes with `.map()` | | |
| 4 | Read the warning in the console, then add `key={dish.id}` | | |
| 5 | Show emoji, name and price | | |
| 6 | Show `{dishes.length}`, then add a fifth dish in `data.ts` | | |
| 7a | `dish.nmae` | Error / OK | |
| 7b | `{ }` around the `<li>` inside `.map()` | Error / OK | |

## Checklist

- [ ] The page shows all dishes with emoji, name and price
- [ ] The console has no "key" warning
- [ ] A new dish in `data.ts` shows up on the page without changing `App.tsx`

## Questions to answer

1. What does `.map()` return?
2. Why does React want a `key`? Why is `dish.id` a good key?
3. In 7b, why did the list disappear? (Hint: `return`.)

## Challenges

- Show the cheap dishes only: `dishes.filter((dish) => dish.price < 150).map(...)`.
- Show the price with a discount: `{dish.price * 0.9} kr`.

## Links

- [Rendering lists (react.dev)](https://react.dev/learn/rendering-lists)
