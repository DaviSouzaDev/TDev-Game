var chat = document.querySelector('#chat_command')


chat.addEventListener('input', ()=> {
    let cv = chat.value

    if(cv == '/game background color = gray') {
    document.body.style.background = 'rgb(36,36,36)'
  }

  if(cv == '/game background color = white' || cv == '/game background color = default') {
    document.body.style.background = 'white'
  }
}) // BACKGROUND COLOR


//---------------------------


chat.addEventListener('input', ()=> {
  let cv = chat.value

  if(cv == '/game $me respawn') {
    ps.style.marginLeft = '0px'
    ps.style.marginTop = '0px'
    dd=0
    dt=0
  }
})// RESPAWN


//---------------------------


chat.addEventListener('input', ()=> {
  let cv = chat.value

  if(cv == '/admin $me cheat = god; status = true') {
    ps.classList.add('god-mode')
  } else if(cv == '/admin $me cheat = god; status = false') {
    ps.classList.remove('god-mode')
  } 
}) // GOD-MODE


//------------------------------


chat.addEventListener('input', ()=> {
  let cv = chat.value

  if(cv == '/skin $me name = goku') {
    document.querySelector('#skin_naruto').classList.add('displaynone')

    document.querySelector('#skin_goku').classList.remove('displaynone')

    document.querySelector('#skin_mario').classList.add('displaynone')
  } else if(cv == '/skin $me name = naruto' || '/skin $me name = default') {
    document.querySelector('#skin_naruto').classList.remove('displaynone')

    document.querySelector('#skin_goku').classList.add('displaynone')

    document.querySelector('#skin_mario').classList.add('displaynone')
  } else if(cv == '/skin $me name = mario') {
    document.querySelector('#skin_naruto').classList.add('displaynone')

    document.querySelector('#skin_goku').classList.add('displaynone')

    document.querySelector('#skin_mario').classList.remove('displaynone')
  }
}) //SKIN


//----------------------------


chat.addEventListener('input', ()=> {
  let cv = chat.value

  if(cv == '/admin $me cheat = setLife') {
    bt=3
  }  
}) // Set Life


//---------------------------

chat.addEventListener('input', ()=> {
  let cv = chat.value

  if(cv == '/admin respawnItem name = sword') {
    item_sword.style.marginLeft=`${LocalSpawnItemLeft()}px`
    item_sword.style.marginTop=`${LocalSpawnItemTop()}px`

    console.log(LocalSpawnItemTop())
  }
})

chat.addEventListener('input', ()=> {
  let cv = chat.value

  if(cv == '/admin removeItem name = sword'){
    item_sword.style.display = 'none'
  }
})