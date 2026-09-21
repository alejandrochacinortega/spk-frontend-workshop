# Demo 100-1: Flexbox Navbar (Student Handout)

## Goal

Turn the stacked links at the top of the page into a responsive navbar:
a row on desktop, a stacked column on mobile.

## Setup

1. Make sure you are on the branch `100-1-css-start`.
2. Open `index.html` in your browser.
3. Open DevTools (F12) and the device toolbar (Ctrl/Cmd + Shift + M) to test mobile.
4. You only edit `style.css`. Do not change `index.html`.

## Tasks

Find the `TODO` comments in `style.css`. Before you type each one, write your prediction.
After you type it, check what happened.

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Make `.navbar` a flex container | | |
| 2 | Spread the logo, links and button across the bar | | |
| 3 | Center them vertically | | |
| 4 | Put the links in a row (they are still stacked. Why?) | | |
| 5 | Make the navbar work on small screens | | |

## Checklist

- [ ] Desktop: logo on the left, links in the middle, button on the right
- [ ] Everything is vertically centered
- [ ] Links are in a row with space between them
- [ ] Mobile (under 600px): everything is stacked and centered
- [ ] I can explain every line I wrote

## Questions to answer

1. What is the difference between the main axis and the cross axis?
2. Why did `display: flex` on `.navbar` not put the links in a row?
3. What changes for `justify-content` and `align-items` when the direction is `column`?

## Challenges (if you finish early)

- Add a fifth link. Does it still work on mobile?
- Push the button to the far right using `margin-left: auto`.
- Try `space-around`, `center` and `row-reverse`. Explain each result.

## Useful links

- [MDN: Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
