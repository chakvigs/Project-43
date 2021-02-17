var minutes, hours, seconds;
var minuteAngle, hourAngle, secondAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(200, 200);
  rotate(-90);

  seconds = second();
  minutes = minute();
  hours = hour();
  secondAngle = map(seconds, 0, 60, 0, 360);
  minuteAngle = map(minutes, 0, 60, 0, 360);
  hourAngle = map(hours%12, 0, 12, 0, 360);

  push()
  stroke(255, 0, 0);
  strokeWeight(7);
  rotate(secondAngle);
  line(0, 0, 110, 0);
  pop();

  push()
  stroke(0, 255, 0);
  strokeWeight(7);
  rotate(minuteAngle);
  line(0, 0, 85, 0);
  pop();

  push()
  stroke(0, 0, 255);
  strokeWeight(7);
  rotate(hourAngle);
  line(0, 0, 60, 0);
  pop();

  strokeWeight(10);
  noFill();
  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(0, 255, 0);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(0, 0, 255);
  arc(0, 0, 260, 260, 0, hourAngle);

  drawSprites();
}