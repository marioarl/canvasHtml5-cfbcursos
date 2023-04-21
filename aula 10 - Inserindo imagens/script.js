let canvas = document.getElementById("desenho1")
let ctx=canvas.getContext('2d')

let nave = new Image()
nave.src = "nave.jpg"
nave.onload = ()=>{
    ctx.drawImage(nave,0,0,50,50) 
    /*
    Parametros
    1) Imagem
    2) X inicial do recorte
    3) Y inicial do recorte
    4) Largura do recorte
    5) Altura do recorte
    6) Posicao X da imagem
    7) Posicao Y da imagem
    8) Largura da imagem
    9) Altura da imagem
    */

}

let cores = new Image()
cores.src="cores.png"
cores.addEventListener('load', ()=>{
    ctx.drawImage(cores,600,0,50,50,0,0,100,50)
})
/*
Para alterar a cor de acordo com a imagem acima do canvas, temos que alterar o 2o. parametro do drawImage
0 - azul
200 - verde
400 - vermelho
600 - amarelo
*/

/*
Ou pode utilizar o addEventListener

nave.addEventListener('load', ()=>{
    ctx.drawImage(nave,0,0)
})
*/
//Indicando o tamanho nos parametros do drawImage
/*
nave.onload = ()=>{
    ctx.drawImage(nave, 0, 0, 50 ,50) //Com parametros de tamanho da imagem
}
*/

