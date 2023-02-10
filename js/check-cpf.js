export default function itsCPF(input) {
  const cpf = input.value.replace(/\.|-/g, "")
  checkRepeatedNumbers(cpf)
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