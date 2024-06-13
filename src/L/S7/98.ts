/* 
98: Bulding a Generic Function
*/

// Import Zone

// ---

console.log(
  `
%cS5 - 98: Bulding a Generic Function `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 55%, rgba(22, 0, 98, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;"
);

// Actual work her

// Default type which also a generic

// // Array is a generic
// const names98: Array<string> = ["ina", "jan"];
// // names98[0].split(" ");

// const promise98: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     reject(Error);
//   });
// });

// promise98.then((data) => {
//   // data.split("");
// });

//98 - Work here

// Function that merges two objects and returns an object
/* 
This function is different from the lesson , due to some issues the new syntax is 
type parameters T and U using the extends keyword. The constraint extends object ensures that T and U must be objects. This is because the Object.assign method only works with objects, and we want to ensure that the function is used correctly.
*/
function merge98<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const meOb98 = merge98({ name: "Nip", hobbies: ["cooking"] }, { age: 30 });
console.log(meOb98);

console.log(
  `%c
Printing Parts of object
`,
  "background:black"
);
console.log(meOb98.age);

// 98: Another generic function
