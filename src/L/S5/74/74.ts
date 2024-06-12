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
interface Person74 {
  name: string;
  age: number;

  // Adding Methods
  greet(phrase: string): void;
}

// Typecheck an object
let user174: Person74;
user174 = {
  name: "Ina",
  age: 19,
  greet(phrase: String) {
    console.log(phrase + "  " + this.name + this.age);
  },
};

user174.greet("Hi bastr - I am:");
