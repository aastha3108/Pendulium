
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1, rope2, rope3, rope3, rope4, rope4
var roofObject

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,150,20)
	bobObject2 = new Bob(220,150,20)
	bobObject3 = new Bob(600,150,20)
	bobObject4 = new Bob(800,150,20)
	bobObject5 = new Bob(1000,150,20)
  roofObject = new Roof(300,50,450,10)
  rope1 = new Rope(bobObject1.body,{x:200,y:50})
	rope2 = new Rope(bobObject2.body,{x:260,y:50})
	rope3 = new Rope(bobObject3.body,{x:320,y:50})
	rope4 = new Rope(bobObject4.body,{x:380,y:50})
  rope5 = new Rope(bobObject5.body,{x:440,y:50})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roofObject.display();

  drawSprites();
 
}



