
var monkey , monkey_running
var banana1 ,banana1Image, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var back,backimage,natureimage;
var startbutton,startbuttonimage;
var gamestate="serve";
var nextbutton,nextbuttonimage;
var backbutton,backbuttonimage;
var car1,car2,car4;
var carGroup,rockgroup,rockimage,rockimage2;
var homebutton,homebuttonimage;
var woodenlog1,woodenlog2,woodenlog3,woodenlog4,woodenlogGroup;
var forestbackground;
var babyandmothermonkey,babyandmothermonkeyimage;
var wall;
var fruitsbasket,fruitsbasketimage,fruitsbasketgroup;
var bananagroup;
var energy1,energy1image;
var energy;
var cryingmonkey,cryingmonkeyimage,monkeysound;
var restart,restartimage,restart1;
var overr;
var monkeylaughing;
var carsound;
var leafybackground,leafybackground2;
var gameoversound,back1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

 monkeystop =loadAnimation("sprite_0.png")
  
  banana1Image = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

startbuttonimage=loadImage("start.png")
nextbuttonimage=loadImage("nextbutton.png")
backbuttonimage=loadImage("backbutton.png")
  
backimage=loadAnimation("city1.jpg")
  
car1=loadImage("car1.png");
car2=loadImage("car2.png")
car4=loadImage("car4.png")

natureimage=loadAnimation("waterfallbackground.png")
rockimage=loadAnimation("rock1.png")
rockimage2=loadImage("rock2.png")
  
homebuttonimage=loadImage("homebutton.png")
  
woodenlog1=loadImage("woodenlog1.png")
woodenlog2=loadImage("woodenlog2.png")
woodenlog3=loadImage("woodenlog3.png")
  woodenlog4=loadImage("woodenlog4.png")
  
forestbackground=loadAnimation("forestbackground.png")
  
leafybackground=loadAnimation("leafy.png")
leafybackground2=loadAnimation("leafybackground.png")


babyandmothermonkeyimage=loadImage("babyandmothermonkey.png")
  
fruitsbasketimage=loadImage("fruitsbasket2.png")
  
energy1image=loadImage("energy.png")
  
cryingmonkeyimage=loadImage("cryingmonkey.png")
  
restartimage=loadImage("r.png") 
  
monkeysound=loadSound("spidermonkey.mp3")

monkeylaughing=loadSound("mixkit-cartoon-monkey-laugh-100.wav")

carsound=loadSound("JeepChrkeHornHonks PE894601.mp3")
  
gameoversound=loadSound("gmo.mp3")
}



function setup() {
createCanvas(500,200) ;
  
  back1=createSprite(250,100,500,200);
back1.addAnimation("leafybackground2",leafybackground2);
back1.scale=0.7
  
  back=createSprite(250,100,500,200);
back.addAnimation("back",backimage);
back.addAnimation("back1",natureimage);
back.addAnimation("forest",forestbackground)
back.addAnimation("leafybackground",leafybackground)
back.velocityX=-4
back.visible=false; 

startbutton=createSprite(250,100,20,20);
startbutton.addImage(startbuttonimage)
startbutton.visible=false;

nextbutton=createSprite(430,170,20,20) ;
nextbutton.addImage(nextbuttonimage)
nextbutton.visible=false;
  
backbutton=createSprite(450,30,20,20);
backbutton.addImage(backbuttonimage);
backbutton.scale=0.3;
backbutton.visible=false;  
  
monkey=createSprite(60,150,30,30);
monkey.addAnimation( "monkey_running",monkey_running );
monkey.addAnimation( "monkeystop",monkeystop);
  monkey.scale=0.1;
monkey.visible=false;
  
ground=createSprite(150,190,700,30);
ground.shapeColor=("black");
ground.visible=false; 
//ground.debug=true;
  
wall=createSprite(495,100,1,200);
  wall.visible=false
  
 energy1=createSprite(390,50,10,10)
energy1.addImage(energy1image)
energy1.scale=0.06;
energy1.visible=false;
  
restart=createSprite(120,100,20,20)
restart.addImage(restartimage)
restart.scale=0.3;
  restart.visible=false;
  
restart1=createSprite(90,100,20,20)
restart1.addImage(restartimage)
restart1.scale=0.3;
  restart1.visible=false;
  
  
  
 overr=createSprite(250,100,20,20) 
overr.addImage(cryingmonkeyimage)
overr.scale=0.7
overr.visible=false;
  
babyandmothermonkey=createSprite(250,100,50,50);
 babyandmothermonkey.addImage( babyandmothermonkeyimage)
 babyandmothermonkey.scale=1.3;
 babyandmothermonkey.visible=false
  
carGroup=new Group()
rockgroup=new Group() 
woodenlogGroup=new Group() 
 bananagroup=new Group() 
fruitsbasketgroup=new Group() 
 score=0;
  energy=100;
life=3;
}


