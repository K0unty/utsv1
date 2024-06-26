/* 
73: A first Interface
*/
console.log(
  `
    %cS5 - 73: A first Interface
    ===========
                  `,
  "color:yellow;font-size:1.2rem"
);
``;
// Work Zone

// More like custom type
interface Person {
  name: string;
  age: number;

  // Adding Methods
  greet(phrase: string): void;
}

// Typecheck an object
let user1: Person;
user1 = {
  name: "Ina",
  age: 19,
  greet(phrase: String) {
    console.log(phrase + "  " + this.name + this.age);
  },
};

user1.greet("Hi bastr - I am:");
