// Welcome to your second Typescript demo.
// TODO: IMPORTANT! To run the code below and what you are about to do, go to your terminal and run "npm run dev"

console.log("WELCOME TO DEMO #2")

// TypeScript is like JavaScript + Types, meaning that you MUST specify types and a description to your code.
// Look at these examples before you jump into the code

// This is how we write a functions
/**
   * Print a name
   * @param name name to print
   */
const printMyName = (name: string): string => {
  return `My name is ${name}`
}

// TODO 1: Print your name
console.log(printMyName("Alejandro"))

// TODO 2: Create a function called addNumbers. The function receives two parameters and both must have type number
// hint: See https://www.typescriptlang.org/docs/handbook/functions.html

const addNumbers = (a: number, b: number): number => {
  return a + b
}


// TODO 6: call the function addNumbers in a console log. Make sure the functions shows the correct result, f.eks: "2 + 2 is 4."
console.log("2 + 2 is " + addNumbers(2, 2))



