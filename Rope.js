class Rope {

      constructor (body1,body2,offsetX,offsetY){
     
        this.offsetX  =  offsetX
        this.offsetY = offsetY

      var options = {

        bodyA : body1,
        bodyB : body2,
        pointB : {x : offsetX , y : offsetY}
  
      }
  
      this.Rope = Constraint.create(options)
      World.add(world,this.Rope)
  
    } 
  
    display () {

        var bodyA= this.Rope.bodyA.position;
        var bodyB= this.Rope.bodyB.position;

        //stroke(0);
        strokeWeight (4)
        var body1X = bodyA.x
        var body1Y = bodyA.y
        
        var body2X = bodyB.x+this.offsetX
        var body2Y = bodyB.y+this.offsetY
        line (body1X,body1Y,body2X,body2Y);
        

    }
  
  
  }