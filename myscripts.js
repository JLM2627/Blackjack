$(() => {
    //js document ready
    //console.log()
const cardSuites = ['hearts', 'clubs', 'spades' , 'diamonds'];
// array of all four suites
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// array of values for card(listed as strings? strings vs strings and integers)

const deck = [];// empty array for my newCard to be stored in
const playerHand =[];

function createDeck () {
    for(var x = 0; x < cardSuites.length; x++) { // suit loop that will run four times
      for(var y = 0; y < cardValues.length; y++) {
            // this cardValue loop will run 13 times
            // 13 individual cardValues * 4 cardSuites = 52 cards
            var card = {
                suite: cardSuites[x],
                value: cardValues[y]
                // once newCard is created using cardSuites and cardValues, starting at index [0]
            };
                // for this array, we are going to push my newCard into deck
             deck.push(card);
        

        }
    }
    return deck;
};
console.log(createDeck());
function shuffle()
{
    
    for (var i = 0; i < 2; i++)//per 1000 runs
    {
        //let card1 = Math.floor((Math.random() * deck.length));//generates random card between 0 and 52
        playerHand.push(deck[Math.floor(Math.random() * deck.length)]);//generates random card between 0 and 52
        //let x = deck[card1];
        console.log(hand)
        //deck[card1] = deck[card2];// switches locations
        //deck[card2] = x;
        //console.log(x);

    }
};

 shuffle();
});
