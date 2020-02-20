let clipiart;
let data;
let togglealert;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

}



function preload(){
  image1= loadImage("images/clipart.png");
  image2= loadImage("images/data.png");
}

function draw(){
  colorMode(RGB);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2-300, height/2+75);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2-300, height/2+25);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2-300, height/2-25);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2-300, height/2-75);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2+300, height/2+75);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2+300, height/2+25);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2+300, height/2-25);

  noStroke();
  fill(140);
  textSize (15);
  text("Press space key for what", width/2+300, height/2-75);

  image(image1, width/2, height/2,500,500);

  colorMode(HSB);

  if(mouseIsPressed){
    smooth();
    stroke((5*frameCount) % 360, 30, 100);

    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}
function keyPressed()
{
    if (togglealert == true)
    {
      background(230);
      togglealert = false;
    }
    else
    {
      togglealert = true;
      background(30);
      image(image2, width/2, height/2, 200, 100);
    }

    return false;
}
