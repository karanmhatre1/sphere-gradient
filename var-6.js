
function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  
  pixelDensity(1.0);
  background(25, 0, 50);

  fill(0);
  
  step = 100;
  // noLoop();
}


function draw() {
  background(25, 0, 50, 10);

  from = color(50, 0, 100);
  to = color(255, 50, 0);

  for(i=0;i<=10;i++) {
    for(j=0;j<=10;j++) {
      x = i*step/2;
      if(i%2==0)
        y = 200+j*step+sin(frameCount*0.03)*200;
      else 
        y = 200+j*step-cos(frameCount*0.01)*200;
      
      noStroke();
      rad = step*2*sin((frameCount+x)*0.02)*cos(x+frameCount*0.01);
      // rad = step;
      // rotate(frameCount*0.01);
      c1 = lerpColor(from, to, map(rad, 0, step, 0, 1));
      fill(c1);
      
      circle(x,y,rad);
    }
  }  
}