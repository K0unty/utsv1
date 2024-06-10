/* 
23: Union Types
*/

console.log(
  `
      %cSection 2 23: UnionTypes
      ===========
      `,
  "color:yellow;font-size:1.2rem"
);

// Work

const combine = function combine(
  input1: number | string,
  input2: number | string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combAges = combine(30, 26);
console.log(combAges);

const combNam = combine("Oin", "jin");
console.log(combNam);

// console.log(combine(21, 22));
