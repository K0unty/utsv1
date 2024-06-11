/* 
55 - Array and Object Destructuring 
*/

console.log(
  `
%cS 4 - 55 - Array and Object Destructuring 
===========
              `,
  "color:yellow;font-size:1.2rem"
);

// Work

// add funcion - done with array method reduce
const add55 = (...num: number[]) => {
  return num.reduce((cuResult, curValue) => {
    return cuResult + curValue;
  }, 0);
};

const addedNumbers55 = add55(5, 10, 2.1, 5, 9, 9, 9);
console.log(addedNumbers55);

//

const hob2 = ["spo", "cuk", "jan", "fan"];
const hob54 = hob2[0];
const hob542 = hob2[1];
console.log(hob54, hob542);

// Destrututin

const [ho1, ho2, ...remainingHobbies] = hob2;
console.log(`%cDestructured Array`, "font-size:18px");
console.log(ho1);
console.log(ho2);
console.log(remainingHobbies);

// Object Destructuring

let per55 = {
  name55: "fang",
  age55: "99",
};
console.log(
  `
%cDestructured Object
`,
  "font-size:18px"
);

// here also storing the key in another key
const { name55: bondy, age55 } = per55;
console.log(bondy, age55);
