var pc,edges;
var wallGroup, tunnelGroup;
var B1Img,B2Img,B3Img,B4Img,B5Img,B6Img,digger;
var block;
var r ;
var monster;
var M1Img,M2Img,M3Img,M4Img,M5Img,M6Img;

function preload (){
  B1Img = loadImage("Images/block.1.png");
  B2Img = loadImage("Images/block.2.png");
  B3Img = loadImage("Images/block.3.png");
  B4Img = loadImage("Images/block.4.png");
  B5Img = loadImage("Images/block.5.png");
  B6Img = loadImage("Images/block.6.png");
  M1Img = loadImage("Images/monster1.png");
  M2Img = loadImage("Images/monster2.png");
  M3Img = loadImage("Images/monster3.png");
  M4Img = loadImage("Images/monster4.png");
  M5Img = loadImage("Images/monster5.png");
  M6Img = loadImage("Images/monster6.png");
  digger= loadImage("Images/DiggerImage.png");
}

function setup() {
  createCanvas(1520,750);
  r = Math.round(random(1,2));
  tunnelGroup = new Group();
  //1 row
  block1 = new Tunnel(257,50,3,"success","silver",2);
  block2 = new Tunnel(480,50,4,"fail",0,0);
  
  edges = createEdgeSprites();

  pc = new Digger();
}

function draw() {
  background(74,20,0); 

  pc.move();
  pc.hit();
  
  block1.changeImages();
  block2.changeImages();''
  
  drawSprites();
}