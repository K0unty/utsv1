/* 
108: Woring with decorator factories
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `
  %cS8 - 108: Woring with decorator factories `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger108(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate108(template: string, hookID: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookID);
    const p108 = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("p")!.textContent = p108.name;
    }
  };
}

// @Logger108("LOGGING - PERSON")
@WithTemplate108("<p> MyObject - From Decorator Factory </p>", "app108")
class Person108 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt("Print person108");
const pers108 = new Person108();
console.log(pers108);
