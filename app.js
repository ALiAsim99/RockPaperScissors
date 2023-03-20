let playerScore=0
let computerScore=0
const getComputerChoice=()=>{
const choices=["Rock","Paper","Scissors"]
let choice=choices[Math.floor(Math.random()*choices.length)]
return choice

}
function playRound(playerChoice,computerChoice,){
    
    playerChoice=playerChoice.toLowerCase()
    computerChoice=computerChoice.toLowerCase()
    console.log(playerChoice,computerChoice)

    if (playerChoice==computerChoice){
        console.log(`Draw \n Scores: Player: ${playerScore} Computer : ${computerScore}`)
    }
    else if((playerChoice=="rock" && computerChoice=="scissors") ||
    (playerChoice=="paper" && computerChoice=="rock") ||
    (playerChoice=="scissors" && computerChoice=="paper"))    
    {
        playerScore+=1
        console.log (`Player Wins\n Scores: Player: ${playerScore} Computer : ${computerScore}`)
        
    }
    else {
        computerScore+=1
        console.log(`Computer Wins\n Scores: Player: ${playerScore} Computer : ${computerScore}`)
    }    
    
}



function game(){
    let computerChoice=getComputerChoice()
    
    let playerChoice=""
    while (playerChoice!="rock" && playerChoice!="paper" && playerChoice!='scissors'){
    playerChoice=prompt("Select your weapon").toLowerCase()
    }

    playRound(playerChoice,computerChoice)
}

for (i=0;i<5;i++){
    game()
}

if (playerScore>computerScore){
    console.log(`player Won\n Final Scores: Player: ${playerScore} Computer : ${computerScore}`)
}
else if(computerScore>playerScore){
    console.log(`Computer Won \n Final Scores: Player: ${playerScore} Computer : ${computerScore}`)
}   
else {
    console.log("draw")
}
