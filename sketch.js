var database;
var gameState =0;
var playerCount;
var allPlayers;
var player, form,game;

var player1,player2;
var players;
var player_img;
var player_img2;

//obstacles variable
var monster_img;
var confidence = 0;

var allplayers;
var wallGroup,mad1Group;


function preload(){
  player_img = loadImage("person1.png");
  player_img2 = loadImage("person2.png");
  monster_img = loadImage("monsters.png");
 
}
function setup() {
  createCanvas(displayWidth-100, displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  wallGroup = new Group();
  mad1Group=new Group();
}

function draw() {
  background("white");
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
