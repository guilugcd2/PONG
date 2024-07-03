//Variaveis da bola
let xBola = 300;
let yBola = 200;
let velocidadeXBola = 9;
let velocidadeYBola = 9;

//Variavel raquete
let xMinhaRaquete=20;
let yMinhaRaquete=150;
let larguraMinhaRaquete=15;
let alturaMinhaRaquete=100;
  
  

function setup() {
  createCanvas(600, 400);
}

// Função desenhar
function draw(){
  background(0);
  bola();
  minhaRaquete();
  }
// Função bola
function bola(){
  circle (xBola, yBola, 35);
  xBola += velocidadeXBola;
    yBola += velocidadeYBola;
  if (xBola > width || xBola < 0) {
  velocidadeXBola *= -1
      }
    if (yBola > height || yBola < 0) {
  velocidadeYBola *= -1   
      }
}
// Função minha raquete
function minhaRaquete(){
  rect(xMinhaRaquete, yMinhaRaquete,  larguraMinhaRaquete, 
alturaMinhaRaquete)
  if(keyIsDown(UP_ARROW)){
  yMinhaRaquete -= 10
 }
  if (keyIsDown (DOWN_ARROW)){
  yMinhaRaquete += 10  
     }
  
  }