var target = 30;
var player1 = 0;
var player2 = 0;
var chance = 1;

function rollDice(){
    var dice = Math.floor(Math.random()*6)+1;
    console.log("dice : "+dice);
    document.getElementById('d').innerText = dice
    if(chance !==0 && chance%2 !== 0){
        player1 = player1 + dice;
        console.log("player1 : "+player1);
        document.getElementById('p1').innerText = player1;
        if(player1 >= target){
            console.log("player1 : win");
            document.getElementById('out').innerText = "Congratulations! Player 1 you win.";
            chance = 0;
        }
        else{
            chance++;
            console.log("player2 : turn");
            document.getElementById('out').innerText = "It's Player 2's turn.";
        }
    }
    else if(chance !==0 && chance%2 === 0){
        player2 = player2 + dice;
        console.log("player2 : "+player2);
        document.getElementById('p2').innerText = player2;
        if(player2 >= target){
            console.log("player2 : win");
            document.getElementById('out').innerText = "Congratulations! Player 2 you win.";
            chance=0;
        }
        else{
            chance++;
            console.log("player1 : turn");
            document.getElementById('out').innerText = "It's Player 1's turn.";
        }
    }
}