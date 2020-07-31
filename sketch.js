var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet= createSprite(400, 200, 20, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  speed = random(30,52);
  weight = random(223,321);
  bullet.velocityX = 10;
  bullet.shapeColor = "white";
  thickness = random(22,83);

}

function draw() {
  background("black");  

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);


    if(damage>10)
    {
      wall.shapeColor = "red";
    }

    if(damage<10)
    {
      wall.shapeColor = "green"; 
    }

  }


  drawSprites();
}

function hascollided(lbullet,lwall){
  
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }

    return false;

}