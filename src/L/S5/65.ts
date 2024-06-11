/* 
65: "readonly" properties
*/

console.log(
  `
  %cS5 - 65: "readonly" properties
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department5 {
  // private readonly id: string;
  // private name: string = "DEFAULT";
  private empl: string[] = [];

  // Constructor Function - adding the readonly keyword at this construtor
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // Methods
  describe(this: Department5) {
    console.log(`Dep [${this.id} - ${this.name}]`);
  }

  // Addign employee Method
  addEmpl(empl: string) {
    // this.id = "d2";
    this.empl.push(empl);
  }

  // Printing the added emplyee
  printEmInfo() {
    console.log(this.empl.length);
    console.log(this.empl);
  }
}

// Definign a new department with the class above
const acc5 = new Department5("d1", "Acc");

acc5.addEmpl("bin");
acc5.addEmpl("Nal");

// Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// acc5.empl[2] = "hahah";
acc5.name = "Fuku";

acc5.describe();
acc5.printEmInfo();
