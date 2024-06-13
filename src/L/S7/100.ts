/* 
100: Generic Classes
*/

// helper function

// Since this has already been declaredred in 99.ts no need to call it back and available on all files now
// const blackConsoleText = function (text: string) {
//   console.log(
//     `
// %c${text}
// `,
//     "background:black"
//   );
// };

// ---

console.log(
  `
%cS5 - 100: Generic Classes `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 55%, rgba(22, 0, 100, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;"
);

// Actual work her

// Default type which also a generic

// // Array is a generic
// const names100: Array<string> = ["ina", "jan"];
// // names100[0].split(" ");

// const promise100: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     reject(Error);
//   });
// });

// promise100.then((data) => {
//   // data.split("");
// });

//100 - Work here

// Function that merges two objects and returns an object
/* 
This function is different from the lesson , due to some issues the new syntax is 
type parameters T and U using the extends keyword. The constraint extends object ensures that T and U must be objects. This is because the Object.assign method only works with objects, and we want to ensure that the function is used correctly.
*/
function merge100<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const meOb100 = merge100({ name: "Nip", hobbies: ["cooking"] }, { age: 30 });
console.log(meOb100);

console.log(
  `%c
Printing Parts of object
`,
  "background:black"
);
console.log(meOb100.age);

// 100: Another generic function
// Count and print function

interface Lengthy {
  length: number;
}

function countAndDesc100<T extends Lengthy>(element: T): [T, string] {
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
console.log(meOb100.age);

console.log(countAndDesc100("Whatuo"));
console.log(countAndDesc100(["Sports", "Cooking"]));

// 100 Keyof Function
function extractAndConvert100<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

blackConsoleText("Printing extractandConvert");
extractAndConvert100({ name: "boing" }, "name");
