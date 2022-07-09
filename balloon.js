class Balloon
{
    constructor(x, y, w, h, r, g ,b) {
        let options = {
          isStatic:true
        };
    
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
        this.turn = 1;
        this.popped = false;
    
        World.add(world, this.body);
      }
    
      show() {
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.popped == true)
        {
          return
        }
   
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.r,this.g,this.b);
        ellipseMode(CENTER);
        ellipse(0, 0, this.w, this.h);
        pop();
      }
      pop()
      {
        this.popped = true;
        Matter.Composite.remove(world, this.body);
      }
}

