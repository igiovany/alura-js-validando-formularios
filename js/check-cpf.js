export default function itsCPF(input) {
  const cpf = input.value.replace(/\.|-/g, "")
  if(checkRepeatedNumbers(cpf) || checkFirstNumber(cpf) || checkSecondNumber(cpf)) {
    input.setCustomValidity('CPF inválido')
  } 
}

function checkRepeatedNumbers(cpf) {
  const repeatedNumbers = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]

  return repeatedNumbers.includes(cpf)
}

function checkFirstNumber(cpf) {
  let sum = 0
  let multiplier = 10

  for (let size = 0; size < 9; size++) {
    sum += cpf[size] * multiplier
    multiplier--
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 1) {
    sum = 0
  }

  return sum != cpf[9]
}

function checkSecondNumber(cpf) {
  let sum = 0
  let multiplier = 11

  for (let size = 0; size < 10; size++) {
    sum += cpf[size] * multiplier
    multiplier--
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 1) {
    sum = 0
  }

  return sum != cpf[10]
}