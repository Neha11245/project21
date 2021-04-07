const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var car,wall;
var speed,wall

var wall,thickness;


var world,engine;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
createSprite(400, 200, 50, 50);
  car= createSprite(50,200,50,50)
  wall = createsprite(2500,200,thickness,height/2)

  speed=random(55,90)
  weight=random (400,1500)
  car.velocityX = speed; 

  thickness=random(22,83);

}

function hasCollied(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return true;



    if (hasCollied(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

      if (damage>10)
      {
         wall.shapeColor = color(255,0,0);
         
      }
      if (damage>10)
      {
         wall.shapeColor = color(255,0,0);
         
      }
    }
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
   car.display();
  wall.display();
   
  

  drawSprites();
}