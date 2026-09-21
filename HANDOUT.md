# Demo 100-3: CSS Variables and Dark Mode (Student Handout)

## Goal

Add a dark theme to the restaurant page by redefining CSS variables. You will change **only the
variables**, not the component styles. The "Toggle theme" button switches between light and dark.

## Setup

1. Make sure you are on the branch `100-3-css-variables-start`.
2. Open `index.html` in your browser.
3. Click "Toggle theme". Nothing changes yet. Why? (Open DevTools, select `<html>` and look at its attributes.)
4. You only edit `style.css`. The script at the bottom of `index.html` is provided: do not edit it.

## Tasks

Find the `TODO` comments in `style.css`. Before you type each one, write your prediction.
After you type it, check what happened.

| # | Task | My prediction | What happened |
| --- | --- | --- | --- |
| 1 | Add a `[data-theme="dark"]` block that redefines every variable | | |
| 2 | Replace the hard-coded hover color with a variable (light and dark values) | | |
| 3 | Bonus: make the theme change smooth | | |
| 4 | Bonus: follow the operating system's dark mode | | |

## Checklist

- [ ] Light theme looks the same as before I started
- [ ] Clicking the button switches to a readable dark theme and back
- [ ] Every variable in `:root` has a dark value
- [ ] The hover color also changes with the theme
- [ ] I did not change any component style (`body`, `.week-background`, ...)
- [ ] I can explain every line I wrote

## Questions to answer

1. What does `var(--color-bg)` do? What is the `--` for?
2. Why did the button do nothing at the start?
3. Why must the dark block come after `:root`?
4. If you wanted to change the accent color everywhere, how many lines would you edit? Without variables?

## Challenges (if you finish early)

- Add a third theme (for example `data-theme="forest"`). Update the script's logic on paper: what would it need?
- Add a `--radius` variable and use it for the button and the list items.
- Use a fallback: `var(--color-border, gray)`. What happens if the variable does not exist?
- Check the contrast of your dark colors with DevTools (the color picker shows a contrast ratio).

## Useful links

- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
