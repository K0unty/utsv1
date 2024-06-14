/* 
114: Other Decorator Return Types
*/

// helper function

const blaConsTxt114 = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `%c
S8- 114: Other Decorator Return Types `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger114(logString: string) {
  blaConsTxt114("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate114(template: string, hookID: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    blaConsTxt114("TEMPLATE FACTORY");
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("TEMPLATE FACTORY");
        const hookEl = document.getElementById(hookID);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("p")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger114("LOGGING - PERSON")
@Logger114("LOGGIN 114")
@WithTemplate114("<p> MyObject - From Decorator Factory </p>", "app114")
class Person114 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt114("Print person114");
const pers114 = new Person114();
console.log(pers114);

// 114: work ---

// Followign LOG functions are all decorators
function Log114(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}
function Log2114(target: any, name: string, descriptor: PropertyDescriptor) {
  blaConsTxt114("Print Log211 Decorator");
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3114(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  blaConsTxt114("Pritn Method Decorator");
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4114(target: any, name: string | Symbol, position: number) {
  blaConsTxt114("Pring Parameter Decorator");
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product114 {
  @Log114
  title: string;
  private _price: number;

  @Log2114
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

  @Log3114
  getPriceWithTax(@Log4114 tax: number) {
    return this._price * (1 + tax);
  }
}

// 114 - Work
const p1_114 = new Product114("Book", 20);
const p2_114 = new Product114("Book", 30);
