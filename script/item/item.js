//ITENS
const item_sword = document.querySelector("#item_sword")


function LocalSpawnItemLeft() {
  const  ValorReturn = Math.floor(Math.random() * (1150 - 70 + 1)) + 70

  return ValorReturn
}

function LocalSpawnItemTop() {
  const VReturn = Math.floor(Math.random() * (430 - 80 + 1) + 80)

  return VReturn
}
 



item_sword.style.marginLeft=`${LocalSpawnItemLeft()}px`
item_sword.style.marginTop=`${LocalSpawnItemTop()}px`