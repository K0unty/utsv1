/* 
96: Bulding a Generic Function
*/

// Import Zone

// ---

console.log(
  `
%cS5 - 96: Bulding a Generic Function `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 55%, rgba(22, 0, 98, 1) 89%); color:#FFD933; font-size: 24px; padding: 10px;"
);

// Define a function to append messages to the console output div
function logToConsole(message: string, style: string) {
  console.log(`%c${message}`, style);
  const consoleOutputDiv = document.getElementById("console-output");
  if (consoleOutputDiv) {
    const messageElement = document.createElement("div");
    messageElement.style.cssText = style;
    messageElement.textContent = message;
    consoleOutputDiv.appendChild(messageElement);
  }
}

// Actual work her

// Default type which also a generic

// // Array is a generic
// const names96: Array<string> = ["ina", "jan"];
// // names96[0].split(" ");

// const promise96: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//     reject(Error);
//   });
// });

// promise96.then((data) => {
//   // data.split("");
// });

//96 - Work here
