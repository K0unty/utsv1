/* 
84: Intersection Types
*/
console.log(
  `
      %cS5 - 80: Compiling Interfaces to Javascript
      =============================================`,
  "color:white;font-size:1.2rem;background-color:#19071e"
);

// Work here

type Admin = {
  name: string;
  priv: string[];
};

type Empl = {
  name: string;
  startDate: Date;
};

//Create a new type = Elevated Employee
type ElevEmpl = Admin & Empl;

const e1: ElevEmpl = {
  name: "Fon",
  priv: ["make-server"],
  startDate: new Date(),
};

// Print this types
console.log(e1);

type Combina = string | number;
type Numeric = number | boolean;

type Universal = Combina & Numeric;
