let canvas=document.getElementById("desenho1")
let ctx = canvas.getContext('2d')
let dx=1
let px=0
let py=10
let anima
let l_ret=a_ret=50
let l_canvas=a_canvas=500

function desenha() {
    ctx.clearRect(0,0,l_canvas,a_canvas)    

    ctx.fillStyle='#f00'
    ctx.fillRect(px,py,l_ret,a_ret)

    px+=dx
    if((px+l_ret>=l_canvas) || (px<=0))
        dx*=-1
    anima = requestAnimationFrame(desenha)
}

desenha()



