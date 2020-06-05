var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var runners,runner1,runner2,runner3,runner4;
var invisibleGround1,invisibleGround2;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,window.innerHeight);
   
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
game.end();

  }

}
