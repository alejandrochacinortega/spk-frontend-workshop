/* ==========================================================
   DEMO 100-5: THE DOM AND EVENTS
   Goal: make the page react to clicks.
   - The theme button switches light / dark (like demo 100-3,
     but this time you write the script).
   - The "Add" buttons build an order with a live total.
   You can use `menu`, `getTotal` and `findById` from menu.js.
   Save, reload the page, and watch the Console for errors.
   ========================================================== */

// ---------- Provided ----------
// <html> is the root element. data-theme="dark" on it activates the dark theme (demo 100-3).
const root = document.documentElement;

// Returns "dark" or "light": the theme chosen with the button, or else the operating system setting.
function getCurrentTheme() {
    if (root.dataset.theme) {
        return root.dataset.theme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// The dishes in the order. Never push to it: create a new array instead (demo 100-4).
let order = [];

// ---------- TODOs ----------

// TODO 1: The theme button.
// a) Select the button with the id "theme-toggle" (document.querySelector).
// b) Listen for "click" on it (addEventListener).
// c) When clicked, set root.dataset.theme to the opposite of getCurrentTheme().
const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
    root.dataset.theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
});

// TODO 2: Select the three elements of the order section and store them in constants:
// #order-count, #order-items and #order-total.
const orderCount = document.querySelector('#order-count');
const orderItems = document.querySelector('#order-items');
const orderTotal = document.querySelector('#order-total');

// TODO 3: Make the order section match the `order` array. Use textContent.
// - count: the number of dishes
// - items: the names joined with ", " (for example "Pizza, Sushi"), or "Nothing yet" if the order is empty
// - total: for example "388 kr" (use getTotal)
function renderOrder() {
    orderCount.textContent = order.length;
    orderItems.textContent = order.length === 0
        ? 'Nothing yet'
        : order.map((dish) => dish.name).join(', ');
    orderTotal.textContent = `${getTotal(order)} kr`;

    // TODO 6 (bonus)
    clearButton.disabled = order.length === 0;

    // TODO 7 (bonus)
    addButtons.forEach((button) => {
        const count = order.filter((dish) => dish.id === Number(button.dataset.id)).length;
        button.textContent = count === 0 ? 'Add' : `Add (${count})`;
    });
}

// TODO 4: The "Add" buttons.
// a) Select ALL elements with the class "add-button" (document.querySelectorAll).
// b) Add a click listener to each one (forEach).
// c) In the listener:
//    - read the dish id from the button's data-id attribute (event.currentTarget.dataset.id). What type is it?
//    - find the dish with findById(menu, id)
//    - add it to the order: order = [...order, dish]
//    - highlight the list item: event.currentTarget.closest('li').classList.add('in-order')
//    - call renderOrder()
const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const dish = findById(menu, event.currentTarget.dataset.id);
        order = [...order, dish];
        event.currentTarget.closest('li').classList.add('in-order');
        renderOrder();
    });
});

// TODO 5: The "Clear order" button (#clear-order).
// When clicked: empty the order, remove the "in-order" class from every list item, and call renderOrder().
const clearButton = document.querySelector('#clear-order');
clearButton.addEventListener('click', () => {
    order = [];
    document.querySelectorAll('.in-order').forEach((item) => item.classList.remove('in-order'));
    renderOrder();
});

// TODO 6 (bonus): Disable the "Clear order" button when the order is empty.
// Tip: set button.disabled inside renderOrder(), and call renderOrder() once when the page loads.
renderOrder();

// TODO 7 (bonus): Show how many of each dish are in the order on its button: "Add (2)".
// Tip: do it inside renderOrder(), for every add button. Use order.filter(...).length.
