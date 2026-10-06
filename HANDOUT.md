# Demo 101-0a: Hello, TypeScript (Student Handout)

## Goal

Write and run your first TypeScript file. You will:

- compile a `.ts` file to JavaScript and run it with Node
- see that TypeScript knows the types of your variables without you writing them
- read your first TypeScript errors

TypeScript is JavaScript with types. Node and the browser cannot run TypeScript: the compiler (`tsc`) checks your
code, then writes plain JavaScript to `dist/`.

## Setup

1. Install Node.js (version 20 or newer) if you don't have it: `node -v` in a terminal.
2. Make sure you are on the branch `101-0a-ts-hello-start`.
3. In the project folder, run `npm install` (once).
4. Open `src/1-hello.ts`. Run it with `npm run hello`.

`npm run hello` runs `tsc` and then `node dist/1-hello.js`. If `tsc` finds an error, your code does **not** run.

## Tasks

Follow the `TODO` comments in `src/1-hello.ts`.

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Print "Hello from TypeScript!" | | |
| 2 | Compare `dist/1-hello.js` with `src/1-hello.ts`. What changed? | | |
| 3 | Hover over the four variables. What type does each one have? | | |
| 4 | Print one sentence that uses all four variables | | |
| 5a | `freeTables = 'twelve'` | Error / OK | |
| 5b | `restaurant = 'Burger Palace'` | Error / OK | |
| 5c | `dishes.push(42)` | Error / OK | |
| 5d | `restaurant.toUppercase()` | Error / OK | |
| 5e | `isOpen + 1` | Error / OK | |
| 5f | `dishes[0] * 2` | Error / OK | |
| 6a | `dishOfTheDay = 42` without a type | Error / OK | |
| 6b | `dishOfTheDay = 42` with `: string` | Error / OK | |

## Checklist

- [ ] `npm run hello` prints my hello message and my sentence
- [ ] I read at least three error messages and can say what each one means
- [ ] All the "break it" lines are commented out again
- [ ] I can explain the difference between `src/` and `dist/`

## Questions to answer

1. What does `npm run hello` do, step by step?
2. Which of the lines in TODO 5 would plain JavaScript run without complaining? What would it print?
3. The type of `restaurant` is `"SPK Bistro"`, not `string`. Why? (Hint: `const`.)
4. When do you need to write a type yourself, and when can you let TypeScript guess?

## Challenges

- Add a variable `price` with a decimal number, and print it with two decimals (`toFixed`).
- Create an empty array: `const orders = [];`. Hover over it. Then write `const orders: string[] = [];`. What changed?
- Run `npm run dev` in a second terminal. Now break something and save. What happens?

## Links

- [TypeScript for JavaScript programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript playground](https://www.typescriptlang.org/play)
