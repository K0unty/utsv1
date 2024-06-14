/* 
113: Returning (Changing) a Class in a Class Decorator 
*/

// helper function

const blaConsTxt = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `
  %cS8 - 113: Returning (Changing) a Class in a Class Decorator  `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger113(logString: string) {
  blaConsTxt("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate113(template: string, hookID: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    blaConsTxt("TEMPLATE FACTORY");
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

// @Logger113("LOGGING - PERSON")
@Logger113("LOGGIN 113")
@WithTemplate113("<p> MyObject - From Decorator Factory </p>", "app113")
class Person113 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt("Print person113");
const pers113 = new Person113();
console.log(pers113);

// 113: work ---

// Followign LOG functions are all decorators
function Log113(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}
function Log2113(target: any, name: string, descriptor: PropertyDescriptor) {
  blaConsTxt("Print Log211 Decorator");
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3113(
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
function Log4113(target: any, name: string | Symbol, position: number) {
  blaConsTxt("Pring Parameter Decorator");
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product113 {
  @Log113
  title: string;
  private _price: number;

  @Log2113
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

  @Log3113
  getPriceWithTax(@Log4113 tax: number) {
    return this._price * (1 + tax);
  }
}

// 113 - Work
const p1_113 = new Product113("Book", 20);
const p2_113 = new Product113("Book", 30);
