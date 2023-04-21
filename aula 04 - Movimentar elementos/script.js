
let px=0
let anima

function desenha() {
    var canvas=document.getElementById("desenho1")
    var ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,500,500)    

    ctx.fillStyle='#f00' //Define a cor
    ctx.fillRect(px,0,50,50)

    px++

    anima = requestAnimationFrame(desenha)
}



