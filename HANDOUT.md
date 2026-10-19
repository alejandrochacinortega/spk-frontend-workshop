# Demo 102-4: Callbacks (Student Handout)

## Goal

Put the "Add" button on each dish card. You will:

- give a component a **function** as a prop
- call that function from the child component when a button is clicked
- see how data goes down (props) and events go up (callbacks)

You only fill in the `TODO`s in `src/App.tsx`. All types are ready.

## Setup

1. Make sure you are on the branch `102-4-react-callbacks-start`.
2. Run `npm run dev`. Keep it running.
3. Open `src/App.tsx`. There is **one red line on purpose**: TODO 1 explains it.

## The big idea

```
App   has the state (order)      <DishCard dish={dish} onAdd={addToOrder} />
 │                                          data down ↓      ↑ "a dish was clicked"
DishCard   has the button         <button onClick={() => onAdd(dish)}>Add</button>
```

`DishCard` cannot change `App`'s state itself. `App` gives it a function, and `DishCard` calls it.

## Tasks

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Read the new `onAdd` prop. Hover over the red line in `App` | | |
| 2 | Write the body of `addToOrder` | | |
| 3 | Give `onAdd={addToOrder}` to `<DishCard>` | | |
| 4 | Call `onAdd(dish)` when the button is clicked | | |
| 5 | Delete the "Quick order" part | | |
| 6a | `onClick={onAdd(dish)}` without `() =>` | Error / OK | |
| 6b | `onAdd="addToOrder"` | Error / OK | |

## Checklist

- [ ] Every card has an "Add" button that adds the dish to the order
- [ ] There are no red lines (`npm run check` shows no errors)
- [ ] I can explain why the state lives in `App` and not in `DishCard`

## Questions to answer

1. Why do we write `onAdd={addToOrder}` and not `onAdd={addToOrder()}`?
2. In 6a, why is `() =>` needed in `onClick={() => onAdd(dish)}`?
3. Data goes down with props. How does information go up?

## Challenges

- Move "Your order" into its own component `OrderList`, with the props
  `type OrderListProps = { order: Dish[]; onClear: () => void };`
- Give `DishCard` a second callback: `onRemove`, with a "Remove" button that removes one of that dish from the order.

## Links

- [Responding to events (react.dev)](https://react.dev/learn/responding-to-events)
- [Sharing state between components](https://react.dev/learn/sharing-state-between-components)
