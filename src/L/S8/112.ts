/* 
112: Accessor & Parameter Decorators
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `
  %cS8 - 112: Accessor & Parameter Decorators `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger112(logString: string) {
  blaConsTxt("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate112(template: string, hookID: string) {
  return function (constructor: any) {
    blaConsTxt("TEMPLATE FACTORY");
    console.log("TEMPLATE FACTORY");
    const hookEl = document.getElementById(hookID);
    const p112 = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("p")!.textContent = p112.name;
    }
  };
}

// @Logger112("LOGGING - PERSON")
@Logger112("LOGGIN 112")
@WithTemplate112("<p> MyObject - From Decorator Factory </p>", "app112")
class Person112 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt("Print person112");
const pers112 = new Person112();
console.log(pers112);

// 112: work ---

// Followign LOG functions are all decorators
function Log112(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}
function Log2112(target: any, name: string, descriptor: PropertyDescriptor) {
  blaConsTxt("Print Log211 Decorator");
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3112(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  blaConsTxt("Pritn Method Decorator");
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4112(target: any, name: string | Symbol, position: number) {
  blaConsTxt("Pring Parameter Decorator");
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product112 {
  @Log112
  title: string;
  private _price: number;

  @Log2112
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

  @Log3112
  getPriceWithTax(@Log4112 tax: number) {
    return this._price * (1 + tax);
  }
}
