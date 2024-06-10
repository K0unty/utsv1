/*
30: The Never Type
*/
console.log(
  `
%cS230 - The Never Type
===========
          `,
  "color:yellow;font-size:1.2rem"
);

let userInp1: unknown; // similar to any
let userNa1: string;

userInp = 5;
userInp = "Max";

// Extra typecheck
if (typeof userInp1 === "string") {
  userNa1 = userInp1;
}

//30 Never Tyoe - Produces no value
const genErr = function (message: string, code: number): never {
  throw { message: message, errCo: code };
};

const res2 = genErr("Fuked", 6969);
console.log(res2);
