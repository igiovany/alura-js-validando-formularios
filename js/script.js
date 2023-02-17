import itsCPF from "./check-cpf.js";
import itsOfLegalAge from "./check-age.js";

const formInputs = document.querySelectorAll("[required]");
const form = document.querySelector("[data-formulario]")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answersList = {
    "nome": e.target.elements["nome"].value,
    "email": e.target.elements["email"].value,
    "rg": e.target.elements["rg"].value,
    "cpf": e.target.elements["cpf"].value,
    "aniversario": e.target.elements["aniversario"].value,
  }

  localStorage.setItem("register", JSON.stringify(answersList))

  window.location.href = './abrir-conta-form-2.html'
})



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
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido."
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um email válido."
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
  aniversario: {
    valueMissing: 'O campo de data de nascimento não pode estar vazio.',
    customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  termos: {
    valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  }
}

function checkInput(input) {
  let message = ""
  input.setCustomValidity('');
  if (input.name == "cpf" && input.value.length >= 11) {
    itsCPF(input)
  }
  if (input.name == "aniversario" && input.value != "") {
    itsOfLegalAge(input)
  }
  errorTypes.forEach(error => {
    if (input.validity[error]) {
      message = messages[input.name][error]
    }
  })
  const errorMessage = input.parentNode.querySelector('.mensagem-erro')
  const inputValidator = input.checkValidity()

  if(!inputValidator){
    errorMessage.textContent = message 
  } else {
    errorMessage.textContent = ""
  }

}
