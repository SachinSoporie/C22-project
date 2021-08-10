const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Rope = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob1_options={
		isStatic:true
	}

	bob1 = Bodies.rectangle(310, 530, 50, 50, bob1_options);
	World.add(world, bob1);

	var bob2_options={
		isStatic:true
	}

	bob2 = Bodies.rectangle(350, 530, 50, 50, bob2_options);
	World.add(world, bob2);
	
	var bob3_options={
		isStatic:true
	}

	bob3 = Bodies.rectangle(390, 530, 50, 50, bob3_options);
	World.add(world, bob3);

	var bob4_options={
		isStatic:true
	}

	bob4 = Bodies.rectangle(430, 530, 50, 50, bob4_options);
	World.add(world, bob4);

	var bob5_options={
		isStatic:true
	}

	bob5 = Bodies.rectangle(470, 530, 50, 50, bob5_options);
	World.add(world, bob5);

	rope1 = new rope(bob1, roof, -80, 0);
	rope2 = new rope(bob2, roof, -100, 0);
	rope3 = new rope(bob3, roof, -120, 0);
	rope4 = new rope(bob4, roof, -140, 0);
	rope5 = new rope(bob5, roof, -160, 0);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  
  //create ellipse shape for multiple bobs here

 ellipse(bob1.position.x, bob1.position.y, 40, 40);
 ellipse(bob2.position.x, bob2.position.y, 40, 40);
 ellipse(bob3.position.x, bob3.position.y, 40, 40);
 ellipse(bob4.position.x, bob4.position.y, 40, 40);
 ellipse(bob5.position.x, bob5.position.y, 40, 40);


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
