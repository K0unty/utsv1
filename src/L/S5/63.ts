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
  private empl: string[] = [];

  // Constructor Function
  constructor(n: string) {
    this.name = n;
  }

  // Methods
  describe(this: Department2) {
    console.log(`Deparment⚙️: ` + this.name);
  }

  // Addign employee Method
  addEmpl(empl: string) {
    this.empl.push(empl);
  }

  // Printing the added emplyee
  printEmInfo() {
    console.log(this.empl.length);
    console.log(this.empl);
  }
}

// Definign a new department with the class above
const acc3 = new Department3("Acc");

acc3.addEmpl("bin");
acc3.addEmpl("Nal");

// Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// acc3.empl[2] = "hahah";
acc3.name = "Fuku";

acc3.describe();
acc3.printEmInfo();
