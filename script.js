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

function game(){
    let puntosJugador=0,puntosMaquina=0;
    let maquina, jugador, resultadoRonda;
    for(let i=1;i<=5;i++){
        maquina=computerChoice();
        jugador=playerSelection();
        resultadoRonda=singleRound(maquina,jugador);
        console.log(resultadoRonda);
        if(resultadoRonda.charAt(0)==="G"){
            puntosJugador++;
        }else if (resultadoRonda.charAt(0)==="P"){
            puntosMaquina++;
        }
    }
    if(puntosJugador===puntosMaquina){
        console.log("EMPATE");
        console.log("Puntos Jugador: " + puntosJugador);
        console.log("Puntos Maquina: " + puntosMaquina);
    }else if (puntosJugador>puntosMaquina){
        console.log("Ganador: Jugador");
        console.log("Puntos Jugador: " + puntosJugador);
        console.log("Puntos Maquina: " + puntosMaquina);
    }else if(puntosMaquina>puntosJugador){
        console.log("Ganador: Maquina");
        console.log("Puntos Jugador: " + puntosJugador);
        console.log("Puntos Maquina: " + puntosMaquina);
    }
}

game();

/*
const maquina=computerChoice();
console.log("Computadora: " + maquina);
const jugador=playerSelection();
const resultado=singleRound(maquina,jugador);

console.log("Computadora: " + maquina);
console.log("Usuario: " + jugador);
console.log("Resultado: " + resultado);*/

