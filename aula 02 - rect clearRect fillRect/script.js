var canvas = document.getElementById("desenho1")
var ctx=canvas.getContext('2d')

//o rect desenha um retangulo mas nao preenche
ctx.fillStyle="#00f" 
ctx.rect(0,0,100,100)

ctx.fillStyle="#f00" //CUIDADO !Se colocarmos outro comando de desenhar um retangulo o fill irá considerar o ultimo fillstyle e preencher com o elemento vermelho 
ctx.rect(50,50,100,100)
//Para preencher temos que utilizar o fill
ctx.fill()