function draw() {
background("lightblue")
  

  
if(back.x<100){
 back.x=back.width/2 
  
}
  
if(gamestate==="serve"){

  startbutton.visible=true
nextbutton.visible=false;
backbutton.visible=false;
}

monkey.collide(ground)
drawSprites() ; 
  
  
  
if(score%1000===0&&score>0){
back.changeAnimation("back1",natureimage);
back.scale=0.8; 
ground.shapeColor=("green")
}
  

  
 if(keyDown("space")&&monkey.y>140){
monkey.velocityY=-14;
energy=energy-2;
}
monkey.velocityY=monkey.velocityY+0.7
  
if(mousePressedOver(startbutton)&&gamestate==="serve"){
gamestate="tell" 
}
  
if(gamestate==="tell"){
story()  ;
}
  
if(mousePressedOver(nextbutton)&&gamestate==="tell"){
gamestate="play" 
 back1.visible=false;
}

  if(mousePressedOver(backbutton)&&gamestate==="tell"){
gamestate="serve" 
}
  
if(gamestate==="play"){
begin();  
car();  
}
  
if(score%1300===0&&score>0){
gamestate="final"
  
}
  
if(gamestate==="final"){
back.changeAnimation("forest",forestbackground)  
rockgroup.destroyEach();
forest();
}
  
  
if(score%1000===0&&score>0){
gamestate="continue"
carGroup.destroyEach();
}
  
if(gamestate==="continue"){
back.changeAnimation("back1",natureimage)
waterfall() ;
ground.shapeColor=("green")  
}
  
if(gamestate==="play"||gamestate==="continue"||gamestate==="final"){
fill("black")
textSize(20)
score = score + Math.round(getFrameRate()/60);
text("score  :"+score,370,30)
 banana(); 
 basket();
energy1.visible=true;
  
fill("black")
text(" :"+energy,410,55)

}
  
if(score%2000===0&&score>0){
 back.changeAnimation("leafybackground",leafybackground)
back.velocityX=0;
back.x=250;
back.y=100;
monkey.visible=false;
energy1.visible=false;
ground.visible=false;

gamestate="anda";
babyandmothermonkey.visible=true;
  
}
  
if(gamestate==="anda"){
bananagroup.setLifetimeEach(-1)
rockgroup.setLifetimeEach(-1)
carGroup.setLifetimeEach(-1)
bananagroup.setVelocityEach(0,0)
rockgroup.setVelocityEach(0,0)
carGroup.setVelocityEach(0,0)
fruitsbasketgroup.setLifetimeEach(-1)
fruitsbasketgroup.setVelocityEach(0,0)  
restart.visible=false;
restart1.visible=true;

}
  
if(mousePressedOver(restart1)&&gamestate==="anda"){
babyandmothermonkey.visible=false;

restart1.visible=false;
monkey.changeAnimation( "monkey_running",monkey_running)
back.changeAnimation("back",backimage)
back.velocityX=-4
carGroup.destroyEach();
bananagroup.destroyEach();
fruitsbasketgroup.destroyEach();
rockgroup.destroyEach();
woodenlogGroup.destroyEach();
restart.visible=false;
overr.visible=false;
gamestate="play";
  score=0;
  energy=100;


  
}
  
if(score%200===0&&score>0&&rockgroup.isTouching(monkey)){
 gamestate="cry"
overr.visible=false;
  
}
if(gamestate==="end"){
back.destroy();
rockgroup.setVelocityEach(0,0);
found();
restart.visible=false;

}

if(bananagroup.isTouching(monkey)){
bananagroup.destroyEach();
energy=energy+1;
}
  
if(fruitsbasketgroup.isTouching(monkey)){
fruitsbasketgroup.destroyEach();
energy=energy+8;
}
  
if(carGroup.isTouching(monkey)||rockgroup.isTouching(monkey)||woodenlogGroup.isTouching(monkey)){
gamestate="cry"
gameoversound.play(); 
 
}
  
if(gamestate==="cry"){
back.velocityX=0;
monkey.changeAnimation("monkeystop",monkeystop)
bananagroup.setLifetimeEach(-1)
rockgroup.setLifetimeEach(0)
carGroup.setLifetimeEach(0)
bananagroup.setVelocityEach(0,0)
rockgroup.setVelocityEach(0,0)
carGroup.setVelocityEach(0,0)
fruitsbasketgroup.setLifetimeEach(-1)
fruitsbasketgroup.setVelocityEach(0,0)

energy1.visible=false;
restart.visible=true;
overr.visible=true;

if(score===200&&score>0){
restart.visible=false;
overr.visible=false;
}
}
  
if(mousePressedOver(restart)&&gamestate==="cry"){
monkey.changeAnimation( "monkey_running",monkey_running)
back.changeAnimation("back",backimage)
back.velocityX=-4
carGroup.destroyEach();
bananagroup.destroyEach();
fruitsbasketgroup.destroyEach();
rockgroup.destroyEach();
woodenlogGroup.destroyEach();
restart.visible=false;
overr.visible=false;
gamestate="play";
  score=0;
  energy=100;
}
}
  


