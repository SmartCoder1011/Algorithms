var movingrect, stillrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(300, 200, 80, 50);
  movingrect.shapeColor="red";
  stillrect=createSprite(200,200,80,50)
  stillrect.shapeColor="red";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-stillrect.x<movingrect.width/2+stillrect.width/2&&
    stillrect.x-movingrect.x<movingrect.width/2+stillrect.width/2&&
    movingrect.y-stillrect.y<movingrect.height/2+stillrect.height/2&&
    stillrect.y-movingrect.y<movingrect.height/2+stillrect.height/2){
      movingrect.shapeColor="blue";
      stillrect.shapeColor="blue";
    }else{
      movingrect.shapeColor="red";
      stillrect.shapeColor="red";
    }

  drawSprites();
}