/* ==========================================================
   Provided: the typed data and functions from demo 101-1,
   plus formatPrice and describeDish. Do not edit.
   index.ts can use everything here because both files are
   loaded with <script> tags, in this order.
   ========================================================== */

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

// 129 -> "129 kr", 0 -> "Free".
function formatPrice(price: number): string {
    if (price === 0) {
        return 'Free';
    }
    return `${price} kr`;
}

// "Focaccia (89 kr)" or "Daal med naan (139 kr, spicy)".
function describeDish(dish: Dish): string {
    const { name, price, spicy = false } = dish;
    const extra = spicy ? ', spicy' : '';
    return `${name} (${formatPrice(price)}${extra})`;
}

// Sum of all prices. An empty list -> 0.
function getTotal(dishes: Dish[]): number {
    return dishes.reduce((sum, dish) => sum + dish.price, 0);
}

// The dish with this id, or undefined.
function findById(dishes: Dish[], id: number): Dish | undefined {
    return dishes.find((dish) => dish.id === id);
}
