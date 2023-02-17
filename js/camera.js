const startCamButton = document.querySelector("[data-video-botao]")
const camInput = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const captureButton = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const message = document.querySelector("[data-mensagem]")
const sendPictureButton = document.querySelector("[data-enviar]")

let imageURL = ""

startCamButton.addEventListener("click", async function () {
  const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

  startCamButton.style.display = "none"
  camInput.style.display = "block"

  video.srcObject = startVideo

})

captureButton.addEventListener("click", function () {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

  imageURL = canvas.toDataURL("image/jpeg")

  camInput.style.display = "none"
  message.style.display = "block"

})

sendPictureButton.addEventListener("click", () => {
  const receiveData = localStorage.getItem("register")
  const convertsReturn = JSON.parse(receiveData)

  convertsReturn.imagem = imageURL

  localStorage.setItem("register", JSON.stringify(convertsReturn))

  window.location.href = "./abrir-conta-form-3.html"
})