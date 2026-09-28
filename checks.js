/* ==========================================================
   Provided test helper: do not edit.
   check(description, run, expected) calls run(), compares the
   result with expected and shows ✅ or ❌ in the page and in
   the Console. If run() throws an error, the check fails.
   ========================================================== */
const checksList = document.querySelector('#checks');
const checksSummary = document.querySelector('#checks-summary');
let passedCount = 0;
let totalCount = 0;

function format(value) {
    return value === undefined ? 'undefined' : JSON.stringify(value);
}

function check(description, run, expected) {
    totalCount++;

    let actual;
    let error;
    try {
        actual = run();
    } catch (e) {
        error = e;
    }

    const passed = !error && format(actual) === format(expected);
    const got = error ? `Error: ${error.message}` : format(actual);
    const message = passed
        ? `✅ ${description} → ${format(actual)}`
        : `❌ ${description} → expected ${format(expected)}, got ${got}`;

    if (passed) {
        passedCount++;
        console.log(message);
    } else {
        console.error(message);
    }

    const item = document.createElement('li');
    item.textContent = message;
    item.className = passed ? 'check-pass' : 'check-fail';
    checksList.append(item);
    checksSummary.textContent = `${passedCount} / ${totalCount} checks passing`;
}
