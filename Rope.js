class Rope{
    constructor(body1, body2, offsetX, offsetY){
    this.offsetX = offsetX
    this.offsetY = offsetY
        var options = {
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
    }
    display(){
     var Harry = this.rope.bodyA.position;
     var Porter = this.rope.bodyB.position;
     line(Harry.x,Harry.y,Porter.x,Porter.y);   
    }
}