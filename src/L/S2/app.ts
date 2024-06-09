/* 
17: Objects 
*/

console.log(
  `
  %cSection 2 - 17,18,19,20,21
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
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Ina",
//   age: 18,
//   hobbies: ["Spo", "Cok"],
//   role: [2, "auth"],
// };

// person.role.push("buty");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

// let favAct: string[];
// favAct = ["Boob"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); !!! Error !!!
// }

// 21 - Enums

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN, // Implicitly number 0
  READ_ONLY, // Implicity number 1
  AUTHOR, // Implicity number 2
}

const person = {
  name: "Ina",
  age: 18,
  hobbies: ["Spo", "Cok"],
  role: Role.ADMIN,
};

if (person.role === 0) {
  console.log("IS ADMIN");
} else {
  console.log("😡fuckoff");
}
