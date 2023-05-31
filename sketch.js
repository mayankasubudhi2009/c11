
var trex ,trex_running;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,150,20,50)
 ground= createSprite(300,180,1000,20)
 trex.addAnimation("running",trex_running)
 trex.scale=0.8
}

function draw(){
  background("white")
  drawSprites()
if(keyDown("space"))
{
  trex.velocityY=-12
}trex.velocityY+=0.8
trex.collide(ground)
}
