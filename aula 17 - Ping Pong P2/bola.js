class Bola{
    constructor(ctx){
        this.ctx=ctx
        this.movendo=false
        this.dirx=0
        this.diry=0
        this.vel=3
        this.largura=20
        this.altura=20
        this.x=(this.ctx.canvas.width / 2)-(this.largura / 2)
        this.y=(this.ctx.canvas.height / 2)-(this.altura / 2)
    }

    gerenciar(){
        if(this.movendo){
            this.x+=(this.dirx * this.vel)
            this.y+=(this.diry * this.vel)
            if(this.x >= (this.ctx.canvas.width-this.largura)){
                this.dirx = -1
            }
            if(this.x <= 0){
                this.dirx = 1
            }

            if(this.y >= (this.ctx.canvas.height-this.altura)){
                this.diry = -1
            }
            if(this.y <= 0){
                this.diry = 1
            }
        }
    }

    iniciar(){
        this.movendo=true
        this.dirx=-1
        this.diry=(Math.random()*10 > 5 ? -1 : 1)
    }

    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
    
}