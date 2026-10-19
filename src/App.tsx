/* ==========================================================
   DEMO 102-1: LISTS (solution)
   Start it with:  npm run dev
   ========================================================== */
import { dishes } from './data';

// TODO 1: `dishes` is an array of Dish objects (Dish[]), from data.ts.

// TODO 2: By hand works, but you need one line per dish:
//             <li>{dishes[0].name}</li>
//             <li>{dishes[1].name}</li>

// TODO 7 (break it):
//   a) dish.nmae   TS2339: Property 'nmae' does not exist on type 'Dish'.
//                  TypeScript knows every dish has id, name, price and emoji.
//   b) { }         The list is empty, and TS2322: Type 'void[]' is not assignable to type 'ReactNode'.
//                  With { } the arrow function needs `return`.
//                  (dish) => <li>...</li>              returns the <li>
//                  (dish) => { <li>...</li> }          returns nothing
//                  (dish) => { return <li>...</li>; }  returns the <li> again

function App() {
    return (
        <main>
            <h1>SPK Bistro</h1>

            <h2>Menu</h2>
            {/* TODO 6 */}
            <p>{dishes.length} dishes</p>

            <ul className="menu">
                {/* TODO 3 + 4 + 5: one <li> for every dish, with a unique key */}
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
