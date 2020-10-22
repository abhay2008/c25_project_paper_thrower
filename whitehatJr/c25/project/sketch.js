const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box;
var bound1, bound2;

var paper;

var ground;

var j = 0;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, height - 35, width, 20);
	World.add(world, ground);

	box = new Box(810, 510, 150, 150);
	//World.add(world, box);

	paper = new Paper(200, 200, 40);
	World.add(world, paper);

	bound1 = new Boundary(820, 590, 5, 160);
	World.add(world, bound1);

	bound2 = new Boundary(885, 660, 150, 5);
	World.add(world, bound2);

	bound3 = new Boundary(950, 585, 5, 145);
	World.add(world, bound3);

	Engine.run(engine);

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 700,
			y: -1200
		});
	}
}

function draw() {
	background(200);

	ground.display();

	paper.display();

	box.display();
	//bound1.display();
	//bound2.display();
	//bound3.display();

	textStart();

	success();

	failure();

	drawSprites();

	//Engine.update(engine);

}

function textStart() {
	if (paper.body.position.x < 300 && paper.body.position.x < 820 && paper.body.position.y < 700) {
		fill(0);
		textSize(40);
		text("click on up arrow to throw the paper", 200, 200);
		j = 1;
	}
}

function success() {
	if (j == 1 && paper.body.position.x >= 800 && paper.body.position.y >= 600 && paper.body.position.x < 950) {
		fill("cyan");
		textSize(100);
		text("GOOD THROW!", 100, 200);
	}
}

function failure() {
	if (paper.body.position.x > 300 && paper.body.position.x < 800 && paper.body.position.y > 600 || paper.body.position.x > 960) {
		fill("red");
		textSize(100);
		text("BAD THROW!", 100, 200);
	}
}