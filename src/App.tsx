/* ==========================================================
   DEMO 102-0: HELLO, REACT (solution)
   Start it with:  npm run dev
   ========================================================== */

// TODO 2 + 4: A component is a function that returns what to show.
//             Its name starts with a capital letter. Hover: it returns JSX.Element.
function Welcome() {
    const restaurant = 'SPK Bistro';

    return (
        <p className="card">
            Welcome to {restaurant}! 2 + 3 = {2 + 3}. The time is {new Date().toLocaleTimeString()}.
        </p>
    );
}

// TODO 5 (all are errors):
//   a) <welcome />        TS2339: Property 'welcome' does not exist on type 'JSX.IntrinsicElements'.
//                         Small letter = an HTML tag. Capital letter = your component.
//   b) class="card"       TS2322: Property 'class' does not exist... Did you mean 'className'?
//                         (class is a reserved word in JavaScript)
//   c) two elements       "JSX expressions must have one parent element."
//                         A function returns ONE value: wrap them in <main> or <>...</>.
//   d) <br>               "JSX element 'br' has no corresponding closing tag."
//                         In JSX every tag must be closed: <br />, <img />.

// App is the main component. main.tsx draws it inside <div id="root"> in index.html.
function App() {
    return (
        <main>
            {/* TODO 1 */}
            <h1>Hello, Alejandro!</h1>

            {/* TODO 3: one component, used three times */}
            <Welcome />
            <Welcome />
            <Welcome />
        </main>
    );
}

export default App;
