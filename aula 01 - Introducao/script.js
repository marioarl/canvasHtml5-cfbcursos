//1o. Temos que definir o canvas e o contexto do tipode trabalho que será realizado dentro dele.
var canvas = document.getElementById("desenho1") //apontar o canvas
var ctx=canvas.getContext('2d')//Informar o contexto do canvas(mode de trabalho)

ctx.fillStyle="rgb(0,0,255)" //Definir um preenchimento para o elemento grafico(contexto)
ctx.fillRect(0,0,100,100)//Desenhando o elemento quadrado - nos parenteses, deverá ser informada a posicao, largura e altura do desenho dentro do canvas

ctx.fillStyle="rgba(255,0,0, 0.5)"
ctx.fillRect(50,50,100,100)
