class Paper {
  constructor(x, y, r) {
    var options = {
      restitution: 0.3,
      friction: 1.0,
      density: 5
    }

    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x - 10, this.y, this.r - 7, options);
    World.add(world, this.body);
  }


  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}