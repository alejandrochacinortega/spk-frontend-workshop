/* ==========================================================
   The menu data. You do not need to change this file.
   ========================================================== */

// What one dish looks like.
export type Dish = {
    id: number;
    name: string;
    price: number;
    emoji: string;
};

// All dishes on the menu.
export const dishes: Dish[] = [
    { id: 1, name: 'Pizza', price: 149, emoji: '🍕' },
    { id: 2, name: 'Sushi', price: 189, emoji: '🍣' },
    { id: 3, name: 'Taco', price: 99, emoji: '🌮' },
    { id: 4, name: 'Salad', price: 119, emoji: '🥗' },
];

// Adds up the prices of all dishes in an order.
export function getTotal(order: Dish[]): number {
    return order.reduce((sum, dish) => sum + dish.price, 0);
}
