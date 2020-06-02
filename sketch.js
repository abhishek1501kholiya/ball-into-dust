const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
//var boxes = [];
var engine;
var world;
var ground1;
var circle1;
var bally;





var rect1 , rect2 , rect3 ;
function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var options = {
	isStatic : false,
    restitution:0
}
rect1 = new Box(330,360,10,50,options);
rect2 = new Box(360,385,50,10,options);
rect3 = new Box(390,360,10,50,options);
//box1 = new Box(200,100,20,20);
var options = {
	isStatic :false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
circle1 = new Ball(100,385,20,options);


ground1 = new Ground(200,400,400,10);
World.add(world,ground1);
Engine.run(engine);
}

function draw()
{
	background(0,0,0);

	circle1.show();
	ground1.display();
	rect1.show();
	rect2.show();
	rect3.show();
	rectMode(CENTER);
	fill(170);
	stroke(255);
	strokeWeight(4);


	
}
function keyPressed(){
	if(keyCode  === UP_ARROW){
		Matter.Body.applyForce(circle1,circle1.position.x,{x:340 , y:385})
	}

}