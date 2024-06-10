/* 
22: Any Type
*/

console.log(
  `
    %cSection 22: AnyType
    ===========
    `,
  "color:yellow;font-size:1.2rem"
);

// Testing the any type
let favAct1: string[];
let favAct: any[]; // Here takes away the TS advantages
favAct = ["bub", 1];
console.log(favAct);
