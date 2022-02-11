var canvas = document.getElementById("desenho1")
var ctx=canvas.getContext('2d')



ctx.moveTo(250,250) 
ctx.lineTo(200,300)
ctx.lineTo(260,370)  
ctx.lineTo(230,400)

ctx.stroke()//Redenrizar as linhas