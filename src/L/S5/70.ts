/* 
70: Abstract classes
*/

console.log(
  `
  %cS5 - 70: Abstract classes
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department69 {
  // Creating a static property
  static fiscalYear = 2020;

  // private readonly id: string;
  // private name: string = "DEFAULT";
  protected empl: string[] = [];

  // Constructor Function - adding the readonly keyword at this construtor
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // To access the static property , you have to access it using the class name and not this keyword
    // console.log(Department69.fiscalYear);
  }

  // Adding a static method
  static creEmp(name: string) {
    return { name: name };
  }

  // Methods
  describe(this: Department69) {
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

// New employee from static method L27 - L30
const empl691 = Department69.creEmp("Bonnies");
console.log("Maek employee with empl691");
console.log(empl691, Department69.fiscalYear);
console.log("------------------");

// Definign a new department with the class above
const acc69 = new Department69("d1", "Acc");

acc69.addEmpl("bin");
acc69.addEmpl("Nal");

// Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// acc69.empl[2] = "hahah";
acc69.name = "Fuku";

acc69.describe();
acc69.printEmInfo();

// 66 - Creating specialized departments
// When inheriting with the extends keyword , you will inherit all from the base class
class iTDep69 extends Department69 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

// Creating a new instanc oi the class
const new_acc69 = new iTDep69("f1", ["boo"]);
new_acc69.describe();
console.log(new_acc69);

class itacc69 extends Department69 {
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

const acc69_2 = new itacc69("d2", []);

// Work for 69.ts here

//Static Method
console.log("Math Pi Value" + Math.PI);

//---------

acc69_2.mostRecentReport = "suck";

acc69_2.addItEmpl("puni");
acc69_2.addItEmpl("pauni");
acc69_2.printEmInfo();

acc69_2.addReport("fuked...");
acc69_2.prReports();

// Getter and setter methods work
console.log("Getter Propery");
console.log(acc69_2.mostRecentReport);
