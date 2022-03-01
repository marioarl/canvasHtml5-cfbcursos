let canvas = document.getElementById("desenho1")
let ctx=canvas.getContext('2d')

function desenha(){


    ctx.clearRect(0,0,500,500)

    //x1, y1, x2, y2, raio

    ctx.beginPath()
    
    ctx.moveTo(60,250)
    ctx.lineTo(30,350)
    
    ctx.arcTo(170,350,400,0,30)

    ctx.moveTo(300,10)
    ctx.lineTo(177,340)

    //ctx.lineTo(200,250)
    //ctx.closePath()
    ctx.stroke()

}
desenha()