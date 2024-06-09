/* 
Section 2 : 2
*/

console.log(
  `
%cSection 2
===========
`,
  "color:yellow;font-size:1.2rem"
);

const addNumber = function add(n1: number, n2: number) {
  // This is the JS way
  // if (typeof n1 === "number" && typeof n2 === "number") {
  return n1 + n2;
  // } else {
  console.log("Fuck o NUm");
  // }
};
const number1 = 5;
const number2 = 2.8;

const result = addNumber(number1, number2);
console.log(result);
