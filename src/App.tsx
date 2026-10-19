/* ==========================================================
   DEMO 102-2: PROPS (solution)
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
    // TODO 1
    return <h1>{title}</h1>;
}

// ---------- DishCard ----------
// DishCardProps says: <DishCard> must get a `dish`.
type DishCardProps = {
    dish: Dish;
};

function DishCard({ dish }: DishCardProps) {
    // TODO 3
    return (
        <li className="card">
            <span className="emoji">{dish.emoji}</span>
            <strong>{dish.name}</strong>
            <span className="price">{dish.price} kr</span>
        </li>
    );
}

// ---------- App ----------
// TODO 5 (all are errors, TypeScript checks the props for you):
//   a) <Header />                  TS2741: Property 'title' is missing in type '{}' but required in type 'HeaderProps'.
//   b) <Header title={42} />       TS2322: Type 'number' is not assignable to type 'string'.
//   c) <DishCard key={dish.id} />  TS2741: Property 'dish' is missing ... but required in type 'DishCardProps'.

function App() {
    return (
        <main>
            {/* TODO 2 */}
            <Header title="SPK Bistro" />

            <h2>Menu</h2>
            <p>{dishes.length} dishes</p>

            <ul className="menu">
                {/* TODO 4: App gives each dish to DishCard as a prop */}
                {dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </ul>
        </main>
    );
}

export default App;
