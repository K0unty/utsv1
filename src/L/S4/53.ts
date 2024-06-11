/* 
53: Spread Operator
*/
console.log(
  `
%cS 4 - 53: Spread Operator
===========
              `,
  "color:yellow;font-size:1.2rem"
);

const hob = ["spo", "wom"];
const actHob = ["hik", ...hob];

// using spread operator to push the array elements
// ?actHob.push(...hob);
console.log(actHob);

// Exists on object

const per1 = {
  name: "mina",
  age: "20",
};

// This is just a pointer
const copyPer1 = per1;
console.log(per1);

// making copy of object
const copPer2 = { ...per1 };
console.log(copPer2);
