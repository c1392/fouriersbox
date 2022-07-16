let x=400
function setup() {
  //this is where you create canvas
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1')
  rectMode(CENTER)
//   mic = new p5.AudioIn();
//   mic.start();
  
}

function draw() {
    // var vol = mic.getLevel();
    background(220);
    for(let i=0;i<10000;i+=10){
    stroke('black')
    strokeWeight(3)
    ellipse(x,250,i-500,i-500)
    
    noFill()
    stroke('black')
    strokeWeight(3)
    ellipse(360,250,i,i)
} 
//  if(x>width){
   
//    x=0
//  }else{
   
//    x=x+.5
//  }
}