const switcher = document.querySelector(".switch"); // Switches between Dark and Light mode
switcher.addEventListener("click", function () {
  const nightIcon = document.querySelector(".night");
  const lightIcon = document.querySelector(".day");
  document.body.classList.toggle("dark-mode"); // Toggles Dark mode to body
  nightIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");
});

const calculator = {
  addition: document.querySelector(".add"),
  subtract: document.querySelector(".subtraction"),
  divide: document.querySelector(".division"),
  multiply: document.querySelector(".multiply"),
  one: document.querySelector(".one"),
  two: document.querySelector(".two"),
  three: document.querySelector(".three"),
  four: document.querySelector(".four"),
  five: document.querySelector(".five"),
  six: document.querySelector(".six"),
  seven: document.querySelector(".seven"),
  eight: document.querySelector(".eight"),
  nine: document.querySelector(".nine"),
  zero: document.querySelector(".zero"),
  equal: document.querySelector(".equal"),
  dot: document.querySelector(".dot"),
  clear: document.querySelector(".clear"),
};

calculator.one.addEventListener("click", function () {
  return "one";
});
calculator.two.addEventListener("click", function () {
  return "two";
});
calculator.three.addEventListener("click", function () {
  return "three";
});
calculator.four.addEventListener("click", function () {
  return "four";
});
calculator.five.addEventListener("click", function () {
  return "five";
});
calculator.six.addEventListener("click", function () {
  return "six";
});
calculator.seven.addEventListener("click", function () {
  return "seven";
});
calculator.eight.addEventListener("click", function () {
  return "eight";
});
calculator.nine.addEventListener("click", function () {
  return "nine";
});
calculator.zero.addEventListener("click", function () {
  return "zero";
});
calculator.dot.addEventListener("click", function () {
  return "dot";
});
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot be divided by zero";
  } else {
    return a / b;
  }
}
