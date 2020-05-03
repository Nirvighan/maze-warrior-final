//import { text } from "body-parser";

//import { text } from "body-parser";

//import { text } from "body-parser";

var playerImage;
var keyImg;
var score = 0;

function preload() {

  playerImage = loadImage("player4.png");
  keyImg = loadImage("keyimg.jpg");




}

function setup() {

  //create the canvas
  createCanvas(displayWidth-500, displayHeight - 170);
  //createSprite(400, 200, 50, 50);

  //create the maze boundary
  object1 = createSprite(50, 100, 30, 1200);
  object2 = createSprite(685, 700, 1300, 30);
  object3 = createSprite(1350, 115, 30, 1200);
  object4 = createSprite(685, 10, 1300, 30);


  object5 = createSprite(125, 400, 125, 10);
  object6 = createSprite(550, 125, 10, 200);
  object7 = createSprite(510, 300, 500, 10);
  object8 = createSprite(190, 190, 10, 225);
  object9 = createSprite(240, 80, 100, 10);
  object10 = createSprite(295, 150, 10, 150);
  object11 = createSprite(365, 225, 150, 10);
  object12 = createSprite(440, 150, 10, 150);
  object13 = createSprite(375, 125, 10, 100);
  object14 = createSprite(240, 125, 10, 100);
  object15 = createSprite(265, 340, 10, 75);
  object16 = createSprite(120, 125, 30, 10);
  object17 = createSprite(120, 200, 30, 10);
  object18 = createSprite(120, 275, 30, 10);
  object19 = createSprite(690, 395, 10, 200);
  object20 = createSprite(620, 380, 150, 10);
  object21 = createSprite(550, 420, 10, 75);
  object22 = createSprite(500, 455, 100, 10);
  object23 = createSprite(295, 125, 10, 100);
  object24 = createSprite(445, 500, 10, 100);
  object25 = createSprite(365, 260, 100, 10);
  object26 = createSprite(500, 180, 10, 100);
  object27 = createSprite(230, 550, 150, 10);
  object28 = createSprite(250, 525, 10, 150);
  object29 = createSprite(350, 400, 100, 10);
  object30 = createSprite(300, 635, 150, 10);
  object31 = createSprite(1100, 80, 150, 10);
  object32 = createSprite(1025, 130, 10, 150);
  object33 = createSprite(950, 200, 150, 10);
  object34 = createSprite(880, 270, 10, 150);
  object35 = createSprite(880, 350, 150, 10);
  object36 = createSprite(750, 150, 250, 10);
  object37 = createSprite(750, 80, 150, 10);
  object38 = createSprite(900, 65, 10, 75);
  object39 = createSprite(925, 200, 10, 100);
  object40 = createSprite(1200, 300, 10, 150);
  object41 = createSprite(1200, 150, 150, 10);
  object42 = createSprite(1100, 400, 10, 200);
  object43 = createSprite(1100, 220, 100, 10);
  object44 = createSprite(1000, 300, 100, 10);
  object45 = createSprite(950, 450, 10, 100);
  object46 = createSprite(1200, 375, 100, 10);
  object47 = createSprite(1300, 300, 75, 10);
  object48 = createSprite(1250, 65, 10, 75);
  object49 = createSprite(600, 65, 10, 75);
  object50 = createSprite(700, 200, 10, 100);
  object51 = createSprite(630, 250, 50, 10);
  object52 = createSprite(650, 220, 10, 50);
  object53 = createSprite(800, 180, 10, 50);
  object54 = createSprite(775, 250, 50, 10);
  object55 = createSprite(110, 500, 10, 200);
  object56 = createSprite(775, 450, 10, 150);
  object57 = createSprite(750, 575, 200, 10);
  object58 = createSprite(650, 595, 10, 50);
  object59 = createSprite(850, 540, 10, 75);
  object60 = createSprite(870, 430, 75, 10);
  object61 = createSprite(1025, 440, 50, 10);
  object62 = createSprite(1080, 575, 230, 10);
  object63 = createSprite(1030, 545, 10, 65);
  object64 = createSprite(1190, 570, 10, 100);
  object65 = createSprite(1210, 450, 100, 10);
  object66 = createSprite(1250, 570, 10, 140);
  object67 = createSprite(900, 630, 300, 10);
  object68 = createSprite(520, 570, 10, 100);
  object69 = createSprite(610, 470, 10, 100);


  player = createSprite(100, 50, 20, 20);

  key = createSprite(1285, 650, 20, 20);


  object1.shapeColor = "white";
  object2.shapeColor = "white";
  object3.shapeColor = "white";
  object4.shapeColor = "white";

  object5.shapeColor = "yellow";
  object7.shapeColor = "yellow";
  object9.shapeColor = "yellow";
  object11.shapeColor = "yellow";
  object16.shapeColor = "yellow";
  object17.shapeColor = "yellow";
  object18.shapeColor = "yellow";
  object20.shapeColor = "yellow";
  object22.shapeColor = "yellow";
  object25.shapeColor = "yellow";
  object27.shapeColor = "yellow";
  object29.shapeColor = "yellow";
  object30.shapeColor = "yellow";
  object31.shapeColor = "yellow";
  object33.shapeColor = "yellow";
  object35.shapeColor = "yellow";
  object36.shapeColor = "yellow";
  object37.shapeColor = "yellow";
  object41.shapeColor = "yellow";
  object43.shapeColor = "yellow";
  object44.shapeColor = "yellow";
  object46.shapeColor = "yellow";
  object47.shapeColor = "yellow";
  object51.shapeColor = "yellow";
  object54.shapeColor = "yellow";
  object57.shapeColor = "yellow";
  object60.shapeColor = "yellow";
  object61.shapeColor = "yellow";
  object62.shapeColor = "yellow";
  object65.shapeColor = "yellow";
  object67.shapeColor = "yellow";


  object6.shapeColor = "yellow";
  object8.shapeColor = "yellow";
  object10.shapeColor = "yellow";
  object12.shapeColor = "yellow";
  object13.shapeColor = "yellow";
  object14.shapeColor = "yellow";
  object15.shapeColor = "yellow";
  object19.shapeColor = "yellow";
  object21.shapeColor = "yellow";
  object23.shapeColor = "yellow";
  object24.shapeColor = "yellow";
  object26.shapeColor = "yellow";
  object28.shapeColor = "yellow";
  object32.shapeColor = "yellow";
  object34.shapeColor = "yellow";
  object38.shapeColor = "yellow";
  object39.shapeColor = "yellow";
  object40.shapeColor = "yellow";
  object42.shapeColor = "yellow";
  object45.shapeColor = "yellow";
  object48.shapeColor = "yellow";
  object49.shapeColor = "yellow";
  object50.shapeColor = "yellow";
  object52.shapeColor = "yellow";
  object53.shapeColor = "yellow";
  object55.shapeColor = "yellow";
  object56.shapeColor = "yellow";
  object58.shapeColor = "yellow";
  object59.shapeColor = "yellow";
  object63.shapeColor = "yellow";
  object64.shapeColor = "yellow";
  object66.shapeColor = "yellow";
  object68.shapeColor = "yellow";
  object69.shapeColor = "yellow";
  //object6.shapeColor = "yellow";

  player.shapeColor = "blue";


  player.addImage(playerImage);
  player.scale = 0.2;

  key.addImage(keyImg);
  key.scale = 0.12;


  enemy1 = createSprite(430, 400, 20, 20);
  enemy2 = createSprite(900, 120, 20, 20);
  enemy3 = createSprite(1100, 550, 20, 20);
  enemy4 = createSprite(730,330,20,20);

  enemy1.shapeColor = "red";
  enemy2.shapeColor = "red";
  enemy3.shapeColor = "red";
  enemy4.shapeColor = "red";

  enemy1.velocityX = 3;
  enemy1.velocityY = 2;

  enemy2.velocityX = 3;
  enemy2.velocityY = 2;

  enemy3.velocityX = 3;
  enemy3.velocityY = 2;

  enemy4.velocityX = 3;
  enemy4.velocityY = 2;



}

