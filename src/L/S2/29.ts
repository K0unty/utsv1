/*
28: Function has types 
*/
console.log(
  `
          %cS2-29: Function Types and Callbacks
          ===========
          `,
  "color:yellow;font-size:1.2rem"
);

const add3 = function (n1: number, n2: number): number {
  return n1 + n2;
};

const printRes3 = function (num: number): void {
  console.log("Result : " + num);
  // Its called void because it doesnt have a return statement
};

const addHan1 = function (n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
};

// printRes2(add2(5, 12));

//28 Actual work
// let combVal3: (a: number, b: number) => number;

// combVal2 = add2;

// console.log(combVal2(8, 8));

// undefined is a valid type in typescript ef as decribed below , but it may
// No have any use
//   let somVal: undefined;

addHan1(10, 20, (res) => {
  console.log(res);
});
