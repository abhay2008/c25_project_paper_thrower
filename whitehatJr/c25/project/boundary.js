class Boundary {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true
    }

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    World.add(world, this.body);
  }

}