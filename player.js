class Player{
    constructor(){}

    update(name){
        var playerIndexDB="player"+playerCount;
        database.ref(playerIndexDB).set({
            name:name
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }

    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }
}