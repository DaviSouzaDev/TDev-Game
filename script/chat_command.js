const chat = document.querySelector('#chat_command')

setInterval(()=> {
  var cv = chat.value 

  if(cv == '/game background color = gray') {
    document.body.style.background = 'rgb(36,36,36)'
  }

  if(cv == '/game background color = white' || cv == '/game background color = default') {
    document.body.style.background = 'white'
  }

}, 500) // BACKGROUND COLOR