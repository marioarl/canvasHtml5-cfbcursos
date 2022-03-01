let canvas = document.getElementById("desenho1")
let ctx=canvas.getContext('2d')

function desenha(){


    ctx.clearRect(0,0,500,500)

    //x1, y1, x2, y2, raio

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(100,100)
    ctx.arcTo(250,250,500,0,100)
    ctx.lineTo(500,0)
    ctx.closePath()
    ctx.stroke()

}
desenha()