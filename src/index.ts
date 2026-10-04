/* ==========================================================
   DEMO 101-2: RENDERING FROM DATA, IN TYPESCRIPT
   Goal: build the menu list from the `menu` array (menu.ts),
   instead of writing every <li> by hand in the HTML.
   - The page is drawn from two pieces of state: `order` and `activeFilter`.
   - render() redraws everything from that state.
   - Event handlers only change the state, then call render().
   This time you write new code: give every function you write
   parameter types and a return type.
   Keep `npm run dev` running, save, reload the page.
   ========================================================== */

// ---------- Provided (from demo 101-1) ----------
const root = document.documentElement;

type Theme = 'light' | 'dark';

function getCurrentTheme(): Theme {
    const chosen = root.dataset.theme;
    if (chosen === 'light' || chosen === 'dark') {
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

const themeToggle = getElement('#theme-toggle', HTMLButtonElement);
themeToggle.addEventListener('click', () => {
    root.dataset.theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
});

// ---------- State ----------

// TODO 1: The filter type.
// a) Hover over `activeFilter`: which type did TypeScript infer? Would it catch activeFilter = 'vegetarain'?
// b) Create a type with only the three valid values: type Filter = 'all' | 'vegetarian' | 'cheap';
// c) Use it: let activeFilter: Filter = 'all';
type Filter = 'all' | 'vegetarian' | 'cheap' | 'spicy';

let order: Dish[] = [];
let activeFilter: Filter = 'all';

// ---------- Elements ----------
const menuList = getElement('#menu-list', HTMLOListElement);
const filters = getElement('#filters', HTMLDivElement);
const orderCount = getElement('#order-count', HTMLElement);
const orderItems = getElement('#order-items', HTMLElement);
const orderTotal = getElement('#order-total', HTMLElement);
const clearButton = getElement('#clear-order', HTMLButtonElement);

// ---------- Provided: the order section and the filter buttons ----------
function renderOrder(): void {
    orderCount.textContent = String(order.length);
    orderItems.textContent = order.length === 0
        ? 'Nothing yet'
        : order.map((dish) => dish.name).join(', ');
    orderTotal.textContent = `${getTotal(order)} kr`;
    clearButton.disabled = order.length === 0;
}

// Marks the button of the active filter. The page is derived from the state, also here.
function renderFilters(): void {
    filters.querySelectorAll<HTMLButtonElement>('.filter-button').forEach((button) => {
        button.classList.toggle('active', button.dataset.filter === activeFilter);

        // TODO 7 (bonus)
        const filter = button.dataset.filter;
        if (isFilter(filter)) {
            const count = filterDishes(menu, filter).length;
            button.textContent = `${filterLabels[filter]} (${count})`;
        }
    });
}

// Clearing is simpler than in demo 100-5: change the state and redraw.
clearButton.addEventListener('click', () => {
    order = [];
    render();
});

// Redraw the whole page from the state.
function render(): void {
    renderOrder();
    renderFilters();
    renderMenu();
}

// ---------- TODOs ----------

// TODO 2: Create and return an <li> for one dish. Do not add it to the page here.
// a) Add the types: createDishItem(dish: Dish): ???  Hover over document.createElement('li') to find the return type.
// b) Text: describeDish(dish). Class: "day-background" if vegetarian, else "week-background".
// c) Count how many of this dish are in the order. If more than 0, also add the class "in-order".
// d) Create a <button> with the class "add-button", type "button", and data-id set to the dish id.
//    Its text: "Add", or "Add (2)" when 2 of this dish are in the order.
//    TypeScript will complain about data-id. Why? (Hint: what does the HTML attribute store?)
// e) Put the button inside the <li> (item.append(button)) and return the <li>.
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

// TODO 3: Return the dishes that match the filter. Do not change `dishes`.
// "all" -> every dish, "vegetarian" -> vegetarian dishes, "cheap" -> price under 150.
// a) Add the types. The filter parameter is a Filter, not a string.
// b) Use a switch (filter) { case 'all': ... }. Inside a case, type `filter.` : what does the editor suggest?
// c) Try: remove one case. What does TypeScript say? Put it back.
function filterDishes(dishes: Dish[], filter: Filter): Dish[] {
    switch (filter) {
        case 'all':
            return dishes;
        case 'vegetarian':
            return dishes.filter((dish) => dish.vegetarian);
        case 'cheap':
            return dishes.filter((dish) => dish.price < 150);
        case 'spicy':
            return dishes.filter((dish) => dish.spicy === true);
    }
}

// TODO 4: Draw the menu list. Return type: void (it returns nothing).
// a) Empty the list: menuList.replaceChildren()
// b) For every dish from filterDishes(menu, activeFilter), append createDishItem(dish).
function renderMenu(): void {
    menuList.replaceChildren();
    filterDishes(menu, activeFilter).forEach((dish) => {
        menuList.append(createDishItem(dish));
    });
}

// TODO 5: ONE click listener on the whole list (event delegation), not one per button.
// a) Listen for "click" on menuList.
// b) event.target is an EventTarget | null: it can be any node, or a text node, or null.
//    Narrow it with: if (!(event.target instanceof Element)) return;
// c) Find the clicked button: event.target.closest('.add-button'). Check that it is an HTMLButtonElement.
// d) Find the dish with findById (it wants a number!). If there is no dish, return.
// e) Add it to the order and call render().
menuList.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }
    const button = event.target.closest('.add-button');
    if (!(button instanceof HTMLButtonElement)) {
        return;
    }
    const dish = findById(menu, Number(button.dataset.id));
    if (!dish) {
        return;
    }
    order = [...order, dish];
    render();
});

// TODO 6: The filter buttons (also with ONE listener, on `filters`).
// a) Find the clicked .filter-button, like in TODO 5.
// b) Its data-filter is a string | undefined, but activeFilter is a Filter. TypeScript cannot read the HTML.
//    Write a type guard that checks it at runtime:
//      function isFilter(value: unknown): value is Filter { ... }
//    It returns true if value is 'all', 'vegetarian' or 'cheap'.
// c) If isFilter(...) is true, set activeFilter and call render(). Hover: what is the type inside the if?
function isFilter(value: unknown): value is Filter {
    return value === 'all' || value === 'vegetarian' || value === 'cheap' || value === 'spicy';
}

filters.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }
    const clicked = event.target.closest('.filter-button');
    if (!(clicked instanceof HTMLButtonElement)) {
        return;
    }
    const filter = clicked.dataset.filter;
    if (!isFilter(filter)) {
        console.error(`Unknown filter: ${filter}`);
        return;
    }
    activeFilter = filter;
    render();
});

// TODO 7 (bonus): Show how many dishes each filter button matches: "Vegetarian (4)".
// a) The labels: const filterLabels: Record<Filter, string> = { all: 'All', ... }
//    Try leaving one out. What happens?
// b) In renderFilters(), set each button's text to `${label} (${count})`. Reuse filterDishes and isFilter.
const filterLabels: Record<Filter, string> = {
    all: 'All',
    vegetarian: 'Vegetarian',
    cheap: 'Under 150 kr',
    spicy: 'Spicy',
};

// TODO 8 (bonus): Add a fourth filter "Spicy" (dishes with spicy: true).
// a) Add 'spicy' to the Filter type first, then follow the compiler errors. Where does it lead you?
// b) Which places did the compiler NOT find? (Hint: index.html, and... test the button.)
// Solution: 'spicy' in the Filter type, a case in filterDishes, a label in filterLabels (both found by the compiler),
// plus isFilter and the button in index.html (NOT found: the compiler cannot check runtime values or the HTML).

// ---------- Start ----------
render();
