# Demo 101-0c: Object Types (Student Handout)

## Goal

Describe the restaurant menu with a type, and let TypeScript find the bugs in it. You will:

- write an object type (`type Dish = { ... }`) and use it for an array (`Dish[]`)
- replace `any` with real types
- handle a value that can be `undefined`
- use a literal union type: `'starter' | 'main' | 'dessert'`

## Setup

1. Make sure you are on the branch `101-0c-ts-objects-start`.
2. Run `npm install` if you have not done it yet.
3. Open `src/3-objects.ts`. Run it with `npm run objects`.

## Tasks

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Run the file first. Which checks fail, and why? Find the bugs by reading the menu | | |
| 2 | Write `type Dish` and use `const menu: Dish[]`. How many errors appear? | | |
| 3 | Replace every `any` in the five functions | | |
| 4 | Uncomment `findDish(menu, 99).name` | Error / OK | |
| 5a | `category: 'starter' \| 'main' \| 'dessert'`. Which bug appears? | | |
| 5b | `countInCategory(menu, 'drinks')` with the new parameter type | Error / OK | |

## Checklist

- [ ] `npm run objects` prints only ✅
- [ ] There is no `any` left in `src/3-objects.ts`
- [ ] I found all three bugs in the menu
- [ ] "Dish 99" does not crash the program

## Questions to answer

1. The total was `"47749undefined79"`. Explain where each part of that text comes from.
2. Why did JavaScript not tell you about `prise`? Why does TypeScript?
3. With `any`, TypeScript stops checking. Which bugs did `any` hide in this file?
4. What is the return type of `findDish`? Why is it not just `Dish`?
5. What did TypeScript find with the literal union that it could not find with `category: string`?

## Challenges

- Add an optional property `spicy?: boolean` to `Dish`, and mark one dish as spicy. Do the other dishes need to change?
- Write `cheapestDish(dishes: Dish[]): Dish | undefined`.
- Make a type `Category` for the union and use it in both `Dish` and `countInCategory`.
- Write `namesInCategory(dishes: Dish[], category: Category): string[]`.

## Links

- [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Union types and literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
