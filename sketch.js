var wall, car;
var speed, weight;
function setup() {
  createCanvas(1200,800);
  wall = createSprite(400, 100, 200, 50);
  wall.shapeColor = "#e6e1e1";
  //wall.debug = true;
  car = createSprite(400, 800,80,30);
  car.shapeColor = "yellow";
  
  car.velocityY = -5;
  speed-random (55, 90)

  weight-random(400, 1500)
  
}

function draw() {
  background(0,0,0);  

  if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = car.velocityX * (-1);
    wall.velocityX = wall.velocityX * (-1);
  }
  if (car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
    car.velocityY = car.velocityY * (-1);
    wall.velocityY = wall.velocityY * (-1);
  }
  drawSprites();
}