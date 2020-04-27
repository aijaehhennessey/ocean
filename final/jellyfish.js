"use strict";

let ballA, ballB, ballC, ballD;

let springAB, springAC, springAD;
let force;

let legs = [];
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  let h = windowHeight - 200
  ballA = new Ball(windowWidth/2, h, 30);
  for (let i = 0; i < 30; i++) {
    balls.push(new Ball(windowWidth/2, random(h + 35, h + 85), 8));
  }

  for (let i = 0; i < 30; i++) {
    legs.push(new Spring(ballA, balls[i], 120));
  }

  force = createVector(0, -0.002);

}

function draw() {
  background(0);


  ballA.update();
  ballA.display();

  for (let i = 0; i < 30; i++) {
    balls[i].update();
    balls[i].applyForce(force);
    legs[i].update();
    legs[i].leg();
  }
}


class Ball {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = m;
    this.rad = this.mass * 0.5;
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    //  this.vel.mult(0.999);
    this.vel.x = 0;

  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(220,150,170,50);
    for(let i = 0; i < 20; i++){
    ellipse(0, 0, this.rad * 0.25*i, this.rad * 0.175 * i);
    }
    pop();
  }
}

class Spring {
  constructor(bA, bB, len) {
    this.ballA = bA;
    this.ballB = bB;
    this.len = len;
    this.k = 0.002;
    this.f = random(1);
    this.distance = createVector();
    this.yspacing = 1; // Distance between each horizontal location
    this.w; // height of entire wave
    this.theta = this.ballA.pos.y + this.ballA.rad; // Start angle at 0
    this.amplitude; // Width of wave
    this.period = random(350, 500); // How many pixels before the wave repeats
    this.xvalues; // Using an array to store height values for the wave
    // this.w = 16500 / this.amplitude;
    this.dy = (TWO_PI / this.period) * this.yspacing;
    this.xvalues = new Array(floor(this.len / this.yspacing));
    this.interval = random(10);
    this.rad = random(0.2,0.8);


  }

  update() {
    let vector = p5.Vector.sub(this.ballA.pos, this.ballB.pos);
    this.distance = vector.mag() - this.len;
    let direction = vector.copy().normalize();
    let stretch = this.distance;
    this.amplitude = 3500 / (this.distance + this.len);
    let force = direction.copy();
    force.mult(-1 * this.k * stretch);
    this.ballA.applyForce(force);
    force.mult(-1);
    this.ballB.applyForce(force);
    force.mult(-1);
    this.xvalues = new Array(floor((this.distance + this.len) / this.yspacing));
  }

  display() {
    push();
    strokeWeight(3);
    stroke(255, 120);
    line(this.ballA.pos.x, this.ballA.pos.y + this.ballA.rad, this.ballB.pos.x, this.ballB.pos.y);
    pop();
  }

  leg() {
    push();
    this.theta += 0.02;
    let y = this.theta + this.interval;
    for (let i = 0; i < this.xvalues.length; i++) {
      this.xvalues[i] = sin(y) * this.amplitude;
      y += this.dy;
    }
    translate(-this.xvalues[0] + this.ballA.pos.x, this.ballA.pos.y + this.ballA.rad +5);
    noStroke();
   // fill(255);
    fill(180,110,130);
    for (let y = 0; y < this.xvalues.length; y++) {
      ellipse(this.xvalues[y], y * this.yspacing, this.rad, this.rad);
    }
    pop();
  }
}
