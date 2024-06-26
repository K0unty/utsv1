/* 
74: using interface and classes
*/
console.log(
  `
    %cS5 - 74: using interface and classes
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// More like custom type
interface Greetable74 {
  name: string;

  // Adding Methods
  greet(phrase: string): void;
}

// Interface shared across classes
class Person74 implements Greetable74 {
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
// let user174: Greetable74;
// user174 = {
//   name: "Ina",

//   greet(phrase: String) {
//     console.log(phrase + "  " + this.name);
//   },
// };

// user174.greet("Hi bastr - I am:");
let user174;
user174 = new Person74("ina");
user174.greet("yo ");
console.log(user174);
