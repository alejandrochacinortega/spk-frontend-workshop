# Demo 100-7: Forms and localStorage (Student Handout)

## Goal

Let the user add dishes to the menu with a form, and keep everything after a reload. You will:

- read a form with `FormData`, and validate the input with JavaScript
- save the state (dishes, order, theme) in `localStorage` with `JSON.stringify`
- load it back when the page starts with `JSON.parse`

This is the last JavaScript demo: it uses everything from 100-4 (data and functions), 100-5 (DOM and events)
and 100-6 (state and render).

## Setup

1. Make sure you are on the branch `100-7-js-forms-storage-start`.
2. Open `index.html` in your browser (Chrome is recommended for this demo).
3. Fill in the "Add a dish" form and press "Add to menu". What happened to the page? Look at the address bar.
4. Add Pizza to the order, then reload. Where did the order go?
5. You only edit `index.js`. Most of the code from demo 100-6 is provided, now using `dishes` instead of `menu`.
6. Open DevTools > **Application** > **Local Storage** > `file://`. That is where your data will live.

## Part 1: Explore in the Console (10 min)

Type each line in the Console. Write your prediction **before** you press Enter.

| # | Type this | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | `localStorage.setItem('spk-test', 42)` then `typeof localStorage.getItem('spk-test')` | | |
| 2 | `localStorage.setItem('spk-test', menu)` then `localStorage.getItem('spk-test')` | | |
| 3 | `JSON.stringify(menu[0])` | | |
| 4 | `JSON.parse('{"name":"Tacos","price":119}').price + 1` | | |
| 5 | `localStorage.getItem('spk-nothing')` | | |
| 6 | `JSON.parse(null)` and `JSON.parse('oops')` | | |
| 7 | `Number('12')`, `Number('')`, `Number('12 kr')` | | |
| 8 | Type a name in the form, then: `Object.fromEntries(new FormData(document.querySelector('#dish-form')))` | | |
| 9 | Check "Vegetarian" and run row 8 again. What changed? | | |
| 10 | `localStorage.removeItem('spk-test')` and check the Application tab | | |

## Part 2: Forms and storage

Find the `TODO` comments in `index.js`.

| # | Task | Concept | Done |
| --- | --- | --- | --- |
| 1 | `readDishForm(form)` returns a dish object | `FormData`, `trim`, `Number`, checkboxes | |
| 2 | `validateDish(dish, existingDishes)` returns an error message | Validation, `Number.isNaN`, `some`, `toLowerCase` | |
| 3 | Handle the form submit | `submit` event, `preventDefault`, new ids, `form.reset()` | |
| 4 | `saveState()` | `localStorage.setItem`, `JSON.stringify` | |
| 5 | `loadState()` | `getItem`, `JSON.parse`, `try / catch`, `null` | |
| 6 | Save and load the theme | Storing a plain string | |
| 7 | Bonus: "Reset menu" button | `localStorage.removeItem` | |

## Checklist

- [ ] Submitting the form does not reload the page (the address bar does not change)
- [ ] Pressing Enter in the price field also adds the dish
- [ ] An empty name, a price of 0, an empty price, and "Pizza" (or "pizza") all show an error
- [ ] A valid dish appears in the menu, with the right color, and the form is cleared
- [ ] The filters count the new dish ("Under 150 kr" too, if it is cheap)
- [ ] After a reload, the new dishes, the order and the theme are still there
- [ ] Breaking the saved data by hand (edit it in the Application tab to `oops`) does not break the page
- [ ] No red errors in the Console

## Questions to answer

1. What does the browser do by default when a form is submitted? Why do we call `preventDefault()`?
2. Why listen to `submit` on the form instead of `click` on the button?
3. What type does `data.get('price')` return? And `Number('')`? Why is that dangerous?
4. Why do we validate in JavaScript even though the inputs have `required` and `min="1"`?
   (Hint: remove `novalidate` from the form and try again. Then think about a backend: can you trust the client?)
5. Why save only the order **ids**, and not the whole dish objects? (Think about a database.)
6. What would happen without `try / catch` in `loadState()` if the saved data was broken?
7. Who can read `localStorage`? What should you never store there?

## Challenges (if you finish early)

- Show the error next to the field that is wrong, and add `aria-invalid="true"` to that input.
- Add a "Remove" button to dishes added with the form (not the original ones).
- Save `activeFilter` too. Should a filter survive a reload? Discuss.
- The theme flashes light before it turns dark on reload. Why? How could you fix it? (Hint: where is the script?)
- Open the page in two tabs. Add a dish in one. What does the other tab show? Look up the `storage` event.

## Useful links

- [MDN: Sending forms through JavaScript / FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [MDN: HTMLFormElement submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
