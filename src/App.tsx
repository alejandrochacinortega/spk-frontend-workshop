/* ==========================================================
   DEMO 102-2: PROPS
   Start it with:  npm run dev
   Props are how you give data to a component, like arguments to a function.
   All the types are ready. You only fill in the TODOs.
   ========================================================== */
import { dishes, type Dish } from './data';

// ---------- Header ----------
// HeaderProps says: <Header> must get a `title`, and it is a string.
type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    // TODO 1: Show the title. Replace ??? with {title}.
    return <h1>???</h1>;
}

// ---------- DishCard ----------
// DishCardProps says: <DishCard> must get a `dish`.
type DishCardProps = {
    dish: Dish;
};

function DishCard({ dish }: DishCardProps) {
    // TODO 3: Replace each ??? with {dish.emoji}, {dish.name} and {dish.price}.
    return (
        <li className="card">
            <span className="emoji">???</span>
            <strong>???</strong>
            <span className="price">??? kr</span>
        </li>
    );
}

// ---------- App ----------
// TODO 2: In App, replace <h1>SPK Bistro</h1> with:  <Header title="SPK Bistro" />
//         Then try another title. The Header component does not change, only the prop.

// TODO 4: In App, replace the whole <li> inside .map() with:
//
//             <DishCard key={dish.id} dish={dish} />
//
//         Now every dish is shown by DishCard. The key stays on the outside.

// TODO 5: Break it on purpose. Do ONE change at a time, read the red line, then undo it.
//         a) <Header />                  (no title)
//         b) <Header title={42} />       (a number, not a string)
//         c) <DishCard key={dish.id} />  (no dish)

function App() {
    return (
        <main>
            <h1>SPK Bistro</h1>

            <h2>Menu</h2>
            <p>{dishes.length} dishes</p>

            <ul className="menu">
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        {dish.emoji} {dish.name}: {dish.price} kr
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default App;
