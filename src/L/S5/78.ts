/* 
78: Interfaces as Function Types
*/
console.log(
  `
    %cS5 - 78: Interface as function types
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// make another interface

interface Named78 {
  readonly name: string;
}

// More like custom type
interface Greetable78 extends Named78 {
  greet(phrase: string): void;
}

// Interface shared across classes
class Person78 implements Greetable78 {
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
// let user178: Greetable78;
// user178 = {
//   name: "Ina",

//   greet(phrase: String) {
//     console.log(phrase + "  " + this.name);
//   },
// };

// user178.greet("Hi bastr - I am:");
let user178;
user178 = new Person78("ina");
// user178.name = 'bingo'
user178.greet("yo ");
console.log(user178);
