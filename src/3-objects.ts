/* ==========================================================
   DEMO 101-0c: OBJECT TYPES
   Run it with:  npm run objects
   Goal: every check in the output is ✅, and there is no `any` left in this file.
   ========================================================== */

// TODO 1: Run `npm run objects` before you change anything. Some checks are ❌.
//         Look at the "got" values. Can you find the bugs in the menu below just by reading it?


// TODO 2: Describe one dish with a type. Fill in the properties:
//         type Dish = {
//           id: number;
//           ...
//         };
//         Then tell TypeScript that `menu` is a list of dishes: `const menu: Dish[] = [...]`.
//         TypeScript now finds two bugs in the data. Fix them.

const menu = [
  { id: 1, name: 'Pizza Margherita', price: 159, category: 'main', vegetarian: true },
  { id: 2, name: 'Sushi', price: 229, category: 'main', vegetarian: false },
  { id: 3, name: 'Tomato soup', price: 89, category: 'starter', vegetarian: true },
  { id: 4, name: 'Garlic bread', price: '49', category: 'starter', vegetarian: true },
  { id: 5, name: 'Fish cakes', prise: 119, category: 'main', vegetarian: false },
  { id: 6, name: 'Chocolate cake', price: 79, category: 'desert', vegetarian: true },
];


// TODO 3: Replace every `any` with a real type. Hover over `dish` inside each function before and after.

function getTotal(dishes: any): any {
  return dishes.reduce((sum: any, dish: any) => sum + dish.price, 0);
}

function vegetarianNames(dishes: any): any {
  return dishes.filter((dish: any) => dish.vegetarian).map((dish: any) => dish.name);
}

function cheaperThan(dishes: any, maxPrice: any): any {
  return dishes.filter((dish: any) => dish.price < maxPrice);
}

function countInCategory(dishes: any, category: any): any {
  return dishes.filter((dish: any) => dish.category === category).length;
}

function findDish(dishes: any, id: any): any {
  return dishes.find((dish: any) => dish.id === id);
}


// TODO 4: findDish can return `undefined` (no dish has id 99). Once findDish has a return type,
//         uncomment the line below. What does TypeScript say? Fix it with an `if`.
// console.log('Dish 99 is called', findDish(menu, 99).name);


// TODO 5: A category is not any string. Change the type of `category` in Dish to
//         'starter' | 'main' | 'dessert'
//         TypeScript finds one more bug. Then give `countInCategory` the same type for its parameter,
//         and try countInCategory(menu, 'drinks').


check('Total price of the menu', getTotal(menu), 724);
check('Vegetarian dishes', vegetarianNames(menu), ['Pizza Margherita', 'Tomato soup', 'Garlic bread', 'Chocolate cake']);
check('Dishes under 100 kr', cheaperThan(menu, 100).length, 3);
check('Number of desserts', countInCategory(menu, 'dessert'), 1);
check('Dish 2', findDish(menu, 2)?.name, 'Sushi');


// ---- Helper: prints ✅ or ❌. You don't need to change it. ----
function check(description: string, actual: unknown, expected: unknown): void {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ ${description}`);
  } else {
    console.log(`❌ ${description}: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
}
