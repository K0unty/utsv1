/* 
17: Objects 
*/

console.log(
  `
  %cSection 2 - 17 - Objects
  ===========
  `,
  "color:yellow;font-size:1.2rem"
);

// Work here

// basic object
// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ina",
  age: 18,
  hobbies: ["Spo", "Cok"],
  role: [2, "auth"],
};

// person.role.push("buty");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favAct: string[];
favAct = ["Boob"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!! Error !!!
}