function draw() {

  //clear the background
  background(0);


 textSize(30);
 textFont("Georgia");
 fill("white");
 text("SCORE " + score , 1000,750)




  if (keyDown(LEFT_ARROW)) {

    player.velocityX = -3;
    player.velocityY = 0
  } else if (keyDown(RIGHT_ARROW)) {
    //player.position(1, 0);
    player.velocityX = 3;
    player.velocityY = 0
  } else if (keyDown(UP_ARROW)) {
    // player.position(0, -1);
    player.velocityX = 0;
    player.velocityY = -3;
  } else if (keyDown(DOWN_ARROW)) {
    //player.position(0, +1);
    player.velocityX = 0;
    player.velocityY = 3;
  }


  // player.collide(object1);
  // player.collide(object2);
  // player.collide(object3);
  // player.collide(object4);
  player.collide(object5);
  player.collide(object6);
  player.collide(object7);
  player.collide(object8);
  player.collide(object9);
  player.collide(object10);
  player.collide(object11);
  player.collide(object12);
  player.collide(object13);
  player.collide(object14);
  player.collide(object15);
  player.collide(object16);
  player.collide(object17);
  player.collide(object18);
  player.collide(object19);
  player.collide(object20);
  player.collide(object21);
  player.collide(object22);
  player.collide(object23);
  player.collide(object24);
  player.collide(object25);
  player.collide(object26);
  player.collide(object27);
  player.collide(object28);
  player.collide(object29);
  player.collide(object30);
  player.collide(object31);
  player.collide(object32);
  player.collide(object33);
  player.collide(object34);
  player.collide(object35);
  player.collide(object36);
  player.collide(object37);
  player.collide(object38);
  player.collide(object39);
  player.collide(object40);
  player.collide(object41);
  player.collide(object42);
  player.collide(object43);
  player.collide(object44);
  player.collide(object45);
  player.collide(object46);
  player.collide(object47);
  player.collide(object48);
  player.collide(object49);
  player.collide(object50);
  player.collide(object51);
  player.collide(object52);
  player.collide(object53);
  player.collide(object54);
  player.collide(object55);
  player.collide(object56);
  player.collide(object57);
  player.collide(object58);
  player.collide(object59);
  player.collide(object60);
  player.collide(object61);
  player.collide(object62);
  player.collide(object63);
  player.collide(object64);
  player.collide(object65);
  player.collide(object66);
  player.collide(object67);
  player.collide(object68);
  player.collide(object69);

  enemy1.bounceOff(object1);
  enemy1.bounceOff(object2);
  enemy1.bounceOff(object3);
  enemy1.bounceOff(object4);
  enemy1.bounceOff(object5);
  enemy1.bounceOff(object6);
  enemy1.bounceOff(object7);
  enemy1.bounceOff(object8);
  enemy1.bounceOff(object9);
  enemy1.bounceOff(object10);
  enemy1.bounceOff(object11);
  enemy1.bounceOff(object12);
  enemy1.bounceOff(object13);
  enemy1.bounceOff(object14);
  enemy1.bounceOff(object15);
  enemy1.bounceOff(object16);
  enemy1.bounceOff(object17);
  enemy1.bounceOff(object18);
  enemy1.bounceOff(object19);
  enemy1.bounceOff(object20);
  enemy1.bounceOff(object21);
  enemy1.bounceOff(object22);
  enemy1.bounceOff(object23);
  enemy1.bounceOff(object24);
  enemy1.bounceOff(object25);
  enemy1.bounceOff(object26);
  enemy1.bounceOff(object27);
  enemy1.bounceOff(object28);
  enemy1.bounceOff(object29);
  enemy1.bounceOff(object29);
  enemy1.bounceOff(object30);
  enemy1.bounceOff(object31);
  enemy1.bounceOff(object32);
  enemy1.bounceOff(object33);
  enemy1.bounceOff(object34);
  enemy1.bounceOff(object35);
  enemy1.bounceOff(object36);
  enemy1.bounceOff(object37);
  enemy1.bounceOff(object38);
  enemy1.bounceOff(object39);
  enemy1.bounceOff(object40);
  enemy1.bounceOff(object41);
  enemy1.bounceOff(object42);
  enemy1.bounceOff(object43);
  enemy1.bounceOff(object44);
  enemy1.bounceOff(object45);
  enemy1.bounceOff(object46);
  enemy1.bounceOff(object47);
  enemy1.bounceOff(object48);
  enemy1.bounceOff(object49);
  enemy1.bounceOff(object50);
  enemy1.bounceOff(object51);
  enemy1.bounceOff(object52);
  enemy1.bounceOff(object53);
  enemy1.bounceOff(object54);
  enemy1.bounceOff(object55);
  enemy1.bounceOff(object56);
  enemy1.bounceOff(object57);
  enemy1.bounceOff(object58);
  enemy1.bounceOff(object59);
  enemy1.bounceOff(object60);
  enemy1.bounceOff(object61);
  enemy1.bounceOff(object62);
  enemy1.bounceOff(object63);
  enemy1.bounceOff(object64);
  enemy1.bounceOff(object65);
  enemy1.bounceOff(object66);
  enemy1.bounceOff(object67);
  enemy1.bounceOff(object68);
  enemy1.bounceOff(object69);


  enemy2.bounceOff(object1);
  enemy2.bounceOff(object2);
  enemy2.bounceOff(object3);
  enemy2.bounceOff(object4);
  enemy2.bounceOff(object5);
  enemy2.bounceOff(object6);
  enemy2.bounceOff(object7);
  enemy2.bounceOff(object8);
  enemy2.bounceOff(object9);
  enemy2.bounceOff(object10);
  enemy2.bounceOff(object11);
  enemy2.bounceOff(object12);
  enemy2.bounceOff(object13);
  enemy2.bounceOff(object14);
  enemy2.bounceOff(object15);
  enemy2.bounceOff(object16);
  enemy2.bounceOff(object17);
  enemy2.bounceOff(object18);
  enemy2.bounceOff(object19);
  enemy2.bounceOff(object20);
  enemy2.bounceOff(object21);
  enemy2.bounceOff(object22);
  enemy2.bounceOff(object23);
  enemy2.bounceOff(object24);
  enemy2.bounceOff(object25);
  enemy2.bounceOff(object26);
  enemy2.bounceOff(object27);
  enemy2.bounceOff(object28);
  enemy2.bounceOff(object29);
  enemy2.bounceOff(object29);
  enemy2.bounceOff(object30);
  enemy2.bounceOff(object31);
  enemy2.bounceOff(object32);
  enemy2.bounceOff(object33);
  enemy2.bounceOff(object34);
  enemy2.bounceOff(object35);
  enemy2.bounceOff(object36);
  enemy2.bounceOff(object37);
  enemy2.bounceOff(object38);
  enemy2.bounceOff(object39);
  enemy2.bounceOff(object40);
  enemy2.bounceOff(object41);
  enemy2.bounceOff(object42);
  enemy2.bounceOff(object43);
  enemy2.bounceOff(object44);
  enemy2.bounceOff(object45);
  enemy2.bounceOff(object46);
  enemy2.bounceOff(object47);
  enemy2.bounceOff(object48);
  enemy2.bounceOff(object49);
  enemy2.bounceOff(object50);
  enemy2.bounceOff(object51);
  enemy2.bounceOff(object52);
  enemy2.bounceOff(object53);
  enemy2.bounceOff(object54);
  enemy2.bounceOff(object55);
  enemy2.bounceOff(object56);
  enemy2.bounceOff(object57);
  enemy2.bounceOff(object58);
  enemy2.bounceOff(object59);
  enemy2.bounceOff(object60);
  enemy2.bounceOff(object61);
  enemy2.bounceOff(object62);
  enemy2.bounceOff(object63);
  enemy2.bounceOff(object64);
  enemy2.bounceOff(object65);
  enemy2.bounceOff(object66);
  enemy2.bounceOff(object67);
  enemy2.bounceOff(object68);
  enemy2.bounceOff(object69);


  enemy3.bounceOff(object1);
  enemy3.bounceOff(object2);
  enemy3.bounceOff(object3);
  enemy3.bounceOff(object4);
  enemy3.bounceOff(object5);
  enemy3.bounceOff(object6);
  enemy3.bounceOff(object7);
  enemy3.bounceOff(object8);
  enemy3.bounceOff(object9);
  enemy3.bounceOff(object10);
  enemy3.bounceOff(object11);
  enemy3.bounceOff(object12);
  enemy3.bounceOff(object13);
  enemy3.bounceOff(object14);
  enemy3.bounceOff(object15);
  enemy3.bounceOff(object16);
  enemy3.bounceOff(object17);
  enemy3.bounceOff(object18);
  enemy3.bounceOff(object19);
  enemy3.bounceOff(object20);
  enemy3.bounceOff(object21);
  enemy3.bounceOff(object22);
  enemy3.bounceOff(object23);
  enemy3.bounceOff(object24);
  enemy3.bounceOff(object25);
  enemy3.bounceOff(object26);
  enemy3.bounceOff(object27);
  enemy3.bounceOff(object28);
  enemy3.bounceOff(object29);
  enemy3.bounceOff(object29);
  enemy3.bounceOff(object30);
  enemy3.bounceOff(object31);
  enemy3.bounceOff(object32);
  enemy3.bounceOff(object33);
  enemy3.bounceOff(object34);
  enemy3.bounceOff(object35);
  enemy3.bounceOff(object36);
  enemy3.bounceOff(object37);
  enemy3.bounceOff(object38);
  enemy3.bounceOff(object39);
  enemy3.bounceOff(object40);
  enemy3.bounceOff(object41);
  enemy3.bounceOff(object42);
  enemy3.bounceOff(object43);
  enemy3.bounceOff(object44);
  enemy3.bounceOff(object45);
  enemy3.bounceOff(object46);
  enemy3.bounceOff(object47);
  enemy3.bounceOff(object48);
  enemy3.bounceOff(object49);
  enemy3.bounceOff(object50);
  enemy3.bounceOff(object51);
  enemy3.bounceOff(object52);
  enemy3.bounceOff(object53);
  enemy3.bounceOff(object54);
  enemy3.bounceOff(object55);
  enemy3.bounceOff(object56);
  enemy3.bounceOff(object57);
  enemy3.bounceOff(object58);
  enemy3.bounceOff(object59);
  enemy3.bounceOff(object60);
  enemy3.bounceOff(object61);
  enemy3.bounceOff(object62);
  enemy3.bounceOff(object63);
  enemy3.bounceOff(object64);
  enemy3.bounceOff(object65);
  enemy3.bounceOff(object66);
  enemy3.bounceOff(object67);
  enemy3.bounceOff(object68);
  enemy3.bounceOff(object69);


  enemy4.bounceOff(object1);
  enemy4.bounceOff(object2);
  enemy4.bounceOff(object3);
  enemy4.bounceOff(object4);
  enemy4.bounceOff(object5);
  enemy4.bounceOff(object6);
  enemy4.bounceOff(object7);
  enemy4.bounceOff(object8);
  enemy4.bounceOff(object9);
  enemy4.bounceOff(object10);
  enemy4.bounceOff(object11);
  enemy4.bounceOff(object12);
  enemy4.bounceOff(object13);
  enemy4.bounceOff(object14);
  enemy4.bounceOff(object15);
  enemy4.bounceOff(object16);
  enemy4.bounceOff(object17);
  enemy4.bounceOff(object18);
  enemy4.bounceOff(object19);
  enemy4.bounceOff(object20);
  enemy4.bounceOff(object21);
  enemy4.bounceOff(object22);
  enemy4.bounceOff(object23);
  enemy4.bounceOff(object24);
  enemy4.bounceOff(object25);
  enemy4.bounceOff(object26);
  enemy4.bounceOff(object27);
  enemy4.bounceOff(object28);
  enemy4.bounceOff(object29);
  enemy4.bounceOff(object29);
  enemy4.bounceOff(object30);
  enemy4.bounceOff(object31);
  enemy4.bounceOff(object32);
  enemy4.bounceOff(object33);
  enemy4.bounceOff(object34);
  enemy4.bounceOff(object35);
  enemy4.bounceOff(object36);
  enemy4.bounceOff(object37);
  enemy4.bounceOff(object38);
  enemy4.bounceOff(object39);
  enemy4.bounceOff(object40);
  enemy4.bounceOff(object41);
  enemy4.bounceOff(object42);
  enemy4.bounceOff(object43);
  enemy4.bounceOff(object44);
  enemy4.bounceOff(object45);
  enemy4.bounceOff(object46);
  enemy4.bounceOff(object47);
  enemy4.bounceOff(object48);
  enemy4.bounceOff(object49);
  enemy4.bounceOff(object50);
  enemy4.bounceOff(object51);
  enemy4.bounceOff(object52);
  enemy4.bounceOff(object53);
  enemy4.bounceOff(object54);
  enemy4.bounceOff(object55);
  enemy4.bounceOff(object56);
  enemy4.bounceOff(object57);
  enemy4.bounceOff(object58);
  enemy4.bounceOff(object59);
  enemy4.bounceOff(object60);
  enemy4.bounceOff(object61);
  enemy4.bounceOff(object62);
  enemy4.bounceOff(object63);
  enemy4.bounceOff(object64);
  enemy4.bounceOff(object65);
  enemy4.bounceOff(object66);
  enemy4.bounceOff(object67);
  enemy4.bounceOff(object68);
  enemy4.bounceOff(object69);


  
  createEdgeSprites();

  if(player.isTouching(enemy1))
  {
   enemy1.destroy();
   score = score + 200;

  }

  if(player.isTouching(enemy2))
  {
   enemy2.destroy();
   score = score + 200;

  }

  if(player.isTouching(enemy3))
  {
   enemy3.destroy();
   score = score + 200;

  }


  if(player.isTouching(enemy4))
  {
   enemy4.destroy();
   score = score + 200;

  }

  if(player.isTouching(key) && score === 800)
  {
     key.x = 500;
     key.y = 775;
     fill("blue");
     text("YOU WIN!" , 500,500)

  } else
  {
    key.x = 1285;
    key.y = 650;
    text("First kill all the monsters" , 500,750)

  }

  if(player.collide(object1))
  {
     player.destroy();
     enemy1.velocityX = null;
     enemy1.velocityY = null;
     enemy2.velocityX = null;
     enemy2.velocityY = null;
     enemy3.velocityX = null;
     enemy3.velocityY = null;
     enemy4.velocityX = null;
     enemy4.velocityY = null;
     text("YOU LOSE !" , 500 ,400);


  } else if(player.collide(object2))
  {

    player.destroy();
     enemy1.velocityX = null;
     enemy1.velocityY = null;
     enemy2.velocityX = null;
     enemy2.velocityY = null;
     enemy3.velocityX = null;
     enemy3.velocityY = null;
     enemy4.velocityX = null;
     enemy4.velocityY = null;
     text("YOU LOSE !" , 500 ,400);

  } else if(player.collide(object3))
  {

    player.destroy();
    enemy1.velocityX = null;
    enemy1.velocityY = null;
    enemy2.velocityX = null;
    enemy2.velocityY = null;
    enemy3.velocityX = null;
    enemy3.velocityY = null;
    enemy4.velocityX = null;
    enemy4.velocityY = null;
    text("YOU LOSE !" , 500 ,400);

  } else if(player.collide(object4))
  {

    player.destroy();
    
    
  
      player.destroy();
      enemy1.velocityX = null;
      enemy1.velocityY = null;
      enemy2.velocityX = null;
      enemy2.velocityY = null;
      enemy3.velocityX = null;
      enemy3.velocityY = null;
      enemy4.velocityX = null;
      enemy4.velocityY = null;
      text("YOU LOSE !" , 500 ,400);
  
    
  }
  
  
  
  
  
  


  


  //create draw sprites
  drawSprites();
}