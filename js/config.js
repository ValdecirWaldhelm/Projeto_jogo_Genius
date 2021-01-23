
var order = [];
var clickedOrder = [];
var score = 0;

// 0 = verde
// 1 = vernmelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

function reloadThePage() {
    window.location.reload();

    } 

// Criando Ordem aleatória das Cores
var shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');

    },number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Checa se os botões clicados são os mesmos dá ordem do jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê Acertou! Iniciando Próximo Nível!`);
        nextLevel();
    }
}

// Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');

        checkOrder();
    }, 250);

}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

// função para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em Ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Iniciar o jogo
let playGame = () => {
    alert('Bem vindo ao Genius!Inicando novo jogo!');
    score = 0;

    nextLevel();
}

// click as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);



//Ativar clicks das cores
green.addEventListener('click',click(0));
red.addEventListener('click',click(1));
yellow.addEventListener('click',click(2));
blue.addEventListener('click',click(3));




//Função Playgame a ser chamada

playGame();