/* 
27: Function Return Types and Void
*/

const add1 = function (n1: number, n2: number): number {
  return n1 + n2;
};

const printRes = function (num: number): void {
  console.log("Result : " + num);
  // Its called void because it doesnt have a return statement
};

printRes(add1(5, 12));

// undefined is a valid type in typescript ef as decribed below , but it may
// No have any use
let somVal: undefined;
