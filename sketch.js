var wall,thickness;
varbullet, speed,weight;
function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,152);
  bullet=createSprite(50,200,20,10);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255,255,255);
  wall=createSprite(700,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0,0,0);
  if(hasCollided(bullet,wall)){

   bullet.velocityX=0;
   var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

   if(damage>10){
     wall.shapeColor=color(255,0,0);
   }

   if(damage<10){
     wall.shapeColor=color(0,255,0);
   }

  } 
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}