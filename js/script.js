import itsCPF from "./check-cpf.js";

const formInputs = document.querySelectorAll("[required]");

formInputs.forEach((input) => {
  input.addEventListener("blur", () => checkInput(input))
})

function checkInput(input) {
  if (input.name == "cpf" && input.value.length >= 11) {
    itsCPF(input)
  }
}