/* 
62: Constructor Functions and The "this keyword"
*/

console.log(
  `
  %cS5 - 62: Constructor Functions and This Keyword
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department2 {
  name: string = "DEFAULT";

  // Constructor Function
  constructor(n: string) {
    this.name = n;
  }

  // Methods
  describe(this: Department2) {
    console.log(`Deparment⚙️: ` + this.name);
  }
}

// Definign a new department with the class above
const acc2 = new Department2("Acc");
// console.log(acc2);

// Calling the described method from the depeartment class
acc2.describe();

const acc2Copy = { name: "Dummy", describe: acc2.describe };
acc2Copy.describe();
