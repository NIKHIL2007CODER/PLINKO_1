const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var BackgroundIMG;
var engine,world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
 var canvas = createCanvas(600,629);

 engine = Engine.create();
 world = engine.world;

 ground1 = new Ground(width/2,625,width,10);
 ground2 = new Ground(width/2,4,width,10);
 ground3 = new Ground(4,height/2,10,height);
 ground4 = new Ground(596,height/2,10,height);

 division1 = new Division(width/2,615,width,12);

 for (var i = 15; i <=width; i = i + 95){
  divisions.push(new Division(i, height-divisionHeight/2,12,divisionHeight));

 }

 for (var p = 25; p <=width; p=p+50){
   plinkos.push(new Plinko(p,75,8));
 }
 
 for (var p = 0; p <=width; p=p+50){
  plinkos.push(new Plinko(p,115,8));
}

for (var p = 25; p <=width; p=p+50){
  plinkos.push(new Plinko(p,155,8));
}

for (var p = 0; p <=width; p=p+50){
  plinkos.push(new Plinko(p,195,8));
}

for (var p = 25; p <=width; p=p+50){
  plinkos.push(new Plinko(p,235,8));
}



 

}

function draw() {
  background(10); 
  Engine.update(engine);
 
  
  
  
  for (var i = 0; i < divisions.length; i++){
  
    divisions[i].display();

  }

  division1.display();
  
  for ( var p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }
 
  for ( var j = 0; j < particles.length; j++){
    particles[j].display();
  }


  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  

  
}
function keyPressed(){
  if(keyCode = 32){
    particles.push(new Particles(random(width/2-10,width/2+10),10,8))
  }
}