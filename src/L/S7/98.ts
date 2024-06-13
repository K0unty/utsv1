/* 
97: Bulding a Generic Function
*/

// Import Zone

// ---

console.log(
  `
%cS5 - 97: Bulding a Generic Function `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 55%, rgba(22, 0, 98, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;"
);

// Actual work her

// Default type which also a generic

// // Array is a generic
// const names97: Array<string> = ["ina", "jan"];
// // names97[0].split(" ");

// const promise97: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     reject(Error);
//   });
// });

// promise97.then((data) => {
//   // data.split("");
// });

//97 - Work here

// Function that merges two objects and returns an object
/* 
This function is different from the lesson , due to some issues the new syntax is 
type parameters T and U using the extends keyword. The constraint extends object ensures that T and U must be objects. This is because the Object.assign method only works with objects, and we want to ensure that the function is used correctly.
*/
function merge97<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const meOb97 = merge97({ name: "Nip", hobbies: ["cooking"] }, { age: 30 });
console.log(meOb97);

console.log(
  `%c
Printing Parts of object
`,
  "background:black"
);
console.log(meOb97.age);
