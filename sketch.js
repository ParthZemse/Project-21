var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges


function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(120,580,150,30)
surface1.shapeColor="yellow";

surface2=createSprite(320,580,150,30)
surface2.shapeColor="red";

surface3=createSprite(520,580,150,30)
surface3.shapeColor="green";

surface4=createSprite(720,580,150,30)
surface4.shapeColor="blue";

    //create box sprite and give velocity
box=createSprite(random(20,750))
box.velocityY=3;
box.shapeColor="white"
box.width=50;
box.height=50;

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
 edges=createEdgeSprites()
box.bounceOff(edges);

 

if(surface1.isTouching(box) && box.bounceOff(surface1) ){
box.shapeColor="yellow";
}
if(surface2.isTouching(box) && box.bounceOff(surface2) ){
    box.shapeColor="red";
}
               
if(surface3.isTouching(box) && box.bounceOff(surface3) ){
    box.shapeColor="green";
}
if(surface4.isTouching(box) && box.bounceOff(surface4) ){
    box.shapeColor="blue";
}
drawSprites();
}

