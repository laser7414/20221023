function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);
  noFill()
  stroke(255);
  ellipse(25,25,50)
  rect(25,25,50)
  ellipse(50,50,25)

  ellipse(25+50,25,50)
  rect(25+50,25,50)
  ellipse(50+50,50,25)

  ellipse(25+50*2,25,50)
  rect(25+50*2,25,50)
  ellipse(50+50*2,50,25)

  ellipse(25+50*3,25,50)
  rect(25+50*3,25,50)
  ellipse(50+50*3,50,25)

  ellipse(25+50*4,25,50)
  rect(25+50*4,25,50)
  ellipse(50+50*4,50,25)

  ellipse(25+50*5,25,50)
  rect(25+50*5,25,50)
  ellipse(50+50*5,50,25)

  ellipse(25+50*6,25,50)
  rect(25+50*6,25,50)
  ellipse(50+50*6,50,25)

  ellipse(25+50*7,25,50)
  rect(25+50*7,25,50)
  ellipse(50+50*7,50,25)

  for(var i=0;i<width/50;i=i+1)
  {
    ellipse(25+50*i,25,50)
    rect(25+50*i,25,50)
    ellipse(50+50*i,50,25)
  }

  for(var i=0;i<width/50;i=i+1)
  {
    ellipse(25+50*i,25+50*1,50)
    rect(25+50*i,25+50*1,50)
    ellipse(50+50*i,50+50*1,25)
  }

  for(var j=0;j<windowHeight/50;j++)
  {
    for(var i=0;i<width/50;i=i+1)
    {
    ellipse(25+50*i,25+50*j,50)
    rect(25+50*i,25+50*j,50)
    ellipse(50+50*i,50+50*j,25)
    }
  }

  function draw(){
    rectMode(CENTER)
    background(0);
    noFill()
    stroke(255);
    var w=mouseX/10
    for(var j=0;j<height/50;j++)
    {
      for(var i=0;i<width/50;i++)
      {
        ellipse(25+50*i,25+50*j,w)
        rect(25+50*i,25+50*j,mouseY/4)
        ellipse(25+50*i,25+50*j,25)
      }
    }
}