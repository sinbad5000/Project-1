const CHEATER = new Audio("music/gameover.ogg")
let cheat = true

const gameLoop = () =>{
    if(cheat){
    CHEATER.play();
    }
}

let gameTick = setInterval(gameLoop, 60)