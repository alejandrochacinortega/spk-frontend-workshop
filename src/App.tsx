/* ==========================================================
   DEMO 102-3: STATE (solution)
   Start it with:  npm run dev
   State is data that can change. When state changes, React draws the page again.
   ========================================================== */
import { useState } from 'react';
import { dishes, getTotal, type Dish } from './data';

// ---------- Header (from 102-2) ----------
type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return <h1>{title}</h1>;
}

// ---------- DishCard (from 102-2) ----------
type DishCardProps = {
    dish: Dish;
};

function DishCard({ dish }: DishCardProps) {
    return (
        <li className="card">
            <span className="emoji">{dish.emoji}</span>
            <strong>{dish.name}</strong>
            <span className="price">{dish.price} kr</span>
        </li>
    );
}

// ---------- App ----------
// TODO 7 (break it):
//   a) let guests = 0     The console counts 1, 2, 3... but the page stays at 0.
//                         React does not know a normal variable changed, so it does not draw again.
//                         (And on every draw, `let guests = 0` starts at 0 again.)
//   b) order.push(dish)   Nothing happens on the page. push changes the old list, React sees
//                         the same list and does not draw again. Use setOrder([...order, dish]).

function App() {
    // TODO 1: guests = the value now, setGuests = the function that changes it
    const [guests, setGuests] = useState(0);

    // TODO 3: the order starts as an empty list of dishes
    const [order, setOrder] = useState<Dish[]>([]);

    return (
        <main>
            <Header title="SPK Bistro" />

            <h2>Guests today</h2>
            <p>{guests} guests</p>
            <div className="buttons">
                {/* TODO 2 */}
                <button onClick={() => setGuests(guests + 1)}>+1 guest</button>
                <button onClick={() => setGuests(0)}>Reset</button>
            </div>

            <h2>Menu</h2>
            <ul className="menu">
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </ul>

            <h2>Quick order</h2>
            <div className="buttons">
                {dishes.map((dish) => (
                    // TODO 4: a NEW list with the old dishes, plus this one
                    <button key={dish.id} onClick={() => setOrder([...order, dish])}>
                        + {dish.name}
                    </button>
                ))}
            </div>

            <h2>Your order</h2>
            <ul className="order">
                {/* TODO 5: the same dish can be there twice, so the position is the key */}
                {order.map((dish, index) => (
                    <li key={index}>
                        {dish.emoji} {dish.name}
                    </li>
                ))}
            </ul>
            <p className="total">Total: {getTotal(order)} kr</p>
            {/* TODO 6 */}
            <button onClick={() => setOrder([])}>Clear order</button>
        </main>
    );
}

export default App;
