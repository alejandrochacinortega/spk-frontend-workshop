/* ==========================================================
   DEMO 101-3: FORMS AND LOCALSTORAGE, IN TYPESCRIPT
   Goal: add dishes with a form, and keep the dishes, the order
   and the theme after a reload.
   The theme of this demo: data from OUTSIDE your code.
   - A form gives you strings (or null).
   - localStorage gives you strings (or null), and JSON.parse
     turns them into `any`: TypeScript stops checking.
   You check that data at runtime, and from then on it is typed.
   DevTools > Application > Local Storage shows what is saved.
   ========================================================== */

// Every page opened from a file (file://) shares the same localStorage, so the keys have a prefix.
// `as const`: the values are the exact strings, and they cannot be changed.
const STORAGE_KEYS = {
    dishes: 'spk-dishes',
    order: 'spk-order',
    theme: 'spk-theme',
} as const;

// ---------- Provided (from demos 101-1 and 101-2) ----------
const root = document.documentElement;

type Theme = 'light' | 'dark';

function isTheme(value: unknown): value is Theme {
    return value === 'light' || value === 'dark';
}

function getCurrentTheme(): Theme {
    const chosen = root.dataset.theme;
    if (isTheme(chosen)) {
        return chosen;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Like document.querySelector, but it throws if nothing matches or the element has the wrong type.
function getElement<T extends Element>(selector: string, type: new () => T): T {
    const element = document.querySelector(selector);
    if (!(element instanceof type)) {
        throw new Error(`Expected ${selector} to be a ${type.name}, got ${element}`);
    }
    return element;
}

type Filter = 'all' | 'vegetarian' | 'cheap' | 'spicy';

function isFilter(value: unknown): value is Filter {
    return value === 'all' || value === 'vegetarian' || value === 'cheap' || value === 'spicy';
}

const filterLabels: Record<Filter, string> = {
    all: 'All',
    vegetarian: 'Vegetarian',
    cheap: 'Under 150 kr',
    spicy: 'Spicy',
};

// ---------- State ----------
let dishes: Dish[] = [...menu];   // the menu, including dishes added with the form
let order: Dish[] = [];
let activeFilter: Filter = 'all';

// ---------- Elements ----------
const themeToggle = getElement('#theme-toggle', HTMLButtonElement);
const menuList = getElement('#menu-list', HTMLOListElement);
const filters = getElement('#filters', HTMLDivElement);
const orderCount = getElement('#order-count', HTMLElement);
const orderItems = getElement('#order-items', HTMLElement);
const orderTotal = getElement('#order-total', HTMLElement);
const clearButton = getElement('#clear-order', HTMLButtonElement);
const dishForm = getElement('#dish-form', HTMLFormElement);
const formError = getElement('#form-error', HTMLParagraphElement);
const resetButton = getElement('#reset-menu', HTMLButtonElement);

// ---------- Provided: rendering (from demo 101-2, now using `dishes`) ----------
function createDishItem(dish: Dish): HTMLLIElement {
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
    button.dataset.id = String(dish.id);
    button.textContent = count === 0 ? 'Add' : `Add (${count})`;

    item.append(button);
    return item;
}

function filterDishes(list: Dish[], filter: Filter): Dish[] {
    switch (filter) {
        case 'all':
            return list;
        case 'vegetarian':
            return list.filter((dish) => dish.vegetarian);
        case 'cheap':
            return list.filter((dish) => dish.price < 150);
        case 'spicy':
            return list.filter((dish) => dish.spicy === true);
    }
}

function renderMenu(): void {
    menuList.replaceChildren();
    filterDishes(dishes, activeFilter).forEach((dish) => {
        menuList.append(createDishItem(dish));
    });
}

function renderFilters(): void {
    filters.querySelectorAll<HTMLButtonElement>('.filter-button').forEach((button) => {
        const filter = button.dataset.filter;
        if (isFilter(filter)) {
            button.classList.toggle('active', filter === activeFilter);
            button.textContent = `${filterLabels[filter]} (${filterDishes(dishes, filter).length})`;
        }
    });
}

function renderOrder(): void {
    orderCount.textContent = String(order.length);
    orderItems.textContent = order.length === 0
        ? 'Nothing yet'
        : order.map((dish) => dish.name).join(', ');
    orderTotal.textContent = `${getTotal(order)} kr`;
    clearButton.disabled = order.length === 0;
}

// Redraw the whole page from the state, and save the state.
function render(): void {
    renderOrder();
    renderFilters();
    renderMenu();
    saveState();
}

// ---------- Provided: listeners (from demo 101-2) ----------
menuList.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }
    const button = event.target.closest('.add-button');
    if (!(button instanceof HTMLButtonElement)) {
        return;
    }
    const dish = findById(dishes, Number(button.dataset.id));
    if (!dish) {
        return;
    }
    order = [...order, dish];
    render();
});

