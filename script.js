const switcher = document.querySelector(".switch"); // Switches between Dark and Light mode
switcher.addEventListener("click", function () {
  const nightIcon = document.querySelector(".night");
  const lightIcon = document.querySelector(".day");
  document.body.classList.toggle("dark-mode"); // Toggles Dark mode to body
  nightIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");
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
