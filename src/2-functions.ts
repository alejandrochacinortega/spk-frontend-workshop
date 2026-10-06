/* ==========================================================
   DEMO 101-0b: FUNCTIONS
   Run it with:  npm run functions
   Goal: every check in the output is ✅. Write each function ABOVE its check.
   ========================================================== */

// Example: a typed function. Each parameter gets a type, and the return type comes after the ().
function greet(name: string): string {
  return `Welcome to SPK Bistro, ${name}!`;
}

console.log(greet('Kari'));
check('greet("Ola")', greet('Ola'), 'Welcome to SPK Bistro, Ola!');


// TODO 1: Call greet the wrong way. Uncomment ONE line at a time, guess, then read the error.
// greet(42);
// greet();
// greet('Kari', 'Ola');
// const length: number = greet('Kari');


// TODO 2: Write a function addPrices that takes two numbers and returns their sum.
//         Then uncomment the check.
function addPrices(a: number, b: number): number {
  return a + b;
}

check('addPrices(89, 159)', addPrices(89, 159), 248);


// TODO 3: In JavaScript, addPrices('89', 159) returns '89159'. Uncomment the line. What does TypeScript say?
// addPrices('89', 159); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


// TODO 4: Write formatPrice. It takes a number and returns a string like "89 kr".
function formatPrice(price: number): string {
  return `${price} kr`;
}

check('formatPrice(89)', formatPrice(89), '89 kr');


// TODO 5: Write priceWithTip(price, tipPercent). The tip is OPTIONAL: write `tipPercent?: number`.
//         Without a tip it returns the price. Hover over tipPercent inside the function: what is its type?
//         Hint: the `??` operator from the JavaScript demo.
function priceWithTip(price: number, tipPercent?: number): number {
  // tipPercent is `number | undefined` here.
  return price + (price * (tipPercent ?? 0)) / 100;
}

check('priceWithTip(200, 10)', priceWithTip(200, 10), 220);
check('priceWithTip(200)', priceWithTip(200), 200);


// TODO 6: Arrow functions work the same way. Write isExpensive: true when the price is over 150.
//         const isExpensive = (price: number): boolean => ...
const isExpensive = (price: number): boolean => price > 150;

check('isExpensive(229)', isExpensive(229), true);
check('isExpensive(89)', isExpensive(89), false);


// TODO 7: A function that returns nothing has the return type `void`.
//         Write printReceipt(dishes: string[], total: number): void, that prints:
//         "Receipt: Pizza, Sushi. Total: 388 kr" (use formatPrice!)
function printReceipt(dishes: string[], total: number): void {
  console.log(`Receipt: ${dishes.join(', ')}. Total: ${formatPrice(total)}`);
}

printReceipt(['Pizza', 'Sushi'], 388);


// ---- Helper: prints ✅ or ❌. You don't need to change it. ----
function check(description: string, actual: unknown, expected: unknown): void {
  if (actual === expected) {
    console.log(`✅ ${description}`);
  } else {
    console.log(`❌ ${description}: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
}
