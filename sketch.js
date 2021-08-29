const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, bouncyBall,hammer,rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    iron = new Iron(240,350);
    iron1 = new Iron(240,350);
    iron2 = new Iron(610,350);
    iron3 = new Iron(610,350);
    iron4 = new Iron(240,48);
    iron5 = new Iron(240,48);
    iron6 = new Iron(610,48);
    iron7 = new Iron(610,48);

    stone = new Stone(478,350,130,50);
    stone1 = new Stone(340,350,130,50);
    stone2 = new Stone(430,50,458,40);

    bouncyBall = new BouncyBall(700,450,70);
    bouncyBall1 = new BouncyBall(450,450,70);
    bouncyBall2 = new BouncyBall(170,450,70);
    bouncyBall3 = new BouncyBall(800,450,70);
    bouncyBall4 = new BouncyBall(50,450,70);
    bouncyBall5 = new BouncyBall(900,450,70);

    rubber = new Rubber(290,48,60);
    rubber1 = new Rubber(350,48,60);
    rubber2 = new Rubber(430,48,60);
    rubber3 = new Rubber(510,48,60);

    hammer = new Hammer(10,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    stone.display();
    stone1.display();
    stone2.display();
    plane.display();
    bouncyBall.display();
    bouncyBall1.display();
    bouncyBall2.display();
    bouncyBall3.display();
    bouncyBall4.display();
    bouncyBall5.display();
    iron.display(); 
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    iron6.display();
    iron7.display();
    hammer.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
}
