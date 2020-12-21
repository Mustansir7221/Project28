
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(800,370,350,650);

	ground = new Ground(500,690,1000,30);

	boy = new Boy(200,600,100,300);

	stone = new Stone(100,130,90);

	mango1 = new Mango(800,280,0);
	mango2 = new Mango(850,180,0);
	mango3 = new Mango(800,120,0);
	mango4 = new Mango(700,240,0);
	mango5 = new Mango(800,200,0);
	mango6 = new Mango(700,290,0);
	mango7 = new Mango(900,290,0);

	chain = new Chain(stone.body,{x:170,y:535});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  tree.display();

  ground.display();

  boy.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);

  drawSprites();
 
}

function mouseDragged(){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  Body.setPosition(stone.body,{x:235,y:420})
  launcherObject.attach(stone.body);
}

function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
  Body.setStatic(mango.body,false);
}
}
