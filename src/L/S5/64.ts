/* 
64: Shorthand Initialization
*/

console.log(
  `
  %cS5 - 64: Shorthand Initialization
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department4 {
  // private id: string;
  // private name: string = "DEFAULT";
  private empl: string[] = [];

  // Constructor Function
  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // Methods
  describe(this: Department4) {
    console.log(`Dep [${this.id} - ${this.name}]`);
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
const acc4 = new Department4("d1", "Acc");

acc4.addEmpl("bin");
acc4.addEmpl("Nal");

// Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// acc4.empl[2] = "hahah";
acc4.name = "Fuku";

acc4.describe();
acc4.printEmInfo();
