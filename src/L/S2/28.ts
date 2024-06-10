/*
28: Function has types 
*/
console.log(
  `
          %cS2-28: Function as Types
          ===========
          `,
  "color:yellow;font-size:1.2rem"
);

const add2 = function (n1: number, n2: number): number {
  return n1 + n2;
};

const printRes2 = function (num: number): void {
  console.log("Result : " + num);
  // Its called void because it doesnt have a return statement
};

printRes2(add2(5, 12));

//28 Actual work
let combVal2: (a: number, b: number) => number;

combVal2 = add2;

console.log(combVal2(8, 8));

// undefined is a valid type in typescript ef as decribed below , but it may
// No have any use
//   let somVal: undefined;
