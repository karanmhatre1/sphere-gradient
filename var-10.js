
function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  
  pixelDensity(2.0);
  background(50);

  fill(0);
  
  step = 50;
  // noLoop();
}


function draw() {
  background(50, 20);

  // from = color(50, 0, 100);
  // to = color(255, 50, 0);

  for(i=1;i<=10;i++) {
    for(j=1;j<=10;j++) {
      x = step*i +  sin((i/10)*frameCount*0.01)*100;
      y = step*j +cos((j/10)*frameCount*0.01)*100;
      
      rad = step;
      // c1 = lerpColor(from, to, map(rad, 0, step, 0, 1));
      c1 = color(255);

      noStroke();
      fill(c1);
      circle(x,y,rad);
    }
  }  
}