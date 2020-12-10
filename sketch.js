//creating
var wall,thickness;
var bullet,speed,weight;

function setup(){
//creating canvas
 createCanvas(1600,400);

//making random speed,weight
 speed=random(223,321);
 weight=random(30,52);

 thickness=random(22,83);

//creating car,giving color
bullet=createSprite(50,200,50,5);
bullet.velocityX=speed;
bullet.shapeColor=color(255);

//creating wall,giving color
wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
}

function draw(){

//clear the screen
 background(0,0,0);
 function hasCollided(Lbullet,Lwall){
   bulletRightEdge=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
   
 
 
   bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
   
   if(damage>0.4){
   wall.shapeColor="green";
 
     if(damage<10){
       wall.shapeColor="red";
   }
   }
      return true
   }
   return false;
 }
 //drawing sprites
 drawSprites();
 
}