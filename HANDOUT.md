# Demo 102-2: Props (Student Handout)

## Goal

Give data to a component. You will:

- show a prop inside a component: `{title}`
- give a prop to a component: `<Header title="SPK Bistro" />`
- move each dish into its own `DishCard` component

All types are ready. You only fill in the `TODO`s in `src/App.tsx`.

## Setup

1. Make sure you are on the branch `102-2-react-props-start`.
2. Run `npm run dev`. Keep it running.
3. Open `src/App.tsx`.

## The big idea

Props work like function arguments:

```tsx
// Give a prop:                 Use the prop:
<Header title="SPK Bistro" />   function Header({ title }: HeaderProps) {
                                    return <h1>{title}</h1>;
                                }
```

`HeaderProps` is already written for you. It says which props `Header` needs.

## Tasks

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Show `{title}` in `Header` | | |
| 2 | Use `<Header title="SPK Bistro" />` in `App`, then try another title | | |
| 3 | Show emoji, name and price in `DishCard` | | |
| 4 | Use `<DishCard key={dish.id} dish={dish} />` inside `.map()` | | |
| 5a | `<Header />` | Error / OK | |
| 5b | `<Header title={42} />` | Error / OK | |
| 5c | `<DishCard key={dish.id} />` | Error / OK | |

## Checklist

- [ ] The heading comes from the `Header` component
- [ ] Every dish is shown as a card
- [ ] I can say what a prop is in one sentence

## Questions to answer

1. Why is `"SPK Bistro"` in quotes, but `{dish}` in curly braces?
2. `App` has the data. `DishCard` shows it. Which way does the data go?
3. How did TypeScript help you in task 5?

## Challenges

- Add a `subtitle` prop to `Header`: add `subtitle: string;` to `HeaderProps`, and show it in a `<p>`.
- Use `<Header />` twice with different titles.

## Links

- [Passing props to a component (react.dev)](https://react.dev/learn/passing-props-to-a-component)
