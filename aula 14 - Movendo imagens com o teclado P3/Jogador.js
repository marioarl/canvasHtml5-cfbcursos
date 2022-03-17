class Jogador{
    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.x=0
        this.y=0
        this.vel=3
        this.ogro=new Image()
        this.ogro.src="ogre.png"
        this.ogro.addEventListener('load', ()=>{
            desenhar()
        })
    }

    gerenciar(){
        if(this.teclado.esquerda){
            this.x-=this.vel
        }
        if(this.teclado.direita){
            this.x+=this.vel
        }
        if(this.teclado.cima){
            this.y-=this.vel
        }
        if(this.teclado.baixo){
            this.y+=this.vel
        }
    }

    desenhar(){
        gerenciar()
        this.ctx.drawImage(this.ogro, this.x,this.y)
    }
    
}