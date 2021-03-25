class Rect{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);

    }
    display(){

        var pos = this.body.position;

        push()

        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("white");
        stroke("grey");
        strokeWeight(3);
        rect(0,0,this.width,this.height);imageMode(CENTER);
        
        pop();
    }
}