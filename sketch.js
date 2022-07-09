const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bln1, bln2, bln3, bln4, bln5, bln6;
var ballista;
var arrow;
var arrowNum = 6;
var playerArrows = [];


function setup() {
  createCanvas(800,400);

  engine = Engine.create(700,200,20,20);
  world = engine.world;
  
  ground = new Ground(400,380,800,20);
  bln1 = new Balloon(393,150,40,40,300,0,0);
  bln2 = new Balloon(353,73,20,20,0,300,0);
  bln3 = new Balloon(262,280,30,30,0,0,300);
  bln4 = new Balloon(350,220,40,40,300,0,0);
  bln5 = new Balloon(220,140,20,20,0,300,0);
  bln6 = new Balloon(80,230,30,30,0,0,300);
  ballista = new Ballista(700,200,150,150);
  arrow = new Arrow(700,200,80,30,(ballista.ballistaAngle))
}


function draw() 
{
  background("white");
  Engine.update(engine);
  ground.show();
  bln1.show();
  bln2.show();
  bln3.show();
  bln4.show();
  bln5.show();
  bln6.show();
  ballista.display();
  arrow.display();

  if(arrow.x != 700 && arrow.y != 200)
  {
    collision(arrow,bln1);
    collision(arrow,bln2);
    collision(arrow,bln3);
    collision(arrow,bln4);
    collision(arrow,bln5);
    collision(arrow,bln6);
  }
}

function collision(arrow,bln)
{
  var a_pos = arrow.body.position;
  var b_pos = bln.body.position;
  if(bln.popped == false)
  {
    if(Math.abs(b_pos.x - a_pos.x)<40 && Math.abs(b_pos.y-a_pos.y)<40)
    {
      console.log(arrow.body.position.x,bln.body.position.x)
      bln.pop();
      console.log("bln popped")
      arrow.reset();
    }
  }
}
