# Demo 101-1: TypeScript Basics (Student Handout)

## Goal

Turn the JavaScript restaurant page from demo 100-5 into TypeScript. You will:

- set up the TypeScript compiler and run it in watch mode
- describe the menu data with a type, and find two bugs that were already there
- fix every compiler error in the page code without changing what the page does

TypeScript is JavaScript with types. The browser cannot run it: the compiler checks your `.ts` files and writes
plain `.js` files. The types are only there at compile time. They are removed from the output.

## Setup

1. Install Node.js (version 20 or newer) if you don't have it: `node -v` in a terminal.
2. Make sure you are on the branch `101-1-ts-basics-start`.
3. In the project folder, run `npm install` (once), then `npm run dev`. Keep this terminal open: it recompiles every
   time you save, and lists the errors.
4. Open `index.html` in your browser, like before. It loads the compiled files from `dist/`.
5. You edit `src/menu.ts` and `src/index.ts`. Never edit `dist/`: it is overwritten on every save.
6. After each change: save, check the terminal, reload the page.

The page works even with errors: by default, the compiler reports errors but still writes the `.js` files.

## Part 1: The playground (10 min)

Open `src/playground.ts`. The page does not load it. Uncomment **one** example at a time (Cmd+/ or Ctrl+/),
write your prediction **before** you look at the editor, then comment it out again.

| # | Example | Error or OK? My prediction | What happened |
| --- | --- | --- | --- |
| 1 | `price = '89'` after `let price = 89` | | |
| 2 | `pizza.prize` | | |
| 3 | `function double(x)` | | |
| 4 | `10 + '5'` and `'10' * 2` | | |
| 5 | `maybeName.length` when it can be `null` | | |
| 6 | `text.toUpperCase()` when `text` is optional | | |
| 7 | `anything.toFixed(2)` when it is `any` | | |
| 8 | `something.toUpperCase()` when it is `unknown`, then the `typeof` version | | |
| 9 | Assigning a `Drink` to a `Dish` variable | | |
| 10 | The same object written directly as a `Dish` | | |
| 11 | `size = 'medium'` | | |

## Part 2: Type the app

Find the `TODO` comments. Start with `src/menu.ts`, then `src/index.ts`. Count the errors in the terminal before
you start, and watch the number go down.

| # | File | Task | Concept | Done |
| --- | --- | --- | --- | --- |
| 1 | menu.ts | Create the `Dish` type and use it for `menu`. Find the two bugs | Object types, optional properties `?` | |
| 2 | menu.ts | Type `getTotal` | Parameter and return types, `Dish[]` | |
| 3 | menu.ts | Type `findById` | `number \| string`, `Dish \| undefined` | |
| 4 | index.ts | Give `order` a type | Inference, `any[]` | |
| 5 | index.ts | The theme button can be `null` | Narrowing with `if`, `?.` and `!` | |
| 6 | index.ts | Select the order elements with `getElement` | Generics, runtime checks | |
| 7 | index.ts | Fix `renderOrder()` | `textContent` is a `string` | |
| 8 | index.ts | Fix the "Add" buttons | `querySelectorAll<T>`, `EventTarget`, handling `undefined` | |
| 9 | index.ts | Fix the "Clear order" button | `Element` vs `HTMLButtonElement` | |
| 10 | index.ts | Bonus: `getCurrentTheme()` returns only `'light'` or `'dark'` | Literal union types | |

## Checklist

- [ ] `npm run dev` shows `Found 0 errors`
- [ ] Adding Pizza and Sushi shows: 2 items, "Pizza, Sushi", 388 kr
- [ ] Adding Fiskegrateng adds 199 kr
- [ ] The theme button, the highlights and "Clear order" work like in demo 100-5
- [ ] There are no red errors in the Console
- [ ] I did not use `any`
- [ ] I can explain every `!`, `?.` and `<...>` I wrote

## Questions to answer

1. Open `dist/menu.js`. What happened to your `Dish` type? What does that mean for data from a form, a URL or an API?
2. The bugs in `menu` existed in demo 100-5 too. Why did JavaScript not tell you? What did the page show instead?
3. `querySelector` returns `Element | null`. Why can TypeScript not know that `#theme-toggle` exists?
4. What is the difference between `if (!x) throw ...`, `x?.foo()` and `x!.foo()`? When would you use each one?
5. `querySelectorAll<HTMLButtonElement>(...)` and `getElement(..., HTMLButtonElement)` both give you a button type.
   Which one checks it, and which one only promises it?
6. `findById` returns `Dish | undefined`. In demo 100-5, what happened when the id was not found?
7. In Java or C#, a `Drink` is only a `Dish` if it says `extends` or `implements`. How is TypeScript different
   (playground example 9)?

## Challenges (if you finish early)

- Use a `type` for an order line instead of repeating the same dish: `{ dish: Dish; quantity: number }`.
  How many errors does that change create? Let the compiler guide you through the refactor.
- Write `formatPrice(price: number): string` that returns `"388 kr"`, and use it in `renderOrder()`.
- Set `"noEmitOnError": true` in `tsconfig.json` and add an error. What happens to the page?
- Make `getTotal` use the discounts: a dish with `discount: 20` costs 20 % less. Which types help you here?
- Rewrite the theme button with `getElement` too, and remove the `if`.

## Useful links

- [TypeScript Handbook: The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Handbook: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript for Java/C# Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html)
- [TypeScript Playground (online)](https://www.typescriptlang.org/play)
- [tsconfig reference](https://www.typescriptlang.org/tsconfig/)
