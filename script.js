function computerChoice(){
    let num=Math.floor(Math.random() * 3) + 1;
    if(num===3){
        return "scissors";
    }else if(num===2){
        return "paper";
    }return "rock";
};

function singleRound(computerChoice,userChoice){
    if(computerChoice===userChoice){
        return "Empate entre los dos jugadores";
    }else if (computerChoice==="paper" && userChoice==="rock"){
        return "Perdiste, el papel le gana a la piedra";
    }else if (computerChoice==="rock" && userChoice==="paper"){
        return "Ganaste, el papel le gana a la piedra";
    }else if (computerChoice==="scissors" && userChoice==="paper"){
        return "Perdiste, las tijeras le ganan al papel";
    }else if (computerChoice==="paper" && userChoice==="scissors"){
        return "Ganaste, las tijeras le ganan al papel";
    }else if (computerChoice==="scissors" && userChoice==="rock"){
        return "Ganaste, la roca le gana a las tijeras";
    }else if (computerChoice==="rock" && userChoice==="scissors"){
        return "Perdiste, la roca le gana a las tijeras";
    }
};

//partida
function game(playerSelection){
    let puntosJugador=0,puntosMaquina=0,resultadoRonda;

    resultadoRonda=singleRound(computerChoice(),playerSelection);
    console.log(resultadoRonda);
    if(resultadoRonda.charAt(0)==="G"){
        puntosJugador++;
    }else if (resultadoRonda.charAt(0)==="P"){
        puntosMaquina++;
    }
}

//eventListeners
const btnRock = document.querySelector("#rock");
btnRock.addEventListener('click', e => {
    let userChoice='rock';
    game(userChoice);
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener('click', e => {
    let userChoice='paper';
    game(userChoice);
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener('click', e => {
    let userChoice='scissors';
    game(userChoice);
});

