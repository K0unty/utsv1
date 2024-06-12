/* 
80: Compiling Interfaces to Javascriot
*/
console.log(
  `
    %cS5 - 80: Compiling Interfaces to Javascript
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// make another interface

// Custom types

type AddFn80 = (a: number, b: number) => number;
let add80: AddFn80;
add80 = (n1: number, n2: number) => {
  return n1 + n2;
};

// Inteface Types
interface AddIFn80 {
  (a: number, b: number): number;
}
let addIFn80: AddIFn80;
addIFn80 = (n1: number, n2: number) => {
  return n1 + n2;
};

// Optional Params in Interface and properties
interface Named80 {
  readonly name?: string;
  outputName?: string;
}

// More like custom type
interface Greetable80 extends Named80 {
  greet(phrase: string): void;
}

// Interface shared across classes
class Person80 implements Greetable80 {
  name?: string;
  age = 30;
  constructor(n?: string) {
    this.name = n;
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi BAstard!");
    }
  }
}

let user180;
user180 = new Person80();
// user180.name = 'bingo'
user180.greet("yo ");
console.log(user180);
