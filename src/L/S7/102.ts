/* 
102: Generic Utility Types
*/

// helper function

const blackConsoleText = function (text: string) {
  console.log(
    `
%c${text}
`,
    "background:black"
  );
};

// ---

console.log(
  `
%cS5 - 102: Generic Utility Types `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 55%, rgba(22, 0, 102, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;"
);

// Actual work her

// Default type which also a generic

// // Array is a generic
// const names102: Array<string> = ["ina", "jan"];
// // names102[0].split(" ");

// const promise102: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     reject(Error);
//   });
// });

// promise102.then((data) => {
//   // data.split("");
// });

//102 - Work here

// Function that merges two objects and returns an object
/* 
This function is different from the lesson , due to some issues the new syntax is 
type parameters T and U using the extends keyword. The constraint extends object ensures that T and U must be objects. This is because the Object.assign method only works with objects, and we want to ensure that the function is used correctly.
*/
function merge102<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const meOb102 = merge102({ name: "Nip", hobbies: ["cooking"] }, { age: 30 });
console.log(meOb102);

console.log(
  `%c
Printing Parts of object
`,
  "background:black"
);
console.log(meOb102.age);

// 102: Another generic function
// Count and print function

interface Lengthy {
  length: number;
}

function countAndDesc102<T extends Lengthy>(element: T): [T, string] {
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
console.log(meOb102.age);

console.log(countAndDesc102("Whatuo"));
console.log(countAndDesc102(["Sports", "Cooking"]));

// 102 Keyof Function
function extractAndConvert102<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

blackConsoleText("Printing extractandConvert");
extractAndConvert102({ name: "boing" }, "name");

//102.ts Work - Generic classes
class Storage102<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
blackConsoleText("Print Storage102 Class");
const textStorage102 = new Storage102<string>();
textStorage102.addItem("Ima");
textStorage102.addItem("loi");
textStorage102.removeItem("loi");
console.log(textStorage102.getItems());

const numSto102 = new Storage102<number>();

// const objSto102 = new Storage102<object>();
// const lioObj = { name: "Lio" };
// objSto102.addItem({ name: "Lio" });
// objSto102.addItem({ name: "Gon" });
// objSto102.removeItem({ name: "Lio" });
// blackConsoleText("Stroage102 Generic Clas");
// console.log(objSto102.getItems());

// 102: Generic utility classes - Built in generics -

// partial type
interface CourseGoal102 {
  title: string;
  description: string;
  completeUntil: Date;
}
// Partial Utility Type
function createCourseGoal102(
  title: string,
  description: string,
  date: Date
): CourseGoal102 {
  let courseGoal: Partial<CourseGoal102> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal102;
}

// Readonly type
const names102: Readonly<string[]> = ["Ina", "Anna"];
// names102.push("Fin");
// names102.pop();
