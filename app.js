const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const hr = document.querySelector('#hr')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

const relogio = setInterval(function time() {
  let dateToday = new Date()
  let hours = dateToday.getHours()
  let minutes = dateToday.getMinutes()
  let seconds = dateToday.getSeconds()

  hr.style.transform = `rotateZ(${hours * 30 + minutes / 12}deg)`
  min.style.transform = `rotateZ(${minutes * 6}deg)`
  sec.style.transform = `rotateZ(${seconds * 6}deg)`

  if (hours < 10) hours = '0' + hours
  if (minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds

  horas.textContent = hours
  minutos.textContent = minutes
  segundos.textContent = seconds
})

document.querySelector('.switch').addEventListener('click', e => {
  document.querySelector('.analogic-clock').classList.toggle('hide')
  document.querySelector('.relogio').classList.toggle('hide')
})
