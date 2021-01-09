var form,player,game;
var canvas,database;
var gameState=0;
var playerCount;

function setup(){
  canvas =createCanvas(500,500) 
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
}