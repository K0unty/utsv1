/* 
103: Generic Types VS Union Types
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
%cS5 - 103: Generic Types VS Union Types `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 55%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;"
);

// Actual work her

// Default type which also a generic

// // Array is a generic
// const names103: Array<string> = ["ina", "jan"];
// // names103[0].split(" ");

// const promise103: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     reject(Error);
//   });
// });

// promise103.then((data) => {
//   // data.split("");
// });

//103 - Work here

// Function that merges two objects and returns an object
/* 
This function is different from the lesson , due to some issues the new syntax is 
type parameters T and U using the extends keyword. The constraint extends object ensures that T and U must be objects. This is because the Object.assign method only works with objects, and we want to ensure that the function is used correctly.
*/
function merge103<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const meOb103 = merge103({ name: "Nip", hobbies: ["cooking"] }, { age: 30 });
console.log(meOb103);

console.log(
  `%c
Printing Parts of object
`,
  "background:black"
);
console.log(meOb103.age);

// 103: Another generic function
// Count and print function

interface Lengthy {
  length: number;
}

function countAndDesc103<T extends Lengthy>(element: T): [T, string] {
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
console.log(meOb103.age);

console.log(countAndDesc103("Whatuo"));
console.log(countAndDesc103(["Sports", "Cooking"]));

// 103 Keyof Function
function extractAndConvert103<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

blackConsoleText("Printing extractandConvert");
extractAndConvert103({ name: "boing" }, "name");

//103.ts Work - Generic classes
class Storage103<T extends string | number | boolean> {
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
blackConsoleText("Print Storage103 Class");
const textStorage103 = new Storage103<string>();
textStorage103.addItem("Ima");
textStorage103.addItem("loi");
textStorage103.removeItem("loi");
console.log(textStorage103.getItems());

const numSto103 = new Storage103<number>();

// const objSto103 = new Storage103<object>();
// const lioObj = { name: "Lio" };
// objSto103.addItem({ name: "Lio" });
// objSto103.addItem({ name: "Gon" });
// objSto103.removeItem({ name: "Lio" });
// blackConsoleText("Stroage103 Generic Clas");
// console.log(objSto103.getItems());

// 103: Generic utility classes - Built in generics -

// partial type
interface CourseGoal103 {
  title: string;
  description: string;
  completeUntil: Date;
}
// Partial Utility Type
function createCourseGoal103(
  title: string,
  description: string,
  date: Date
): CourseGoal103 {
  let courseGoal: Partial<CourseGoal103> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal103;
}

// Readonly type
const names103: Readonly<string[]> = ["Ina", "Anna"];
// names103.push("Fin");
// names103.pop();

// 103: Generic vs union types
