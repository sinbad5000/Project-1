const titleSong = new Audio("music/bensound-ofeliasdream.mp3");
let song = true;


const gameTick = () => {
if(song){
    titleSong.play()
}
}
let gameLoop = setInterval(gameTick, 60)

gameLoop();