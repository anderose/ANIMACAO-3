function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  translate (width/2, height/2);
  stroke(255);
  noFill();
  
  stroke(255)
  
  for (var i = 0; i < 120; i++)  {
    
    var r = map(sin(frameCount / 2), -1, 1, 100, 255)
    var g = map(i,0, 50, 100, 255)
    var b = map(cos(frameCount), -1, 1, 200, 100)
    
    stroke(r,g,b)
    
  }
  
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let t = random(50,10);
    let x = t * cos(a);
    let y = t * sin(a);
   // var z = sin(frameCount * 2 + i * 5) * 50
    vertex(x,y);
  }
  endShape();
  
  beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let t = random(50,60);
    let x = t * cos(a);
    let y = t * sin(a);
    vertex(x,y);
  }
  endShape();
  
   beginShape();
  for (let a=0; a < TWO_PI; a+=0.01) {
    let t = random(60,100);
    let x = t * cos(a);
    let y = t * sin(a);
    vertex(x,y);
  }
  endShape();
  
  
  }
