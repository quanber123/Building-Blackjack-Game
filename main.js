let cards = []
let sum = 0;
let hasBlackJack = false;
let hasAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let player = {
    name: "Tran Quan",
    chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips;
function getRanDomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}
function startGame() {
    hasAlive = true;
    let firstCard = getRanDomCard();
    let secondCard = getRanDomCard();
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
        message = "Do you want to draw a new card ?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        hasAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (hasAlive === true && hasBlackJack === false) {
        let newCard = getRanDomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    } else {
        messageEl.textContent("Your're out of the game!");
    }
}

function restartGame() {
    cards = [];
    messageEl.textContent = `Want to play round?`
    cardsEl.textContent = "Cards: ";
    sum = 0;
    sumEl.textContent = `Sum: `;
}

