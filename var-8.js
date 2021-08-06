
function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  
  pixelDensity(1.0);
  background(50);

  fill(0);
  
  step = 100;
  // noLoop();
}


function draw() {
  background(50, 20);

  // from = color(50, 0, 100);
  // to = color(255, 50, 0);

  for(i=0;i<=10;i++) {
    for(j=0;j<=10;j++) {
      x = step*i +  sin(j*frameCount*0.01)*100;
      y = step*j + sin(j*frameCount*0.03)*100;
      
      rad = step*0.8;
      // c1 = lerpColor(from, to, map(rad, 0, step, 0, 1));
      c1 = color(0,0,0);

      noStroke();
      fill(c1);
      circle(x,y,rad);
    }
  }  
}