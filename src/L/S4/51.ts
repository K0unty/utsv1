/* 
51 - Arrow Functions
*/
console.log(
  `
%cS 4 - 51 - Arrow Functions
===========
              `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// new feature is arrow functions

// Shorter - Variation in this
// Implicit return - Only 1 Function
const add5 = (a: number, b: number) => a + b;
console.log("Answer is : ", add5(6, 9));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add5(1, 1));

const button5 = document.querySelector("button");
if (button5) {
  button5?.addEventListener("click", (event) => console.log(event));
}
