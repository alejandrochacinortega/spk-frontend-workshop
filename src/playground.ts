/* ==========================================================
   DEMO 101-1: PLAYGROUND (Part 1 of the handout)
   The page does not load this file. It is only here to try
   things. Uncomment ONE example at a time (Cmd+/ or Ctrl+/),
   predict "error or OK?", then look at the editor and the
   terminal. Comment it out again before the next one.
   ========================================================== */

// `export {}` makes this file a module, so its names do not clash with menu.ts and index.ts.
export {};

// 1. Type inference: no type written, but TypeScript knows it. Hover over `price`.
// let price = 89;
// price = '89';

// 2. A typo in a property name
// const pizza = { name: 'Pizza', price: 159 };
// console.log(pizza.prize);

// 3. A parameter without a type
// function double(x) { return x * 2; }

// 4. JavaScript coercion: which of these two does TypeScript allow?
// const a = 10 + '5';
// const b = '10' * 2;

// 5. null
// let maybeName: string | null = null;
// console.log(maybeName.length);

// 6. Optional parameter
// function shout(text?: string) { return text.toUpperCase(); }

// 7. any: TypeScript stops checking. Does it compile? What happens at runtime?
// const anything: any = 'pizza';
// anything.toFixed(2);

// 8. unknown: the safe "I don't know yet". Then uncomment the if version.
// const something: unknown = 'pizza';
// something.toUpperCase();
// if (typeof something === 'string') { something.toUpperCase(); }

// 9. Structural typing: the shape matters, not the name. Is a Drink a Dish?
// type Dish = { name: string; price: number };
// type Drink = { name: string; price: number; size: 'small' | 'large' };
// const cola: Drink = { name: 'Cola', price: 35, size: 'large' };
// const dish: Dish = cola;

// 10. The same object, written directly: is it different from 9? (Keep `type Dish` from 9 uncommented.)
// const dish2: Dish = { name: 'Cola', price: 35, size: 'large' };

// 11. Union of literal types
// let size: 'small' | 'large' = 'small';
// size = 'medium';
