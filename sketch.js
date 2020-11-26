var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime =0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,400);
  monkey = createSprite(80,125,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.09;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  banana = createSprite(200,160,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  FoodGroup.add(banana);
  banana.visible=false;
  
  obstacle = createSprite(300,350,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.09;
  obstacleGroup.add(obstacle);
  obstacle.visible=false;
  
  
}


function draw() {
  background("lightblue");
  
  
 if( ground.x<0){
  ground.x=ground.width/2;
   
 }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
  
 drawSprites();
 
  
  
  stroke("bkack");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time : "+survivalTime,100,50);

}
  
function spawnFood(){
  if(frameCount%80===0){
    var food = createSprite(500,160,10,10);
    food.addImage(bananaImage);
    food.velocityX=-4;
    food.y=Math.round(random(120,200));
    food.scale=0.1;
    food.lifetime=150;
  }
}

function spawnObstacle(){
  if(frameCount%300===0){
    var obstacle = createSprite(500,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.lifetime=150;
  }
}