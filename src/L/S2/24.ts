/*
24: literal Types
*/
console.log(
  `
        %cS2-24: LiteralTypes
        ===========
        `,
  "color:yellow;font-size:1.2rem"
);

//-- Wok

const combine3 = function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  }
  return result.toString();
};

const combAges3 = combine2(30, 26, "as-number");
console.log(combAges2);

const combinedStringAges2 = combine2("30", "26", "as-number");
console.log(combinedStringAges2);

const combNam3 = combine2("Oin", "jin", "as-text");
console.log(combNam2);

// console.log(combine2(21, 22));
