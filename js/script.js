import itsCPF from "./check-cpf.js";
import itsOfLegalAge from "./check-age.js";

const formInputs = document.querySelectorAll("[required]");

formInputs.forEach((input) => {
  input.addEventListener("blur", () => checkInput(input))
  input.addEventListener("invalid", event => event.preventDefault())
})

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
]

const messages = {
  name: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido."
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido."
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes."
  },
  cpf: {
    valueMissing: 'O campo de CPF não pode estar vazio.',
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes."
  },
  birthday: {
    valueMissing: 'O campo de data de nascimento não pode estar vazio.',
    customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  terms: {
    valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  }
}

function checkInput(input) {
  let message = "";
  if (input.name == "cpf" && input.value.length >= 11) {
    itsCPF(input)
  }
  if (input.name == "aniversario" && input.value != "") {
    itsOfLegalAge(input)
  }
  errorTypes.forEach(error => {
    if(input.validity[error]) {
      message = messages[input.name][error]
      console.log(message)
    }
  })
}