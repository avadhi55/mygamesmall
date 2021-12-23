class Digger {
    constructor(){
        this.body = createSprite(50,45,50,50);
        this.body.shapeColor = "yellow";
        this.body.addImage(digger);
        this.body.scale = 0.15;
        this.score = 0;
        
    }

    move (){
            if(keyDown(RIGHT_ARROW)){
                this.body.x += 5;
            }

            else if(keyDown(LEFT_ARROW)){
                this.body.x -= 5;
            }

           else if(keyDown(UP_ARROW)){
                this.body.y -= 5;
            }

           else if(keyDown(DOWN_ARROW)){
                this.body.y += 5;
            }

            this.body.collide(edges);

            fill("red");
            textSize(30);
            text("Score: "+this.score,120,690);
    
    }  

    hit (){
        
    }
    incrementScore(amount){
        this.score = this.score+amount; 
    }
}