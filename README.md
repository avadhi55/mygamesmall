# p5.play-boilerplate
Boiler plate for p5.play
fill("red");
        rect(this.body.x,this.body.y-100,this.hearts,10); 
        if(keyWentDown("space") && pc.body.isTouching(this.body)){       
        this.hearts--;
       }/*killiingMonster(){
        if(keyWentDown("space") && pc.body.isTouching(this.body)){       
                this.kill++;
        }
           }//end of killingMonster*/