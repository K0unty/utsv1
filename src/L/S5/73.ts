/* 
73: A First Interface
*/

console.log(
  `
  %cS5 - 73: Singleton and Private Constructors
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// Creating a class - Making muiltiple departments in a company
abstract class Department73 {
  // Creating a static property
  static fiscalYear = 2020;

  // private readonly id: string;
  // private name: string = "DEFAULT";
  protected empl: string[] = [];

  // Constructor Function - adding the readonly keyword at this construtor
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // To access the static property , you have to access it using the class name and not this keyword
    // console.log(Department73.fiscalYear);
  }

  // Adding a static method
  static creEmp(name: string) {
    return { name: name };
  }

  // Methods
  abstract describe(this: Department73): void;

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
const empl73 = Department73.creEmp("Bonnies");
console.log("Maek employee with empl73");
console.log(empl73, Department73.fiscalYear);
console.log("------------------");

/////////////////////////////////////////////////////
// Definign a new department with the class above
// const newDep73 = new Department73("d1", "Acc");

// newDep73.addEmpl("bin");
// newDep73.addEmpl("Nal");

// // Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// // newDep73.empl[2] = "hahah";
// newDep73.name = "Fuku";

// newDep73.describe();
// newDep73.printEmInfo();
//////////////////////////////////////////////////////////

// 66 - Creating specialized departments
// When inheriting with the extends keyword , you will inherit all from the base class
class iTDep73 extends Department73 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Dep - ID:" + this.id);
  }
}

// Creating a new instanc oi the class
const new_acc73 = new iTDep73("f1", ["boo"]);
new_acc73.describe();
console.log(new_acc73);

// Thisis the account department class
class AccDep73 extends Department73 {
  private lastReport: string;
  private static instance: AccDep73;

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

  private constructor(id: string, private reports: string[]) {
    super(id, "IT Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccDep73.instance) {
      return this.instance;
    }
    this.instance = new AccDep73("d2", []);
    return this.instance;
  }

  // Adding the abstract class here
  describe() {
    console.log("AccDep - ID: " + this.id);
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

// const acc73 = new AccDep73("d2", []);
const acc73 = AccDep73.getInstance();
const acc732 = AccDep73.getInstance();
console.log(`
Printing the new instance that is instantiated with private constructor 
`);
console.log(acc73, acc732);
console.log(`
=================
`);

// Work for 69.ts here

//Static Method
console.log("Math Pi Value" + Math.PI);

//---------

acc73.mostRecentReport = "suck";

acc73.addItEmpl("puni");
acc73.addItEmpl("pauni");
acc73.printEmInfo();

// acc73.addReport("fuked...");
// acc73.prReports();
console.log("Printing the Describe");
acc73.describe();

// Getter and setter methods work
console.log("Getter Propery");
console.log(acc73.mostRecentReport);
