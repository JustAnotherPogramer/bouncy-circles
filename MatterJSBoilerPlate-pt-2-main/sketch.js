
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  plane_options={
	isStatic: true
    }

var floor;

var ball;

var rotator1;

var angle1 = 60 
var angle2 = 40 
var angle3 = 20 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	floor = Bodies.rectangle(350, 690, 800, 20, { isStatic: true });
  World.add(world, floor);

  rotator1 = Bodies.rectangle(300, 300, 150, 20,plane_options);
  World.add(world, rotator1);

  
  rotator2 = Bodies.rectangle(300, 300, 150, 20,plane_options);
  World.add(world, rotator2);

  
  rotator3 = Bodies.rectangle(300, 300, 150, 20,plane_options);
  World.add(world, rotator3);


  ball = Bodies.circle(300, 100, 10, { restitution: 2 });
  World.add(world, ball);

  ball2 = Bodies.circle(300, 100, 10, { restitution: 2 });
  World.add(world, ball2);

  ball3 = Bodies.circle(300, 100, 10, { restitution: 1.5 });
  World.add(world, ball3);

  ball4 = Bodies.circle(300, 100, 10, { restitution: 1.5 });
  World.add(world, ball4);

  ball5 = Bodies.circle(300, 100, 10, { restitution: 1.5 });
  World.add(world, ball5);


  plat = Bodies.rectangle(150, 450, 200, 20, { isStatic: true });
  World.add(world, plat);

  plat2 = Bodies.rectangle(500, 450, 200, 20, { isStatic: true });
  World.add(world, plat2);

	Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  
  rect(floor.position.x, floor.position.y, 690, 20);

  rect(plat.position.x, plat.position.y, 200, 20);

  rect(plat2.position.x, plat2.position.y, 200, 20);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball2.position.x, ball2.position.y, 10);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball3.position.x, ball3.position.y, 10);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball4.position.x, ball4.position.y, 10);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball5.position.x, ball5.position.y, 10);

fill("green");
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=20;

  
  
fill("green");
Matter.Body.rotate(rotator2,angle2)
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2 +=25;



fill("green");
  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=30;
}



