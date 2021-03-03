class Package{
    constructor(x,y,width,height){
        var options={
            restitution:1.0
        }
        this.image-loadImage("package.png");
   this.body=Bodies.rectangle(x,y,width,height,options);
   this.width=width;
   this.height=height;
   this.body.position.x=mouse.X;
   World.add(world,this.body);
   }
   display(){
       var pos=this.body.position;
       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
      
    }

}