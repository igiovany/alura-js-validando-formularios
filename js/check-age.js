export default function itsOfLegalAge(input) {
  const birthDate = new Date(input.value)
  if(!checkAge(birthDate)) {
    input.setCustomValidity('O usuário não é maior de idade')
  } 
}

function checkAge(date) {
  const actualDate = new Date()
  const datePlues18  = new Date(date.getUTCFullYear() +18, date.getUTCMonth(), date.getUTCDate())

  return actualDate >= datePlues18
}