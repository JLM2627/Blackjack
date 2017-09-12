const cardSuites = ['hearts', 'clubs', 'spades' , 'diamonds'];
// array of all four suites
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// array of values for card(listed as strings?)

function createDeck () {
    const newCard = [];
    // empty array for my newCard to be stored in
    for(var x = 0; x < cardSuites.length; x++) {
        // suit loop that will run four times
        for(var y = 0; y < cardValues.length; y++) {
            // this card will run 13 times
            // 13 individual card values * 4 cardSuites = 52 cards

            newCard = {
                // newCard created from cardSuites and cardValues
                cardSuits = 
                cardValues = 




                // attach newCard to end of deck
                // use .push 


                
                
            }
        }
    }
}