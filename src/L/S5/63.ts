/* 
63: 'private' and 'public' access modifiers 
*/

console.log(
  `
  %cS5 - 63: 'private' and 'public' access modifiers
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department3 {
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
const acc3 = new Department3("Acc");
// console.log(acc2);

// Calling the described method from the depeartment class
acc3.describe();

const acc3Copy = { name: "Dummy", describe: acc3.describe };
acc3Copy.describe();
