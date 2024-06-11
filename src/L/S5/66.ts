/* 
66: Inheritance
*/

console.log(
  `
  %cS5 - 66: Inheritance
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department6 {
  // private readonly id: string;
  // private name: string = "DEFAULT";
  private empl: string[] = [];

  // Constructor Function - adding the readonly keyword at this construtor
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // Methods
  describe(this: Department6) {
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
const acc6 = new Department6("d1", "Acc");

acc6.addEmpl("bin");
acc6.addEmpl("Nal");

// Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// acc6.empl[2] = "hahah";
acc6.name = "Fuku";

acc6.describe();
acc6.printEmInfo();

// 66 - Creating specialized departments
// When inheriting with the extends keyword , you will inherit all from the base class
class iTDep extends Department6 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

// Creating a new instanc oi the class
const acc66 = new iTDep("f1", ["boo"]);
acc66.describe();
console.log(acc66);

class itacc extends Department6 {
  constructor(id: string, private reports: string[]) {
    super(id, "IT Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  prReports() {
    console.log(this.reports);
  }
}

const acc7 = new itacc("d2", []);
acc7.addReport("fuked...");
acc7.prReports();
