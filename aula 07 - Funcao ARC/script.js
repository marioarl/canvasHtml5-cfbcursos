let canvas = document.getElementById("desenho1")
let ctx=canvas.getContext('2d')


function desenha(){


    //posX, posY, raio, angIni, angFim, sentido
    //sentido : true = horario, false = anti-horario
    //(PI/180) * angulo em grau
    ctx.fillStyle='#000'
    ctx.arc(100,100,100,(Math.PI/180)*0,(Math.PI/180)*90,true)
    ctx.fill()
    ctx.beginPath()

    ctx.fillStyle='#f00'
    ctx.arc(100,100,100,(Math.PI/180)*0,(Math.PI/180)*90,false)
    ctx.fill()

}


desenha()