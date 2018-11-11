const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 480;
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
    hero.x = canvas.width / 2
    hero.y = canvas.height / 2

    monster.x = 32 + (Math.random() * (canvas.width - 64))
    monster.y = 32 + (Math.random() * (canvas.width - 64))
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
}

if (
    hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) 
    && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)
) {
    ++monstersCaught
    reset()
}