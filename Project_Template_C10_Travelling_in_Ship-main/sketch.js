var seaImage
var shipImage
var sea
var ship

function preload(){
seaImage = loadImage("sea.png")
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (200,200,400,400)
  sea.addImage(seaImage)
  sea.scale=0.4
  ship = createSprite (200,200,50,50)
  ship.addAnimation("sailing",shipImage)
  ship.scale=0.3
}

function draw() {
  background("blue");
 
  sea.velocityX=-4
if (sea.x<-210){
  sea.x=210
}
  drawSprites()
}