class Pad{
    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.vel=3
        this.largura=20
        this.altura=100
        this.x=0
        this.y=(this.ctx.canvas.height / 2)-(this.altura / 2)
    }

    gerenciar(){
        if(this.teclado.esquerda){
            if(this.x > 0) //Limitador do tamanho do canvas em relacao ao movimento do joagador
                this.x-=this.vel
        }
        if(this.teclado.direita){
            if(this.x < (this.ctx.canvas.width/2)-this.largura)
            this.x+=this.vel
        }
        if(this.teclado.cima){
            if(this.y > 0)
                this.y-=this.vel
        }
        if(this.teclado.baixo){
            if(this.y < this.ctx.canvas.height-this.altura)
            this.y+=this.vel
        }
    }

    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
    
}