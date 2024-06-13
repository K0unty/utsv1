/* 
106: A first Class Decorator
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `
  %cS8 - 106: A first Class Decorator `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes

class Person106 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt("Print person106");
const pers106 = new Person106();
console.log(pers106);
