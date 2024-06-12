/* 
89: Function Overloading
*/
console.log(
  `
      %cS5 - 89: Function Overloading
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19071e"
);

// Work here

type Admin89 = {
  name: string;
  priv: string[];
};

type Empl89 = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl89 = Admin89 & Empl89;

const e189: ElevEmpl89 = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e189);

type Combina89 = string | number;
type Numeric89 = number | boolean;

type Universal89 = Combina & Numeric;

// 89 - Uusing this function

function add89(a: number, b: number): number;
function add89(a: string, b: string): string;
function add89(a: string, b: number): string;
function add89(a: number, b: number): string;
function add89(a: Combina89, b: Combina89) {
  // TypeGuard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result89 = add89("Ina", 69);
console.log(result89);
result89.split(" ");

// console.log(add89(2, 1));

// type UnkEmpl89 = Empl89 | Admin89;
// function prEmpInf(emp: UnkEmpl89) {
//   console.log("Name: " + emp.name);

//   if ("priv" in emp) {
//     console.log("Priv: " + emp.priv);
//   }
//   if ("startDate" in emp) {
//     console.log("StartDate: " + emp.startDate);
//   }
// }

// // Printing the employee Information.
// console.log(
//   `
// %ce189 Info
// `,
//   "font-style:oblique"
// );
// prEmpInf(e189);

// // Making a new employee
// console.log(
//   `
// %cNew Employee No Priv
// `,
//   "font-style:oblique;padding:1px;background-color:steelblue"
// );
// prEmpInf({
//   name: "zin",
//   startDate: new Date(),
// });

// // Testing union of classes here with the type guards

// class car89 {
//   drive() {
//     console.log("driving");
//   }
// }
// class truck89 {
//   drive() {
//     console.log("Driving Truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo..." + amount);
//   }
// }

// type Vehicle89 = car89 | truck89;

// const v189 = new car89();
// const v289 = new truck89();

// function useVehicle89(vehicle: Vehicle89) {
//   vehicle.drive();
//   if (vehicle instanceof truck89) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle89(v189);
// useVehicle89(v289);

// // 89 - Work here foor discriminated unions
// interface Bird89 {
//   type: "bird"; // Literal type assigment
//   flyingSpeed: number;
// }

// interface Horse89 {
//   type: "horse";
//   runningSpeed: number;
// }

// // union type
// type Animal89 = Bird89 | Horse89;
// const moveAnimal89 = function (animal: Animal89) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log(animal.type + " Moving at speed " + speed);
// };

// moveAnimal89({
//   type: "bird",
//   flyingSpeed: 10,
// });

// //89 Type Casting
// // const userInputElement89 = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );
// // const userInputElement89 = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;

// // userInputElement89.value = "FuckOff";

// // // if ! is not used you have to do a type check
// // if (userInputElement89) {
// //   (userInputElement89 as HTMLInputElement).value = "Fuckoff";
// // }

// // 89 Work there -

// interface ErrorContainer89 {
//   // Error object identifier - { email: not valid, username: 'Start with char'}
//   [prop: string]: string; //every prop will be a string with value string
// }

// const errorBag89: ErrorContainer89 = {
//   email: "Wrong Email",
//   uname: "Must be  Capital",
// };
