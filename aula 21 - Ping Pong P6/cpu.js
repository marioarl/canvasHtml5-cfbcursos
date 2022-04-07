class Cpu{
    constructor(ctx,bola){
        this.ctx=ctx
        this.bola=bola
        this.vel=2.5
        this.largura=20
        this.altura=100
        this.x=(this.ctx.canvas.width-this.largura)
        this.y=(this.ctx.canvas.height / 2)-(this.altura / 2)
        this.inicioX=this.x
        this.inicioY=this.y
        this.ymeio=Math.random()*this.altura

    }

    gerenciar(){
        if(this.bola.dirx > 0 && this.bola.x > this.ctx.canvas.width/2){
            //Rebater a bola
            if(this.bola.y + (this.bola.altura/2) > this.y + this.ymeio){
                this.y+=this.vel
            }
            if(this.bola.y + (this.bola.altura/2) < this.y + this.ymeio){
                this.y-=this.vel
            }
            if(this.bola.x+this.bola.largura < this.x){
                this.x-=this.vel
            } 

        }else{
            //Ir para a posicao de origem
            if(this.y > this.inicioY){
                this.y-=this.vel
            }
            if(this.y < this.inicioY){
                this.y+=this.vel
            }
            if(this.x > this.inicioX){
                this.x-=this.vel
            }
            if(this.x < this.inicioX){
                this.x+=this.vel
            }
        }
        //Colisao com o cpu
        if(
            (this.x <= this.bola.x + this.bola.largura && this.x+this.largura >= this.bola.x) &&
            (this.y+this.altura >= this.bola.y && this.y <= this.bola.y + this.bola.altura))
            {
                this.bola.dirx=-1//Se não quiser que a bolinha tenha colisao traseira do jogador, basta colocar this.dirx = 1
                this.bola.diry=((this.bola.y+(this.bola.altura/2))-(this.y+(this.altura/2)))/20
                this.ymeio=Math.random()*this.altura

        }
    }

    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
    
}