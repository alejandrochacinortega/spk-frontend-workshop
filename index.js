/* ==========================================================
   DEMO 100-6: RENDERING FROM DATA
   Goal: build the menu list from the `menu` array (menu.js),
   instead of writing every <li> by hand in the HTML.
   - The page is drawn from two pieces of state: `order` and `activeFilter`.
   - render() redraws everything from that state.
   - Event handlers only change the state, then call render().
   Save, reload the page, and watch the Console for errors.
   ========================================================== */

// ---------- Provided (from demo 100-5) ----------
const root = document.documentElement;

function getCurrentTheme() {
    if (root.dataset.theme) {
        return root.dataset.theme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
    root.dataset.theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
});

// ---------- State ----------
let order = [];            // the dishes in the order
let activeFilter = 'all';  // "all", "vegetarian" or "cheap"

// ---------- Elements ----------
const menuList = document.querySelector('#menu-list');
const filters = document.querySelector('#filters');
const orderCount = document.querySelector('#order-count');
const orderItems = document.querySelector('#order-items');
const orderTotal = document.querySelector('#order-total');
const clearButton = document.querySelector('#clear-order');

// ---------- Provided: the order section (from demo 100-5) ----------
function renderOrder() {
    orderCount.textContent = order.length;
    orderItems.textContent = order.length === 0
        ? 'Nothing yet'
        : order.map((dish) => dish.name).join(', ');
    orderTotal.textContent = `${getTotal(order)} kr`;
    clearButton.disabled = order.length === 0;
}

// Clearing is simpler than in demo 100-5: change the state and redraw.
// No need to remove the "in-order" classes one by one. Why?
clearButton.addEventListener('click', () => {
    order = [];
    render();
});

// Redraw the whole page from the state.
function render() {
    renderMenu();
    renderOrder();
}

// ---------- TODOs ----------

// TODO 1: Create and return an <li> for one dish. Do not add it to the page here.
// a) const item = document.createElement('li');
// b) Text: describeDish(dish). Class: "day-background" if vegetarian, else "week-background".
// c) If the dish is in the order, also add the class "in-order". (order.some(...))
// d) Create a <button> with the class "add-button", type "button", and data-id set to the dish id
//    (button.dataset.id = dish.id). Its text: "Add", or "Add (2)" when 2 of this dish are in the order.
// e) Put the button inside the <li> (item.append(button)) and return the <li>.
function createDishItem(dish) {

}

// TODO 2: Return the dishes that match the filter. Do not change `dishes`.
// "all" -> every dish, "vegetarian" -> vegetarian dishes, "cheap" -> price under 150.
function filterDishes(dishes, filter) {

}

// TODO 3: Draw the menu list.
// a) Empty the list: menuList.replaceChildren()
// b) For every dish from filterDishes(menu, activeFilter), create an <li> with createDishItem and append it.
function renderMenu() {

}

// TODO 4: ONE click listener on the whole list (event delegation), not one per button.
// The buttons are created by JavaScript and are replaced on every render.
// a) Listen for "click" on menuList.
// b) Find the clicked button: event.target.closest('.add-button'). If there is none, return.
// c) Find the dish with findById, add it to the order, and call render().


// TODO 5: The filter buttons (also with ONE listener, on `filters`).
// a) Find the clicked button: event.target.closest('.filter-button'). If there is none, return.
// b) Set activeFilter to its data-filter value.
// c) Mark only the clicked button as active: for every .filter-button,
//    button.classList.toggle('active', button.dataset.filter === activeFilter)
// d) Call render().


// TODO 6 (bonus): Show how many dishes each filter button matches: "Vegetarian (4)".
// Tip: store the original label in a data-label attribute first, or build it from a small object of labels.
// Reuse filterDishes. Should this happen once, or on every render? What if `menu` changes?


// ---------- Start ----------
render();
