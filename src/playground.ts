/* ==========================================================
   DEMO 101-2: PLAYGROUND (Part 1 of the handout)
   The page does not load this file. Everything here compiles.
   For each line: predict the type, then hover over the
   variable name in your editor to see what TypeScript says.
   ========================================================== */

// `export {}` makes this file a module, so its names do not clash with menu.ts and index.ts.
export {};

// Creating elements
const t1 = document.createElement('li');
const t2 = document.createElement('button');

// Selecting elements: by tag name, and by id
const t3 = document.querySelector('li');
const t4 = document.querySelector('#menu-list');

// Arrays (menu comes from menu.ts)
const t5 = menu.filter((dish) => dish.vegetarian);
const t6 = menu.map((dish) => dish.name);
const t7 = menu.find((dish) => dish.price < 100);

// const vs let: why are these two different?
const t8 = 'all';
let t9 = 'all';

// An array of strings, and the same array `as const`
const t10 = ['all', 'vegetarian', 'cheap'];
const t11 = ['all', 'vegetarian', 'cheap'] as const;

// Inside an event listener
document.addEventListener('click', (event) => {
    const t12 = event.target;
    if (t12 instanceof HTMLButtonElement) {
        const t13 = t12;
        const t14 = t12.dataset.filter;
    }
});
