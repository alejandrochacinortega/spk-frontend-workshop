/* ==========================================================
   DEMO 101-1: TYPESCRIPT BASICS (part 2 of 2: the page)
   This is the solution of demo 100-5, renamed to .ts.
   It works in the browser, but the compiler finds many
   places where it COULD break. Fix every error without
   changing what the page does.
   Do the TODOs in menu.ts first: many errors here disappear.
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

// Like document.querySelector, but it checks the element at runtime:
// it throws if nothing matches, or if the element is not of the expected type.
// So the result is never null, and has the right type:
//   getElement('#clear-order', HTMLButtonElement)  ->  HTMLButtonElement
// <T extends Element> is a generic, like List<T> in Java or C#.
function getElement<T extends Element>(selector: string, type: new () => T): T {
    const element = document.querySelector(selector);
    if (!(element instanceof type)) {
        throw new Error(`Expected ${selector} to be a ${type.name}, got ${element}`);
    }
    return element;
}

// ---------- TODOs ----------

// TODO 4: What is the type of `order`? Hover over it in your editor. Give it the right type.
// The dishes in the order. Never push to it: create a new array instead (demo 100-4).
let order = [];

// TODO 5: `themeToggle` is possibly 'null'. Why? Fix it with an if check:
// if the button is missing, throw an Error with a clear message.
// After the if, hover over themeToggle again: what is its type now?
// (Also try `themeToggle?.addEventListener` and `themeToggle!.addEventListener`. What is the difference?)
const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
    root.dataset.theme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
});

// TODO 6: Writing an if for every element gets repetitive.
// Select these three elements with getElement (Provided, above) instead of querySelector.
// The <span>, <p> and <strong> elements are all HTMLElement.
const orderCount = document.querySelector('#order-count');
const orderItems = document.querySelector('#order-items');
const orderTotal = document.querySelector('#order-total');

// TODO 7: Fix the error in renderOrder(). JavaScript accepted it silently. What did it do?
// Make the order section match the `order` array.
function renderOrder() {
    orderCount.textContent = order.length;
    orderItems.textContent = order.length === 0
        ? 'Nothing yet'
        : order.map((dish) => dish.name).join(', ');
    orderTotal.textContent = `${getTotal(order)} kr`;

    clearButton.disabled = order.length === 0;

    addButtons.forEach((button) => {
        const count = order.filter((dish) => dish.id === Number(button.dataset.id)).length;
        button.textContent = count === 0 ? 'Add' : `Add (${count})`;
    });
}

// TODO 8: The "Add" buttons. Several errors here:
// a) querySelectorAll returns a list of Element, and Element has no `dataset`.
//    Use querySelectorAll<HTMLButtonElement>('.add-button'). Is that checked at runtime, like getElement?
// b) event.currentTarget is an EventTarget | null. Use the `button` variable instead: what is its type?
// c) What is the type of `dish`? What should happen if no dish has this id?
// d) closest('li') can return null. Use optional chaining: ?.
const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const dish = findById(menu, event.currentTarget.dataset.id);
        order = [...order, dish];
        event.currentTarget.closest('li').classList.add('in-order');
        renderOrder();
    });
});

// TODO 9: The "Clear order" button. Which type do you need for `.disabled` in renderOrder() to work?
const clearButton = document.querySelector('#clear-order');
clearButton.addEventListener('click', () => {
    order = [];
    document.querySelectorAll('.in-order').forEach((item) => item.classList.remove('in-order'));
    renderOrder();
});

renderOrder();

// TODO 10 (bonus): getCurrentTheme() can return any string. Make that impossible.
// a) Create a type: type Theme = 'light' | 'dark';
// b) Add the return type: function getCurrentTheme(): Theme
// c) Fix the new error. Tip: check that root.dataset.theme is 'light' or 'dark' before you return it.
