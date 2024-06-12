/* 
90: Optional Chaining 
*/
console.log(
  `
      %cS5 - 90: Optional Chaining
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19071e"
);

// Work here

type Admin90 = {
  name: string;
  priv: string[];
};

type Empl90 = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl90 = Admin90 & Empl90;

const e190: ElevEmpl90 = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e190);

type Combina90 = string | number;
type Numeric90 = number | boolean;

type Universal90 = Combina & Numeric;

// 90 - Uusing this function

function add90(a: number, b: number): number;
function add90(a: string, b: string): string;
function add90(a: string, b: number): string;
function add90(a: number, b: number): string;
function add90(a: Combina90, b: Combina90) {
  // TypeGuard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result90 = add90("Ina", 69);
console.log(result90);
result90.split(" ");

//90: optional chianing OC

// console.log(add90(2, 1));

// type UnkEmpl90 = Empl90 | Admin90;
// function prEmpInf(emp: UnkEmpl90) {
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
// %ce190 Info
// `,
//   "font-style:oblique"
// );
// prEmpInf(e190);

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

// class car90 {
//   drive() {
//     console.log("driving");
//   }
// }
// class truck90 {
//   drive() {
//     console.log("Driving Truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo..." + amount);
//   }
// }

// type Vehicle90 = car90 | truck90;

// const v190 = new car90();
// const v290 = new truck90();

// function useVehicle90(vehicle: Vehicle90) {
//   vehicle.drive();
//   if (vehicle instanceof truck90) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle90(v190);
// useVehicle90(v290);

// // 90 - Work here foor discriminated unions
// interface Bird90 {
//   type: "bird"; // Literal type assigment
//   flyingSpeed: number;
// }

// interface Horse90 {
//   type: "horse";
//   runningSpeed: number;
// }

// // union type
// type Animal90 = Bird90 | Horse90;
// const moveAnimal90 = function (animal: Animal90) {
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

// moveAnimal90({
//   type: "bird",
//   flyingSpeed: 10,
// });

// //90 Type Casting
// // const userInputElement90 = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );
// // const userInputElement90 = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;

// // userInputElement90.value = "FuckOff";

// // // if ! is not used you have to do a type check
// // if (userInputElement90) {
// //   (userInputElement90 as HTMLInputElement).value = "Fuckoff";
// // }

// // 90 Work there -

// interface ErrorContainer90 {
//   // Error object identifier - { email: not valid, username: 'Start with char'}
//   [prop: string]: string; //every prop will be a string with value string
// }

// const errorBag90: ErrorContainer90 = {
//   email: "Wrong Email",
//   uname: "Must be  Capital",
// };
