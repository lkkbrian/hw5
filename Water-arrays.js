var x = 230;
var y = 220;
var y1 = y + 15
var y2 = y + 30

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  ellipse(x, y, 10);
  ellipse(x, y1, 10);
  ellipse(x, y2, 10);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3
  y1 = y + 15
  y2 = y1 + 40
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
}
