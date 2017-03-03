var a;
var b;
var c;
var d;
var x;
var y;
var z;
function setup(){
    createCanvas(600,600);
    background(149, 165, 166);
    
}

function draw(){
    x = random(0,600);
    c = random(0, 200);
    d = random(0,200)
    y = random(0,600);
    b = random(0,255);
    z = random(0, 90);
    a = random(0,2);
    ellipse(mouseX,mouseY,z,z,x);
    fill(mouseX, mouseY, random(0,255));
    rect(mouseX, 23, c, d, b);
    // rect(23, 46, d, c);
    line(150, 155, x, 500);
    line(x, 434, z, x);
    rect(x,y,150);
    
    

    // stroke(255, 255, 255);
    // fill(255,0,0);
    // rect(290, 100,200,250);
    
    // strokeWeight(4);
    // fill(0,0,255);
    ellipse(180,300,80,120);
    
}
//   r = random(255);
//   g = random(255);
//   b = random(255);
// }

// function draw() {
//   background(127);
//   // Draw a circle
//   strokeWeight(2);
//   stroke(r, g, b);
//   fill(r, g, b, 127);
//   ellipse(360, 200, 200, 200);
// }

// // When the user clicks the mouse
// function mousePressed() {
//   // Check if mouse is inside the circle
//   var d = dist(mouseX, mouseY, 360, 200);
//   if (d < 100) {
//     // Pick new random color values
//     r = random(255);
//     g = random(255);
//     b = random(255);
//   }
// }