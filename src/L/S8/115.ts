/* 
115: Decorator Example: Creating and “AutoBind” Decoratorpes
*/

// helper function

const blaConsTxt115 = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `%c
S8- 115: Decorator Example: Creating and “AutoBind” Decorator `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger115(logString: string) {
  blaConsTxt115("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate115(template: string, hookID: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    blaConsTxt115("TEMPLATE FACTORY");
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

// @Logger115("LOGGING - PERSON")
@Logger115("LOGGIN 115")
@WithTemplate115("<p> MyObject - From Decorator Factory </p>", "app115")
class Person115 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt115("Print person115");
const pers115 = new Person115();
console.log(pers115);

// 115: work ---

// Followign LOG functions are all decorators
function Log115(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}
function Log2115(target: any, name: string, descriptor: PropertyDescriptor) {
  blaConsTxt115("Print Log211 Decorator");
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3115(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  blaConsTxt115("Pritn Method Decorator");
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4115(target: any, name: string | Symbol, position: number) {
  blaConsTxt115("Pring Parameter Decorator");
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product115 {
  @Log115
  title: string;
  private _price: number;

  @Log2115
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

  @Log3115
  getPriceWithTax(@Log4115 tax: number) {
    return this._price * (1 + tax);
  }
}

// 115 - Work
const p1_115 = new Product115("Book", 20);
const p2_115 = new Product115("Book", 30);

function AutoBind_115(_: any, _2: string, descriptor: PropertyDescriptor) {
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

class Printer115 {
  message = "This Works!";

  @AutoBind_115
  showMessage() {
    console.log(this.message);
  }
}

const p115 = new Printer115();
const button115 = document.querySelector(".ClickMe")!;
button115.addEventListener("click", p115.showMessage);
