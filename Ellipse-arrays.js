var x1 = 45;
var y1 = 45;
var d1 = 10;

function setup() {
  createCanvas(500, 500);
  //colorMode(HSB)
}
  
function draw() {
  background(255);
  noStroke();

  for(var i = 0; i < 10; i++) {
    stroke(255);
    fill(random(255), random(255), random(255));
    ellipse(x1 * i, y1 * i, d1);
    ellipse(x1 * i + 20, y1 * i , d1);
    ellipse(x1 * i + 40, y1 * i , d1);
    ellipse(x1 * i + 60, y1 * i , d1);
    ellipse(x1 * i + 80, y1 * i , d1);
  }

  // 1% of the time
  if (random() < 0.01) {
    d1 = random(10, 40);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    d2 = random(10, 50);
  }
 
}
