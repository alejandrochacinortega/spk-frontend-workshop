# Demo 102-5: Effects (Student Handout)

## Goal

Do something **outside** React when your data changes. You will:

- show the number of dishes in the browser tab title with `useEffect`
- learn what the list at the end (`[order]`, `[]`) means
- make the clock from 102-0 tick, and stop the timer again

You only fill in the `TODO`s in `src/App.tsx`.

## Setup

1. Make sure you are on the branch `102-5-react-effect-start`.
2. Run `npm run dev`. Keep it running.
3. Open `src/App.tsx` and the browser console (F12).

## The big idea

```tsx
useEffect(() => {
    document.title = `(${order.length}) SPK Bistro`;   // what to do
}, [order]);                                            // when: every time order changes
```

| The list at the end | The effect runs... |
| --- | --- |
| `[order]` | after the first draw, and again every time `order` changes |
| `[]` | only once, after the first draw |
| no list | after **every** draw |

## Tasks

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Show the number of dishes in the tab title | | |
| 2 | `console.log` in the effect. Click "Add", then "+1 guest" | Runs on "+1 guest"? Yes / No | |
| 3 | Make the clock tick with `setInterval` | | |
| 4a | Delete `[order]`, click "+1 guest" | | |
| 4b | Change `[order]` to `[]`, add dishes | | |

## Checklist

- [ ] The tab title shows `(2) SPK Bistro` after I add two dishes
- [ ] The effect does not run when I click "+1 guest"
- [ ] The clock ticks every second
- [ ] I can say what `[order]` and `[]` mean

## Questions to answer

1. Why not just write `document.title = ...` directly in `App`, without `useEffect`?
2. What does the `return () => clearInterval(id)` in the clock do? When does it run?
3. The clock has its own state. When it ticks, does `App` draw again? (Hint: the console.)

## Challenges

- Save the order in the browser: an effect with `[order]` that runs
  `localStorage.setItem('spk-order', JSON.stringify(order));`. Look in DevTools → Application → Local Storage.
- Add a "Hide clock" button with `const [showClock, setShowClock] = useState(true);` and `{showClock && <Clock />}`.
  Put `console.log('timer stopped')` in the clean-up function and click the button.

## Links

- [Synchronizing with effects (react.dev)](https://react.dev/learn/synchronizing-with-effects)
- [You might not need an effect](https://react.dev/learn/you-might-not-need-an-effect)
