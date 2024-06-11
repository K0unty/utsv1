/* 
60: Creating your first class 
*/

console.log(
  `
  %cS5 - 62: Creating a class  
  ===========
                `,
  "color:yellow;font-size:1.2rem"
);

// Work Zone

// Creating a class - Making muiltiple departments in a company
class Department {
  name: string = "DEFAULT";

  constructor(n: string) {
    this.name = n;
  }
}

// Definign a new department with the class above
const acc1 = new Department("Acc");
console.log(acc1);
