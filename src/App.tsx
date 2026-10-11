/* ==========================================================
   DEMO 102-0: HELLO, REACT
   Start it with:  npm run dev
   Keep it running. Every time you save, the browser updates by itself.
   ========================================================== */

// TODO 1: Change the text in <h1> to "Hello, <your name>!" and save. Look at the browser.


// TODO 2: Make your first component. A component is a function that returns what to show.
//         Write it here, above App. The name MUST start with a capital letter:
//
//             function Welcome() {
//                 return <p className="card">Welcome to SPK Bistro!</p>;
//             }
//
//         Then show it: write <Welcome /> inside <main>, under the <h1>.
//         Hover over the name Welcome. What does TypeScript say the function returns?


// TODO 3: Write <Welcome /> three times. A component can be used again and again.


// TODO 4: Show a JavaScript value inside JSX with curly braces { }.
//         Add  const restaurant = 'SPK Bistro';  inside Welcome (before return),
//         and change the text to:  Welcome to {restaurant}!
//         Then try  {2 + 3}  and  {new Date().toLocaleTimeString()}  too.


// TODO 5: Break it on purpose. Do ONE change at a time, read the red line, then undo it.
//         a) Write <welcome /> with a small w.
//         b) Write class="card" instead of className="card".
//         c) In App, put a second <h1> AFTER </main> (two things next to each other in return).
//         d) Write <br> (without the / ) somewhere inside <main>.


// App is the main component. main.tsx draws it inside <div id="root"> in index.html.
function App() {
    return (
        <main>
            <h1>Hello, React!</h1>
        </main>
    );
}

export default App;
