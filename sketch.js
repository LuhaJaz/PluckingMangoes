
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	bg = loadImage("gr.gif")
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (1600/2, 780, 1600, 20)
	tree = new Tree (1100, 500, 600, 750)
	boy = new Boy (500, 680, 350, 350)
	mango1 = new Mango (1100, 250, 50)
	mango2 = new Mango (1100, 300, 50)
	mango3 = new Mango (1150, 400, 50)
	mango4 = new Mango (1200, 450, 50)
	stone= new Stone (400,600,50)
	slingshot = new Slingshot (stone.body, {x: 400, y: 580})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  slingshot.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  drawSprites();
 
}



function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}
function mouseReleased() {
	slingshot.fly()
}
function detectCollision(lstone,lmango){
	 stoneBodyPosition = lstone.body.position; 
	 mangoBodyPosition = lmango.body.position; 
	 var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y); 
	 if(distance <= lmango.r + lstone.r){ 
		 Matter.Body.setStatic(lmango.body, false);
		 }
		 }