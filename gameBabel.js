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
monterImage.src = 'imagens/monster.png'

const hero = {
    speed: 256
}
const monster = {}
let monstersCaught = 0

const keysDown = {}
window.addEventListener('keydown', function (e) {
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