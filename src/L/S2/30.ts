/*
28: Function has types 
*/
console.log(
  `
          %cS2-30: Uknown Type
          ===========
          `,
  "color:yellow;font-size:1.2rem"
);

let userInp: unknown; // similar to any
let userNa: string;

userInp = 5;
userInp = "Max";

// Extra typecheck
if (typeof userInp === "string") {
  userNa = userInp;
}
