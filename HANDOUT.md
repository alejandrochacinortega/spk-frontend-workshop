# Demo 100-2: Grid Magazine Layout (Student Handout)

## Goal

Arrange the page into a magazine layout using CSS Grid: a header on top, a sidebar and the main
content side by side, and a footer at the bottom. On mobile, everything stacks in one column.

## Setup

1. Make sure you are on the branch `100-2-css-grid-start`.
2. Open `index.html` in your browser.
3. Open DevTools (F12) and the device toolbar (Ctrl/Cmd + Shift + M) to test mobile.
4. You only edit `style.css`. Do not change `index.html`.
5. Tip: in DevTools, click the `grid` badge next to `.page` in the Elements tab to see the grid lines.

## Tasks

Find the `TODO` comments in `style.css`. Before you type each one, write your prediction.
After you type it, check what happened.

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Make `.page` a grid container | | |
| 2 | Create two columns: a fixed one and a flexible one | | |
| 3 | Draw the layout with names (header, sidebar, main, footer) | | |
| 4 | Add space between the areas | | |
| 5 | Give each item the name of its area | | |
| 6 | Stack everything in one column on mobile | | |
| 7 | Bonus: keep the footer at the bottom of the screen | | |

## Checklist

- [ ] Desktop: header on top, sidebar on the left, main on the right, footer at the bottom
- [ ] The header and footer span the full width
- [ ] There is space between the areas
- [ ] Mobile (under 600px): a single column in the order header, main, sidebar, footer
- [ ] I did not change `index.html`
- [ ] I can explain every line I wrote

## Questions to answer

1. What is the difference between `display: flex` and `display: grid`? When would you choose each?
2. What does `1fr` mean?
3. Why did nothing change after TODO 3 until you did TODO 5?
4. On mobile, how did you move the sidebar below the main content without touching the HTML?

## Challenges (if you finish early)

- Make the sidebar wider or narrower. What is the smallest width that still looks good?
- Add a second sidebar on the right with a new area name.
- Change the mobile layout so the sidebar goes first.

## Useful links

- [MDN: Grid layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids)
- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden (game)](https://cssgridgarden.com/)
