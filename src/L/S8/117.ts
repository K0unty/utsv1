/* 
117: Validation and Decorators Finished
*/

// helper function

const blaConsTxt117 = function (text: string) {
  console.log(`%c${text} `, "background:black;font-size:16px");
};

// ---

console.log(
  `%c
S8- 117: Validation and Decorators Finished `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;font-style:italic"
);

// Actual work her

// Decorators are for classes they are functions

function Logger117(logString: string) {
  blaConsTxt117("Logger Factory");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// new decorator factory
function WithTemplate117(template: string, hookID: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    blaConsTxt117("TEMPLATE FACTORY");
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

// @Logger117("LOGGING - PERSON")
@Logger117("LOGGIN 117")
@WithTemplate117("<p> MyObject - From Decorator Factory </p>", "app117")
class Person117 {
  name = "Ina";

  constructor() {
    console.log("Creating person Object...");
  }
}
blaConsTxt117("Print person117");
const pers117 = new Person117();
console.log(pers117);

// 117: work ---

// Followign LOG functions are all decorators
function Log117(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}
function Log2117(target: any, name: string, descriptor: PropertyDescriptor) {
  blaConsTxt117("Print Log211 Decorator");
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log3117(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  blaConsTxt117("Pritn Method Decorator");
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
function Log4117(target: any, name: string | Symbol, position: number) {
  blaConsTxt117("Pring Parameter Decorator");
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product117 {
  @Log117
  title: string;
  private _price: number;

  @Log2117
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

  @Log3117
  getPriceWithTax(@Log4117 tax: number) {
    return this._price * (1 + tax);
  }
}

// 117 - Work
const p1_117 = new Product117("Book", 20);
const p2_117 = new Product117("Book", 30);

function AutoBind_117(_: any, _2: string, descriptor: PropertyDescriptor) {
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

class Printer117 {
  message = "This Works!";

  @AutoBind_117
  showMessage() {
    console.log(this.message);
  }
}

const p117 = new Printer117();
const button117 = document.querySelector(".ClickMe")!;
button117.addEventListener("click", p117.showMessage);

// 117 - Decorators for Validation

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required, 'positive']
  };
}

const registeredValidators_117: ValidatorConfig = {};

function Required_117(target: any, propName: string) {
  registeredValidators_117[target.constructor.name] = {
    [propName]: ["required"],
  };
}

function PositiveNumber_117(target: any, propName: string) {
  registeredValidators_117[target.constructor.name] = {
    [propName]: ["positive"],
  };

  function validate_117(obj: object) {
    const objValidatorConfig = registeredValidators_117[obj.constructor.name];
    if (!objValidatorConfig) {
      return true;
    }
    for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
      }
    }
  }

  class Course_117 {
    @Required_117
    title: string;

    @PositiveNumber_117
    price: number;

    constructor(t: string, p: number) {
      this.title = t;
      this.price = p;
    }
  }

  const courseForm_117 = document.querySelector("form")!;
  courseForm_117.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course_117(title, price);

    if (!validate_117(createdCourse)) {
      alert("FuckYou");
      return;
    }
    console.log(createdCourse);
  });
}
