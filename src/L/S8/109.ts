/* 
109: Woring with decorator factories
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `
  %cS8 - 109: Woring with decorator factories `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger109(logString: string) {
  blaConsTxt("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate109(template: string, hookID: string) {
  return function (constructor: any) {
    blaConsTxt("TEMPLATE FACTORY");
    console.log("TEMPLATE FACTORY");
    const hookEl = document.getElementById(hookID);
    const p109 = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("p")!.textContent = p109.name;
    }
  };
}

// @Logger109("LOGGING - PERSON")
@Logger109("LOGGIN 109")
@WithTemplate109("<p> MyObject - From Decorator Factory </p>", "app109")
class Person109 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt("Print person109");
const pers109 = new Person109();
console.log(pers109);
