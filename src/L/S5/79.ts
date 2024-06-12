/* 
79: Interfaces as Function Types
*/
console.log(
  `
    %cS5 - 79: Interface as function types
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// make another interface

// Custom types

type AddFn79 = (a: number, b: number) => number;
let add79: AddFn79;
add79 = (n1: number, n2: number) => {
  return n1 + n2;
};

// Inteface Types
interface AddIFn79 {
  (a: number, b: number): number;
}
let addIFn79: AddIFn79;
addIFn79 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named79 {
  readonly name: string;
}

// More like custom type
interface Greetable79 extends Named79 {
  greet(phrase: string): void;
}

// Interface shared across classes
class Person79 implements Greetable79 {
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
// let user179: Greetable79;
// user179 = {
//   name: "Ina",

//   greet(phrase: String) {
//     console.log(phrase + "  " + this.name);
//   },
// };

// user179.greet("Hi bastr - I am:");
let user179;
user179 = new Person79("ina");
// user179.name = 'bingo'
user179.greet("yo ");
console.log(user179);
