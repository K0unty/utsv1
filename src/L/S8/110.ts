/* 
110: Woring with decorator factories
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `
  %cS8 - 110: Woring with decorator factories `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger110(logString: string) {
  blaConsTxt("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate110(template: string, hookID: string) {
  return function (constructor: any) {
    blaConsTxt("TEMPLATE FACTORY");
    console.log("TEMPLATE FACTORY");
    const hookEl = document.getElementById(hookID);
    const p110 = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("p")!.textContent = p110.name;
    }
  };
}

// @Logger110("LOGGING - PERSON")
@Logger110("LOGGIN 110")
@WithTemplate110("<p> MyObject - From Decorator Factory </p>", "app110")
class Person110 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt("Print person110");
const pers110 = new Person110();
console.log(pers110);
