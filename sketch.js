
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImg, dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(30,650,13);

	rect1 = new Rect(540,560,20,220);
	rect2 = new Rect(740,560,20,220);
	dustbin3 = new Dustbin(650,658,200,20);

	ground = new Ground(400,680,800,20);


	Engine.run(engine);
  
}


function draw() {
  background(150,150,150);
  Engine.update(engine);

  ground.display();

  paper.display();

  //rect1.display();
  //rect2.display();
  dustbin3.display(); 
  

  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-40});

	}
}



