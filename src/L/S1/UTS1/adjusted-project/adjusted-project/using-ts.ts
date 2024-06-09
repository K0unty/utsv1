const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const resultInput = document.getElementById("result")! as HTMLInputElement; // Add this line to get a reference to the result input

function add(num1: number, num2: number): number {
  return num1 + num2;
}

button?.addEventListener("click", function () {
  const result = add(+input1.value, +input2.value); // Add this line to define the result variable
  console.log(result);
  resultInput.value = result.toString(); // Add this line to set the value of the result input
});
