/* 
75: Why Interfaces?
*/
console.log(
  `
    %cS5 - 75: Why Interfaces?
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// More like custom type
interface Greetable75 {
  name: string;

  // Adding Methods
  greet(phrase: string): void;
}

// Interface shared across classes
class Person75 implements Greetable75 {
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
// let user175: Greetable75;
// user175 = {
//   name: "Ina",

//   greet(phrase: String) {
//     console.log(phrase + "  " + this.name);
//   },
// };

// user175.greet("Hi bastr - I am:");
let user175;
user175 = new Person75("ina");
user175.greet("yo ");
console.log(user175);
