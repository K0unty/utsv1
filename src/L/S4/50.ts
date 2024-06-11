/* 
50 - 'let' and 'const' variables 
*/
console.log(
  `
  %cS4-50 - 'let' and 'const' variables 
  ===========
              `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

const userNameS4 = "Jim";
// userNameS4 = "jin";
let age = 20;

age = 19;

// var  - not to use this anymore instead use let

// r4egading scopes ehre
const add4 = function (a: number, b: number) {
  let result;
  result = a + b;
  return result;
};

// console.log(result);

if (age >= 20) {
  let isOld = true;
  console.log(isOld);
}
