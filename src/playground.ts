/* ==========================================================
   DEMO 101-3: PLAYGROUND (Part 1 of the handout)
   The page does not load this file. Everything here compiles,
   except where it says "uncomment".
   For each variable: predict the type, then hover over it.
   ========================================================== */

// `export {}` makes this file a module, so its names do not clash with menu.ts and index.ts.
export {};

// 1-2. Data from a form and from localStorage
const form = document.createElement('form');
const t1 = new FormData(form).get('name');
const t2 = localStorage.getItem('spk-dishes');

// 3. JSON.parse
const t3 = JSON.parse('[{"name": "Tacos"}]');
t3.this.does.not.exist();   // compiles! Why?

// 4. The same, as unknown. Uncomment the second line.
const t4: unknown = JSON.parse('[{"name": "Tacos"}]');
// t4.length;

// 5. Narrowing unknown with Array.isArray. Hover over t5: is it fully safe now?
if (Array.isArray(t4)) {
    const t5 = t4;
}

// 6. Utility types: new types made from Dish (menu.ts)
type T6a = Omit<Dish, 'id'>;
type T6b = Pick<Dish, 'name' | 'price'>;
type T6c = Partial<Dish>;

// 7. A union with a shared `ok` property (a "discriminated union"). Hover over `result` in each branch.
type Result = { ok: true; value: number } | { ok: false; error: string };

function show(result: Result): string {
    // Uncomment: can you read result.value here?
    // return String(result.value);
    if (result.ok) {
        return `Value: ${result.value}`;
    }
    return `Error: ${result.error}`;
}

// 8. Removing undefined from an array
const t8 = [1, undefined, 3].filter((x) => x !== undefined);
