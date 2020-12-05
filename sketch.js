
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var string1,string2,string3,string4,string5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,400,60);
	bob2 = new Bob(270,400,60);
	bob3 = new Bob(320,400,60);
	bob4 = new Bob(370,400,60);
	bob5 = new Bob(420,400,60);

	roof = new Roof(350,100,400,40);

	string1 = new Rope(bob1.body,roof.body,-120*1,0)
	string2 = new Rope(bob2.body,roof.body,-120*.5,0)
	string3 = new Rope(bob3.body,roof.body,-120*0,0)
	string4 = new Rope(bob4.body,roof.body,-120*-.5,0)
	string5 = new Rope(bob5.body,roof.body,-120*-1,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

keyPressed();
drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}) } 

	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:100,y:100}) } 
	

}