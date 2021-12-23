class Tunnel {
    constructor(x,y, health,outcome,prize,monster){
        this.body = createSprite(x,y,20,20);
        this.health = health;   //Never changing
        this.outcome = outcome; //fail & success
        this.prize = prize;     //gold & silver
        this.monster = monster; //type of monster
        this.image = B1Img;
        this.body.addImage(this.image);
        this.body.scale= 0.6;
        this.hits = 0;          //Should get equal to health to destroy a tunnel
        tunnelGroup.add(this.body);

    }
    
    //Changing images according to this.hits
    changeImages(){

        this.body.addImage(this.image);

        switch(this.health){                        //To compare this.hits with this.health
            case 1: switch(this.hits){             //To change image & spawn monster
                        case 0: break;
                        case 1: this.outcomeSwitch();     
                                this.monsterSwitch();         
                                break;
                    }
                    break;
            case 2: switch(this.hits){
                    case 0: break;
                    case 1: this.monsterSwitch();
                            this.middleImages();           //If tunnel has more than one image
                            break; 
                    case 2: this.outcomeSwitch();
                            break;
                    }   
                    break;

            case 3: switch(this.hits){
                    case 0: break;
                    case 1: this.middleImages();
                            break;                          
                    case 2: this.monsterSwitch();
                            break;                          
                    case 3: this.outcomeSwitch();
                            break;
                    }   
                    break; 
        } //End of switch(this.health)


        //Digger hitting the tunnel
        if((keyWentDown("h")||keyWentDown("H"))&& pc.body.isTouching(this.body)){
            this.hits++;
        }
    } //End of changeImages()


    //Fail & Success
    outcomeSwitch(){
        switch(this.outcome){
            case "fail":this.image = B4Img;
                        break;
            case "success": switch (this.prize){                        //Gold & silver
                                case "gold":this.image = B5Img;
                                            pc.incrementScore(2);    
                                            break;
                                case "silver":this.image = B2Img;
                                              pc.incrementScore(1);
                                              break;
                            }
        }

    }
    
    //Spawning monster
    monsterSwitch(){
        switch (this.monster){
            case 0: break;
            case 1 : monster = new Monster(this.body.x - 10,this.body.y,1);
                     monster.changeImages2();                                   //Type of monster
                     break;
            case 2 : monster = new Monster(this.body.x -10,this.body.y,2);
                     monster.changeImages2();
                     break; 
        }
    }

    //Image we get before the final image
    middleImages(){
        switch(r){
            case 1: this.image = B3Img;
                    break;
            case 2: this.image = B6Img;
                    break;
        } 
    }
    
}    