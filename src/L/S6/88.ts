/* 
88: TypeCasting
*/
console.log(
  `
      %cS5 - 88: TypeCasting
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19071e"
);

// Work here

type Admin88 = {
  name: string;
  priv: string[];
};

type Empl88 = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl88 = Admin88 & Empl88;

const e188: ElevEmpl88 = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e188);

type Combina88 = string | number;
type Numeric88 = number | boolean;

type Universal88 = Combina & Numeric;

const add88 = function (a: Combina88, b: Combina88) {
  // TypeGuard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

console.log(add88(2, 1));

type UnkEmpl88 = Empl88 | Admin88;
function prEmpInf(emp: UnkEmpl88) {
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
%ce188 Info
`,
  "font-style:oblique"
);
prEmpInf(e188);

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

class car88 {
  drive() {
    console.log("driving");
  }
}
class truck88 {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle88 = car88 | truck88;

const v188 = new car88();
const v288 = new truck88();

function useVehicle88(vehicle: Vehicle88) {
  vehicle.drive();
  if (vehicle instanceof truck88) {
    vehicle.loadCargo(1000);
  }
}

useVehicle88(v188);
useVehicle88(v288);

// 88 - Work here foor discriminated unions
interface Bird88 {
  type: "bird"; // Literal type assigment
  flyingSpeed: number;
}

interface Horse88 {
  type: "horse";
  runningSpeed: number;
}

// union type
type Animal88 = Bird88 | Horse88;
const moveAnimal88 = function (animal: Animal88) {
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

moveAnimal88({
  type: "bird",
  flyingSpeed: 10,
});

//88 Type Casting
// const userInputElement88 = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
// const userInputElement88 = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement88.value = "FuckOff";

// // if ! is not used you have to do a type check
// if (userInputElement88) {
//   (userInputElement88 as HTMLInputElement).value = "Fuckoff";
// }

// 88 Work there -

interface ErrorContainer88 {
  // Error object identifier - { email: not valid, username: 'Start with char'}
}
