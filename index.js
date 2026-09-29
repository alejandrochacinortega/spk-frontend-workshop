/* ==========================================================
   DEMO 100-7: FORMS AND LOCALSTORAGE
   Goal: add dishes with a form, and keep the dishes, the order
   and the theme after a reload.
   - The form is read and validated with JavaScript.
   - render() saves the state in localStorage every time.
   - loadState() reads it back when the page starts.
   DevTools > Application > Local Storage shows what is saved.
   ========================================================== */

// Every page opened from a file (file://) shares the same localStorage, so the keys have a prefix.
const STORAGE_KEYS = {
    dishes: 'spk-dishes',
    order: 'spk-order',
    theme: 'spk-theme',
};

// ---------- Theme (from demo 100-5) ----------
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
    // TODO 6a: save the theme in localStorage (key: STORAGE_KEYS.theme)
});

// ---------- State ----------
let dishes = [...menu];    // the menu, including dishes added with the form
let order = [];            // the dishes in the order
let activeFilter = 'all';  // "all", "vegetarian" or "cheap"

// ---------- Elements ----------
const menuList = document.querySelector('#menu-list');
const filters = document.querySelector('#filters');
const orderCount = document.querySelector('#order-count');
const orderItems = document.querySelector('#order-items');
const orderTotal = document.querySelector('#order-total');
const clearButton = document.querySelector('#clear-order');
const dishForm = document.querySelector('#dish-form');
const formError = document.querySelector('#form-error');
const resetButton = document.querySelector('#reset-menu');

// ---------- Provided: rendering (from demo 100-6, now using `dishes`) ----------
const filterLabels = {
    all: 'All',
    vegetarian: 'Vegetarian',
    cheap: 'Under 150 kr',
};

function createDishItem(dish) {
    const item = document.createElement('li');
    item.textContent = describeDish(dish);
    item.className = dish.vegetarian ? 'day-background' : 'week-background';

    const count = order.filter((ordered) => ordered.id === dish.id).length;
    if (count > 0) {
        item.classList.add('in-order');
    }

    const button = document.createElement('button');
    button.className = 'add-button';
    button.type = 'button';
    button.dataset.id = dish.id;
    button.textContent = count === 0 ? 'Add' : `Add (${count})`;

    item.append(button);
    return item;
}

function filterDishes(list, filter) {
    if (filter === 'vegetarian') {
        return list.filter((dish) => dish.vegetarian);
    }
    if (filter === 'cheap') {
        return list.filter((dish) => dish.price < 150);
    }
    return list;
}

function renderMenu() {
    menuList.replaceChildren();
    filterDishes(dishes, activeFilter).forEach((dish) => {
        menuList.append(createDishItem(dish));
    });

    filters.querySelectorAll('.filter-button').forEach((button) => {
        const count = filterDishes(dishes, button.dataset.filter).length;
        button.textContent = `${filterLabels[button.dataset.filter]} (${count})`;
    });
}

function renderOrder() {
    orderCount.textContent = order.length;
    orderItems.textContent = order.length === 0
        ? 'Nothing yet'
        : order.map((dish) => dish.name).join(', ');
    orderTotal.textContent = `${getTotal(order)} kr`;
    clearButton.disabled = order.length === 0;
}

// Redraw the whole page from the state, and save the state.
function render() {
    renderMenu();
    renderOrder();
    saveState();
}

// ---------- Provided: listeners (from demo 100-6) ----------
menuList.addEventListener('click', (event) => {
    const button = event.target.closest('.add-button');
    if (!button) {
        return;
    }
    const dish = findById(dishes, button.dataset.id);
    order = [...order, dish];
    render();
});

filters.addEventListener('click', (event) => {
    const clicked = event.target.closest('.filter-button');
    if (!clicked) {
        return;
    }
    activeFilter = clicked.dataset.filter;
    filters.querySelectorAll('.filter-button').forEach((button) => {
        button.classList.toggle('active', button.dataset.filter === activeFilter);
    });
    render();
});

clearButton.addEventListener('click', () => {
    order = [];
    render();
});

// ---------- TODOs ----------

// TODO 1: Read the form and return a dish object (without an id):
// { name: 'Tacos', price: 119, vegetarian: false, spicy: true }
// a) const data = new FormData(form);
// b) data.get('name') returns a string. Remove spaces at the start and end (.trim()).
// c) data.get('price') is a string too! Convert it with Number(...).
// d) A checkbox is only in the form data when it is checked: use data.has('vegetarian').
function readDishForm(form) {

}

// TODO 2: Return an error message, or an empty string if the dish is valid.
// - empty name                          -> "Please enter a name."
// - price is not a number, or not > 0  -> "Price must be a number above 0."
// - a dish with the same name exists   -> "That dish is already on the menu." (ignore upper/lower case)
// Tip: what is Number('')? What is Number('abc')? Use Number.isNaN.
function validateDish(dish, existingDishes) {

}

// TODO 3: Handle the form submit.
// a) Listen for "submit" on dishForm (not "click" on the button: Enter also submits).
// b) event.preventDefault(): stop the browser from reloading the page.
// c) Read the dish (TODO 1) and validate it (TODO 2).
//    If there is an error, show it in formError and stop.
// d) Give it a new id: one higher than the highest id in `dishes` (Math.max).
// e) Add it to `dishes` (a new array!), clear the error, reset the form, and call render().


// TODO 4: Save the state in localStorage. render() calls this every time.
// localStorage only stores strings: use JSON.stringify.
// - STORAGE_KEYS.dishes: the whole `dishes` array
// - STORAGE_KEYS.order: only the ids of the dishes in the order, for example [4, 7, 4]
function saveState() {

}

// TODO 5: Load the state from localStorage. Called once when the page starts.
// a) localStorage.getItem(...) returns null if nothing was saved: keep the default then.
// b) Use JSON.parse. If the saved text is broken, JSON.parse throws: use try / catch and keep the defaults.
// c) Turn the saved order ids back into dishes with findById(dishes, id). Skip ids that are not found.
// d) TODO 6b: if a theme was saved, set root.dataset.theme to it.
function loadState() {

}

// TODO 7 (bonus): The "Reset menu" button (#reset-menu).
// Remove the saved dishes and order from localStorage (localStorage.removeItem),
// go back to the original `menu`, empty the order, and call render().
// Should it also reset the theme? Why or why not?


// ---------- Start ----------
loadState();
render();
