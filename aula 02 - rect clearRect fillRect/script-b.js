var canvas = document.getElementById("desenho1")
var ctx=canvas.getContext('2d')
var px = 0
var py = 0

ctx.fillStyle="#00f" 
ctx.rect(px,py,200,200) //Utilizando com variaveis
ctx.fill()

//clearRect vai limpar determinada area do canvas
ctx.clearRect(0,0,50,50) //propriedades onde comeca o retangulo e o tamanho
ctx.clearRect(50,50,50,50)