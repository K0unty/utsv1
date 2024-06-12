/* 
85: More on Type Guards
*/
console.log(
  `
      %cS5 - 85: More on Type Guards
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19071e"
);

// Work here

type Admin85 = {
  name: string;
  priv: string[];
};

type Empl85 = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl85 = Admin85 & Empl85;

const e185: ElevEmpl85 = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e185);

type Combina85 = string | number;
type Numeric85 = number | boolean;

type Universal85 = Combina & Numeric;

const add85 = function (a: Combina85, b: Combina85) {
  // TypeGuard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

console.log(add85(2, 1));

type UnkEmpl85 = Empl85 | Admin85;
function prEmpInf(emp: UnkEmpl85) {
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
%ce185 Info
`,
  "font-style:oblique"
);
prEmpInf(e185);

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

class car85 {
  drive() {
    console.log("driving");
  }
}
class truck85 {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle85 = car85 | truck85;

const v185 = new car85();
const v285 = new truck85();

function useVehicle85(vehicle: Vehicle85) {
  vehicle.drive();
  if (vehicle instanceof truck85) {
    vehicle.loadCargo(1000);
  }
}

useVehicle85(v185);
useVehicle85(v285);
