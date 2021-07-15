class slingShot{
    constructor(bodyA,pointB){
       var   options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1

        }
        this.sling=Constraint.create(options)
        this.pointB=pointB
            World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            stroke("red");
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
       /* else{
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x -10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            Image(this.sling,pointA.x+25,pointA.y-10,15,30);
        } */
    }
}
