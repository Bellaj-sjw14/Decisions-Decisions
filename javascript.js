// Wonderful variables
var numberOfRect = 200;

var redAmount = 0;
var greenAmount = 0;
var blueAmount = 0;

var rectHeight = (600 / numberOfRect);
var colorStep = Math.floor(255/numberOfRect);

var rectWidth = 600;


function setup() {
  createCanvas(600,600);
}

function draw() {
  background(55);    
  
    for (var i = 0; i < numberOfRect; i++) {
        fill(redAmount,i*colorStep,i*colorStep);
        noStroke();
        rect(0, (i*rectHeight), rectWidth, rectHeight);
        
    }
    
    fill(0);
    rect(260, 500, 80, 50);
    
}