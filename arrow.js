
class Arrow {
    constructor(x, y, width, height, ballistaAngle) {
      var options = {
        isStatic: true,
        density: 0.1
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("Arrow.png");
      this.ballistaAngle = ballistaAngle;
      this.reArm = false;
      this.shot = false;
      this.orig_x = this.body.position.x;
      this.orig_y = this.body.position.y;
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      if(this.reArm == true || pos.y > 350)
      {
        pos.x = this.orig_x;
        pos.y = this.orig_y;
        Matter.Body.setVelocity(this.body,{x:0,y:0});
        Matter.Body.setPosition(this.body,pos);
        Matter.Body.setStatic(this.body,true);
        Matter.Body.setPosition(this.body,pos);
        Matter.Body.setAngle(this.body, this.ballistaAngle);
        this.reArm = false;
        console.log("Rearmed ", pos.x, pos.y,this.body.angle);
        this.shot = false;
      }

      if (keyIsDown(UP_ARROW) && angle < 1.5) {
        angle += 0.01;
        Matter.Body.setAngle(this.body, angle);
        this.ballistaAngle = angle;
        console.log(this.ballistaAngle)
      }
  
      if (keyIsDown(DOWN_ARROW) && angle > -1.5) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body, angle);
        this.ballistaAngle = angle;
        console.log(this.ballistaAngle)
      }
  
      var pos = this.body.position;
      var angle = this.body.angle;

      if(keyIsDown(LEFT_ARROW) && this.shot == false)
      {
        console.log(this.ballistaAngle, Math.cos(this.ballistaAngle), Math.sin(this.ballistaAngle))
        console.log(this.body.angle);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.applyForce(this.body,{x:pos.x,y:pos.y},{x:-Math.cos(this.ballistaAngle)*15,y:-Math.sin(this.ballistaAngle)*20})
        this.shot = true;
      }
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
  
    }

    reset()
    {
      this.reArm = true;
    }
  }