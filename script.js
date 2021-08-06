
function setup() {
  var container = document.getElementById('canvasContainer');
  var myCanvas = createCanvas(container.offsetWidth, container.offsetHeight);
  myCanvas.parent("canvasContainer");
  
  pixelDensity(1.0);
  background(0,0,0);

  fill(0);
  
  step = 100;
  // noLoop();
}


function draw() {
  background(0,0,0,2);

  from = color(255, 0, 0);
  to = color(0, 0, 255);

  for(i=0;i<=2;i++) {
    for(j=0;j<=2;j++) {
      x = 50+step/2+i*step+j*step;
      if(i%2==0)
        y = 200+j*step+sin(frameCount*0.01)*200;
      else 
        y = 200+j*step-sin(frameCount*0.01)*200;
      
      noStroke();
      // rad = step*sin((frameCount+x)*0.02)*sin(x+frameCount*0.01);
      rad = step;
      c1 = lerpColor(from, to, map(rad, 0, step, 0, 1));
      fill(c1);
      
      circle(x,y,rad);
    }
  }  
}