/* ==========================================================
   DEMO 102-3: STATE
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
// TODO 1: A guest counter. At the top of App (before return), write:
//
//             const [guests, setGuests] = useState(0);
//
//         guests     = the value now (starts at 0)
//         setGuests  = the function that changes it
//         Then replace ??? in "??? guests" with {guests}.

// TODO 2: Make the buttons work. Add onClick to them:
//
//             <button onClick={() => setGuests(guests + 1)}>+1 guest</button>
//             <button onClick={() => setGuests(0)}>Reset</button>

// TODO 3: The order. Uncomment the line in App:  const [order, setOrder] = useState<Dish[]>([]);
//         order starts as an empty list of dishes.

// TODO 4: Make the "Quick order" buttons work. Add this to the <button> inside .map():
//
//             onClick={() => setOrder([...order, dish])}
//
//         [...order, dish] = a NEW list with all the old dishes, plus this one.

// TODO 5: Show the order. Inside <ul className="order">, write:
//
//             {order.map((dish, index) => <li key={index}>{dish.emoji} {dish.name}</li>)}
//
//         (The same dish can be in the order twice, so we use the position as key.)
//         Then replace ??? in "Total: ??? kr" with {getTotal(order)}.

// TODO 6: Make "Clear order" work: onClick={() => setOrder([])}

// TODO 7: Break it on purpose. Do ONE change at a time, then undo it.
//         a) Replace the guests line with  let guests = 0;
//            and the +1 button with  onClick={() => { guests = guests + 1; console.log(guests); }}
//            Click and look at the console AND at the page. What is different?
//         b) Change a Quick order button to  onClick={() => order.push(dish)}
//            Click it. Does the order update?

function App() {
    // const [order, setOrder] = useState<Dish[]>([]);

    return (
        <main>
            <Header title="SPK Bistro" />

            <h2>Guests today</h2>
            <p>??? guests</p>
            <div className="buttons">
                <button>+1 guest</button>
                <button>Reset</button>
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
                    <button key={dish.id}>
                        + {dish.name}
                    </button>
                ))}
            </div>

            <h2>Your order</h2>
            <ul className="order">
                {/* TODO 5 */}
            </ul>
            <p className="total">Total: ??? kr</p>
            <button>Clear order</button>
        </main>
    );
}

export default App;
