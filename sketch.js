var trex, trex_running;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

function setup() {
    createCanvas(600, 200);
    trex = createSprite(50, 150, 40, 50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
}

function draw() {
    background("white");
    drawSprites();
    if (keyDown("space")) {
        trex.velocityY = -10;
    }

    trex.velocityY = trex.velocityY + 0.5;
}
