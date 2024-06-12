/* 
76: Readonly Interfaces
*/
console.log(
  `
    %cS5 - 76: Read only interfaces
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// More like custom type
interface Greetable76 {
  name: string;

  // Adding Methods
  greet(phrase: string): void;
}

// Interface shared across classes
class Person76 implements Greetable76 {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

// // Typecheck an object
// let user176: Greetable76;
// user176 = {
//   name: "Ina",

//   greet(phrase: String) {
//     console.log(phrase + "  " + this.name);
//   },
// };

// user176.greet("Hi bastr - I am:");
let user176;
user176 = new Person76("ina");
user176.greet("yo ");
console.log(user176);
