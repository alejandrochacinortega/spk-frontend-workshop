# Demo 100-5: The DOM and Events (Student Handout)

## Goal

Make the restaurant page interactive with JavaScript. You will:

- write the theme toggle yourself (in demo 100-3 it was provided)
- build an order with "Add" buttons, a live item list and a total

The DOM (Document Object Model) is the browser's tree of objects for the HTML. JavaScript reads and changes
that tree, and the browser updates the page.

## Setup

1. Make sure you are on the branch `100-5-js-dom-start`.
2. Open `index.html` in your browser. Click "Toggle theme" and the "Add" buttons: nothing happens yet.
3. Open DevTools (F12 or Cmd+Option+I). Keep the **Console** and the **Elements** tabs close by.
4. You only edit `index.js`. `menu.js` is provided: it has `menu`, `getTotal` and `findById` from demo 100-4.
5. After each change, save and reload the page.

## Part 1: Explore the DOM in the Console (10 min)

Type each line in the Console. Write your prediction **before** you press Enter.

| # | Type this | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | `document.querySelector('h1')` | | |
| 2 | `document.querySelector('h1').textContent = 'Hello from JS'` | | |
| 3 | `document.querySelectorAll('.add-button').length` | | |
| 4 | `document.querySelector('.add-button').dataset.id` and its `typeof` | | |
| 5 | `document.querySelector('#nope')` | | |
| 6 | `document.querySelector('#nope').textContent` | | |
| 7 | `document.documentElement.dataset.theme = 'dark'` | | |
| 8 | `document.querySelector('li').classList.toggle('in-order')` (run it twice) | | |
| 9 | In Elements, select an element, then type `$0` in the Console | | |
| 10 | Reload the page. Are your changes from 2, 7 and 8 still there? | | |

## Part 2: Make the page interactive

Find the `TODO` comments in `index.js`.

| # | Task | Concept | Done |
| --- | --- | --- | --- |
| 1 | The theme button switches light / dark | `querySelector`, `addEventListener`, `dataset` | |
| 2 | Select the order elements | `querySelector`, `const` | |
| 3 | `renderOrder()` shows count, items and total | `textContent`, `map`, `join` | |
| 4 | "Add" buttons add the dish to the order | `querySelectorAll`, `forEach`, `event.currentTarget`, `closest`, `classList` | |
| 5 | "Clear order" empties the order | Removing classes from many elements | |
| 6 | Bonus: disable "Clear order" when the order is empty | `disabled` property | |
| 7 | Bonus: show "Add (2)" on the buttons | `filter`, updating many elements | |

## Checklist

- [ ] The theme button switches between light and dark, also if my OS is in dark mode
- [ ] Adding Pizza and Sushi shows: 2 items, "Pizza, Sushi", 388 kr
- [ ] Dishes in the order are highlighted in the list
- [ ] "Clear order" resets the count, the items, the total and the highlights
- [ ] There are no red errors in the Console
- [ ] I only change the page inside `renderOrder()` (and the highlight class)
- [ ] I can explain every line I wrote

## Questions to answer

1. What does `querySelector` return when nothing matches? What happens if you then use `.textContent`?
2. What is the difference between `querySelector` and `querySelectorAll`? What does `querySelectorAll` return?
3. What type is `button.dataset.id`? Why did `findById` from demo 100-4 need to handle that?
4. Why is `renderOrder()` one function, called after every change, instead of updating the page in each listener?
5. Why use `textContent` and not `innerHTML` to show text? (Hint: what if a dish name contained `<img onerror=...>`?)
6. The `<script>` tags are at the end of `<body>`. What would happen if they were in `<head>`?

## Challenges (if you finish early)

- Change the theme button's text to "🌙 Dark" or "☀️ Light", depending on the current theme.
- Add a "Remove" button to the order section that removes the last dish.
- Replace the 7 listeners of TODO 4 with **one** listener on `#menu-list`. Use `event.target.closest('.add-button')`.
  This is called event delegation.
- Log `event` in a listener and explore it in the Console: `target`, `currentTarget`, `type`, `timeStamp`.

## Useful links

- [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN: querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: Using data attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
- [MDN: Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [javascript.info: Document](https://javascript.info/document)
