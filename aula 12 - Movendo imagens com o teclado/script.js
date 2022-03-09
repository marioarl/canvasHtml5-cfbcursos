let canvas = document.getElementById("desenho1")
let ctx=canvas.getContext('2d')

let jogador = new Image()
jogador.src="ogre.png"
let numSprite = 0
let posIniX = 0
let limagem = 0 
let largSprite = 0
let numSprites = 4
let posX = 0
let posY = 0
let velocidade = 2
jogador.addEventListener('load', ()=>{
    largSprite = jogador.width / numSprites
    altSprite = jogador.height / numSprites
    posIniX = largSprite * numSprite //Numero do sprite
    ctx.drawImage(jogador,posIniX,0,largSprite,altSprite,posX,posY,largSprite,altSprite)
})

let anima = setInterval(()=>{
    ctx.clearRect(0,0,500,500)
    numSprite++
    if(numSprite > 3)
        numSprite = 0
    posIniX = largSprite * numSprite
    ctx.drawImage(jogador,posIniX,0,largSprite,altSprite,posX,posY,largSprite,altSprite)
},200)

//Adicionar evento para tecla

window.addEventListener('keydown', (event)=>{
    if(event.keyCode == 37){ //Esquerda
        posX -= velocidade
    }else if (event.keyCode == 39){ //Direita
        posX += velocidade
    }

    if(event.keyCode == 38){ //Cima
        posY -= velocidade
    }else if (event.keyCode == 40){ //Baixo
        posY += velocidade
    }
})



 