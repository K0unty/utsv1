/* 
67: Overriding Properties and Protected Modifier
*/

console.log(
  `
  %cS5 - 67: Overriding Properties and Protected Modifier
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department67 {
  // private readonly id: string;
  // private name: string = "DEFAULT";
  protected empl: string[] = [];

  // Constructor Function - adding the readonly keyword at this construtor
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // Methods
  describe(this: Department67) {
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
const acc67 = new Department67("d1", "Acc");

acc67.addEmpl("bin");
acc67.addEmpl("Nal");

// Adding employee directrly since that variable can be called - Alternative method shouldnt be there
// acc67.empl[2] = "hahah";
acc67.name = "Fuku";

acc67.describe();
acc67.printEmInfo();

// 66 - Creating specialized departments
// When inheriting with the extends keyword , you will inherit all from the base class
class iTDep67 extends Department67 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

// Creating a new instanc oi the class
const acc68 = new iTDep67("f1", ["boo"]);
acc68.describe();
console.log(acc68);

class itacc2 extends Department67 {
  constructor(id: string, private reports: string[]) {
    super(id, "IT Accounting");
  }

  addItEmpl(name: string) {
    if (name === "puni") {
      return;
    }
    this.empl.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  prReports() {
    console.log(this.reports);
  }
}

const acc72 = new itacc2("d2", []);
acc72.addItEmpl("puni");
acc72.addItEmpl("pauni");
acc72.printEmInfo();

acc72.addReport("fuked...");
acc72.prReports();
