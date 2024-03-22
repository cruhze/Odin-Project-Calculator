const switcher = document.querySelector(".switch"); // Switches between Dark and Light mode
switcher.addEventListener("click", function () {
  const nightIcon = document.querySelector(".night");
  const lightIcon = document.querySelector(".day");
  document.body.classList.toggle("dark-mode"); // Toggles Dark mode to body
  nightIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");
});

let total = 0;
const display = document.querySelector(".dis-num");

document.querySelectorAll(".rows span").forEach((item) => {
  item.addEventListener("click", (event) => {
    updateDisplay(event.target.textContent);
  });
});

function updateDisplay(digit) {
  const currentText = display.textContent;
  //if 24 numbers exit function so it stops updating numbers
  if (currentText.length >= 24) {
    return;
  }
  // see if current length is equal or less than
  if (currentText.length >= 15) {
    display.classList.add("smaller-text"); // if it goes longer make text even smaller
  } else if (currentText.length >= 9) {
    display.classList.add("small-text"); // if it goes longer make text smaller
  }

  if (currentText === "0") {
    display.textContent = digit;
  } else {
    display.textContent += digit;
  }
}
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply() {
  const display = document.querySelector(".dis-num");
  const currentNumber = parseFloat(display.textContent);

  total *= currentNumber;

  // Reset the display to show the total
  display.textContent = total;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot be divided by zero";
  } else {
    return a / b;
  }
}
