class Bola{
    constructor(ctx, jogador){
        this.ctx=ctx
        this.movendo=false
        this.jogador = jogador
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
            //Movimentação da bola
            this.x+=(this.dirx * this.vel)
            this.y+=(this.diry * this.vel)
            //Colisao com as bordas
            if(this.x >= (this.ctx.canvas.width-this.largura)){
                this.dirx = -1
            }
            if(this.x <= 0){
                this.dirx = 1
            }

            if(this.y >= (this.ctx.canvas.height-this.altura)){
                this.diry*=-1
            }
            if(this.y <= 0){
                this.diry*=-1
            }
            //Colisao com o jogador
            if(
                (this.x <= this.jogador.x + this.jogador.largura && this.x+this.largura >= this.jogador.x) &&
                (this.y+this.altura >= this.jogador.y && this.y <= this.jogador.y + this.jogador.altura))
                {
                    this.dirx*=-1//Se não quiser que a bolinha tenha colisao traseira do jogador, basta colocar this.dirx = 1
                    this.diry=((this.y+(this.altura/2))-(this.jogador.y+(this.jogador.altura/2)))/20

            }
        }
    }

    iniciar(){
        this.movendo=true
        this.dirx=-1
        //this.diry=(Math.random()*10 > 5 ? -1 : 1)
    }

    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
    
}