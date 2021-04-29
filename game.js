class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
        console.log("gameState is:"+gameStateRef)

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
                
            }

          

    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img2);
    players=[player1,player2];
    //createWallPuzzle();
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                fill("white");
                 text(mouseX+","+mouseY,mouseX,mouseY);
                 var x =525;
                 var y;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     y = allPlayers[plr].playerY;
                     x = allPlayers[plr].playerX;
                     
                     players[index-1].x = x;
                     players[index-1].y = y;
                      
                     
                     fill("black");
                     textSize(20);
                     text("START POSITION:",10,20)
                     text("Player 1 :" +allPlayers.player1.confidence,650,24);
                     text("Player 2 :" + allPlayers.player2.confidence, 850, 24);
     
                 
                 }
                 if(keyIsDown(UP_ARROW)&& player.index != null)
                 {
                     console.log("It worked!");
                     player.playerY = player.playerY-2;
                     player.update();
                 }
                 if(keyIsDown(DOWN_ARROW)&& player.index != null)
                 {
                     player.playerY = player.playerY+2;
                     player.update();
                 }
                 if(keyIsDown(RIGHT_ARROW)&& player.index != null)
                 {
                     player.playerX = player.playerX+2;
                     player.update();
                 }
                 if(keyIsDown(LEFT_ARROW)&& player.index != null)
                 {
                     player.playerX = player.playerX-2;
                     player.update();
                 }
                
                 //write code here to spawn obstacles-good ,bad
                 if (frameCount % 20 === 0) 
                 {
                    var mad1 = createSprite(435, 350,40,10);
                    mad1.addImage(monster_img);
                    mad1.y=Math.round(random(100, 600));
                    mad1.x=Math.round(random(100, 1000));

                    mad1Group.add(mad1);
                 }
            


                 if (player.index !== null)
                 {
                     //hitting the obstacle code
                    
                 }
                }
                end()
                {
                    imageMode(CENTER);
                    Player.getPlayerInfo();  
                    console.log("Game Ended");
                    fill("red");
                    textAlign(CENTER);
                    textSize(50);
                }
            }

function createWallPuzzle()
{

 console.log("WALL CREATED")

}