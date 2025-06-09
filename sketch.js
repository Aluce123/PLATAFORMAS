const Motor = Matter.Engine,
Mundo = Matter.World,
Corpos = Matter.Bodies;

let motor;
let jogador;

let plataformas =[];

function setup() {
  createCanvas(windowWidth, windowHeight);

    motor = Motor.create();
    mundo = motor.world;

    jogador = new Jogador (100, height - 200, 50, 50);

    
}


function draw() {
  background("skyBlue");

  Motor.update(motor);

  jogador.mostrar();
}

    function windowResized(){
        resizeCanvas(windowWidth, windowHeight);
    }