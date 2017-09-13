$(() => {
    //js document ready
    
const cardSuites = ['hearts', 'clubs', 'spades' , 'diamonds'];
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const deck = [];
const playerHand =[];
const dealerHand =[];

function createDeck () {
    for(var x = 0; x < cardSuites.length; x++) { // suit loop that will run four times
      for(var y = 0; y < cardValues.length; y++) {
            var card = {
                suite: cardSuites[x],
                value: cardValues[y]
            };
             deck.push(card);
        }
    }
    return deck;
};
console.log(createDeck());


function deal()
{
    for (var i = 0; i < 2; i++)//per 1000 runs
    {
        playerHand.push(deck[Math.floor(Math.random() * deck.length)]);//generates random card between 0 and 52
        console.log(playerHand)
        dealerHand.push(deck[Math.floor(Math.random() * deck.length)]);//generates random card between 0 and 52
        console.log(dealerHand)
    }
};

 deal();
});
