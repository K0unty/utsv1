/* 
116: Decorator Example: Creating and “AutoBind” Decoratorpes
*/

// helper function

const blaConsTxt116 = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `%c
S8- 116: Decorator Example: Creating and “AutoBind” Decorator `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger116(logString: string) {
  blaConsTxt116("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate116(template: string, hookID: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    blaConsTxt116("TEMPLATE FACTORY");
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

// @Logger116("LOGGING - PERSON")
@Logger116("LOGGIN 116")
@WithTemplate116("<p> MyObject - From Decorator Factory </p>", "app116")
class Person116 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt116("Print person116");
const pers116 = new Person116();
console.log(pers116);

// 116: work ---

// Followign LOG functions are all decorators
function Log116(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}
function Log2116(target: any, name: string, descriptor: PropertyDescriptor) {
  blaConsTxt116("Print Log211 Decorator");
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3116(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  blaConsTxt116("Pritn Method Decorator");
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4116(target: any, name: string | Symbol, position: number) {
  blaConsTxt116("Pring Parameter Decorator");
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product116 {
  @Log116
  title: string;
  private _price: number;

  @Log2116
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

  @Log3116
  getPriceWithTax(@Log4116 tax: number) {
    return this._price * (1 + tax);
  }
}

// 116 - Work
const p1_116 = new Product116("Book", 20);
const p2_116 = new Product116("Book", 30);

function AutoBind_116(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer116 {
  message = "This Works!";

  @AutoBind_116
  showMessage() {
    console.log(this.message);
  }
}

const p116 = new Printer116();
const button116 = document.querySelector(".ClickMe")!;
button116.addEventListener("click", p116.showMessage);
