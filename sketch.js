function preload() {
  img = loadImage("gatto.jpg");
  img2 = loadImage("tennis_ball.png");
  img3 = loadImage("tennis_cup.png");
}

function setup() {
angleMode(DEGREES);
  frameRate(20);
  noCursor();

  bg = loadImage("tennista.jpg");

  loadImage("gatto.jpg");
  image(img, 0, 0);

  loadImage("tennis_ball.png");
  image(img2, 0, 0);
}

function draw() {
 createCanvas(windowWidth, windowHeight);
  background(bg);

  push();
  for (var i = 0; i < 50; i++) {
    var diameter = random(2, 5);
    noStroke();
    fill(200);
    image(img2, random(width), random(height), frameCount / 4, frameCount / 4);
  }
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(frameCount * 6);
 
  let myColor = lerpColor(color("#7f01fe"), color("#f5347f"), frameCount / 100);
  stroke(myColor);
  strokeWeight(3, 3);
  ellipseMode(CENTER);
  ellipse(0, 0, 400, 60);

  rotate(frameCount * 4);
  ellipse(0, 0, 400, 60);

  rotate(frameCount * 2);
  ellipse(0, 0, 400, 60);
  pop();

  image(img3, mouseX, mouseY, 90, 90);

  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  translate(width / 2, height / 2);
  push();
  rotate(a);
  imageMode(CENTER);
  image(img, 0, 0, 200, 200);
  pop();
}
