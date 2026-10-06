# Demo 101-0b: Functions (Student Handout)

## Goal

Write small functions with types. You will:

- give types to parameters and return values
- see what TypeScript says when a function is called the wrong way
- use an optional parameter and a function that returns nothing (`void`)

## Setup

1. Make sure you are on the branch `101-0b-ts-functions-start`.
2. Run `npm install` if you have not done it yet.
3. Open `src/2-functions.ts`. Run it with `npm run functions`.

Each task has a `check(...)` line that is commented out. Write the function **above** it, uncomment the check, and run
the file again. A check prints ✅ or ❌.

## Tasks

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1a | `greet(42)` | Error / OK | |
| 1b | `greet()` | Error / OK | |
| 1c | `greet('Kari', 'Ola')` | Error / OK | |
| 1d | `const length: number = greet('Kari')` | Error / OK | |
| 2 | Write `addPrices(a, b)` | | |
| 3 | `addPrices('89', 159)` | Error / OK | |
| 4 | Write `formatPrice(price)` → `"89 kr"` | | |
| 5 | Write `priceWithTip(price, tipPercent?)`. Type of `tipPercent` inside? | | |
| 6 | Write the arrow function `isExpensive(price)` | | |
| 7 | Write `printReceipt(dishes, total): void` | | |

## Checklist

- [ ] `npm run functions` prints only ✅
- [ ] Every parameter has a type
- [ ] I used `formatPrice` inside `printReceipt`
- [ ] I did not use `any`

## Questions to answer

1. JavaScript lets you call a function with too many or too few arguments. What does TypeScript do?
2. What is the type of an optional parameter inside the function? Why?
3. Try removing the return type `: string` from `formatPrice`. Hover over the function name. Does TypeScript still know?
   When is it still useful to write the return type?
4. What would `printReceipt` return if you tried to use its result? What does `void` tell the person calling it?

## Challenges

- Give `tipPercent` a default value instead: `tipPercent = 10`. What is the type now, and what does `priceWithTip(200)` return?
- Write `orderTotal(prices: number[]): number`, using `reduce` or a `for...of` loop.
- Write `applyDiscount(price: number, discount: number): number` and make it return an error string when the discount is
  bigger than the price. What return type do you need now?

## Links

- [More on functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
