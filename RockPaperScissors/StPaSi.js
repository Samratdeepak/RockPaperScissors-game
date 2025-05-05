let userScore=0;
let compScore=0;
let matches=0;
let draw=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const matchPlayedPara=document.querySelector("#match-played");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");
const drawPara=document.querySelector("#draw");

const drawGame=()=>{
    draw++;
    drawPara.innerText=draw;
    msg.innerText="Game Draw ! Play Again";
    msg.style.backgroundColor="orangered";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    matches++;
    matchPlayedPara.innerText=matches;
    if(userChoice===compChoice)
        drawGame();
    else{
        let userWin=true;
        if(userChoice=="rock")
            userWin=compChoice==="paper"?false:true;
        else if(userChoice==="paper")
            userWin=compChoice==="scissors"?false:true;
        else
        userWin=compChoice==="rock"?false:true;
    showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});