function car(){
if(score%50===0&&score>0) {
carsound.play()
var car=createSprite(500,155,50,25);
car.velocityX=-(4 +score/100);
car.collide(ground)
//car.debug=true;
car.setCollider("rectangle",0,0,100,40)
 
carGroup.add(car)
car.lifetime=120;
  
var carimage=Math.round(random(1,3))

switch(carimage){
  case 1:car.addImage(car1) 
car.scale=0.5
  break;
case 2:car.addImage(car2) 
  car.scale=0.7
  break;  
case 3:car.addImage(car4)
  car.scale=0.5
  break;

}
  

if(gamestate==="serve"||gamestate==="tell"){
  car.visible=false;
}
} 


}

function waterfall(){

if(score%50===0&&score>0) {
var rock=createSprite(500,155,50,25);

rock.velocityX=-(4 +score/100);
rock.scale=0.8;
rock.collide(ground)
rockgroup.add(rock)
rock.lifetime=120;
//rock.debug=true  
rock.setCollider("circle",0,0,30)

rockimage10=Math.round(random(1,2))  
switch(rockimage10){
case 1 : rock.addAnimation("rock",rockimage)   
break;
case 2:rock.addImage(rockimage2)
break;    
}

  
if(gamestate==="end"){
rock.lifetime=0}
}}

function forest(){

if(score%100===0&&score>0) {
var woodenlog=createSprite(500,155,50,25);

woodenlog.velocityX=-(4 +score/100);
woodenlog.scale=0.8;
woodenlog.collide(ground)
woodenlogGroup.add(woodenlog)
woodenlog.lifetime=120;
//rock.debug=true  
woodenlog.setCollider("circle",0,0,30)

 var woodenlogimage10=Math.round(random(1,4))  
switch(woodenlogimage10){
case 1 : woodenlog.addImage(woodenlog1)  
break;
case 2:woodenlog.addImage(woodenlog2)
break; 
case 3:woodenlog.addImage(woodenlog3)
break;
case 4:woodenlog.addImage(woodenlog4)
break;
}
  
} 
}



function story(){
startbutton.visible=false;
nextbutton.visible=true; 
backbutton.visible=true; 
  
fill("black")
textSize(20)
text("A monkey has got lost from his mother",10,20)
text("and you have to help him reach his mother.",10,60)
text("you have to overcome all obstacles to help monkey.",10,100) 
text("if monkey walks 2000 km monkey",10,140);
text("would reach his mother. PRESS NEXT",10,180);
text("press next to start:",10,220);

}




function begin(){
monkey.visible=true  
nextbutton.visible=false; 
backbutton.visible=false;  
ground.visible=true;
back.visible=true;
  

}

function banana(){
if(score%30===0&&score>0)  {
banana1=createSprite(500,155,50,25)  
banana1.velocityX=-(4 +score/100);
banana1.collide(ground)
banana1.addImage( banana1Image ) 
 banana1.scale=0.1
bananagroup.add(banana1)
banana1.lifetime=120;  
}
  
}

function basket(){
if(score%70===0&&score>0)  {
fruitsbasket=createSprite(500,155,50,25)  
fruitsbasket.velocityX=-(4 +score/100);
fruitsbasket.collide(ground)
fruitsbasket.addImage( fruitsbasketimage ) 
fruitsbasket.scale=0.4
fruitsbasketgroup.add(fruitsbasket)
fruitsbasket.lifetime=120;  
}
  
}

