
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var Bin1,Bin2,Bin3;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,350,10);
  ground = new Ground(400,690,800,15);
  Bin1 = new Dustbin(525,640,15,70);
  Bin2 = new Dustbin(600,670,150,15);
  Bin3 = new Dustbin(675,640,15,70);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
 
  rectMode(CENTER);
 
  paper.display();
  ground.display();

  Bin1.display();
  Bin2.display();
  Bin3.display();

  Throw();

  drawSprites();
}

function Throw(){
  if(keyWentDown("UP_ARROW")){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:10,y:-20})

    console.log("throw");
  }
}


