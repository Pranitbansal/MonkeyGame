
var monkey , monkey_running;
var banana ,bananaImage, stone, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background(220);
  ground.x=ground.width/2;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  if(keyDown("space") && monkey.y>310) {
    monkey.velocityY=-13;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();
}

function food() {
  if(frameCount%80===0) {
    banana=createSprite(400,120,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.y=random(120,200);
    banana.lifetime=150;
    foodGroup.add(banana);
  }
}

function obstacle() {
  if(frameCount%300===0) {
    stone=createSprite(400,309,20,20);
    stone.addImage(obstacleImage);
    stone.scale=0.2;
    stone.velocityX=-5;
    stone.lifetime=150;
    obstacleGroup.add(stone);
  }
}

