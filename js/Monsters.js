class Monster {
    constructor(x,y,type){
        this.body = createSprite(x,y,20,20);
        this.type = type; //what type of monster red pink yellow etc
        this.type = type; //how much lifetime (hearts = health)type of monster = type of hearts
        this.kill = 0; // (kill = hits)
        this.alive = true;
        this.image = M1Img;
        
    }//end of constructor


   changeImages2(){
         switch(this.type){
            case 1: this.image = M1Img;
                    this.body.scale = 0.5;
                    this.type = 1;
                    break;
            case 2: this.image = M2Img;
                    this.body.scale = 0.5;
                    this.type = 2;
                    break;
        }//end of switch(This.type)
        this.body.addImage(this.image);

        
        
        } //end of changeImages2()   

        DH(){
                switch(this.type){
                        case 0: break;
                        case 1: switch(this.kill){
                                case 0: break;
                                case 1: this.body.scale = 0.0;
                                break;
                                break;
                        case 2:switch(this.kill){
                                case 0: break;
                                case 1: break;
                                case 2: this.image.scale = 0.0;
                                break;
                                break;
                        }
                }
        }
   
        die(){          
                if(keyWentDown("space") && pc.body.isTouching(this.body)){       
                        this.kill++;
                } 
                
                if(this.kill === this.type){
                        this.body.destroy();
                        this.alive = false
                }
        }//end of die
}//end of class