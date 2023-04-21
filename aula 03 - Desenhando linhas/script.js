var canvas = document.getElementById("desenho1")
var ctx=canvas.getContext('2d')

//Desenhar a linha


ctx.moveTo(0,0)//Move o apontador para o inicio
ctx.lineTo(250,250) //x(x quando aumenta vai para a direita) , y(quando aumenta o y a linha desce e quando abaixo o y a linha sobe) 
ctx.lineTo(400,250)
ctx.lineTo(400,100)
ctx.stroke()