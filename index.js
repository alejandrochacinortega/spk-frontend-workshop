/* ==========================================================
   DEMO 100-4: JAVASCRIPT BASICS
   Goal: make every check on the page green.
   Open DevTools (F12) > Console: every check is logged there too.
   Only edit the TODO functions. The checks at the bottom are
   the "tests": read them to see what each function must return.
   Tip: type `menu` in the Console to explore the data.
   ========================================================== */

// ---------- Data ----------
// The dishes from the page, as an array of objects.
const menu = [
    { id: 1, name: 'Focaccia', price: 89, vegetarian: true },
    { id: 2, name: 'Pinsa', price: 149, vegetarian: true },
    { id: 3, name: 'Pabellon Criollo', price: 179, vegetarian: false },
    { id: 4, name: 'Pizza', price: 159, vegetarian: true, discount: 20 },
    { id: 5, name: 'Fiskegrateng', price: 199, vegetarian: false },
    { id: 6, name: 'Daal med naan', price: 139, vegetarian: true, spicy: true },
    { id: 7, name: 'Sushi', price: 229, vegetarian: false, discount: 0 },
];

// ---------- TODOs ----------

// TODO 1: Return the price as text: 129 -> "129 kr". A price of 0 -> "Free".
// Use a template literal (backticks).
function formatPrice(price) {
    if (price === 0) {
        return 'Free';
    }
    return `${price} kr`;
}

// TODO 2: Return "Focaccia (89 kr)". Spicy dishes: "Daal med naan (139 kr, spicy)".
// Use destructuring with a default value: const { name, price, spicy = false } = dish;
function describeDish(dish) {
    const { name, price, spicy = false } = dish;
    const extra = spicy ? ', spicy' : '';
    return `${name} (${formatPrice(price)}${extra})`;
}

// TODO 3: Return the names of the vegetarian dishes, in menu order.
// Use .filter() and .map() with arrow functions.
function getVegetarianNames(dishes) {
    return dishes
        .filter((dish) => dish.vegetarian)
        .map((dish) => dish.name);
}

// TODO 4: Return the sum of all prices. An empty list -> 0.
// Use .reduce(). What happens with an empty list if you forget the initial value?
function getTotal(dishes) {
    return dishes.reduce((sum, dish) => sum + dish.price, 0);
}

// TODO 5: Return the dish with this id, or undefined.
// The id can be a number (3) or a string ("3"), like a value read from a form or a URL.
// Use .find() and ===. Do not use ==.
function findById(dishes, id) {
    return dishes.find((dish) => dish.id === Number(id));
}

// TODO 6: Return a NEW array with the dish added at the end. Do not change `dishes`.
// `menu` is a const... can you still push to it? Use the spread syntax: [...dishes, dish]
function addDish(dishes, dish) {
    return [...dishes, dish];
}

// TODO 7 (bonus): Return the discount in percent. If a dish has no discount, return 10.
// Careful: Sushi has discount: 0. Compare `||` and `??`.
function getDiscount(dish) {
    return dish.discount ?? 10;
}

// TODO 8 (bonus): Return a NEW array sorted by price, cheapest first. Do not change `dishes`.
// .sort() changes the original array! Copy it first, and give sort a compare function.
function sortByPrice(dishes) {
    return [...dishes].sort((a, b) => a.price - b.price);
}

// ---------- Checks (do not edit) ----------
check('formatPrice(129)', () => formatPrice(129), '129 kr');
check('formatPrice(0)', () => formatPrice(0), 'Free');

check('describeDish(Focaccia)', () => describeDish(menu[0]), 'Focaccia (89 kr)');
check('describeDish(Daal med naan)', () => describeDish(menu[5]), 'Daal med naan (139 kr, spicy)');

check('getVegetarianNames(menu)', () => getVegetarianNames(menu), ['Focaccia', 'Pinsa', 'Pizza', 'Daal med naan']);

check('getTotal(menu)', () => getTotal(menu), 1143);
check('getTotal([])', () => getTotal([]), 0);

check('findById(menu, 3)?.name', () => findById(menu, 3)?.name, 'Pabellon Criollo');
check('findById(menu, "3")?.name', () => findById(menu, '3')?.name, 'Pabellon Criollo');
check('findById(menu, 99) === undefined', () => findById(menu, 99) === undefined, true);

check('addDish: [new length, menu length]', () => {
    const result = addDish(menu, { id: 8, name: 'Tacos', price: 119, vegetarian: false });
    return [result.length, menu.length];
}, [8, 7]);

check('getDiscount(Pizza)', () => getDiscount(menu[3]), 20);
check('getDiscount(Focaccia)', () => getDiscount(menu[0]), 10);
check('getDiscount(Sushi)', () => getDiscount(menu[6]), 0);

check('sortByPrice(menu): ids', () => sortByPrice(menu).map((dish) => dish.id), [1, 6, 2, 4, 3, 5, 7]);
check('menu ids after sortByPrice (unchanged)', () => {
    sortByPrice(menu);
    return menu.map((dish) => dish.id);
}, [1, 2, 3, 4, 5, 6, 7]);
