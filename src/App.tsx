/* ==========================================================
   DEMO 102-4: CALLBACKS (solution)
   Start it with:  npm run dev
   The order lives in App. The "Add" button lives in DishCard.
   How can DishCard change App's state? App gives DishCard a function.
   ========================================================== */
import { useState } from 'react';
import { dishes, getTotal, type Dish } from './data';

// ---------- Header ----------
type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return <h1>{title}</h1>;
}

// ---------- DishCard ----------
// TODO 1: onAdd is a function that gets a dish. Without it: TS2741 Property 'onAdd' is missing.
type DishCardProps = {
    dish: Dish;
    onAdd: (dish: Dish) => void;
};

function DishCard({ dish, onAdd }: DishCardProps) {
    return (
        <li className="card">
            <span className="emoji">{dish.emoji}</span>
            <strong>{dish.name}</strong>
            <span className="price">{dish.price} kr</span>
            {/* TODO 4: tell App which dish was clicked */}
            <button onClick={() => onAdd(dish)}>Add</button>
        </li>
    );
}

// ---------- App ----------
// TODO 6 (break it):
//   a) onClick={onAdd(dish)}   TS2322: Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement>'.
//                              It CALLS onAdd while drawing, not on click. That changes state, which draws again,
//                              which calls onAdd again... The console says "Too many re-renders".
//                              () => onAdd(dish) is a function that calls onAdd LATER, on click.
//   b) onAdd="addToOrder"      TS2322: Type 'string' is not assignable to type '(dish: Dish) => void'.

function App() {
    const [guests, setGuests] = useState(0);
    const [order, setOrder] = useState<Dish[]>([]);

    // TODO 2: App owns the order, so App decides how to change it
    function addToOrder(dish: Dish) {
        setOrder([...order, dish]);
    }

    return (
        <main>
            <Header title="SPK Bistro" />

            <h2>Guests today</h2>
            <p>{guests} guests</p>
            <div className="buttons">
                <button onClick={() => setGuests(guests + 1)}>+1 guest</button>
                <button onClick={() => setGuests(0)}>Reset</button>
            </div>

            <h2>Menu</h2>
            <ul className="menu">
                {/* TODO 3: data down (dish), function down (onAdd) */}
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} onAdd={addToOrder} />
                ))}
            </ul>

            {/* TODO 5: the Quick order part is deleted */}

            <h2>Your order</h2>
            <ul className="order">
                {order.map((dish, index) => (
                    <li key={index}>
                        {dish.emoji} {dish.name}
                    </li>
                ))}
            </ul>
            <p className="total">Total: {getTotal(order)} kr</p>
            <button onClick={() => setOrder([])}>Clear order</button>
        </main>
    );
}

export default App;
