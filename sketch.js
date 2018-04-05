function setup() {
  createCanvas(1000,1000)
  mic = new p5.AudioIn()
  mic.start();
  frameRate(40)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
function draw() {
micLevel = mic.getLevel()
adjustedMicLevel = micLevel * 500
adjustedMicLevel2 = micLevel * 900
adjustedMicLevel3 = micLevel * 3000
adjustedMicLevel4 = micLevel * 7000
adjustedMicLevel5 = micLevel * 6000
adjustedMicLevel6 = micLevel * 9000
adjustedMicLevel7 = micLevel * 50

fill(0,255,255)
//fill(random(1,255),random(1,255),random(1,255))
//ellipse(width / 2, height / 2,adjustedMicLevel2,adjustedMicLevel3)
//if (adjustedMicLevel2 && adjustedMicLevel3 < 90) {
//  clear()
//}
strokeWeight(adjustedMicLevel7)
stroke(adjustedMicLevel3,adjustedMicLevel3,adjustedMicLevel3)
ellipse(500,500,800,800)
fill(0,255,0)
rect(300,250,150,adjustedMicLevel)
rect(550,250,150,adjustedMicLevel)
ellipse(500,650,250,adjustedMicLevel2)
}