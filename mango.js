class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution :0,
          friction : 0,
          density: 1
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      World.add(world, this.body);
      this.image=loadImage("mango.png")
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      translate(pos.x,pos.y)
      fill("brown");
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  };