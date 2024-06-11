/* 
52: Default function parameters
*/
console.log(
  `
%cS 4 - 52: Default function parameters
===========
              `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// new feature is arrow functions

// Shorter - Variation in this
// Implicit return - Only 1 Function
const add52 = (a: number, b: number = 0) => a + b;
console.log("Answer is : ", add52(5));

const printOutput52: (a: number | string) => void = (output) =>
  console.log(output);

printOutput52(add52(5));

const button52 = document.querySelector("button");
if (button52) {
  button52.addEventListener("click", (event) => console.log(event));
}
