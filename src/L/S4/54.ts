/* 
54 - Rest parameters
*/
console.log(
  `
%cS 4 - 54 - Rest parameters
===========
              `,
  "color:yellow;font-size:1.2rem"
);

const hob1 = ["spo", "wom"];
const actHob1 = ["hik", ...hob1];

// using spread operator to push the array elements
// ?actHob.push(...hob);
console.log(actHob1);

// Exists on object

const per11 = {
  name: "mina",
  age: "20",
};

// This is just a pointer
const copyPer11 = per11;
console.log(per11);

// making copy of object
const copPer21 = { ...per11 };
console.log(copPer21);

// add funcion - done with array method reduce
const add54 = (...num: number[]) => {
  return num.reduce((cuResult, curValue) => {
    return cuResult + curValue;
  }, 0);
};

const addedNumbers = add54(5, 10, 2.1, 5, 9, 9, 9);
console.log(addedNumbers);

// using tuple to set total number of received params

// The []  is the tuples , and it specified 3 numbers which are accepted as params
const add541 = (...num: [number, number, number]) => {
  return num.reduce((cuResult, curValue) => {
    return cuResult + curValue;
  }, 0);
};

const addedNumbers1 = add541(5, 10, 2.1);
console.log(addedNumbers1);
