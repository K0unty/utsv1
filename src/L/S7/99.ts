/* 
99: Bulding a Generic Function
*/

// Import Zone

// ---

console.log(
  `
%cS5 - 99: Bulding a Generic Function `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 55%, rgba(22, 0, 99, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;"
);

// Actual work her

// Default type which also a generic

// // Array is a generic
// const names99: Array<string> = ["ina", "jan"];
// // names99[0].split(" ");

// const promise99: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     reject(Error);
//   });
// });

// promise99.then((data) => {
//   // data.split("");
// });

//99 - Work here

// Function that merges two objects and returns an object
/* 
This function is different from the lesson , due to some issues the new syntax is 
type parameters T and U using the extends keyword. The constraint extends object ensures that T and U must be objects. This is because the Object.assign method only works with objects, and we want to ensure that the function is used correctly.
*/
function merge99<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const meOb99 = merge99({ name: "Nip", hobbies: ["cooking"] }, { age: 30 });
console.log(meOb99);

console.log(
  `%c
Printing Parts of object
`,
  "background:black"
);
console.log(meOb99.age);

// 99: Another generic function
// Count and print function

interface Lengthy {
  length: number;
}

function countAndDesc99<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No Val";
  if (element.length === 1) {
    descriptionText = "Got 1 Element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements. ";
  }
  return [element, descriptionText];
}
console.log(
  `%c
Printing countAnDesc09 Function
`,
  "background:black"
);
console.log(meOb99.age);

console.log(countAndDesc99("Whatuo"));
console.log(countAndDesc99(["Sports", "Cooking"]));
