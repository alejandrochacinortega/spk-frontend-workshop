/* ==========================================================
   DEMO 102-1: LISTS
   Start it with:  npm run dev
   You work in this file only. The dishes are in data.ts (just read it).
   ========================================================== */
import { dishes } from './data';

// TODO 1: Hover over the word `dishes` in the import above. What is it?
//         Open data.ts and look at the four dishes.


// TODO 2: Show ONE dish by hand. Inside <ul className="menu"> below, write:
//
//             <li>{dishes[0].name}</li>
//
//         Then add a second line for dishes[1]. Imagine doing this for 100 dishes...


// TODO 3: Show ALL dishes with .map(). Delete your two <li> lines and write:
//
//             {dishes.map((dish) => <li>{dish.name}</li>)}
//
//         .map() turns every dish into an <li>. React shows the whole list.


// TODO 4: Open the browser console (F12 or Cmd+Option+J). Read the warning about "key".
//         React needs a unique key on every item in a list. Change <li> to:
//
//             <li key={dish.id}>
//
//         Reload the page. The warning is gone.


// TODO 5: Show more about each dish:  {dish.emoji} {dish.name}: {dish.price} kr


// TODO 6: Show how many dishes there are. Under the <h2>, write:  <p>{dishes.length} dishes</p>
//         Then add a fifth dish in data.ts and watch the page.


// TODO 7: Break it on purpose. Do ONE change at a time, look, then undo it.
//         a) Write  dish.nmae  instead of  dish.name
//         b) Add curly braces:  dishes.map((dish) => { <li key={dish.id}>{dish.name}</li> })
//            Where did the list go?


function App() {
    return (
        <main>
            <h1>SPK Bistro</h1>

            <h2>Menu</h2>
            <ul className="menu">
                {/* Your dishes go here */}
            </ul>
        </main>
    );
}

export default App;
