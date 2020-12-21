class Stone{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, r, options);
        this.r=r;
        
        this.image = loadImage("assests/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,0, this.r);
        pop();
      }
}