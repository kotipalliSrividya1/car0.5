var ball;
var database;
var position;
var form,gameState=0,player;
var playerCount=0;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game = new Game();
    game.start();
    game.getState();
}

function draw(){
   
}

