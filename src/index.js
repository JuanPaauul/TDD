import sumar from "./App";

const first = document.querySelector("#first-number");
const second = document.querySelector("#second-number");
const form = document.querySelector("#calculate-form");
const div = document.querySelector("#result-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
