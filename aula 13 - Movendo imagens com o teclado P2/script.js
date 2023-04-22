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
let cima = false, baixo = false, esquerda = false, direita = false

jogador.addEventListener('load', ()=>{
    largSprite = jogador.width / numSprites
    altSprite = jogador.height / numSprites
    posIniX = largSprite * numSprite //Numero do sprite
    ctx.drawImage(jogador,posIniX,0,largSprite,altSprite,posX,posY,largSprite,altSprite)
})

/*
let anima = setInterval(()=>{
    ctx.clearRect(0,0,500,500)
    numSprite++
    if(numSprite > 3)
        numSprite = 0
    posIniX = largSprite * numSprite
    ctx.drawImage(jogador,posIniX,0,largSprite,altSprite,posX,posY,largSprite,altSprite)
},200)
*/

let desenha=()=>{
    ctx.clearRect(0,0,500,500)
    numSprite++
    ctx.drawImage(jogador,posIniX,0,largSprite,altSprite,posX,posY,largSprite,altSprite)
}


//Adicionar evento para tecla

window.addEventListener('keydown', (event)=>{
    if(event.keyCode == 37){ //Esquerda
        esquerda = true
    }else if (event.keyCode == 39){ //Direita Keycode
        direita = true
    }

    if(event.keyCode == 38){ //Cima
        cima = true
    }else if (event.keyCode == 40){ //Baixo
        baixo = true
    }
})

window.addEventListener('keyup', (event)=>{
    if(event.keyCode == 37){ //Esquerda
        esquerda = false
    }else if (event.keyCode == 39){ //Direita
        direita = false
    }

    if(event.keyCode == 38){ //Cima
        cima = false
    }else if (event.keyCode == 40){ //Baixo
        baixo = false
    }
})

//Funcao para verificar os valores das variaveis e atualizar a posicao

const game=()=>{
    if(cima){
        posY -= velocidade
    }
    if(baixo){
    posY += velocidade
    }

    if(esquerda){
        posX -= velocidade
    }
    if(direita){
        posX += velocidade
    }
    requestAnimationFrame(game)
    desenha()
    
}

requestAnimationFrame(game)



 