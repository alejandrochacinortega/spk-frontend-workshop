# Demo 101-2: Rendering From Data, in TypeScript (Student Handout)

## Goal

Until now every dish was written twice: once in `menu.ts` and once as an `<li>` in the HTML.
Now the HTML list is empty, and the script builds it from the `menu` array. You will:

- create elements with `document.createElement`, with typed functions
- filter the menu with buttons ("All", "Vegetarian", "Under 150 kr"), using a union type for the filter
- use **one** click listener for many buttons (event delegation), and narrow `event.target`
- check data that comes from the HTML with a **type guard**

The big idea: **the page is a function of the state.** Handlers change the state (`order`, `activeFilter`),
then `render()` redraws the page from it. In demo 101-1 you added types to existing code. This time you write new code
**with** types.

## Setup

1. Make sure you are on the branch `101-2-ts-render-data-start`.
2. Run `npm install` (only if `node_modules` is missing), then `npm run dev`. Keep the terminal open.
3. Open `index.html` in your browser. The menu is gone! In your editor, `<ol id="menu-list">` is empty.
4. You only edit `src/index.ts`. `src/menu.ts` is provided: `Dish`, `menu`, `formatPrice`, `describeDish`, `getTotal`, `findById`.
5. After each change: save, check the terminal, reload the page.

## Part 1: Hover and predict (10 min)

Open `src/playground.ts`. Everything compiles. For each variable, write the type you expect **before** you hover over it.

| # | Code | My prediction | What TypeScript says |
| --- | --- | --- | --- |
| 1 | `document.createElement('li')` | | |
| 2 | `document.createElement('button')` | | |
| 3 | `document.querySelector('li')` | | |
| 4 | `document.querySelector('#menu-list')` | | |
| 5 | `menu.filter((dish) => dish.vegetarian)` | | |
| 6 | `menu.map((dish) => dish.name)` | | |
| 7 | `menu.find((dish) => dish.price < 100)` | | |
| 8 | `const t8 = 'all'` | | |
| 9 | `let t9 = 'all'` | | |
| 10 | `['all', 'vegetarian', 'cheap']` | | |
| 11 | `['all', 'vegetarian', 'cheap'] as const` | | |
| 12 | `event.target` in a click listener | | |
| 13 | `t12` inside `if (t12 instanceof HTMLButtonElement)` | | |
| 14 | `t12.dataset.filter` | | |

Why are 3 and 4 different? Why are 8 and 9 different?

## Part 2: Render the menu

Find the `TODO` comments in `src/index.ts`. Give every function you write parameter types and a return type.

| # | Task | Concept | Done |
| --- | --- | --- | --- |
| 1 | `type Filter` for `activeFilter` | Literal union types | |
| 2 | `createDishItem(dish)` returns an `<li>` with an Add button | `createElement`, `HTMLLIElement`, `dataset` is strings only | |
| 3 | `filterDishes(dishes, filter)` | `switch` on a union, exhaustiveness | |
| 4 | `renderMenu()` draws the list | `void`, `replaceChildren` | |
| 5 | One click listener on the list for all Add buttons | Event delegation, narrowing with `instanceof` | |
| 6 | Filter buttons, with an `isFilter` type guard | `value is Filter`, `unknown` | |
| 7 | Bonus: "Vegetarian (4)" on the filter buttons | `Record<Filter, string>` | |
| 8 | Bonus: a "Spicy" filter | Refactoring with the compiler | |

## Checklist

- [ ] `npm run dev` shows `Found 0 errors`
- [ ] The menu shows all 7 dishes with their price, like before
- [ ] "Add" works, the dish is highlighted and the button shows "Add (2)" after two clicks
- [ ] "Vegetarian" shows 4 dishes, "Under 150 kr" shows 3, "All" shows 7
- [ ] Adding a dish while filtered, then going back to "All", keeps the order and the highlights
- [ ] "Clear order" resets everything
- [ ] There is only one `addEventListener` for all the Add buttons
- [ ] I did not use `any`, `as` or `!`
- [ ] No red errors in the Console

## Questions to answer

1. `document.querySelector('li')` knows it is an `HTMLLIElement`, but `querySelector('#menu-list')` does not. Why?
2. Why is `event.target` an `EventTarget | null` and not an `HTMLButtonElement`? What else could the user click on?
3. `button.dataset.id = dish.id` is an error. What does an HTML attribute store? What did JavaScript do in 100-6?
4. TypeScript checks your `.ts` files. Does it check `index.html`? What happens if a `data-filter` in the HTML has a typo?
5. A type guard (`value is Filter`) is a function you write yourself. What happens if it is wrong? Who checks it?
6. In TODO 3, what happened when you removed a `case`? How is that useful when the app grows?
7. Why did 100-5 need to remove the `in-order` classes one by one, and this version does not?

## Challenges (if you finish early)

- Show a message "No dishes match this filter" when the list is empty.
- Add a "Sort by price" button. Remember: do not change `menu` (demo 100-4). Which type does the sort state need?
- In TODO 8, the compiler did not find `isFilter`. Fix that: write the filters once as an array,
  `const FILTERS = ['all', 'vegetarian', 'cheap'] as const`, then derive the type from it:
  `type Filter = (typeof FILTERS)[number]`. Can `isFilter` use `FILTERS` too?
- Use `never` to make the exhaustiveness check explicit: in `filterDishes`, add a `default:` case with
  `const unreachable: never = filter;` and `throw new Error(...)`. When does it give an error?

## Useful links

- [TypeScript Handbook: Literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [TypeScript Handbook: Narrowing with instanceof](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)
- [TypeScript Handbook: Type predicates (type guards)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
- [TypeScript Handbook: Exhaustiveness checking](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking)
- [TypeScript: Record<Keys, Type>](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)
- [MDN: Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN: Event delegation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)
