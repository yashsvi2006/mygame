var bg
function preload() {
    bgImage=loadImage("images/track1.jpg");
   girl1Image=loadImage("images/g1.png");
   girl2Image=loadImage("images/g2.png");

}

function setup(){
    createCanvas(1000,430);
    bg=createSprite(300,210);
    bg.addImage(bgImage);
    bg.velocityX=-3;
   // bg.scale=4;
  girl1=createSprite(100,100,20,20);
  girl1.addImage(girl1Image); 
}
function draw() {
    background("grey");
  if(bg.x<200){
      bg.x=340;
  }

    drawSprites();
}



