var track;
var player;
var bound1,bound2;
var edges = [bound1,bound2]

function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  playerAnim = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  track = createSprite(200,200);
  track.addImage(trackImg);
  track.velocityY = 5;
  track.scale = 1.2

  player = createSprite(200,300);
  player.addAnimation("running Animation",playerAnim);
  player.scale = 0.1;

  bound1 = createSprite(0,200,20,400);
  bound1.visible = false;
  bound2 = createSprite(400,200,20,400);
  bound2.visible = false;
}

function draw() {
  background(0);

  player.x = World.mouseX;

  player.collide(bound1);
  player.collide(bound2);

  track.velocityY = 5;

  if(track.y > 380){
    track.y = height/2;
  }
  drawSprites();
}
