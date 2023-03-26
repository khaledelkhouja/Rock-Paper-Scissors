let bntRock=document.querySelector('#rock');
let bntPaper=document.querySelector('#paper');
let bntScissors=document.querySelector('#scissors');

let runScore=0;
let playerScore=0;                 //Variable initialization
let computerScore=0;
let drawScore=0;
let gameResult="";


bntRock.addEventListener('click',()=>{
    playerSelection="ROCK";
    computerSelection=undefined;
    game(playerSelection,computerSelection);
});
bntPaper.addEventListener('click',()=>{
    computerSelection=undefined;
    playerSelection="PAPER";
    game(playerSelection,computerSelection);
});
bntScissors.addEventListener('click',()=>{
    computerSelection=undefined;
    playerSelection="SCISSORS";
    game(playerSelection,computerSelection);
});


//gameOver function reset all value
function gameOver() {
    
    bntRock.disabled=true;
    bntPaper.disabled=true;
    bntScissors.disabled=true;

    setTimeout(function(){
        window.location.reload();
    }, 5000);
}




//Function that call playRound 5 times, keep score and reports winner or loser at the end.
function game() {
    
    let round=playRound(playerSelection,computerSelection);
    
    runScore++;
    let wins=round.includes("Win!");     //nbr of wins
    let loses=round.includes("Loose!");   //nbr of looses
    let draws=round.includes("draw");      //nbr of draws
    if (wins===true){
        playerScore++;
    } else if (loses===true){
        computerScore++;
    } else drawScore++;
    
    if (playerScore===5){                                        //Game result
        gameOver();
        gameResult="Congrats! you're the Winner.";
    } else if  (computerScore===5){
        gameOver();
        gameResult="Computer wins";
    }
    
    
    //print result
    document.getElementById("results").innerText=`Round result : ${round}`;
    document.getElementById("runningScore").innerText=`Running score : ${runScore}`;
    document.getElementById("drawScore").innerText=`Draw  : ${drawScore}`;
    document.getElementById("playerScore").innerText=`Player score : ${playerScore}`;
    document.getElementById("computerScore").innerText=`Computer score : ${computerScore}`;
    document.getElementById("winnerAnnounce").innerText=`Game result : ${gameResult}`;
} 

// function that return randomly rock paper or scissors
function getComputerChoice() { 
    let ComputerChoice="SCISSORS"
    let randomNumber=Math.random()*3;
    if (randomNumber<1){
        ComputerChoice="ROCK";
    } else if (randomNumber>=1 && randomNumber<2 ){
        ComputerChoice="PAPER";
    } 
    return ComputerChoice;
}
//function that play a single round and return the round result 
function playRound(playerSelection,computerSelection) {
    computerSelection=getComputerChoice();                                  // call function getComputer Choice
    let roundResult="";
    if (playerSelection===computerSelection) {
        roundResult="draw"
    } else {
        if (playerSelection==="ROCK" && computerSelection==="PAPER") {                      
            roundResult="You Loose! Paper beats Rock";
        }else if (playerSelection==="ROCK" && computerSelection==="SCISSORS") {
            roundResult="You Win! Rock beats Scissors";
        }else if (playerSelection==="PAPER" && computerSelection==="ROCK") {
            roundResult="You Win! Paper beats Rock";
        }else if (playerSelection==="PAPER" && computerSelection==="SCISSORS") {
            roundResult="You Loose! Scissors beats Paper";
        }else if (playerSelection==="SCISSORS" && computerSelection==="ROCK") {
            roundResult="You Loose! Rock beats Scissors";
        }else if (playerSelection==="SCISSORS" && computerSelection==="PAPER") {
            roundResult="You Win! Scissors beats Paper";
        }
    }
    return roundResult;
}