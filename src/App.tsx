/* ==========================================================
   DEMO 102-5: EFFECTS
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
// TODO 3: Make the clock tick. In 102-0 the time only changed when you saved. Now we fix that.
//         Under the useState line in Clock, write:
//
//             useEffect(() => {
//                 const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
//                 return () => clearInterval(id);
//             }, []);
//
//         setInterval  runs the code every 1000 ms (every second).
//         []           = run the effect only ONCE, when Clock is shown for the first time.
//         return ...   = clean up: stop the timer when Clock is removed from the page.
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    return <p className="clock">🕒 {time}</p>;
}

// ---------- App ----------
// TODO 1: Show the number of dishes in the browser tab title. In App, under addToOrder, write:
//
//             useEffect(() => {
//                 document.title = `(${order.length}) SPK Bistro`;
//             }, [order]);
//
//         Add some dishes and look at the browser tab.
//         [order] = run the effect again every time `order` changes.

// TODO 2: Put  console.log('effect ran');  inside your effect from TODO 1. Open the console (F12).
//         Click "Add" on a dish. Then click "+1 guest". When does the effect run? When not?

// TODO 4: Break it on purpose. Do ONE change at a time, look at the console and the tab title, then undo it.
//         a) Delete  [order]  (and the comma before it). Click "+1 guest" a few times.
//         b) Change  [order]  to  []. Add some dishes.

function App() {
    const [guests, setGuests] = useState(0);
    const [order, setOrder] = useState<Dish[]>([]);

    function addToOrder(dish: Dish) {
        setOrder([...order, dish]);
    }

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
