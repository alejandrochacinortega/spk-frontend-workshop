# Demo 101-3: Forms and localStorage, in TypeScript (Student Handout)

## Goal

Add new dishes with a form, and keep the dishes, the order and the theme after a reload. You will:

- read a form with `FormData`, and turn its values into a typed `NewDish`
- validate it and return a typed result: either a dish or an error
- save the state in `localStorage`, and load it back **safely**

The theme of this demo: **data from outside your code**. A form, `localStorage`, a URL or an API: TypeScript cannot know
what is in them. Its types are gone at runtime (demo 101-1). So you check the data at runtime, once, at the border,
and from then on it is typed.

## Setup

1. Make sure you are on the branch `101-3-ts-forms-storage-start`.
2. Run `npm install` (only if `node_modules` is missing), then `npm run dev`. Keep the terminal open.
3. Open `index.html` in your browser. Everything from demo 101-2 works. There is a new "Add a dish" form, but it does
   nothing useful yet, and nothing is saved after a reload.
4. You only edit `src/index.ts`. `src/menu.ts` is the same as in demo 101-2.
5. Open DevTools > **Application** > **Local Storage** to see what is saved.

## Part 1: Hover and predict (10 min)

Open `src/playground.ts`. For each one, write the type you expect **before** you hover over it.

| # | Code | My prediction | What TypeScript says |
| --- | --- | --- | --- |
| 1 | `new FormData(form).get('name')` | | |
| 2 | `localStorage.getItem('spk-dishes')` | | |
| 3 | `JSON.parse(...)`. Why does `t3.this.does.not.exist()` compile? | | |
| 4 | The same, typed as `unknown`. Uncomment `t4.length` | | |
| 5 | `t4` inside `if (Array.isArray(t4))` | | |
| 6 | `Omit<Dish, 'id'>`, `Pick<Dish, 'name' \| 'price'>`, `Partial<Dish>` | | |
| 7 | `result` before and inside `if (result.ok)` | | |
| 8 | `[1, undefined, 3].filter((x) => x !== undefined)` | | |

Then type these in the browser Console (JavaScript, not types):

| # | Type this | My prediction | What happened |
| --- | --- | --- | --- |
| 9 | `Number('')` and `Number('  ')` | | |
| 10 | `Number(null)` and `Number('12abc')` | | |

## Part 2: Do this after TODO 5a

1. In the Console: `localStorage.setItem('spk-dishes', '[{"name":"Hack","price":"free"}]')`
2. Reload the page. What does the menu show? Click "Add". Did TypeScript warn you about any of this?
3. Finish TODO 5 (the safe version), then reload again. What happens now?
4. Try `localStorage.setItem('spk-dishes', '{oops')` and reload. Does the page still work?

## Part 3: The TODOs

Find the `TODO` comments in `src/index.ts`.

| # | Task | Concept | Done |
| --- | --- | --- | --- |
| 1 | `readDishForm(form)` returns a `NewDish` | `Omit<Dish, 'id'>`, `FormDataEntryValue`, `typeof` narrowing | |
| 2 | `validateDish` returns a `Validation` | Discriminated unions: `{ ok: true; ... } \| { ok: false; ... }` | |
| 3 | Handle the form submit | Narrowing on `result.ok`, spread into a `Dish` | |
| 4 | `saveState()` | `JSON.stringify`, `as const` keys | |
| 5 | `loadState()`: the dishes | `any` vs `unknown`, the `isDish` type guard, `try / catch` | |
| 6 | `loadState()`: the order | Checking arrays, removing `undefined` | |
| 7 | Bonus: remember the theme | Reusing `isTheme` | |
| 8 | Bonus: "Reset menu" | `localStorage.removeItem` | |

## Checklist

- [ ] `npm run dev` shows `Found 0 errors`
- [ ] An empty name, a missing price, a price of 0 and a duplicate name (" pizza ") each show the right error
- [ ] "Tacos", 119, spicy: it appears in the menu, and "Spicy" shows 2 dishes
- [ ] After a reload, the new dish, the order and the theme are still there
- [ ] The broken data from Part 2 does not break the page (the default menu is shown instead)
- [ ] `JSON.parse` is never assigned directly to a typed variable
- [ ] I did not use `any`, `!` or `as` (the provided `as const` is fine: it is not a cast)
- [ ] No red errors in the Console

## Questions to answer

1. `FormData.get()` can return a `File`. When? Why must you handle it even if your form has no file input?
2. Why is `Omit<Dish, 'id'>` better than writing a `NewDish` type by hand? What happens to `NewDish` if `Dish` gets a new property?
3. Compare `validateDish` returning `''` or an error (demo 100-7) with returning a `Validation`. Which mistakes are now impossible?
4. `JSON.parse` returns `any`. Why is that worse than `unknown`?
5. After `Array.isArray(parsed)`, `parsed` is `any[]`. Why is `.every(isDish)` still needed?
6. Your `isDish` checks `id`, `name`, `price` and `vegetarian`. What happens if a saved dish has `spicy: "yes"`?
7. In a backend, where would you do the same kind of check? (Request bodies, config files, messages from a queue...)

## Challenges (if you finish early)

- Make `isDish` also check the optional properties: `spicy` must be a boolean **or missing**, the same for `discount`.
- Show the error next to the right input. Change `Validation` so the error says which field: `{ ok: false; field: keyof NewDish; error: string }`.
- Write a generic `readStorage<T>(key: string, isValid: (value: unknown) => value is T): T | undefined` and use it for
  the dishes and the theme.
- Add a `discount` field to the form (optional, 0-100). Which types and checks change?
- Look up [Zod](https://zod.dev): it writes the type and the runtime check from one definition. Compare it with your `isDish`.

## Useful links

- [TypeScript Handbook: The unknown type](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)
- [TypeScript Handbook: Discriminated unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
- [TypeScript Handbook: The in operator narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing)
- [TypeScript: Utility types (Omit, Pick, Partial)](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [MDN: FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
