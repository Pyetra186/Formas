'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor () {
  forma1.classList.toggle('vermelho')

}
function mudarForma () {
 forma2.classList.toggle('circulo')
}
function mudarImagem () {
    forma3.classList.toggle('dog')
}
function mudarPcirculo () {
    forma4.classList.toggle('pcirculo')
}
function mudarGiro () {
    forma5.classList.toggle('giro')
}
function mudarLado () {
    forma6.classList.toggle('lado')
}
function mudarCores () {
    forma7.classList.toggle('cores')
}
function mudarGif () {
    forma8.classList.toggle('gif')
}


forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarImagem)
forma4.addEventListener('click', mudarPcirculo)
forma5.addEventListener('click', mudarGiro)
forma6.addEventListener('click', mudarLado)
forma7.addEventListener('click', mudarCores)
forma8.addEventListener('click', mudarGif)


