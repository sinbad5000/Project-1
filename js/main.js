let movementDisplay = document.getElementById("movement");
let gameStatus = document.getElementById("btn")
let game = document.getElementById("game")
let level = document.getElementById("file")
const MusicLevel_1 = new Audio("music/01tune.ogg");
const deathSound = new Audio("music/Ouch01.ogg")
const winSound = new Audio("music/nextlevel.ogg")


game.width = 1728
game.height = 576

let ctx = game.getContext("2d")


function Crawler(x, y, color, width, height){
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.alive = true;
    this.render = function(){
        ctx.fillStyle = this.color 
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}

let hero = new Crawler(0, 192, "pink", 64, 64);
hero.catchySlogan = "f u";
let ogre = new Crawler(1472, 0, "green", 64, 64);
let bad = new Crawler(192, 0, "red", 64, 64);
let bad2 = new Crawler(832, 0, "red", 64, 64);
let bad3 = new Crawler(1152, 0, "red", 64, 64);
let bad4 = new Crawler(512, 0, "red", 64, 64);
let good = new Crawler(1664, 256, "gold", 64, 64);


const gameTick = () => {
    ctx.clearRect(0,0, game.width, game.height);
    movementDisplay.innerText = `X: ${hero.x} Y: ${hero.y}`;
    if(ogre.alive && bad.alive && bad2.alive && bad3.alive && bad4.alive && good.alive){
        detectHit()
        MusicLevel_1.play()
    } else {
        endGame()
        MusicLevel_1.pause();
    }
    hero.render()
    ogre.render()
    bad.render()
    bad2.render()
    bad3.render()
    bad4.render()
    good.render()
    
}

const detectHit = () =>{
    
    if(hero.x + hero.width > ogre.x 
        && hero.x < ogre.x + ogre.width
        && hero.y < ogre.y + ogre.height
        && hero.y + hero.height > ogre.y){
        ogre.alive = false;
        deathSound.play();
        gameStatus.innerText = "Restart?";
    }
    if(hero.x + hero.width > bad.x 
        && hero.x < bad.x + bad.width
        && hero.y < bad.y + bad.height
        && hero.y + hero.height > bad.y){
        bad.alive = false;
        deathSound.play();
        gameStatus.innerText = "Restart?";
    }
    if(hero.x + hero.width > bad2.x 
        && hero.x < bad2.x + bad2.width
        && hero.y < bad2.y + bad2.height
        && hero.y + hero.height > bad2.y){
        bad2.alive = false;
        deathSound.play();
        gameStatus.innerText = "Restart?";
    }
    if(hero.x + hero.width > bad3.x 
        && hero.x < bad3.x + bad3.width
        && hero.y < bad3.y + bad3.height
        && hero.y + hero.height > bad3.y){
        bad3.alive = false;
        deathSound.play();
        gameStatus.innerText = "Restart?";
    }
    if(hero.x + hero.width > bad4.x 
        && hero.x < bad4.x + bad4.width
        && hero.y < bad4.y + bad4.height
        && hero.y + hero.height > bad4.y){
        bad4.alive = false;
        deathSound.play();
        gameStatus.innerText = "Restart?";
    }
    if(hero.x + hero.width > good.x 
        && hero.x < good.x + good.width
        && hero.y < good.y + good.height
        && hero.y + hero.height > good.y){
        good.alive = false;
        winSound.play();
        level.action =  "./level2.html"
        gameStatus.innerText = "Click Level Complete!";
    }
}
const endGame = () => {
    clearInterval(gameLoop)
}

let gameLoop = setInterval(gameTick, 60)


const movementHandler = (e) => {
    switch (e.key){
        case "w": 
        hero.y -= 64;
        break;
        case "d": 
        hero.x += 64;
        break;
        case "s": 
        hero.y += 64;
        break;
        case "a": 
        hero.x -= 64;
        break;
        
    }
}

document.addEventListener("keydown", movementHandler)

let movement1 = () => {
    if(bad.y < 512 ){
    bad.y = bad.y + 64;
    } else{ bad.y = 0}
}
let movement2 = () => {
    if(bad2.y < 512 ){
        bad2.y = bad2.y + 64;
    } else{ bad2.y = 0}
}

let movement3 = () => {
    if(bad3.y < 512 ){
        bad3.y = bad3.y + 64;
    } else{ bad3.y = 0}
}

let movement4 = () => {
    if(bad4.y < 512 ){
            bad4.y = bad4.y + 64;
    } else{ bad4.y = 0}
}

let movementO = () => {
    if(ogre.y < 512 ){
        ogre.y = ogre.y + 64;
    } else{ ogre.y = 0}
}

setInterval(movement1, 800)
setInterval(movement2, 600)
setInterval(movement3, 400)
setInterval(movement4, 200)
setInterval(movementO, 100)


