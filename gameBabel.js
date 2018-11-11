const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 256;
canvas.height = 256;
document.body.appendChild(canvas);

let bgReady = false;
const bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = 'imagens/background.png';

let heroReady = false
const heroImage = new Image()
heroImage.onload = function () {
    heroReady = true
}
heroImage.src = 'imagens/hero.png'

let monsterReady = false
const monsterImage = new Image()
monsterImage.onload = function () {
    monsterReady = true
}
monsterImage.src = 'imagens/monster.png'

const hero = {
    speed: 256
}
const monster = {}
let monstersCaught = 0

const keysDown = {}
window.addEventListener('keydown', function (e) {
    console.log(e)
    keysDown[e.keyCode] = true
}, false)

window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode]
}, false);

const reset = function () {
    hero.x = canvas.width / 8
    hero.y = canvas.height / 8

    monster.x = 16 + (Math.random() * (canvas.width - 32))
    monster.y = 16 + (Math.random() * (canvas.width - 32))
}

const update = function (modifier) {
    if (38 in keysDown) {//Cima
        hero.y -= hero.speed * modifier
    }
    if (40 in keysDown) {//Baixo
        hero.y += hero.speed * modifier
    }
    if (37 in keysDown) {//Esquerda
        hero.y -= hero.speed * modifier
    }
    if (39 in keysDown) {//Direita
        hero.y += hero.speed * modifier
    }
    
    if (
        hero.x <= (monster.x + 16) && monster.x <= (hero.x + 16) 
        && hero.y <= (monster.y + 16) && monster.y <= (hero.y + 16)
    ) {
        ++monstersCaught
        reset()
    }
}

const render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0)
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y)
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y)
    }

    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.font = '16px Helvetica'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('Monstros pegos: ' + monstersCaught, 32, 32)
}

//Loop do jogo em sí
const main = function () {
    const now = Date.now()
    const delta = now - then

    update(delta / 1000)
    render()

    then = now

    requestAnimationFrame(main)
}

const w = window
const requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame

let then = Date.now()
reset()
main()