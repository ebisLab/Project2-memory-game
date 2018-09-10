/*
 * Create a list that holds all of your cards
 */
const icons = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", 
				"fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle",
				"fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt",
				"fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"]

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 
 
 const cardsContainer = document.querySelector('.deck');
 let  flipUpCards = [];//The goal is to put card 1 and card 2 in an array and compare them.
 
 //Create cards -- now container is dynamic instead static like it used to be
 for (let i = 0; i < icons.length; i++) { //counter will create cards based on how many icons we have
 		const card = document.createElement("div");
 		card.classList.add("card");
 		card.innerHTML = '<i class="${icons[i]}"></i>';//template literals 
 		cardsContainer.appendChild(card);
 
 
 //Create Click event
 
 card.addEventListener("click", function() {
 
 		//existing card are open and face up
 		if(flipUpCards.length === 1) {
 			card.classList.add("open", "show");
 			console.log("Flip the damn cards already!");
 			flipUpCards.push(this);
 			 }
 		else { //cards are flipped down
 		 
 		 card.classList.add("open", "show");
 			console.log("I'm officially pissed");
 			flipUpCards.push(this);
 		 
 		 }
 		
 		
 		//supposed to be showing the icons
 		
 		});
 		
 } //The goal is to put card 1 and card 2 in an array and compare them. 

 
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




//create list item from iteration
	
function createTheGameCanvas() { //this should append to the deck class

}

function compareCards (cardA, cardB) {
}

function gameOver()
 {
 
 }
 
 //Counter SetUp
 
 //If all the cards match
 

 
 //Reset Timer
 
 
 //to stop 
 
 	
 	//clicking off the grid. 
 
 /*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 
 
 /*
 Features: When page starts, reload
all cards are face down
when you click on card 1
	it remains face up
when you click on card 2
	it faces up 
		if card 2 matches card 1 remain face up 
								change background color
			or else face down
			
	if user matches the cards the counter restarts
	or else it keeps going until the third try
					if the third try and no matches
								loose game
*/
