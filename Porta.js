class Porta{
   constructor(x,y, largura, altura){
    this.corpo=Matter.Bodies.rectangle(x,y, largura, altura, {isStatic:true});
    this.largura=largura;
    this.altura=altura;
    this.image = loadImage('imagens/')
    Matter.World.add(Mundo,this.corpo);
   }


   mostrar(){
    const posicao=this.position.corpo;
    Push();
    ImageMode(CENTER);
    image(this.image, posicao.x, posicao.y, this.largura, this.altura);
    pop();
   }
}