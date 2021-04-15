var fixedRect,movingRect;
var Rect2,Rect3;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  Rect2 = createSprite(400, 200, 50, 50);
  Rect2.shapeColor = "green";
  Rect2.debug = true;

  Rect3 = createSprite(600, 200, 50, 50);
  Rect3.shapeColor = "green";
  Rect3.debug = true;

  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,Rect2)){
    Rect2.shapeColor = "red";
    movingRect.shapeColor = "red"
  }else{
    Rect2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }


  drawSprites();
}

