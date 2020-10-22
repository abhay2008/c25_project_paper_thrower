class Box {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true
    }

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = loadImage("dustbingreen.png");
    //this.body = Bodies.rectangle(this.x, this.y, this.width / 2, this.height / 2, options);
    //World.add(world, this.body);
  }

  display() {
    push();
    image(this.image, this.x, this.y, this.width, this.height);
    pop();
  }
}