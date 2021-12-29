let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true

let player = {
	name : "Per",

	chips : 150
}

let CardsEl = document.getElementById("cards-el")
let SumEl = document.getElementById("sum-el")
let message = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
function drawrandom(){
	let draw = Math.floor(Math.random()*13)+1
	if(draw === 1){
		return 11
	}
	else if(draw >= 2 && draw <= 10){
		return draw
	}
	else{
		return 10
	}
}

function startGame(){
	playerEl.textContent = player.name + " : $ " + player.chips
	let firstCard = drawrandom()
	let secondCard = drawrandom()
	cards.push(firstCard)
	cards.push(secondCard)
	sum = firstCard + secondCard
	renderGame()
}


function renderGame(){
	CardsEl.textContent = "Cards : "
	for(let i = 0; i<cards.length; i++){
		CardsEl.textContent += cards[i] + " "
	}
	SumEl.textContent = "Sum : "
	SumEl.textContent+= sum
	if (sum <= 20) {
        message.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message.textContent = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message.textContent = "You're out of the game!"
        isAlive = false
    }
}


function newCard(){
	if(isAlive === true && hasBlackJack === false){
		let card = drawrandom()
		sum+=card
		cards.push(card)
		renderGame()
	}
	
}