filters.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }
    const clicked = event.target.closest('.filter-button');
    if (!(clicked instanceof HTMLButtonElement)) {
        return;
    }
    const filter = clicked.dataset.filter;
    if (isFilter(filter)) {
        activeFilter = filter;
        render();
    }
});

clearButton.addEventListener('click', () => {
    order = [];
    render();
});

themeToggle.addEventListener('click', () => {
    const theme: Theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    // TODO 7a (bonus)
});

// ---------- TODOs ----------

// TODO 1: Read the form and return a dish without an id: { name: 'Tacos', price: 119, vegetarian: false, spicy: true }
// a) A new dish has everything a Dish has, except the id. Create the type with a utility type:
//      type NewDish = Omit<Dish, 'id'>;
//    Hover over NewDish. Why is this better than writing a second type by hand?
// b) Give readDishForm its types: (form: HTMLFormElement): NewDish
// c) const data = new FormData(form); then hover over data.get('name'). What type is it, and why?
//    Narrow it with typeof before you call .trim(). If it is not a string, use ''.
// d) The price is a string too. Number(...) converts it. (What is Number('')? And Number(null)?)
// e) A checkbox is only in the form data when it is checked: use data.has('vegetarian').
function readDishForm(form) {
    throw new Error('TODO 1: not implemented');
}

// TODO 2: Validate the new dish. In demo 100-7 this returned an error message or ''.
// Here it returns ONE of two shapes, and the `ok` property tells which one:
//   type Validation = { ok: true; dish: NewDish } | { ok: false; error: string };
// - empty name                          -> "Please enter a name."
// - price is not a number, or not > 0  -> "Price must be a number above 0."
// - a dish with the same name exists   -> "That dish is already on the menu." (ignore upper/lower case)
// Return for example { ok: false, error: 'Please enter a name.' } or { ok: true, dish }.
// Then give validateDish its types: (dish: NewDish, existingDishes: Dish[]): Validation
function validateDish(dish, existingDishes) {
    throw new Error('TODO 2: not implemented');
}

// TODO 3: Handle the form submit.
// a) Listen for "submit" on dishForm, and call event.preventDefault().
// b) Read the dish (TODO 1) and validate it (TODO 2).
// c) If !result.ok: show result.error in formError and stop.
//    Try to use result.dish BEFORE that if. And after it. Hover over `result` in both places.
// d) Give it a new id: one higher than the highest id in `dishes` (Math.max).
// e) Add it to `dishes` (a new array!), clear the error, reset the form, and call render().

// TODO 4: Save the state in localStorage. render() calls this every time.
// localStorage only stores strings: use JSON.stringify.
// - STORAGE_KEYS.dishes: the whole `dishes` array
// - STORAGE_KEYS.order: only the ids of the dishes in the order, for example [4, 7, 4]
function saveState(): void {
    // TODO 4
}

// TODO 5: Load the dishes from localStorage. Called once when the page starts.
// a) First, the JavaScript way (demo 100-7): if getItem does not return null, dishes = JSON.parse(saved).
//    It compiles! Hover over JSON.parse: it returns `any`.
// b) Do Part 2 of the handout: save a broken dish in the Console and reload. What does the page show?
// c) Now the safe way. Write a type guard isDish(value: unknown): value is Dish that checks, at runtime:
//      typeof value === 'object' && value !== null
//      'id' in value && typeof value.id === 'number'
//      ... and the same for name (string), price (number) and vegetarian (boolean).
// d) Parse into `unknown`, not `any`:  const parsed: unknown = JSON.parse(saved);
//    Only use it if Array.isArray(parsed) && parsed.every(isDish). Hover over `parsed` inside that if.
// e) JSON.parse throws on broken text (try: localStorage.setItem('spk-dishes', '{oops')). Use try / catch.
//    Tip: write a helper readStorage(key: string): unknown that does getItem + JSON.parse + try / catch,
//    and returns undefined if there is nothing (valid) saved. You can reuse it in TODO 6.
function loadState(): void {
    // TODO 5

    // TODO 6: The saved order is a list of ids. Check it the same way, then turn it back into dishes.
    // a) Only use it if it is an array. Keep only the numbers: .filter((id) => typeof id === 'number')
    // b) .map((id) => findById(dishes, id)), then remove the undefined ones. Hover over the result: is it Dish[]?

    // TODO 7b (bonus)
}

// TODO 7 (bonus): Remember the theme.
// a) In the theme button listener (above): save the new theme with localStorage.setItem(STORAGE_KEYS.theme, ...).
// b) In loadState(): read it back. getItem returns string | null, but root.dataset.theme should only be a Theme. Reuse isTheme.

// TODO 8 (bonus): The "Reset menu" button.
// Remove the saved dishes and order (localStorage.removeItem), go back to `menu`, empty the order, and call render().

// ---------- Start ----------
loadState();
render();
