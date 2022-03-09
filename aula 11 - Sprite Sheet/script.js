let canvas = document.getElementById("desenho1")
let ctx=canvas.getContext('2d')

let nave = new Image()
nave.src = "nave.jpg"
nave.onload = ()=>{
    ctx.drawImage(nave,0,0,50,50) 

}

let cores = new Image()
cores.src="cores.png"
let numSprite = 0
let posIniX = 0
let limagem = 0 
let largSprite = 0
let numSprites = 4
cores.addEventListener('load', ()=>{
    limagem = cores.width
    console.log(limagem)
    largSprite = limagem / numSprites
    posIniX = largSprite * numSprite //Numero do sprite
    ctx.drawImage(cores,posIniX,0,largSprite,50,0,0,50,50)
})

let anima = setInterval(()=>{
    numSprite++
    if(numSprite > 3)
        numSprite = 0
    posIniX = largSprite * numSprite
    ctx.drawImage(cores,posIniX,0,largSprite,50,0,0,50,50)
},2000)


 