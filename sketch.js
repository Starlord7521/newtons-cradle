
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200, 600, 40);
	bobObject2 = new Bob(300, 600, 40);
	bobObject3 = new Bob(400, 600, 40);
	bobObject4 = new Bob(500, 600, 40);
	bobObject5 = new Bob(600, 600, 40);
	ground = new Roof(600,height,1200,20);
	roof = new Roof(600,10,1200,20);
	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*2, 0)
	rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter*2, 0)
	rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*2, 0)
	rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  ground.display();
  roof.display();
 
}



