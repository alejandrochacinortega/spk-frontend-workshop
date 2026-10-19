/* ==========================================================
   DEMO 102-4: CALLBACKS (pass a function as a prop)
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
// TODO 1: DishCard has a NEW prop: onAdd. It is a function that gets a dish.
//         Look at App below: <DishCard> has a red line now. Hover over it. What is missing?
type DishCardProps = {
    dish: Dish;
    onAdd: (dish: Dish) => void;
};

function DishCard({ dish, onAdd }: DishCardProps) {
    // TODO 4: Call onAdd when the button is clicked. Add to the <button>:
    //
    //             onClick={() => onAdd(dish)}
    return (
        <li className="card">
            <span className="emoji">{dish.emoji}</span>
            <strong>{dish.name}</strong>
            <span className="price">{dish.price} kr</span>
            <button>Add</button>
        </li>
    );
}

// ---------- App ----------
// TODO 6: Break it on purpose. Do ONE change at a time, then undo it.
//         a) In DishCard, write  onClick={onAdd(dish)}  (no "() =>"). Look at the page and the console.
//         b) In App, write  onAdd="addToOrder"  (a string, not the function).

function App() {
    const [guests, setGuests] = useState(0);
    const [order, setOrder] = useState<Dish[]>([]);

    // TODO 2: Write what happens when a dish is added. Inside the function, write:
    //
    //             setOrder([...order, dish]);
    function addToOrder(dish: Dish) {
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
                {/* TODO 3: Give DishCard the function: add  onAdd={addToOrder}  to <DishCard>.
                            The red line goes away. */}
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </ul>

            {/* TODO 5: The "Add" buttons on the cards work now. Delete this whole Quick order part. */}
            <h2>Quick order</h2>
            <div className="buttons">
                {dishes.map((dish) => (
                    <button key={dish.id} onClick={() => setOrder([...order, dish])}>
                        + {dish.name}
                    </button>
                ))}
            </div>

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
