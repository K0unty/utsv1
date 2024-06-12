/* 
87: TypeCasting
*/
console.log(
  `
      %cS5 - 87: TypeCasting
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19071e"
);

// Work here

type Admin87 = {
  name: string;
  priv: string[];
};

type Empl87 = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl87 = Admin87 & Empl87;

const e187: ElevEmpl87 = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e187);

type Combina87 = string | number;
type Numeric87 = number | boolean;

type Universal87 = Combina & Numeric;

const add87 = function (a: Combina87, b: Combina87) {
  // TypeGuard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

console.log(add87(2, 1));

type UnkEmpl87 = Empl87 | Admin87;
function prEmpInf(emp: UnkEmpl87) {
  console.log("Name: " + emp.name);

  if ("priv" in emp) {
    console.log("Priv: " + emp.priv);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

// Printing the employee Information.
console.log(
  `
%ce187 Info
`,
  "font-style:oblique"
);
prEmpInf(e187);

// Making a new employee
console.log(
  `
%cNew Employee No Priv
`,
  "font-style:oblique;padding:1px;background-color:steelblue"
);
prEmpInf({
  name: "zin",
  startDate: new Date(),
});

// Testing union of classes here with the type guards

class car87 {
  drive() {
    console.log("driving");
  }
}
class truck87 {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle87 = car87 | truck87;

const v187 = new car87();
const v287 = new truck87();

function useVehicle87(vehicle: Vehicle87) {
  vehicle.drive();
  if (vehicle instanceof truck87) {
    vehicle.loadCargo(1000);
  }
}

useVehicle87(v187);
useVehicle87(v287);

// 87 - Work here foor discriminated unions
interface Bird87 {
  type: "bird"; // Literal type assigment
  flyingSpeed: number;
}

interface Horse87 {
  type: "horse";
  runningSpeed: number;
}

// union type
type Animal87 = Bird87 | Horse87;
const moveAnimal87 = function (animal: Animal87) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(animal.type + " Moving at speed " + speed);
};

moveAnimal87({
  type: "bird",
  flyingSpeed: 10,
});

//87 Type Casting
// const userInputElement87 = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement87 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement87.value = "FuckOff";

// if ! is not used you have to do a type check
if (userInputElement87) {
  (userInputElement87 as HTMLInputElement).value = "Fuckoff";
}
