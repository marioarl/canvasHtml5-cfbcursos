class Jogador{
    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.x=0
        this.y=0
        this.vel=3
        this.ogro=new Image()
        this.ogro.src="nave.jpg"
        this.ogro.addEventListener('load', ()=>{
            this.desenhar()
        })
    }

    gerenciar(){
        if(this.teclado.esquerda){
            if(this.x > 0) //Limitador do tamanho do canvas em relacao a movimentacao do joagador
                this.x-=this.vel
        }
        if(this.teclado.direita){
            if(this.x < this.ctx.canvas.width-this.ogro.width)
            this.x+=this.vel
        }
        if(this.teclado.cima){
            if(this.y > 0)
                this.y-=this.vel
        }
        if(this.teclado.baixo){
            if(this.y < this.ctx.canvas.height-this.ogro.height)
            this.y+=this.vel
        }
    }

    desenhar(){
        this.gerenciar()
        this.ctx.drawImage(this.ogro, this.x,this.y)
    }
    
}