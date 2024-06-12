/* 
91: Nullish Coalescing (nC) 
*/
console.log(
  `
      %cS5 - 91: Nullish Coalescing (nC)
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19171e"
);

// Work here

type Admin91 = {
  name: string;
  priv: string[];
};

type Empl91 = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl91 = Admin91 & Empl91;

const e191: ElevEmpl91 = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e191);

type Combina91 = string | number;
type Numeric91 = number | boolean;

type Universal91 = Combina & Numeric;

// 91 - Uusing this function

function add91(a: number, b: number): number;
function add91(a: string, b: string): string;
function add91(a: string, b: number): string;
function add91(a: number, b: number): string;
function add91(a: Combina91, b: Combina91) {
  // TypeGuard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result91 = add91("Ina", 69);
console.log(result91);
result91.split(" ");

//91: optional chianing OC

const fetchUserData91 = {
  id: "ul",
  name: "ina",
  // job: {
  //   title: "ceo",
  //   description: "own Company",
  // },
};

console.log(fetchUserData91);
// console.log(fetchUserData91?.job?.title);

const userInput91 = undefined;

const storedData91 = userInput91 ?? "DEF";
console.log(storedData91);

// console.log(add91(2, 1));

// type UnkEmpl91 = Empl91 | Admin91;
// function prEmpInf(emp: UnkEmpl91) {
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
// %ce191 Info
// `,
//   "font-style:oblique"
// );
// prEmpInf(e191);

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

// class car91 {
//   drive() {
//     console.log("driving");
//   }
// }
// class truck91 {
//   drive() {
//     console.log("Driving Truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo..." + amount);
//   }
// }

// type Vehicle91 = car91 | truck91;

// const v191 = new car91();
// const v291 = new truck91();

// function useVehicle91(vehicle: Vehicle91) {
//   vehicle.drive();
//   if (vehicle instanceof truck91) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle91(v191);
// useVehicle91(v291);

// // 91 - Work here foor discriminated unions
// interface Bird91 {
//   type: "bird"; // Literal type assigment
//   flyingSpeed: number;
// }

// interface Horse91 {
//   type: "horse";
//   runningSpeed: number;
// }

// // union type
// type Animal91 = Bird91 | Horse91;
// const moveAnimal91 = function (animal: Animal91) {
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

// moveAnimal91({
//   type: "bird",
//   flyingSpeed: 10,
// });

// //91 Type Casting
// // const userInputElement91 = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );
// // const userInputElement91 = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;

// // userInputElement91.value = "FuckOff";

// // // if ! is not used you have to do a type check
// // if (userInputElement91) {
// //   (userInputElement91 as HTMLInputElement).value = "Fuckoff";
// // }

// // 91 Work there -

// interface ErrorContainer91 {
//   // Error object identifier - { email: not valid, username: 'Start with char'}
//   [prop: string]: string; //every prop will be a string with value string
// }

// const errorBag91: ErrorContainer91 = {
//   email: "Wrong Email",
//   uname: "Must be  Capital",
// };
