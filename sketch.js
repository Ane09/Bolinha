let posicaoXbolinha
let posicaoYbolinha
let diametro=20
let=cor

function setup(){
  createCanvas(600, 600);
  background(175,238,238);
  cor=color(random(0,225),random(0,225),random(0,255))
}

function draw() {
  fill(cor)
  circle(posicaoXbolinha,posicaoYbolinha,50)
  posicaoXbolinha=mouseX 
  posicaoYbolinha=mouseY
  if(mouseIsPressed){
  cor=color(random(0,225),random(0,225),random(0,255))  } 
}
  function mousePressed(){
    background(175,238,238); 
    
  }