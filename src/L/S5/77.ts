/* 
77: Extending Interfaces
*/
console.log(
  `
    %cS5 - 77: Extending Interfaces
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// More like custom type
interface Greetable77 {
  readonly name: string;

  // Adding Methods
  greet(phrase: string): void;
}

// Interface shared across classes
class Person77 implements Greetable77 {
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
// let user177: Greetable77;
// user177 = {
//   name: "Ina",

//   greet(phrase: String) {
//     console.log(phrase + "  " + this.name);
//   },
// };

// user177.greet("Hi bastr - I am:");
let user177;
user177 = new Person77("ina");
// user177.name = 'bingo'
user177.greet("yo ");
console.log(user177);
