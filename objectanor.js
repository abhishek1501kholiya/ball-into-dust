
    class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.radius = radius;
    
    }
        show = function(){
            var pos = this.body.position;
            var angle = this.body.angle;
            ellipse(this.x,this.y,this.radius);
        
        }
    }
    

