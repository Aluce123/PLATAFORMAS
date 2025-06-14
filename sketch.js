const Motor = Matter.Engine,
Mundo = Matter.World,
Corpos = Matter.Bodies;

let motor;
let jogador;
let imagemfundo;
let porta;

let plataformas =[];

function preload(){
 imagemfundo = loadImage('imagens/Sample.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

    motor = Motor.create();
    mundo = motor.world;
 
    jogador = new Jogador (150, height - 250, 50, 50);

    plataformas.push(new Plataformas(1500, height-1000, 200,20));
    plataformas.push(new Plataformas(400, height-450, 200,20));
    plataformas.push(new Plataformas(100, height-200, 200,20));
    plataformas.push(new Plataformas(1000, height-800, 200,20));
    plataformas.push(new Plataformas(700, height-600, 200,20));
    
 // Fazer mais plataformas!!!!

 fundo = createSprite(windowWidth/4+610, windowHeight/4-300)
 fundo.addImage(imagemfundo);
 fundo.scale = 3.5
}


function draw() {
  background(imagemfundo);

  Motor.update(motor);

  push()

  translate(-jogador.corpo.position.x+width/2, -jogador.corpo.position.y+height/2)

  drawSprites();
  jogador.mostrar();
  //porta.mostrar();

  for(let plataforma of plataformas){
    plataforma.mostrar();

    if(jogadorTocandoPlataforma(jogador, plataforma))
      jogador.resetarPulos();
  }

pop();

}


function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    console.log("DIREITO OK")
    jogador.mover(0.08);

  }else if(keyCode === LEFT_ARROW){
    jogador.mover(-0.08);
  }else if(keyCode === UP_ARROW){
    jogador.pular();
  }  
}

function jogadorTocandoPlataforma(jogador, plataforma){
  const posicaoJogador = jogador.corpo.position;
  const  posicaoPlataforma = plataforma.corpo.position;

  const tocando = 

  posicaoJogador.y+jogador.altura/2>=posicaoPlataforma.y-plataforma.altura/2&&
  posicaoJogador.x+jogador.largura/2>=posicaoPlataforma.x-plataforma.largura/2&&
  posicaoJogador.x-jogador.largura/2<=posicaoPlataforma.x+plataforma.largura/2;

  return tocando;
}

    function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
    }
    // atividade: comentários + plataformas

    //adicionar imagem na porta, vê contas e alternativas, posicao da porta.
    //moedas de X(dica ou pontos, aumentar chance.) - classe da moedinha ou chave pra porta
    //salvar no github
