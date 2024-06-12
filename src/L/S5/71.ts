/* 
71: Singleton and Private Constructors
*/

console.log(
  `
  %cS5 - 71: Singleton and Private Constructors
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
abstract class Department71 {
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
    // console.log(Department71.fiscalYear);
  }

  // Adding a static method
  static creEmp(name: string) {
    return { name: name };
  }

  // Methods
  abstract describe(this: Department71): void;

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
const empl71 = Department71.creEmp("Bonnies");
console.log("Maek employee with empl71");
console.log(empl71, Department71.fiscalYear);
console.log("------------------");

/////////////////////////////////////////////////////
// Definign a new department with the class above
// const newDep71 = new Department71("d1", "Acc");

// newDep71.addEmpl("bin");
// newDep71.addEmpl("Nal");

// // Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// // newDep71.empl[2] = "hahah";
// newDep71.name = "Fuku";

// newDep71.describe();
// newDep71.printEmInfo();
//////////////////////////////////////////////////////////

// 66 - Creating specialized departments
// When inheriting with the extends keyword , you will inherit all from the base class
class iTDep71 extends Department71 {
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
const new_acc71 = new iTDep71("f1", ["boo"]);
new_acc71.describe();
console.log(new_acc71);

class AccDep71 extends Department71 {
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

const acc71 = new AccDep71("d2", []);

// Work for 69.ts here

//Static Method
console.log("Math Pi Value" + Math.PI);

//---------

acc71.mostRecentReport = "suck";

acc71.addItEmpl("puni");
acc71.addItEmpl("pauni");
acc71.printEmInfo();

// acc71.addReport("fuked...");
// acc71.prReports();
console.log("Printing the Describe");
acc71.describe();

// Getter and setter methods work
console.log("Getter Propery");
console.log(acc71.mostRecentReport);
