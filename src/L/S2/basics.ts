/* 
Section 2 : 12,13,14,15,16,17
*/

console.log(
  `
%cSection 2
===========
`,
  "color:yellow;font-size:1.2rem"
);

// == Work section

const addNumber = function add(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) {
  const result = n1 + n2;
  // This is the JS way
  // if (typeof n1 === "number" && typeof n2 === "number") {
  if (showResult) {
    // } else {
    console.log(phrase + n1 + n2);
  }
  return result;
};
let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

addNumber(number1, number2, printResult, resultPhrase);
