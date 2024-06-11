/* 
68: Getter and Setter Methods
*/

console.log(
  `
  %cS5 - 68: Getter and Setter Methods
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department68 {
  // private readonly id: string;
  // private name: string = "DEFAULT";
  protected empl: string[] = [];

  // Constructor Function - adding the readonly keyword at this construtor
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // Methods
  describe(this: Department68) {
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
const acc6812 = new Department68("d1", "Acc");

acc6812.addEmpl("bin");
acc6812.addEmpl("Nal");

// Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// acc681.empl[2] = "hahah";
acc6812.name = "Fuku";

acc6812.describe();
acc6812.printEmInfo();

// 66 - Creating specialized departments
// When inheriting with the extends keyword , you will inherit all from the base class
class iTDep68 extends Department68 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

// Creating a new instanc oi the class
const acc681 = new iTDep68("f1", ["boo"]);
acc681.describe();
console.log(acc681);

class itacc68 extends Department68 {
  private lastReport: string;

  //getter - retrieve value to add complex logic
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Put Val");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "IT Accounting");
    this.lastReport = reports[0];
  }

  addItEmpl(name: string) {
    if (name === "puni") {
      return;
    }
    this.empl.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  prReports() {
    console.log(this.reports);
  }
}

const acc722 = new itacc68("d2", []);

acc722.mostRecentReport = "suck";

acc722.addItEmpl("puni");
acc722.addItEmpl("pauni");
acc722.printEmInfo();

acc722.addReport("fuked...");
acc722.prReports();

// Getter and setter methods work
console.log("Getter Propery");
console.log(acc722.mostRecentReport);
