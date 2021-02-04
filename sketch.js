var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces;
surface1=createSprite(-250,50,60,10);

surface2=createSprite(-200,50,60,10);
surface3=createSprite(-150,50,60,10);
surface4=createSprite(-100,50,60,10);

    //create box sprite and give velocity
box=createSprite(random(20,750))
box.velocityY=1

    drawSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    if(surface2.isTouching(box)){
        ball.shapecolour=rgb(255,128,0);
    }
}
