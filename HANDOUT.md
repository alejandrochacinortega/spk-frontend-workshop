# Demo 100-4: JavaScript Basics (Student Handout)

## Goal

Learn the core of the JavaScript language by making failing checks pass, like unit tests.
You will work with the restaurant menu as data: an array of objects. There is no DOM work yet: that is demo 100-5.

If you already know another language (Java, C#, Python, Go...), pay attention to the places where
JavaScript behaves differently. Those are the bugs you will meet in real code.

## Setup

1. Make sure you are on the branch `100-4-js-basics-start`.
2. Open `index.html` in your browser. Scroll down to **Checks 🧪**: every check is red.
3. Open DevTools (F12 or Cmd+Option+I) and go to the **Console** tab. The same checks are logged there.
4. You only edit `index.js`. `checks.js` is the provided test helper: do not edit it.
5. After each change, save and reload the page.

## Part 1: Explore in the Console (10 min)

Type each line in the Console. Write your prediction **before** you press Enter.

| # | Type this | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | `typeof 42`, `typeof "42"`, `typeof null` | | |
| 2 | `0.1 + 0.2` | | |
| 3 | `"5" + 1` and `"5" - 1` | | |
| 4 | `"3" == 3` and `"3" === 3` | | |
| 5 | `Boolean(0)`, `Boolean("")`, `Boolean("0")`, `Boolean([])` | | |
| 6 | `null == undefined` and `NaN === NaN` | | |
| 7 | `const x = 1; x = 2;` | | |
| 8 | `const list = [1]; list.push(2); list` | | |
| 9 | `[100, 25, 3].sort()` | | |
| 10 | `menu` (the data from `index.js`) | | |

## Part 2: Make the checks green

Find the `TODO` comments in `index.js`. Read the matching check at the bottom of the file first:
it tells you what the function must return.

| # | Function | Concept | Done |
| --- | --- | --- | --- |
| 1 | `formatPrice(price)` | Template literals, `if` | |
| 2 | `describeDish(dish)` | Destructuring, default values | |
| 3 | `getVegetarianNames(dishes)` | Arrow functions, `.filter()`, `.map()` | |
| 4 | `getTotal(dishes)` | `.reduce()` | |
| 5 | `findById(dishes, id)` | `.find()`, `===`, type conversion | |
| 6 | `addDish(dishes, dish)` | `const`, spread, not changing inputs | |
| 7 | Bonus: `getDiscount(dish)` | `\|\|` vs `??` | |
| 8 | Bonus: `sortByPrice(dishes)` | `.sort()` with a compare function, copies | |

## Checklist

- [ ] All checks on the page are green
- [ ] There are no red errors in the Console
- [ ] I did not edit `checks.js` or the checks at the bottom of `index.js`
- [ ] None of my functions change the `menu` array
- [ ] I used `===`, not `==`
- [ ] I can explain every line I wrote

## Questions to answer

1. What is the difference between `let`, `const` and `var`? Why can you `push` to a `const` array?
2. Why does `"5" + 1` give `"51"` but `"5" - 1` give `4`?
3. What happens with `.reduce()` on an empty array if you forget the initial value?
4. Why is `dish.discount || 10` wrong for Sushi? What does `??` do differently?
5. Why did `findById(menu, "3")` need special care? Where do strings like `"3"` come from in a web page?
6. What does `?.` do in the check `findById(menu, 99)?.name`?

## Challenges (if you finish early)

- Write `getCheapest(dishes)` that returns the cheapest dish. Add your own `check(...)` for it.
- Write `groupByVegetarian(dishes)` that returns `{ vegetarian: [...names], other: [...names] }`.
- Show a price with a discount applied, rounded to whole kroner. Try `Math.round` and `toFixed`: what type does each return?
- Try `console.table(menu)` in the Console.

## Useful links

- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
- [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [javascript.info](https://javascript.info/)
