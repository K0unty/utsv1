var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");

// your addition to show result
const resultInput = document.getElementById("result"); // changed to resultInput

function add(num1, num2) {
  return num1 + num2;
}

button === null || button === void 0
  ? void 0
  : button.addEventListener("click", function () {
      // define the result variable and set its value to the result of the add function
      const result = add(+input1.value, +input2.value);
      console.log(result);
      // set the value of the resultInput element to the result value
      resultInput.value = result; // changed to value
    });
