var y = 100;


function setup() {
  createCanvas(800, 600);  
  strokeWeight(10),
  stroke(0);     // Set line drawing color to white
  frameRate(30);
    background(255);   // Set the background to black
  var inside = color(204, 102, 0);
  var middle = color(204, 153, 0);
  var outside = color(153, 51, 0);

    fill(0,0,255);
  rect(0, 200, 300,200 );
  
  fill(255,0,0);
  rect(300,0,500,400);
  
  fill(255,255,0);
  rect(600,400,200,200);
  
    
  
  y = 400;
  line(0, y, width, y);  
  
  line(300, 0, 300, height);
  
  line(800, 0, 800, height);
  
  line(300, 200, 0, 200);
  
  line(600,400,600,800);
  
  line(0,height,width,height);
  
  line(width,0,width,height);
  


}

function draw() {

  if (mouseIsPressed){
    stroke(0);
        randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r,randFill_g,randFill_b);
    
    randWeith = Math.floor(Math.random() * 250 + 1);
    randHeight = Math.floor(Math.random() * 250 + 1);
    
    
  rect(mouseX-randWeith/2, mouseY-randHeight/2,randWeith, randHeight);
    
    
  }else{
  stroke(0);
  }




}