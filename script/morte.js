const b1 = document.querySelector('#barra1')
const b2 = document.querySelector('#barra2')
const b3 = document.querySelector('#barra3')
const mend = document.querySelector('#message_end')
const btrs = document.querySelector('#button_reset')

var bt=3

function Verificacao() {
  const ps = document.querySelector('.personagem')

  var left = parseInt(getComputedStyle(ps).getPropertyValue('margin-left'))

  var top = parseInt(getComputedStyle(ps).getPropertyValue('margin-top'))

  if(left < 0 || top < 0) {
    bt--
    ps.style = 'left: 0px; top: 0px;'
  }
}

function Vida() {
  if(bt == 2) {
    b1.style.display = 'none'
  }

  if(bt == 1) {
    b2.style.display = 'none'
  }

  if(bt == 0) {
    b3.style.display = 'none'
    ps.classList.add('displaynone')
    mend.style.display = 'flex'
  }
}

setInterval(Verificacao, 10)
setInterval(Vida, 10)

btrs.addEventListener('click', ()=> {
  location.reload()
})