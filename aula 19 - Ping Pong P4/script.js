let canvas = document.getElementById("desenho1")
let ctx=canvas.getContext('2d')


const teclado = {
    cima:false,
    baixo:false,
    esquerda:false,
    direita:false
}

const jogador = new Pad(ctx, teclado)
const bola = new Bola(ctx, jogador)
const cpu = new Cpu(ctx, bola)

window.addEventListener('keydown', (event)=>{
    if(event.keyCode == 37){ //Esquerda Keycode
        teclado.esquerda = true
    }else if (event.keyCode == 39){ //Direita
        teclado.direita = true
    }

    if(event.keyCode == 38){ //Cima
        teclado.cima = true
    }else if (event.keyCode == 40){ //Baixo
        teclado.baixo = true
    }
})

window.addEventListener('keyup', (event)=>{
    if(event.keyCode == 37){ //Esquerda
        teclado.esquerda = false
    }else if (event.keyCode == 39){ //Direita
        teclado.direita = false
    }

    if(event.keyCode == 38){ //Cima
        teclado.cima = false
    }else if (event.keyCode == 40){ //Baixo
        teclado.baixo = false
    }
})

const game=()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
    jogador.desenhar()
    bola.desenhar()
    cpu.desenhar()
    requestAnimationFrame(game)
    
}

requestAnimationFrame(game)



 