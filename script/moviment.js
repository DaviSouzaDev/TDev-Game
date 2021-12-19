const ps = document.querySelector('.personagem')

//VAR'S 
var dd = 0
var dt = 0


document.body.addEventListener('keydown', ()=> {
  var esquerda = 37
  var cima = 38
  var direita = 39
  var baixo = 40

  if(event.keyCode == direita) {
    dd++
    ps.style.marginLeft = `${dd}px` 
  }

  if(event.keyCode == esquerda) {
    dd--
    ps.style.marginLeft = `${dd}px` 
  }


  if(event.keyCode == baixo) {
    dt++
    ps.style.marginTop = `${dt}px` 
  }
  
  if(event.keyCode == cima) {
    dt--
    ps.style.marginTop = `${dt}px` 
  }
})