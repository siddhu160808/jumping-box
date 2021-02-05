var canvas, edges;
var music;
var box, blueBox, redBox, greenBox, yellowBox;

function preload() {
    music = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    blueBox = createSprite(100, 580, 200, 20);
    blueBox.shapeColor = "blue";

    redBox = createSprite(300, 580, 200, 20);
    redBox.shapeColor = "red";

    greenBox = createSprite(500, 580, 200, 20);
    greenBox.shapeColor = "green";

    yellowBox = createSprite(700, 580, 200, 20);
    yellowBox.shapeColor = "yellow";
    
    //create box sprite and give velocity
    box = createSprite(random(50, 750), 290, 20, 20);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 5;

    music.play();
}

function draw() {
    background(rgb(169, 169, 169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (blueBox.isTouching(box) && box.bounceOff(blueBox)) {
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if (redBox.isTouching(box) && box.bounceOff(redBox)) {
        box.shapeColor = "red";
    }

    if (greenBox.isTouching(box) && box.bounceOff(greenBox)) {
        box.shapeColor = "green";
    }

    if (yellowBox.isTouching(box) && box.bounceOff(yellowBox)) {
        box.shapeColor = "yellow";
    }

    drawSprites();
}
