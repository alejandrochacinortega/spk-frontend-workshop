/* ==========================================================
   DEMO 101-0a: HELLO, TYPESCRIPT
   Run it with:  npm run hello
   That command does two things:
     1. tsc   checks src/*.ts and writes plain JavaScript to dist/
     2. node  runs dist/1-hello.js
   If tsc finds an error, step 2 does not happen.
   ========================================================== */

// TODO 1: Print "Hello from TypeScript!" with console.log. Then run `npm run hello`.
console.log('Hello from TypeScript!');


// TODO 2: Open dist/1-hello.js and compare it with this file. What changed?
// The types are gone: dist/ is plain JavaScript. (In this file there were no types written yet, so it looks almost the same.)


// TODO 3: Hover over each variable name below. TypeScript already knows the types,
//         even though nobody wrote them. This is called "inference".
//         Why is the type of `restaurant` not just `string`?
const restaurant = 'SPK Bistro';
let freeTables = 12;
const isOpen = true;
const dishes = ['Pizza', 'Sushi', 'Taco'];


// TODO 4: Print one sentence that uses all four variables, for example:
//         "SPK Bistro is open: true. Free tables: 12. Today: Pizza, Sushi, Taco"
console.log(`${restaurant} is open: ${isOpen}. Free tables: ${freeTables}. Today: ${dishes.join(', ')}`);


// TODO 5: Break it on purpose. Uncomment ONE line at a time (Cmd+/ or Ctrl+/).
//         Guess first, then read the red line in the editor and run `npm run hello`.
//         Comment the line out again before you try the next one.
// freeTables = 'twelve';
// restaurant = 'Burger Palace';
// dishes.push(42);
// console.log(restaurant.toUppercase());
// console.log(isOpen + 1);
// console.log(dishes[0] * 2);


// TODO 6: When a variable has no value yet, TypeScript cannot guess its type.
//         a) Add the line `dishOfTheDay = 42;` below the assignment. Error or OK?
//         b) Now write the type yourself: `let dishOfTheDay: string;`. Error or OK?
let dishOfTheDay: string;
dishOfTheDay = 'Fish soup';
console.log('Dish of the day:', dishOfTheDay);
// dishOfTheDay = 42; // Error now: Type 'number' is not assignable to type 'string'.
