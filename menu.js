/* ==========================================================
   Provided: data and functions from demo 100-4. Do not edit.
   index.js can use everything here because both files are
   loaded with <script> tags, in this order.
   ========================================================== */

const menu = [
    { id: 1, name: 'Focaccia', price: 89, vegetarian: true },
    { id: 2, name: 'Pinsa', price: 149, vegetarian: true },
    { id: 3, name: 'Pabellon Criollo', price: 179, vegetarian: false },
    { id: 4, name: 'Pizza', price: 159, vegetarian: true, discount: 20 },
    { id: 5, name: 'Fiskegrateng', price: 199, vegetarian: false },
    { id: 6, name: 'Daal med naan', price: 139, vegetarian: true, spicy: true },
    { id: 7, name: 'Sushi', price: 229, vegetarian: false, discount: 0 },
];

// Sum of all prices. An empty list -> 0.
function getTotal(dishes) {
    return dishes.reduce((sum, dish) => sum + dish.price, 0);
}

// The dish with this id (number or string), or undefined.
function findById(dishes, id) {
    return dishes.find((dish) => dish.id === Number(id));
}
