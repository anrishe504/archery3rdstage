class ComputerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, this.w, this.h, options);
      this.w = width;
      this.h = height;
      //this.collapse = false;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, PI / 2); // -90 degree
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
       
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      pop();
    }
  }
  