/* 
86: Discriminated Unions 
*/
console.log(
  `
      %cS5 - 86: Discriminated Unions 
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19071e"
);

// Work here

type Admin86 = {
  name: string;
  priv: string[];
};

type Empl86 = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl86 = Admin86 & Empl86;

const e186: ElevEmpl86 = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e186);

type Combina86 = string | number;
type Numeric86 = number | boolean;

type Universal86 = Combina & Numeric;

const add86 = function (a: Combina86, b: Combina86) {
  // TypeGuard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

console.log(add86(2, 1));

type UnkEmpl86 = Empl86 | Admin86;
function prEmpInf(emp: UnkEmpl86) {
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
%ce186 Info
`,
  "font-style:oblique"
);
prEmpInf(e186);

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

class car86 {
  drive() {
    console.log("driving");
  }
}
class truck86 {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle86 = car86 | truck86;

const v186 = new car86();
const v286 = new truck86();

function useVehicle86(vehicle: Vehicle86) {
  vehicle.drive();
  if (vehicle instanceof truck86) {
    vehicle.loadCargo(1000);
  }
}

useVehicle86(v186);
useVehicle86(v286);

// 86 - Work here foor discriminated unions
interface Bird86 {
  type: "bird"; // Literal type assigment
  flyingSpeed: number;
}

interface Horse86 {
  type: "horse";
  runningSpeed: number;
}

// union type
type Animal86 = Bird86 | Horse86;
const moveAnimal86 = function (animal: Animal86) {
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

moveAnimal86({
  type: "bird",
  flyingSpeed: 10,
});
