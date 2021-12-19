var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;  

var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var START = 0;
var END = 1;
var gameState = START;

var divisionHeight = 300;
var score = 0;
var count;

///////////////////////////////////////////
function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //divisions
   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

  //plinkos
   for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
   }

   for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
   }

   for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
   }
    
}
 
///////////////////////////////////////////
function draw() {
  background("black");

  textSize(35)
  text("Score: "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  Engine.update(engine);
  ground.display();

  //plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
   }
 
  //ball
   if(ball!=null){
    ball.display();
     //score+
      if(ball.positionX < 300){
       score=score+500;
       ball = null;
      }

      if(ball.positionX > 300 && ball.positionX < 600){
       score=score+100;
       ball = null;
      }

      if(ball.positionX > 601 && ball.positionX < 900){
       score=score+200;
       ball = null;
      }
   }

  //divisions
   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
   }

  //count>=5
   if(count>=5){
    gameState = END;
   }

}

///////////////////////////////////////////
function mousePressed(){
 if(gameState!==START){
  count++;
  ball=new Ball(mouseX, 10, 10, 10);
 }
}
