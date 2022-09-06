
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2
var wall

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball);
  var ball_option={
restitution:1.6


  }
   ball2 = Bodies.circle(200,10,10,ball_option)
   World.add(world,ball2);

   wall = Bodies.rectangle(200,300,20,5,ground_options);
   World.add(world,wall)



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball2.position.x,ball2.position.y,10);
  rect(wall.position.x,wall.position.y,20,5);
}

