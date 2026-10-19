# Demo 102-3: State (Student Handout)

## Goal

Make the page react when you click. You will:

- create state with `useState`
- change state with a button and `onClick`
- see that React draws the page again every time state changes
- build an order list with a total

You only fill in the `TODO`s in `src/App.tsx`. All the HTML is already there.

## Setup

1. Make sure you are on the branch `102-3-react-state-start`.
2. Run `npm run dev`. Keep it running.
3. Open `src/App.tsx`.

## The big idea

```tsx
const [guests, setGuests] = useState(0);
//     value   change it       start value

<button onClick={() => setGuests(guests + 1)}>+1 guest</button>
```

Never change state directly. Always use the `set` function: then React knows it must draw the page again.

## Tasks

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Create `guests` with `useState(0)` and show it | | |
| 2 | Make "+1 guest" and "Reset" work | | |
| 3 | Uncomment the `order` state | | |
| 4 | Make the "Quick order" buttons add a dish | | |
| 5 | Show the order list and the total | | |
| 6 | Make "Clear order" work | | |
| 7a | A normal `let guests` instead of state | Page updates? Yes / No | |
| 7b | `order.push(dish)` instead of `setOrder` | Page updates? Yes / No | |

## Checklist

- [ ] The guest counter goes up and back to 0
- [ ] Clicking "+ Pizza" adds Pizza to the order, and the total goes up
- [ ] "Clear order" empties the order
- [ ] I can explain why `let guests = 0` does not work

## Questions to answer

1. What are the two things `useState` gives you back?
2. What happens on the page when you call `setGuests`?
3. Why do we write `setOrder([...order, dish])` and not `order.push(dish)`?

## Challenges

- Add a "-1 guest" button. Can the number go below 0? Can you stop that?
- Show "No dishes yet" when the order is empty: `{order.length === 0 && <p>No dishes yet</p>}`

## Links

- [State: a component's memory (react.dev)](https://react.dev/learn/state-a-components-memory)
- [Updating arrays in state](https://react.dev/learn/updating-arrays-in-state)
