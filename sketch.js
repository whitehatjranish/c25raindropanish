var raindrop,raindrop1,raindrop2,raindrop3,raindrop4,raindrop5,raindrop6,raindrop7,raindrop8,raindrop9,raindrop10,raindrop11,raindrop12,raindrop13,raindrop14;

var raindropIndex=0,raindrop1Index=0,raindrop2Index=0,raindrop3Index=0,raindrop4Index=0,raindrop5Index=0,raindrop6Index=0,raindrop7Index=0,raindrop8Index=0,raindrop9Index=0,raindrop10Index=0,raindrop11Index=0,raindrop12Index=0,raindrop13Index=0,raindrop14Index=0;
function setup() {
  createCanvas(800,400);
  raindrop=  createSprite(400, 200, 3, 50);
  raindrop.shapeColor="blue";
  raindrop.velocityY=3;
  raindrop1=  createSprite(300, 50, 3, 50);
  raindrop1.shapeColor="pink";
  raindrop1.velocityY=4;
  raindrop2=  createSprite(200, 100, 3, 50);
  raindrop2.shapeColor="purple";
  raindrop2.velocityY=3;
  raindrop3=  createSprite(500, 250, 3, 50);
  raindrop3.shapeColor="purple";
  raindrop3.velocityY=4;
  raindrop4=  createSprite(600, 150, 3, 50);
  raindrop4.shapeColor="red";
  raindrop4.velocityY=3;
  raindrop5=  createSprite(700, 220, 3, 50);
  raindrop5.shapeColor="yellow";
  raindrop5.velocityY=4;
  raindrop6=  createSprite(450, 300, 3, 50);
  raindrop6.shapeColor="orange";
  raindrop6.velocityY=3;
  raindrop7=  createSprite(550, 320, 3, 50);
  raindrop7.shapeColor="brown";
  raindrop7.velocityY=4;
  raindrop8=  createSprite(650, 280, 3, 50);
  raindrop8.shapeColor="green";
  raindrop8.velocityY=3;
  raindrop9=  createSprite(750, 360, 3, 50);
  raindrop9.shapeColor="blue";
  raindrop9.velocityY=4;
  raindrop10=  createSprite(100, 220, 3, 50);
  raindrop10.shapeColor="yellow";
  raindrop10.velocityY=3;
  raindrop11=  createSprite(250, 300, 3, 50);
  raindrop11.shapeColor="orange";
  raindrop11.velocityY=4;
  raindrop12=  createSprite(280, 320, 3, 50);
  raindrop12.shapeColor="brown";
  raindrop12.velocityY=3;
  raindrop13=  createSprite(120, 280, 3, 50);
  raindrop13.shapeColor="blue";
  raindrop13.velocityY=4;
  raindrop14=  createSprite(480, 360, 3, 50);
  raindrop14.shapeColor="pink";
  raindrop14.velocityY=3;
}

function draw() {
  background("green");  
  raindrop.display();
  raindrop1.display();
  raindrop2.display();
  raindrop3.display();
  raindrop4.display();
  raindrop5.display();
  raindrop6.display();
  raindrop7.display();
  raindrop8.display();
  raindrop9.display();
  raindrop10.display();
  raindrop11.display();
  raindrop12.display();
  raindrop13.display();
  raindrop14.display();

  if (raindrop.y>400 &&raindropIndex==0) {
    raindrop.y=20;

  }else if(raindropIndex==1){
    raindrop.y=20;
    raindropIndex=0;
  }
  
  if (raindrop1.y>400 &&raindrop1Index==0) {
    raindrop1.y=20;
    
  }else if(raindrop1Index==1){
    raindrop1.y=20;
    raindrop1Index=0;
    
  }
  if (raindrop2.y>400 &&raindrop2Index==0) {
    raindrop2.y=20;
    
  }else if(raindrop2Index==1){
    raindrop2.y=20;
    raindrop2Index=0;
    
  }
  if (raindrop3.y>400 &&raindrop3Index==0) {
    raindrop3.y=20;
    
  }else if(raindrop3Index==1){
    raindrop3.y=20;
    raindrop3Index=0;
  }
  if (raindrop4.y>400 &&raindrop4Index==0) {
    raindrop4.y=20;
    
  }else if(raindrop4Index==1){
    raindrop4.y=20;
    raindrop4Index=0;
  }  if (raindrop5.y>400 &&raindrop5Index==0) {
    raindrop5.y=20;
    
  }else if(raindrop5Index==1){
    raindrop5.y=20;
    raindrop5Index=0;
  }  if (raindrop6.y>400 &&raindrop6Index==0) {
    raindrop6.y=20;
    
  }else if(raindrop6Index==1){
    raindrop6.y=20;
    raindrop6Index=0;
  }  if (raindrop7.y>400 &&raindrop7Index==0) {
    raindrop7.y=20;
    
  }else if(raindrop7Index==1){
    raindrop7.y=20;
    raindrop7Index=0;
  }
  if (raindrop8.y>400 &&raindrop8Index==0) {
    raindrop8.y=20;
    
  }else if(raindrop8Index==1){
    raindrop8.y=20;
    raindrop8Index=0;
  }  if (raindrop9.y>400 &&raindrop9Index==0) {
    raindrop9.y=20;
    
  }else if(raindrop9Index==1){
    raindrop9.y=20;
    raindrop9Index=0;
  }  if (raindrop10.y>400 &&raindrop10Index==0) {
    raindrop10.y=20;
    
  }else if(raindrop10Index==1){
    raindrop10.y=20;
    raindrop10Index=0;
  }  if (raindrop11.y>400 &&raindrop11Index==0) {
    raindrop11.y=20;
    
  }else if(raindrop11Index==1){
    raindrop11.y=20;
    raindrop11Index=0;
  }
  if (raindrop12.y>400 &&raindrop12Index==0) {
    raindrop12.y=20;
    
  }else if(raindrop12Index==1){
    raindrop12.y=20;
    raindrop12Index=0;
  }  if (raindrop13.y>400 &&raindrop13Index==0) {
    raindrop13.y=20;
    
  }else if(raindrop13Index==1){
    raindrop13.y=20;
    raindrop13Index=0;
  }  if (raindrop14.y>400 &&raindrop14Index==0) {
    raindrop14.y=20;
    
  }else if(raindrop14Index==1){
    raindrop14.y=20;
    raindrop14Index=0;
  }
  drawSprites();
}
