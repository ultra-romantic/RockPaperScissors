//globalDeclarations
let userPoints=0, machinePoints=0;
let round=1;
let logArray=[];

//buttonReferences
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnRestart = document.querySelector("#restart");

//matchLog
const matchLog = document.querySelector(".matchLog");
const ulLog = document.createElement("ul");
matchLog.appendChild(ulLog);

//computerChoice
function computerChoice(){
    let num=Math.floor(Math.random() * 3) + 1;
    if(num===3){
        return "scissors";
    }else if(num===2){
        return "paper";
    }return "rock";
};

//playsSingleRound
function singleRound(computerChoice,userChoice){
    if(computerChoice===userChoice){
        return document.querySelector("#roundText").textContent="Empate entre los dos jugadores";
    }else if (computerChoice==="paper" && userChoice==="rock"){
        return document.querySelector("#roundText").textContent="Perdiste, el papel le gana a la piedra";
    }else if (computerChoice==="rock" && userChoice==="paper"){
        return document.querySelector("#roundText").textContent="Ganaste, el papel le gana a la piedra";
    }else if (computerChoice==="scissors" && userChoice==="paper"){
        return document.querySelector("#roundText").textContent="Perdiste, las tijeras le ganan al papel";
    }else if (computerChoice==="paper" && userChoice==="scissors"){
        return document.querySelector("#roundText").textContent="Ganaste, las tijeras le ganan al papel";
    }else if (computerChoice==="scissors" && userChoice==="rock"){
        return document.querySelector("#roundText").textContent="Ganaste, la roca le gana a las tijeras";
    }else if (computerChoice==="rock" && userChoice==="scissors"){
        return document.querySelector("#roundText").textContent="Perdiste, la roca le gana a las tijeras";
    }
};

//playsGame
function game(){
    let resultadoRonda;
    let playerSelection=this.dataset.button;
    resultadoRonda=singleRound(computerChoice(),playerSelection);
    let firstLetter=resultadoRonda.charAt(0);
    if(firstLetter!=="E"){
        if(firstLetter==="G"){
            userPoints++;
        }else if (firstLetter==="P"){
            machinePoints++;
        } 
    }

    logArray.push(`Round ${round}: ${resultadoRonda} | User points: ${userPoints} | Machine points: ${machinePoints}`);
    const logLi = document.createElement("li");
    logLi.textContent = logArray[(logArray.length)-1];
    ulLog.insertAdjacentElement("afterbegin", logLi);

    document.querySelector("#playerPoints").textContent=userPoints;
    document.querySelector("#machinePoints").textContent=machinePoints;
    document.querySelector("#roundText").textContent=resultadoRonda;
    if(machinePoints>=5 || userPoints>=5){
        btnRock.setAttribute("disabled","disabled");
        btnPaper.setAttribute("disabled","disabled");
        btnScissors.setAttribute("disabled","disabled");
    }
    round++;
}

//eventListeners
btnRock.addEventListener('click', game);
btnPaper.addEventListener('click', game);
btnScissors.addEventListener('click', game);
btnRestart.addEventListener('click', e => { //restartsGame
    userPoints=0;
    machinePoints=0;
    document.querySelector("#playerPoints").textContent=userPoints;
    document.querySelector("#machinePoints").textContent=machinePoints;
    document.querySelector("#roundText").textContent="";
})




