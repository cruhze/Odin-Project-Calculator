const switcher = document.querySelector(".switch"); // Switches between Dark and Light mode
switcher.addEventListener("click", function () {
  const nightIcon = document.querySelector(".night");
  const lightIcon = document.querySelector(".day");
  document.body.classList.toggle("dark-mode"); // Toggles Dark mode to body
  nightIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");
});
let total = 0;
let currentNumber = 0;
let operator = "";
let shouldResetDisplay = false;

const display = document.querySelector(".dis-num");

document.querySelectorAll(".rows span").forEach((item) => {
  item.addEventListener("click", (event) => {
    handleInput(event.target.textContent);
  });
});

function handleInput(input) {
  if (shouldResetDisplay) {
    display.textContent = "";
    shouldResetDisplay = false;
  }

  if (!isNaN(parseInt(input)) || input === ".") {
    updateDisplay(input);
  } else if (input === "AC") {
    clearDisplay();
  } else if (input === "=") {
    calculate();
  } else {
    // If an operator is clicked
    operator = input;
    total = parseFloat(display.textContent);
    shouldResetDisplay = true;
  }
}

function updateDisplay(digit) {
  const currentText = display.textContent;

  if (currentText === "0" || shouldResetDisplay) {
    display.textContent = digit;
    shouldResetDisplay = false;
  } else {
    display.textContent += digit;
  }

  if (display.textContent.length >= 15) {
    display.classList.add("smaller-text");
  } else if (display.textContent.length >= 9) {
    display.classList.add("small-text");
  }
}

function clearDisplay() {
  display.textContent = "0";
  shouldResetDisplay = false;
}

function calculate() {
  const secondNumber = parseFloat(display.textContent);
  switch (operator) {
    case "+":
      total += secondNumber;
      break;
    case "-":
      total -= secondNumber;
      break;
    case "*":
      total *= secondNumber;
      break;
    case "/":
      if (secondNumber !== 0) {
        total /= secondNumber;
      } else {
        display.textContent = "Cannot divide by zero";
        shouldResetDisplay = true;
        return;
      }
      break;
    default:
      break;
  }

  display.textContent = total.toString();
  shouldResetDisplay = true;
}
