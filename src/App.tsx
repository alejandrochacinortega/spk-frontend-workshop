/* ==========================================================
   DEMO 102-5: EFFECTS (solution)
   Start it with:  npm run dev
   useEffect runs code AFTER React has drawn the page.
   Use it to do things outside React: the browser tab title, a timer...
   ========================================================== */
import { useEffect, useState } from 'react';
import { dishes, getTotal, type Dish } from './data';

// ---------- Header ----------
type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return <h1>{title}</h1>;
}

// ---------- DishCard ----------
// onAdd is a function that gets a dish (from 102-4).
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
            <button onClick={() => onAdd(dish)}>Add</button>
        </li>
    );
}

// ---------- Clock ----------
// TODO 3: the clock ticks. Not in 102-0, because there was no state and no timer.
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // every 1000 ms: new state, so React draws the clock again
        const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

        // clean up: stop the timer when Clock is removed from the page
        return () => clearInterval(id);
    }, []); // [] = start the timer only once

    return <p className="clock">🕒 {time}</p>;
}

// ---------- App ----------
// TODO 4 (break it):
//   a) no list        'effect ran' after EVERY draw, also when you click "+1 guest" (guests changed, App draws again).
//   b) []             The effect runs only once: the title stays "(0) SPK Bistro" when you add dishes.
//   No TypeScript errors here: these are logic mistakes. Read the console.

function App() {
    const [guests, setGuests] = useState(0);
    const [order, setOrder] = useState<Dish[]>([]);

    function addToOrder(dish: Dish) {
        setOrder([...order, dish]);
    }

    // TODO 1 + 2: after a draw, and only when `order` changed, update the tab title
    useEffect(() => {
        console.log('effect ran');
        document.title = `(${order.length}) SPK Bistro`;
    }, [order]);

    return (
        <main>
            <Header title="SPK Bistro" />
            <Clock />

            <h2>Guests today</h2>
            <p>{guests} guests</p>
            <div className="buttons">
                <button onClick={() => setGuests(guests + 1)}>+1 guest</button>
                <button onClick={() => setGuests(0)}>Reset</button>
            </div>

            <h2>Menu</h2>
            <ul className="menu">
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} onAdd={addToOrder} />
                ))}
            </ul>

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
