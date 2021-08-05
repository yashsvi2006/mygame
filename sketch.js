var bg
function preload() {
    bgImage=loadImage("images/track1.jpg");
   girl1Image=loadImage("images/g1.png");
   girl2Image=loadImage("images/g2.png");

}

function setup(){
    createCanvas(1370,620);
    //bg=createSprite(300,210);
   // bg.addImage(bgImage);
   // bg.velocityX=-3;
   // bg.scale=4;
  girl1=createSprite(100,100,20,20);
  girl1.addImage(girl1Image);
  girl2=createSprite(100,220,20,20);
  girl2.addImage(girl2Image);
  ground=createSprite(750,480,1700,280);
  ground.shapeColor="brown"; 
  ground.velocityX=-3;

}
function draw() {
    background("grey");
  if(ground.x<0){
      ground.x=ground.width/2;
  }
  if(keyDown("w")){
      girl1.velocityY=-10;
  }
  if(keyDown("s")){
    girl2.velocityY=-10;

}

    drawSprites();
}



