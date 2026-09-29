# Demo 100-6: Rendering From Data (Student Handout)

## Goal

In demo 100-5, every dish was written twice: once in `menu.js` and once as an `<li>` in the HTML.
Now the HTML list is empty, and JavaScript builds it from the `menu` array. You will:

- create elements with `document.createElement`
- filter the menu with buttons ("All", "Vegetarian", "Under 150 kr")
- use **one** click listener for many buttons (event delegation)

The big idea: **the page is a function of the state.** Handlers change the state (`order`, `activeFilter`),
then `render()` redraws the page from it.

## Setup

1. Make sure you are on the branch `100-6-js-render-data-start`.
2. Open `index.html` in your browser. The menu is gone! Open `index.html` in your editor: `<ol id="menu-list">` is empty.
3. Open DevTools (F12 or Cmd+Option+I) and keep the **Console** and **Elements** tabs close by.
4. You only edit `index.js`. `menu.js` is provided: `menu`, `formatPrice`, `describeDish`, `getTotal`, `findById`.
5. After each change, save and reload the page.

## Part 1: Create elements in the Console (10 min)

Type each line in the Console. Write your prediction **before** you press Enter.

| # | Type this | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | `const li = document.createElement('li'); li` | | |
| 2 | `li.textContent = 'Tacos'` then look at the page. Is it there? | | |
| 3 | `document.querySelector('#menu-list').append(li)` | | |
| 4 | `li.textContent = 'Tacos (119 kr)'` (the same `li` object) | | |
| 5 | `document.querySelector('#menu-list').replaceChildren()` | | |
| 6 | `menu.map((dish) => dish.name)` | | |
| 7 | `menu.filter((dish) => dish.price < 150).length` | | |

After TODO 3 works, try this too:

| # | Type this | My prediction | What happened |
| --- | --- | --- | --- |
| 8 | `menu.push({ id: 8, name: 'Tacos', price: 119, vegetarian: false })` | | |
| 9 | `render()` | | |
| 10 | Could you do 8 + 9 in demo 100-5? | | |

## Part 2: Render the menu

Find the `TODO` comments in `index.js`.

| # | Task | Concept | Done |
| --- | --- | --- | --- |
| 1 | `createDishItem(dish)` returns an `<li>` with an Add button | `createElement`, `className`, `dataset`, `append` | |
| 2 | `filterDishes(dishes, filter)` | `filter`, pure functions | |
| 3 | `renderMenu()` draws the list | `replaceChildren`, loops | |
| 4 | One click listener on the list for all Add buttons | Event delegation, `event.target`, `closest` | |
| 5 | Filter buttons | State, `classList.toggle(name, condition)` | |
| 6 | Bonus: "Vegetarian (4)" on the filter buttons | Reusing `filterDishes` | |

## Checklist

- [ ] The menu shows all 7 dishes with their price, like before
- [ ] "Add" works, the dish is highlighted and the button shows "Add (2)" after two clicks
- [ ] "Vegetarian" shows 4 dishes, "Under 150 kr" shows 3, "All" shows 7
- [ ] Only the selected filter button looks active
- [ ] Adding a dish while filtered, then going back to "All", keeps the order and the highlights
- [ ] "Clear order" resets everything
- [ ] There is only one `addEventListener` for all the Add buttons
- [ ] No red errors in the Console

## Questions to answer

1. Why did 100-5 need to remove the `in-order` classes one by one, and 100-6 does not?
2. What happens to the old `<li>` elements and their buttons when `renderMenu()` runs again?
3. Why would one listener per Add button not work well here? (Hint: when are the buttons created?)
4. What is the difference between `event.target` and `event.currentTarget` in TODO 4?
5. Where does the "truth" live now: in the HTML or in JavaScript? What are the benefits?
6. We redraw the whole list on every click. When could that become a problem?

## Challenges (if you finish early)

- Add a "Spicy 🌶️" filter. How many files did you change?
- Show a message "No dishes match this filter" when the list is empty. (Test it with a filter that matches nothing.)
- Add a "Sort by price" button. Remember: do not change `menu` (demo 100-4).
- Build the `<li>` with a template literal and `innerHTML` instead of `createElement`. It is shorter. Then give a dish the name
  `<img src=x onerror="alert('hacked')">` and reload. What happened? Which version is safe?

## Useful links

- [MDN: Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN: Element.replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren)
- [MDN: Event delegation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling#event_delegation)
- [MDN: DOMTokenList.toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)
- [javascript.info: Event delegation](https://javascript.info/event-delegation)
