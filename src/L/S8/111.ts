/* 
111: Accessor & Parameter Decorators
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `
  %cS8 - 111: Accessor & Parameter Decorators `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger111(logString: string) {
  blaConsTxt("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate111(template: string, hookID: string) {
  return function (constructor: any) {
    blaConsTxt("TEMPLATE FACTORY");
    console.log("TEMPLATE FACTORY");
    const hookEl = document.getElementById(hookID);
    const p111 = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("p")!.textContent = p111.name;
    }
  };
}

// @Logger111("LOGGING - PERSON")
@Logger111("LOGGIN 111")
@WithTemplate111("<p> MyObject - From Decorator Factory </p>", "app111")
class Person111 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt("Print person111");
const pers111 = new Person111();
console.log(pers111);

// 111: work ---

function Log111(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

class Product111 {
  @Log111
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid - Shoudl be Positive Number");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
