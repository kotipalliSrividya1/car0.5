class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game")
        title.position(130,0);
         
        var button= createButton('h3');
        button.html("PLAY");
        button.position(250,200);

        var input=createInput("Name");
        input.position(150,170);

        var greetings=createElement('h2')
       
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var nameEntered=input.value();
            playerCount=playerCount+1;
            player.update(nameEntered);
            
             player.updateCount(playerCount);
            

            greetings.html("Hello! "+nameEntered);
            greetings.position(250,300);


        })
    }
}