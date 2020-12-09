class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.tree = loadImage ("tree.png")
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.tree, pos.x, pos.y, this.width, this.height);
    }
  };
