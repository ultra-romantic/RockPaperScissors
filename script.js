function computerChoice(){
    let num=Math.floor(Math.random() * 3) + 1;
    if(num===3){
        return "scissors";
    }else if(num===2){
        return "paper";
    }return "rock";
};

function playerSelection(){
    let user=prompt();
    user=user.toLowerCase();
    return user;
}

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

const maquina=computerChoice();
console.log("Computadora: " + maquina);
const jugador=playerSelection();
const resultado=singleRound(maquina,jugador);

/*console.log("Computadora: " + maquina);*/
console.log("Usuario: " + jugador);
console.log("Resultado: " + resultado);

