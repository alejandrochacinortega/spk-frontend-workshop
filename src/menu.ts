/* ==========================================================
   DEMO 101-1: TYPESCRIPT BASICS (part 1 of 2: the data)
   This is menu.js from demo 100-5, renamed to .ts.
   The code is the same, but the compiler now checks it.
   Start `npm run dev` and fix the errors, one TODO at a time.
   Both files are still loaded with <script> tags (index.html
   loads dist/menu.js, then dist/index.js), so index.ts can
   use everything declared here.
   ========================================================== */

// TODO 1: Describe what a dish looks like.
// a) Create a type `Dish` with: id (number), name (string), price (number), vegetarian (boolean),
//    and the optional properties spicy (boolean) and discount (number). Optional = `spicy?: boolean`.
// b) Tell TypeScript that `menu` is a list of dishes: `const menu: Dish[] = [...]`
// c) Two dishes now have errors. These bugs were already here in JavaScript!
//    Before you fix them: open the page, add Pizza and Sushi, and look at the total. Then add Fiskegrateng.

type Dish = {
    id: number;
    name: string;
    price: number;
    vegetarian: boolean;
    spicy?: boolean;
    discount?: number;
};

const menu: Dish[] = [
    { id: 1, name: 'Focaccia', price: 89, vegetarian: true },
    { id: 2, name: 'Pinsa', price: 149, vegetarian: true },
    { id: 3, name: 'Pabellon Criollo', price: 179, vegetarian: false },
    { id: 4, name: 'Pizza', price: 159, vegetarian: true, discount: 20 },
    { id: 5, name: 'Fiskegrateng', price: 199, vegetarian: false },
    { id: 6, name: 'Daal med naan', price: 139, vegetarian: true, spicy: true },
    { id: 7, name: 'Sushi', price: 229, vegetarian: false, discount: 0 },
];

// TODO 2: Add types to the parameters and the return value.
// Sum of all prices. An empty list -> 0.
function getTotal(dishes: Dish[]): number {
    return dishes.reduce((sum, dish) => sum + dish.price, 0);
}

// TODO 3: Add types to findById.
// In demo 100-4 the id could be a number (3) or a string ("3"), so we used Number(id).
// Choose: `id: number | string` (and keep Number), or `id: number` (and convert where you read data-id).
// What should the return type be when no dish has this id?
// The dish with this id, or undefined.
function findById(dishes: Dish[], id: number): Dish | undefined {
    return dishes.find((dish) => dish.id === id);
}
