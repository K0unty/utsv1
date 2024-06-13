/* 
Console logger function
*/
// console-logger.ts

// Define a function to append messages to the console output div
export function logToConsole(message: string, style: string) {
  console.log(`%c${message}`, style);
  const consoleOutputDiv = document.getElementById("console-output");
  if (consoleOutputDiv) {
    const messageElement = document.createElement("div");
    messageElement.style.cssText = style;
    messageElement.textContent = message;
    consoleOutputDiv.appendChild(messageElement);
  }
}
